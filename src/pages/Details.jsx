import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Details.css';
import axios from 'axios';

function Detail(){
    const [dataDetail,setDataDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [jenis,setJenis] = useState('');
    const [production,setProduction] = useState()
    const params = useParams();

    useEffect( () => {
        const fetchDetail = async() =>{
            try {
                const response = await axios.get
                (`https://api.themoviedb.org/3/movie/${params.id}?api_key=b2f0ee9217d829b7deaa3ba29a6f813c&language=en-US`)
    
                let genretext = "";
                response.data.genres.map((el,i) => {
                   return( 
                    genretext+= el.name +',')
                }) 

                let produktext = "";
                response.data.production_companies.map((el,i) => {
                    return(
                    produktext += el.name +',')
                })

                setProduction(produktext);
                setJenis(genretext);
                setDataDetail(response.data);

                
            } catch (err) {
                console.log(err);
                
            } finally{
                setIsLoading(false)
            }
    
        };

        fetchDetail();
    },[params])

    

    if (isLoading) {
        return <h4>Now Loading...</h4>
    }
 

        return(
        <div className='background'>
            <div id='flexx' className='row d-flex'> 
                <div className='col-md-4'>
                    <img id='gambar-detail' src={`https://image.tmdb.org/t/p/w500${dataDetail.poster_path}`} alt="" />
                </div>
                <div id='penjelasan' className='col-md-6'>
                    <h1> {dataDetail.original_title} </h1>
                    <i>{dataDetail.tagline}</i> <hr />
                                 <h6> Genres : {jenis} </h6> 
                            <hr />
                                <h6> Release Date: {dataDetail.release_date}</h6>
                            <hr />
                                <h6> Popularity : {dataDetail.popularity}</h6>
                            <hr />
                                <h6> Production Companies : {production}</h6>
                            <hr />
                                <h6> Status : {dataDetail.status}</h6>
                            <hr />
                                <h6> Revenue : {dataDetail.revenue}</h6>
                            <hr />
                    </div>
            </div>

                <div className='overview'>
                    <h1> Overview</h1>
                    <p className='danger'>{dataDetail.overview}</p>
                </div>
        </div>
            
        )
    }

export default Detail