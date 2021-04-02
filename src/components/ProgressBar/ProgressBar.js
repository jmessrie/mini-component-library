/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const Heights = {
  "small": 8,
  "medium": 12,
  "large": 16,
};

const Widths = {
  "small": 370,
  "medium": 370,
  "large": 362,
};

const Wrapper = styled.div`
  border-radius: 4px;
  width: 370px;
  height: ${props => Heights[props.size] + "px"};
`;

const Padded = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: ${props => props.size === "large" && "4px"};
`;

const InnerBar = styled.div`
  border-radius: 4px 0px 0px 4px;
  border-radius: ${props => props.percentage >= 99 && "4px"};
  background-color: ${COLORS.primary};
  width: ${props => (props.percentage / 100 * Widths[props.size]) + "px"};
  height: ${props => Heights[props.size] + "px"};
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper size={size}>
      <Padded size={size}>
        <InnerBar size={size} percentage={value} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
          <VisuallyHidden>{value} percent complete</VisuallyHidden>
        </InnerBar>
      </Padded>
    </Wrapper>
  )
};

export default ProgressBar;
