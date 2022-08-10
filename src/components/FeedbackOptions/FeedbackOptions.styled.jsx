import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  font-size: 20px;
  width: 150px;
  height: 40px;
  cursor: pointer;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
  
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
    background-color: #0ee4a8;
  }
`;
