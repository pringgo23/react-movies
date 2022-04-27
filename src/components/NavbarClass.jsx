import React, {Components} from 'react';
import home from '../img/home.png';
import movie from '../img/movie.png';
import favorite from '../img/favorites.png'
import {Navbar,Container,Nav} from 'react-bootstrap';
import '../css/Navbar.css';

class NavbarComponents extends React.Component{

  state = {
    currentPage: "Home",
  }


    render(){
        return (
      <Navbar className='navbar' expand="lg">
        <Container className='wraps'>
          <Navbar.Brand className='film' href="#home">Film</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <img className='logoo' src={movie}></img>

                  <Nav.Link id='Home' className={`${
                this.state.currentPage === "Home" ? "active-nav" : "home"
              } my-style`}
                  onClick={() => {
                    this.setState({
                      currentPage: "Home",
                    });

                    this.props.currentPage("Home");
              }}
                  
                  href="#home"> Home </Nav.Link>

                <img className='logoo' src={home}></img>

                  <Nav.Link id='Detail' className={`${
                this.state.currentPage === "Detail" ? "active-nav" : "detail"
              } my-style`}
                  onClick={() => {
                    this.setState({
                      currentPage: "Detail",
                    });

                    this.props.currentPage("Detail");
              }} href="#Detail"> Detail </Nav.Link>

                <img className='logoo' src={favorite}></img>

                  <Nav.Link id='Favorite' className={
                this.state.currentPage === "Favorite" ? "active-nav" : "favorite"
              }
              onClick={() => {
                this.setState({
                  currentPage: "Favorite",
                });

                this.props.currentPage("Favorite");
              }} href="#Favorites"> Favorites </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        );
    }
}

export default NavbarComponents;