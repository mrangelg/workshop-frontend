import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Input from '../../components/input';
import Button from '../../components/button';
import Gretting from '../../components/greeting';

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
      .get<Song>(`https://api.lyrics.ovh/${artistName}/${songName}`)
      .then((response) => {
        console.log(response.data);
        //setLyric(respo);
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  }, [artistName, songName]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="artist" register={register} />
        <Input name="song" register={register} />
        <Button name="Search" />
      </form>
      <div>{lyric}</div>
    </>
  );
}

export default Home;
