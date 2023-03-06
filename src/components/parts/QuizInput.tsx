import React from 'react'

import styled from 'styled-components';

import { stylesVariables } from '../data/stylesVariables';

type QuizInputProps = {
  name: string;
  value: string|number;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dataNumber?: number;
}

const QuizInput = ({ name, value, checked, onChange, dataNumber }: QuizInputProps) => {
  return (
    <SInput type="radio" name={name} value={value} defaultChecked={checked} onChange={onChange} data-num={dataNumber} />
  );
};

/* styledElements */

const SInput = styled.input`
  cursor: pointer;
  &:checked {
    & ~ span {
      color: ${stylesVariables.colors.main};
    }
  }
`

export default QuizInput;