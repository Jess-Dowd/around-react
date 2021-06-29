import React from 'react';
import CurrentUser from '../context/CurrentUser.js';

function Card(props) {
    const currentUser = React.useContext(CurrentUser);

    // Code to check if the card is owned by current user and determine the delete buttons visibility
    const owner = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClasses = `photo-grid__delete ${owner ? 'photo-grid__delete' : 'photo-grid__delete_hidden'}`;

    // Checks if the card was liked by the current user
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClasses = `photo-grid__heart ${isLiked && 'photo-grid__heart_clicked'}`;

    function handleClick() {
        props.onCardClick(props.card);
    }
    function handleLikeClick() {
        props.onCardLike(props.card);
    }
    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }

    return (
        
            <article className="photo-grid">
                <button type="button" aria-label="Card Delete Button" className={cardDeleteButtonClasses} onClick={handleDeleteClick}></button>
                <img className="photo-grid__photo" alt="" src={props.card.link} onClick={handleClick} />
                <div className="photo-grid__content">
                    <h2 className="photo-grid__title">{props.card.name}</h2>
                    <button type="button" aria-label="Card Favorite Button" className={cardLikeButtonClasses} onClick={handleLikeClick}>
                        <p className="photo-grid__like-count">{props.card.likes.length}</p>
                    </button>
                </div>
            </article>
        
    );
}

export default Card;