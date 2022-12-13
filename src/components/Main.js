import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";

import {
    FaAdjust,
    FaSun,
    } from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';
import "../styles/main.scss";

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode}>
            {darkTheme ? (
            <FaSun size='26' className='top-navigation-icon' />
            ) : (
            <FaAdjust size='26' className='top-navigation-icon' />
            )}
        </span>
    );
};

const Main = () =>{
    const [search, setSearch]=useState("");
    const [bookData, setData]=useState([]);
    const searchBook = (evt) =>{
        if(evt.key === "Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&download=epub&key=AIzaSyC4f7kUrUb0s5CD2emR88dqcKB4b3a--5o'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }

    return(
        <>
            <div className="color bg-slate-50 dark:bg-black min-h-screen">
                <div className="header">
                    <div className="md:self-end self-center md:mr-32">
                        <ThemeIcon />
                    </div>
                    <div className="header-main">
                        <h2 className="header-main__title">Encuentra tu próxima lectura en formato Epub</h2>
                        <label for="simple-search" className="sr-only">Buscador</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input type="text" id="simple-search" className="input" placeholder="Escribe un título" 
                            required
                            aria-required="true"
                            value={search} onChange={e=>setSearch(e.target.value)}
                            onKeyPress={searchBook}
                            data-testid="required-input"
                            />
                        </div>
                    </div>
                </div>
                <div className="container-books">
                    {
                        <Card book={bookData} />
                    }
                </div>
            </div>
            
        </>
    )
}

export default Main;