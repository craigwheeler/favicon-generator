import React from 'react';
import styled from 'styled-components';

interface IInput {
  placeholder?: string;
  label: string;
}

const Input = ({ label, placeholder }: IInput): JSX.Element => {
  return (
    <InputContainer>
      <p>{label}</p>
      <input placeholder={placeholder} />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  p {
    margin: 10px 0 5px 2px;
    font-size: 12px;
  }
  input {
    padding: 15px;
    width: 100%;
    &:focus {
      outline: 0;
    }
  }
`;
