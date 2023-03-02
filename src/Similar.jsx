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


 const Similar = () => {

  const [id, setId] = React.useState('')
  const [movie, setMovie] = React.useState({})
  const [cmon, setCmon] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)


  const changeHandler = (e) => {
    setId(e.target.value)
  }

   const findFilm = () => {
    setIsLoading(true)
    const API_KEY = '65b2bdff-3d5b-4951-ac53-32684c5562cc'
    const URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`

   getFilm(URL)

   async function getFilm(url) {
   const resp = await fetch(url, {
     headers: {
       'Content-Type': 'aplication/json',
       'X-API-KEY': API_KEY
     }
    })
    const respData = await resp.json()
    
    setMovie(respData.items)
    setIsLoading(false)
    setCmon(true)
  }
}







// const similarFilms = () => {
//   const API_KEY = '65b2bdff-3d5b-4951-ac53-32684c5562cc'
//   const URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`

//    getSimilar(URL)

//    async function getSimilar(url) {
//    const resp = await fetch(url, {
//      headers: {
//        'Content-Type': 'aplication/json',
//        'X-API-KEY': API_KEY
//      }
//     })
//     const respData = await resp.json()
//     console.log(respData)
//   }
// }


  return (
    <AppRoot>
      <SplitLayout>
      <PanelHeader separator={true}>
        {/* <div style={{position: 'absolute',}}> */}
      <SimpleCell><span style={{fontWeight: '700'}}>SearchFilm</span></SimpleCell>
        {/* </div> */}
      <Link to='/'>
        <SimpleCell style={{marginTop: '-28px'}}>К поиску фильма</SimpleCell>
      </Link>
      </PanelHeader>
      </SplitLayout>
      <div style={{display: 'grid', marginTop: '10vh'}}>
      <Input placeholder='Введите ID фильма' style={{margin: '0 auto', width: '300px'}} onChange={changeHandler}/>
      <Button style={{margin: '0 auto', marginTop: '10px'}} onClick={findFilm}>Найти похожие</Button>
      </div>

      {isLoading ? <Spinner size='medium' style={{marginTop: '10px'}}/> : null}
      
      {
         cmon === false ? null : movie.map((m) => <Card key={m.filmId} style={{margin: '0 auto', marginTop: '10px'}}>
         <img width={'300'} style={{display: 'flex', margin: '0 auto', borderRadius: '5px'}} src={m.posterUrl}/>
         <SimpleCell>{m.nameRu}</SimpleCell>
         <SimpleCell>ID фильма: <Input type='text' value={m.filmId}></Input></SimpleCell>
         </Card>)
         
      }
      
    </AppRoot>
  );
};

export default Similar