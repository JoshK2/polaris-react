# Unreleased changes

### Breaking changes

### Enhancements

- Updated the type of the `title` prop in `ChoiceList` from `string` to `ReactNode` ([#2355](https://github.com/Shopify/polaris-react/pull/2355))
- Added `disabled` prop to `Filters` component ([#2389](https://github.com/Shopify/polaris-react/pull/2389))
- Updated `Card` footer actions to be right aligned by default again. Added `footerActionAlignment` prop to control the footer action alignemnt, but defaults to `'right'` ([#2407](https://github.com/Shopify/polaris-react/pull/2407))
- Added `reverse` prop to `<ButtonGroup>` to control visual render order ([#2407](https://github.com/Shopify/polaris-react/pull/2407))

### Bug fixes

- Fixed an issue where types were not generated for a JSON config file [#2361](https://github.com/Shopify/polaris-react/pull/2361))

### Documentation

### Development workflow

- Enabled maintainers running `yarn dev` to hide [`yarn splash`](https://github.com/Shopify/polaris-react/tree/master/scripts/splash) reports from the console by running `DISABLE_SPLASH=1 yarn dev` ([#2372](https://github.com/Shopify/polaris-react/pull/2372))

### Dependency upgrades

### Code quality

### Deprecations
