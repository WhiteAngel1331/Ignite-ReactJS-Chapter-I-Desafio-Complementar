import { useEffect, useState } from 'react';


import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import './styles/content.scss';
import { Header } from './components/Header';


interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar setSelectedGenreId={setSelectedGenreId} selectedGenreId={selectedGenreId}></SideBar>
      <div className="container">
        <Header selectedGenre={selectedGenre}></Header>
        <Content selectedGenreId={selectedGenreId} setSelectedGenre={setSelectedGenre}></Content>
      </div>
    </div>
  )
}