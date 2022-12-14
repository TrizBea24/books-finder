import React from 'react';
import "../styles/modal.scss";

const Modal = ({show, item, onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" data-testid="close" onClick={onClose}><i className="fas fa-times"></i></button>
                    <div className="info-box">
                        <img className="info-box__book" src={thumbnail} alt={item.volumeInfo.title} />
                        <div>
                            <h1 className="info-box__title">{item.volumeInfo.title}</h1>
                            <h3 className="info-box__author">{item.volumeInfo.authors.length > 2 ?
                                `${item.volumeInfo.authors.substring(0, 2)} ...` : item.volumeInfo.authors
                            }</h3>
                            <h4 className="info-box__publisher"><span className="info-box__publisher-date">{item.volumeInfo.publishedDate}</span></h4><br/>
                            <a href={item.volumeInfo.previewLink}><button className="info-box__more">Más</button></a>
                        </div>
                    </div>
                    <h4 className="description">{item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}

export default Modal;