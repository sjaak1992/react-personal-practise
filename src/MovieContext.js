import React, {useState, createContext} from 'react';


export const MovieContext = createContext(); // this is a function, dus moet worden aangeroepen


export const MovieProvider = (props) => {
     const [movies, setMovies] = useState([
         {
             name: 'Harry Potter',
             price: '$10',
             id:23124
         },
         {
             name: 'Game of Thrones',
             price: "$10",
             id: 2566124
         },
         {
             name: 'Inception',
             price: "$10",
             id: 23524
         }

     ]);

    return (

        <MovieContext.Provider>
            {/*<Nav/>*/}
            {/*<MovieList/>*/
            //ipv al de components hierin te renderen, kan je gebruik maken van props.children
                // alle children components worden nu automatisch gerenderd
            }
            {props.children}
        </MovieContext.Provider>

    );
}