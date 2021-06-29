import React from 'react';

function ImagePopup({ card, onClose }) {
    return (
        <div className={`popup-box picture ${card && (`popup-box_open`)}`}>
            <figure className="popup-box__container popup-box__container_type_photo">
                <img className="popup-box__image" src={card ? card.link : ''} alt={card ? card.name : ''} />
                <button type="button" aria-label="Close Picture Button" className="popup-box__exit popup-box__exit_preview" onClick={onClose}></button>
                <figcaption className="popup-box__caption" >{card && card.name}</figcaption>

            </figure>
        </div>
    );
}

export default ImagePopup;