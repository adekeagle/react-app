import React from 'react';
import img1 from '../images/banner.jpg';
import img2 from '../images/database-baner.jpg';
import img3 from '../images/db_image.jpg';
import '../styles/Header.css';
import { Route, Switch } from 'react-router-dom';

const Header = () => {

    const images = [img1, img2, img3];
    const index = Math.floor(Math.random() * 3);

    console.log(index)
    const img = images[index];

    return ( 
        // <div>
        //     <img src={ img3 } alt="city" />
        // </div>

        <>
            <Switch>
                <Route path="/" exact render={ () => (
                    <img src={ img1 } alt="miasto" />
                )} />
                <Route path="/products" render={ () => (
                    <img src={ img2 } alt="miasto" />
                )} />
                <Route path="/contact" render={ () => (
                    <img src={ img3 } alt="miasto" />
                )} />
                <Route path="/admin" render={ () => (
                    <img src={ img3 } alt="miasto" />
                )} />
                <Route render={ () => (
                    <img src={ img1 } alt="miasto" />
                )} />
            </Switch>
{/* 
            <img src={ img } alt="header" /> */}
        </>
     );
}
 
export default Header;