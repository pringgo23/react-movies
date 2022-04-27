import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import React, {} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorites, setFavorites } from '../store/favorite'
import '../css/Home.css';

function Homepage(props){
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const listFavorite = useSelector((state) => state.favorite.favorites);

    const addOrRemoveFav = (id) =>{
        const findIndex  = listFavorite.findIndex((el) => el.id === id);

        if (findIndex >= 0) {
            return 'Remove from';
        } else {
            return 'Add to'
        }
    }

        return (
            <div id='wrap' className='Container'>
                <div id='baris' className='row'>
                    {props.posts && props.posts.map((el,i) => (
                        <div className='col-2' key={i}>
                            <div className='kartu' style={{ width: '18rem' }}>
                                    <Card.Img className='gambar-1' variant="top" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} />
                                <Card.Body>
                                    <Card.Title className='judul-1' onClick={() => {
                                        navigate(`/detail/${el.id}`) 
                                    }} >{el.title}</Card.Title>
                                    <Button className='Button-Fav d-flex' variant="outline-light" onClick={() =>{
                                        if (addOrRemoveFav(el.id)=== 'Add to') {
                                            dispatch(setFavorites(el));  
                                        } else {
                                            dispatch(removeFavorites(el.id));
                                        }
                                    }}>{addOrRemoveFav(el.id) }Favorites</Button>
                                </Card.Body>
                            </div>
                        </div>
                        )
                    )}   
                </div>
            </div>
        )
    }

export default Homepage;
