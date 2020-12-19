import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Container } from './styled';
import Input from '../../components/input';
import Button from '../../components/button';

interface Song {
  lyrics: string;
}

type FormData = {
  artist: string;
  song: string;
};

function Home(): JSX.Element {
  const [artistName, setArtistName] = useState<string>();
  const [songName, setSongName] = useState<string>();
  const [lyric, setLyric] = useState<Song>();

  const { register, handleSubmit, watch, errors } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('data:', data);
    setArtistName(data.artist);
    setSongName(data.song);
  };

  useEffect(() => {
    axios
      .get<Song>(`https://api.lyrics.ovh/v1/${artistName}/${songName}`)
      .then((response) => {
        console.log('axios: ', response.data);
        if (response.data) {
          setLyric({ lyrics: response.data.lyrics });
        } else {
          setLyric({ lyrics: '' });
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setLyric({ lyrics: '' });
      });
  }, [artistName, songName]);

  console.log('lyric: ', lyric);
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="artist" register={register} label="Artist" />
        <Input name="song" register={register} label="Song" />
        <Button name="Search" />
      </form>
      <div>{lyric?.lyrics}</div>
    </Container>
  );
}

export default Home;
