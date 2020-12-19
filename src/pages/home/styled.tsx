import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ece8e8;
  width: 80%;
  min-height: 200px;
  height: auto;
  margin: 70px auto 0;
  @media screen and (min-width: 786px) {
    width: 60%;
  }
`;

export const Lyric = styled.div`
  background-color: #ccc;
  margin: 10px;
  width: 80%;
  @media screen and (min-width: 786px) {
  }
`;
