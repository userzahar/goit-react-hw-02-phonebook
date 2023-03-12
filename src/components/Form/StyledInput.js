const { default: styled } = require('styled-components');

export const InputStyled = styled.input`
  position: relative;
  cursor: text;
  font-size: 14px;
  line-height: 20px;
  padding: 0 16px;
  height: 25px;
  background-color: #fff;
  border: 1px solid #d6d6e7;
  border-radius: 3px;
  color: rgb(35, 38, 59);
  box-shadow: inset 0 1px 4px 0 rgb(119 122 175 / 30%);
  overflow: hidden;
  transition: all 100ms ease-in-out;
  &:focus {
    border-color: #3c4fe0;
    box-shadow: 0 1px 0 0 rgb(35 38 59 / 5%);
  }
`;
