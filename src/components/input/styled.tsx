import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ece8e8;
  margin: 20px auto;
  width: 80%;
  @media screen and (min-width: 786px) {
    flex-direction: row;
    width: 40%;
  }
`;

export const Label = styled.label`
  margin-right: 20px;
  @media screen and (min-width: 786px) {
  }
`;
