import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Container } from './styled';
import Input from '../../components/input';
import Button from '../../components/button';

interface Song {
  lyrics: string;
}

interface NumberOfWordsAndLines {
  words: string;
  lines: string;
}

type FormData = {
  artist: string;
  song: string;
};

function Home(): JSX.Element {
  const [artistName, setArtistName] = useState<string>();
  const [songName, setSongName] = useState<string>();
  const [lyric, setLyric] = useState<Song>();
  const [numberOfWords, setNumberOfWords] = useState<string>();
  const [numberOfLines, setNumberOfLines] = useState<string>();

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
        }
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  }, [artistName, songName]);

  useEffect(() => {
    if (lyric) {
      axios
        .get<NumberOfWordsAndLines>(
          `https://localhost:4000/number-words-lines/${lyric.lyrics}`,
        )
        .then((response) => {
          console.log('axios: ', response.data);
          if (response.data) {
            setNumberOfWords(response.data.words);
            setNumberOfLines(response.data.lines);
          } else {
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [lyric]);

  console.log('lyric: ', lyric);
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="artist" register={register} label="Artist" />
        <Input name="song" register={register} label="Song" />
        <Button name="Find lyric!" />
      </form>
      {lyric?.lyrics && <div>{lyric?.lyrics}</div>}
      {numberOfWords && <div>Number of lines: {numberOfWords}</div>}
      {numberOfLines && <div>Number of lines: {numberOfLines}</div>}
    </Container>
  );
}

export default Home;
