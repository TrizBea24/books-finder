import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

// import FontAwesomeIcon from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import '../styles/styles.scss';

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
            <div className="header flex flex-wrap w-full justify-center pt-14 h-fit bg-emerald-700">
                <div className="header__logo items-start w-40 h-40 px-4">
                    <img className="" src="../images/logo.png" alt="no se ve"></img>
                </div>
                <div className="header__main flex flex-col justify-around mx-40">
                    <h2 className="font-sans text-4xl subpixel-antialiased font-extrabold tracking-wide text-white pt-12">Encuentra tu próxima lectura en formato Epub</h2>
                    <div className="header__main-search font-sans flex text-3xl py-24">
                        <input className="items-center w-full h-12 p-4 rounded-xl outline-emerald-100" type="text" placeholder="Escribe el título que buscas y pulsa enter"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}
                        />
                    </div>
                </div>
            </div>
            <div className="container grid-cols-5 gap-4">
                {
                    <Card book={bookData} />
                }
            </div>
        </>
    )
}

export default Main;