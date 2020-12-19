import React, { useEffect } from 'react';
import axios from 'axios';
import Gretting from '../../components/greeting';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender: string;
  origin: URL;
  location: URL;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

type URL = {
  name: string;
  url: string;
};

function Home(): JSX.Element {
  useEffect(() => {
    axios
      .get<Character>('https://rickandmortyapi.com/api/character/2')
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return <Gretting />;
}

export default Home;
