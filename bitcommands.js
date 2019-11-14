const exec = require('child_process').exec
const filesystem = require('fs')

const getAllFilesFromFolder = (_dir, _path) => {
    const dir = `${_dir}/${_path}`
    let results = []
    filesystem.readdirSync(dir).forEach(function (file) {
        if (filesystem.lstatSync(`${dir}/${file}`).isDirectory()) {
            results.push(file)
        }
    })
    return results
}

const basePath = 'src/components'
const folderList = getAllFilesFromFolder(__dirname, basePath)

const baseUtilities = 'src/utilities'
const folderUtilities = getAllFilesFromFolder(__dirname, baseUtilities)

const bitAddStyles = `
bit add src/styles -m src/styles/_common.scss -i styles \n
`

const bitAddUtilities = `
bit add src/utilities/*.ts src/utilities/*.tsx -n utilities \n
`

const bitAddMissing = `
bit add src/types.ts -n internal \n
bit add src/configure.ts -n internal \n
bit add src/components/shared.ts -n internal \n
`

//let bitAddCommands = bitAddUtils + bitAddMissing + bitAddStyles + bitAddInternal
let bitAddCommands = bitAddStyles + bitAddUtilities + bitAddMissing

const excludeFolders = []

folderList.forEach(folder => {
    if (excludeFolders.includes(folder) === false) {
        const c = `bit add ${basePath}/${folder} -e '${basePath}/${folder}/tests/*,${basePath}/${folder}/test/*,${basePath}/${folder}/components/*/tests/*,${basePath}/${folder}/components/*/components/*/tests/*,${basePath}/${folder}/*/tests/*' \n`
        bitAddCommands += c
    }
});

folderUtilities.forEach(folder => {
    if (excludeFolders.includes(folder) === false) {
        const c = `bit add ${baseUtilities}/${folder} -e '${baseUtilities}/${folder}/tests/*,${baseUtilities}/${folder}/components/*/tests/*,${baseUtilities}/${folder}/components/*/components/*/tests/*,${baseUtilities}/${folder}/*/tests/*' \n`
        bitAddCommands += c
    }
});

exec(bitAddCommands, (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        return
    }
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`)
});
