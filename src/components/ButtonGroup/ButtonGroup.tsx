import React from 'react';
import {classNames} from '../../utilities/css';
import {elementChildren} from '../../utilities/components';
import {Item} from './components';
import styles from './ButtonGroup.scss';

export interface ButtonGroupProps {
  /** Join buttons as segmented group */
  segmented?: boolean;
  /** Buttons will stretch/shrink to occupy the full width */
  fullWidth?: boolean;
  /** Remove top left and right border radius */
  connectedTop?: boolean;
  /** Button components */
  children?: React.ReactNode;
  //* Reverse the visual order of the buttons while maintaining DOM order */
  reverse?: boolean;
}

export function ButtonGroup({
  children,
  segmented,
  fullWidth,
  connectedTop,
  reverse = false,
}: ButtonGroupProps) {
  const className = classNames(
    styles.ButtonGroup,
    segmented && styles.segmented,
    fullWidth && styles.fullWidth,
    connectedTop && styles.connectedTop,
    reverse && styles.Reverse,
  );

  const contents = elementChildren(children).map((child, index) => (
    <Item button={child} key={index} />
  ));

  return <div className={className}>{contents}</div>;
}
