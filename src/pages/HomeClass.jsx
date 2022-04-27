
import React, { Components } from 'react';
import {Navbar,Container,Nav,Card} from 'react-bootstrap';
import morbius from '../img/morbius.jpg';
import '../css/Home.css';
import axios from 'axios';

class Homepage extends React.Component{

    componentDidMount(){
        console.log(this.props);
    }


    render(){
        return (
            <div id='wrap' className='Container'>
                <div id='baris' className='row'>
                    {this.props.posts && this.props.posts.map((el,i) => (
                        <div className='col-2' key={i}>
                            <div className='kartu' style={{ width: '18rem' }}>
                                    <Card.Img className='gambar-1' variant="top" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} />
                                <Card.Body>
                                    <Card.Title className='judul-1'>{el.title}</Card.Title>
                                </Card.Body>
                            </div>
                        </div>
                        )
                    )}   
                </div>
            </div>
        )
    }
}

export default Homepage;
