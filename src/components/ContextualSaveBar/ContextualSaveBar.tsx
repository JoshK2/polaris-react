import React from 'react';
import {
  ContextualSaveBarProps as ContextualSaveBarProps1,
  useFrame,
} from '../../utilities/frame';

// The script in the styleguide that generates the Props Explorer data expects
// a component's props to be found in the Props interface. This silly workaround
// ensures that the Props Explorer table is generated correctly, instead of
// crashing
export interface ContextualSaveBarProps extends ContextualSaveBarProps1 {}

export const ContextualSaveBar = React.memo(function ContextualSaveBar({
  message,
  saveAction,
  discardAction,
  alignContentFlush,
}: ContextualSaveBarProps) {
  const {setContextualSaveBar, removeContextualSaveBar} = useFrame();

  React.useEffect(() => {
    setContextualSaveBar({
      message,
      saveAction,
      discardAction,
      alignContentFlush,
    });
  }, [
    message,
    saveAction,
    discardAction,
    alignContentFlush,
    setContextualSaveBar,
  ]);

  React.useEffect(() => {
    return removeContextualSaveBar;
  }, [removeContextualSaveBar]);

  return null;
});
