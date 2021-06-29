///done
import React from "react";
import Card from './Card.js';
import CurrentUser from '../context/CurrentUser.js'

function Main(props) {

    const currentUser = React.useContext(CurrentUser);

    return (
        <main className="main">

            <section className="profile">
                <button type="button" className="profile__image-button" onClick={props.onEditAvatar}></button>
                <img className="profile__image" src={currentUser.avatar} alt="My profile pic" />
                <div className="profile__text">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <p className="profile__bio">{currentUser.about}</p>
                </div>
                <button className="profile__text-button" type="button" aria-label="edit profile" onClick={props.onEditProfile}></button>
                <button className="profile__photo-button" type="button" aria-label="add photo" onClick={props.onAddCard}></button>
            </section>

            <section className="grid-container">
                {props.cards.map(card => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={props.onCardClick}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete}
                        onClose={props.onClose}
                    />
                ))}
            </section>

        </main>
    )
}

export default Main