import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0px;
  text-align: center;
  color: #fff;
  background-color: #fff;
  border: 1px solid #d8d5d4;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const setBgColor = (props) => {
  if (props.isOnline) {
        return '#4fb346';
      } else {
        return '#b83b3b';
      }
}

export const Status = styled.span`
  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 20px;
    border-radius: 50%;
    background-color: ${setBgColor};
  }
`;
export const Name = styled.p`
  margin-left: 25px;
  text-align: center;
  color: #000;
  background-color: #fff;
`;
