import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { removeFavorites } from '../store/favorite'
import { Card, Button } from 'react-bootstrap';
import '../css/Home.css';

 function FavoritesPage (){
      const listFavorite = useSelector((state => {
         return state.favorite.favorites
      }));

      const navigate = useNavigate();

      const dispatch = useDispatch();
      
  
    return ( 
      <div id='wrap' className='Container'>
                <div id='baris' className='row'>

                    {listFavorite.map((el,i) => (
                        <div className='col-2' key={i}>
                            <div className='kartu' style={{ width: '18rem' }}>
                                    <Card.Img className='gambar-1' variant="top" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} />
                                <Card.Body>
                                    <Card.Title className='judul-1' onClick={() => {
                                        navigate(`/detail/${el.id}`) 
                                    }} >{el.title}</Card.Title>
                                    <Button className='Button-Fav d-flex' variant="outline-danger" onClick={() =>{
                                        dispatch(removeFavorites(el.id))
                                    }}> Remove from Favorites</Button>
                                </Card.Body>
                            </div>
                        </div>
                        )
                    )}   
                </div>
            </div>
  )
}

export default FavoritesPage
