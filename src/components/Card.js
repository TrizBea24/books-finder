import React, { useState } from "react";
import Modal from "./Modal";

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
                                <div className="card shadow-sm" onClick={()=>{setShow(true);setItem(item)}}>
                                    <img src={thumbnail} alt="book" />
                                    <div className="card-bottom">
                                        <h3 className="card-bottom__title">{item.volumeInfo.title}</h3>
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