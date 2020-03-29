import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Adcom Usługi Informatyczne",
        text: "333Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament ?" 
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego ?",
        author: "Adcom Usługi Informatyczne",
        text: "222Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament ?" 
    },
    {
        id: 3,
        title: "Ciemnia materia i ciemna energia ?",
        author: "Adcom Usługi Informatyczne",
        text: "444Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament ?" 
    },
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={ articles.id } { ...article } />
    ));
    
    return ( 
        <div>
            { artList }
        </div>
     );
}
 
export default HomePage;