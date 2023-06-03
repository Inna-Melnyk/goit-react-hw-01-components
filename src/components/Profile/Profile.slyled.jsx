import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #d8d5d4;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const Description = styled.div`
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  background-color: #d6d0d0;
  width: 200px;
  display: block;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  margin-bottom: 12px;
  text-align: center;
`;

export const Info = styled.p`
  font-size: 16px;
  margin: 0;
  text-align: center;
  color: #8f8f8f;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

