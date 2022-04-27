import React, { Components } from 'react';
import {Navbar,Container,Nav,Card,Table} from 'react-bootstrap';
import morbius from '../img/morbius.jpg';
import '../css/Details.css';

class Detail extends React.Component{
    render(){
        return(
        <div className='background'>
            <div id='flexx' className='row d-flex'> 
                <div className='col-md-4'>
                    <img id='gambar-detail' src={morbius} alt="" />
                </div>
                <div id='penjelasan' className='col-md-6'>
                    <h1> Morbius </h1>
                    <i>A New Marvel Legends Arrives</i> <hr />
                        <div >
                            <section> <h6> Genres : </h6>  
                                <section> <h6> Action, </h6>  </section>
                                <section> <h6> Science Ficiton, </h6></section>
                                <section> <h6> Fantasy </h6> </section>
                            </section>
                        </div>
                            <hr />
                                <h6> Release Date : 30 March 2022 (US)</h6>
                            <hr />
                                <h6> Duration : 1 hour 44 minute</h6>
                            <hr />
                                <h6> Popularity : 837.412</h6>
                            <hr />
                                <h6> Production Companies : Columbia Pictures , Marvel Entertainment</h6>
                            <hr />
                                <h6> Status : Released</h6>
                            <hr />
                                <h6> Original Language : English</h6>
                            <hr />
                                <h6> Budget : $75,000,000</h6>
                            <hr />
                                <h6> Revenue : $126,000,000</h6>
                            <hr />
                    </div>
            </div>

                <div className='overview'>
                    <h1> Overview</h1>
                    <p className='danger'>Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.</p>
                </div>
        </div>
            
        )
    }
}

export default Detail