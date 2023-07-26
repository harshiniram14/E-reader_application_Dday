// import { createContext, useContext} from "react"
// import {useState} from "react"

// const AppContext = createContext(null);
// export const useAppContext = () =>{
//     const context=useContext(AppContext);

//     if(context === undefined){
//         throw new Error('Appcontext must be within appContextProvider!')
//     }
//     return context;
// };
// const AppContextProvider = ({children})=>{
//     const[favourites,setFavourites]=useState([]);

//     const addToFavourites = (book) =>{
//         const oldFavourites=[...favourites];
//         const newFavourites=oldFavourites.concat(book);
//         setFavourites(newFavourites);
//     }

//     const removeFromFavourites = (bookId) =>{
//         const oldFavourites=[...favourites];
//         const newFavourites =oldFavourites.filter((book)=>book.bookId!==bookId);
//         setFavourites(newFavourites);
//     }


//     return (
//         <AppContext.Provider book={{favourites,addToFavourites,removeFromFavourites}}>
//             {children}
//         </AppContext.Provider>
//     )
// }
// export default AppContextProvider;


import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error('Appcontext must be within appContextProvider!');
  }
  return context;
};

const AppContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (book) => {
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.concat(book);
    setFavourites(newFavourites);
  };

  const removeFromFavourites = (bookId) => {
    const newFavourites = favourites.filter((book) => book.bookId !== bookId);
    setFavourites(newFavourites);
  };

  return (
    <AppContext.Provider book={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
