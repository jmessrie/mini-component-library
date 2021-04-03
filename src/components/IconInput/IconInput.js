import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 24,
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
  },
  large: {
    height: 36,
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
  },
}
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': styles.iconSize + 'px'}}>
        <Icon id={icon} strokeWidth={1} size={styles.iconSize} />
      </IconWrapper>
      <TextInput {...delegated}
                 style={{
                   '--width': width + 'px',
                   '--height': styles.height / 16 + 'rem',
                   '--border-thickness': styles.borderThickness + 'px',
                   '--font-size': styles.fontSize / 16 + 'rem',
                 }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: block;
  color: ${COLORS.gray700};

  
  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 0;
  width: var(--size);
  height: var(--size);
`;

const TextInput = styled.input`
  border: none;
  font-weight: 700;
  color: inherit;
  width: var(--width);
  height: var(--height);
  font-size: var(--font-size);
  outline-offset: 2px;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);

  ::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
