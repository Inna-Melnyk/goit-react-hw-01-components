import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0px;
  text-align: center;
  text-transform: uppercase;
  color: #a09c9c;

  &:not(:last-child) {
    margin-bottom:10px;
  }
`;