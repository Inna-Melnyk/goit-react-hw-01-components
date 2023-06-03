import styled from '@emotion/styled';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 10px;
  text-align: center;
  color: #fff;
  background-color: ${getRandomHexColor};
`;


export const Label = styled.span`
font-size: 12px;
margin-bottom: 8px;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 700;
`;