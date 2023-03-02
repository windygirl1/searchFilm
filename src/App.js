import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  Input,
  Button,
  Card,
  PanelHeaderButton,
  PanelHeaderBack,
  PanelHeaderContent,
  animate,
  Banner,
  Spinner,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './App.css'

 const Example = () => {
  const [filmName, setFilmName] = React.useState('')
  const [movie, setMovie] = React.useState({})
  const [cmon, setCmon] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const [film, setFilm] = React.useState(false)


  const changeHandler = (e) => {
    setFilmName(e.target.value)
  }

   const findFilm = () => {
    setIsLoading(true)
    const API_KEY = '65b2bdff-3d5b-4951-ac53-32684c5562cc'
    const URL = `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${filmName}&page=1`

   getFilm(URL)

   async function getFilm(url) {
   const resp = await fetch(url, {
     headers: {
       'Content-Type': 'aplication/json',
       'X-API-KEY': API_KEY
     }
    })
    const respData = await resp.json()
    setMovie(respData.films)
    setIsLoading(false)
    setCmon(true)
    
  }
}

  return (
    <AppRoot>
      <SplitLayout>
      <PanelHeader separator={true}>
      <SimpleCell><span style={{fontWeight: '700'}}>SearchFilm</span></SimpleCell>
      <Link to='/serchsimilar'>
      <SimpleCell style={{marginTop: '-28px'}}>К поиску похожих</SimpleCell>
      </Link>
      </PanelHeader>
      
      </SplitLayout>
      <div style={{display: 'grid', marginTop: '10vh'}}>
      <Input placeholder='Введите название фильма' style={{margin: '0 auto', width: '300px'}} onChange={changeHandler}/>
      <Button style={{margin: '0 auto', marginTop: '10px'}} onClick={findFilm}>Найти фильм</Button>
      </div>

      {isLoading ? <Spinner size='medium' style={{marginTop: '10px'}}/> : null}
      
      {
         cmon === false ? null : movie.map((m) => <Card key={m.filmId} style={{margin: '0 auto', marginTop: '10px'}}>
         <img width={'300'} style={{display: 'flex', margin: '0 auto', borderRadius: '5px'}} src={m.posterUrl}/>
         <SimpleCell>{m.nameRu}</SimpleCell>
         <SimpleCell>ID фильма: <Input type='text' value={m.filmId}  ></Input></SimpleCell>
         
        
          <div>
           <iframe className='frame' src={`https://videocdn.tv/sGWdnEq1iM8W?kp_id=${m.filmId}`}  frameBorder="0" allowFullScreen></iframe> 
          </div>
         </Card>)
      }



      
    </AppRoot>
    
  );
};

export default Example