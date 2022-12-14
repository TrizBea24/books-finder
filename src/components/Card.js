import React, { useState } from "react";
import Modal from "./Modal";
import "../styles/card.scss";

const Card = ( {book} )=>{
    
    const [show, setShow]=useState(false);
    const [bookItem,setItem]=useState();
    return(
        <>
            {
                book.map(( item )=>{
                    let thumbnail=item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!== undefined && amount !==undefined)
                    {
                        return(
                            <>
                                <div className="card group" 
                                onClick={()=>{setShow(true);setItem(item)}}>
                                    <img className="thumbnail mx-auto max-[507px]:mx-6 h-56 py-4 rounded-t-lg" src={thumbnail} alt={item.volumeInfo.title} />
                                    <div className="card-bottom">
                                        <h3 className="card-bottom__title">{
                                            item.volumeInfo.title.length > 40 ?
                                            `${item.volumeInfo.title.substring(0, 40)} ...` : item.volumeInfo.title
                                        }</h3>
                                        <p className="card-bottom__amount">{amount}&#8364;</p>
                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                })
            }
            
        </>
    )
}

export default Card;