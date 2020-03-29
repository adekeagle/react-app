import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return ( 
        <div>
            <h2>Stopka</h2>
            <h3 className="adek">Adrian Kapuścik</h3>
            <Route path="/" exact render={(props) => (
                    <p>Jesteś na stronie głównej</p>
            )} />

            <Route path="/:page" exact render={(props) => {
                console.log(props)
                return(
                    // <p>Jesteś na stronie <span>{ props.match.params.page }</span></p>
                    <>
                    <p>Jesteś na stronie <span>{ props.match.params.page }</span></p>
                    <p>Jesteś na stronie <span>{ props.match.url }</span></p>
                    <p>Jesteś na stronie <span>{ props.match.path }</span></p>
                    </>
                )
            }} />

            <Route path="/:page/:idProduct" exact render={(props) => {
                console.log(props)
                return(
                    // <p>Jesteś na stronie <span>{ props.match.params.page }</span></p>
                    <>
                    <p>Jesteś na stronie <span>{ props.match.params.page }</span></p>
                    <p>Jesteś na stronie <span>{ props.match.url }</span></p>
                    <p>Jesteś na stronie <span>{ props.match.path }</span></p>
                    </>
                )
            }} />
        </div>
     );
}
 
export default Footer;