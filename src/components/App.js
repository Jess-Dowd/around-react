///done
import React from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithPhoto from './PopupWithPhoto.js'
import EditProfilePopup from './EditProfilePopup.js'
import EditAvatarPopup from './EditAvatarPopup.js'
import AddCardPopup from './AddCardPopup.js'
import api from '../utils/api.js'
import CurrentUser from '../context/CurrentUser.js'
import DeleteCardPopup from './DeleteCardPopup.js'


function App() {

  ///User Info ////
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => { setCurrentUser(res); })
      .catch((err) => { console.log(err) });
  }, []);

  ///Popup Image ////
  const [selectedCard, setSelectedCard] = React.useState(null);

  ///Popup Forms ////
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isAddCardOpen, setIsAddCardOpen] = React.useState(false);
  const [isEditAvatarOpen, setIsEditAvatarOpen] = React.useState(false);
  const [isDeleteCardOpen, setIsDeleteCardOpen] = React.useState(false);

  ///Open Close Handlers ////
  function handleEditAvatarClick() {
    setIsEditAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleDeleteCardClick() {
    setIsDeleteCardOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarOpen(false);
    setIsEditProfileOpen(false);
    setIsAddCardOpen(false);
    setIsDeleteCardOpen(false);
    setSelectedCard(null);
  }

  /// Update API User Info ////
  function handleUpdateUser(newInfo) {
    api.patchUserInfo(newInfo)
      .then((res) => { 
        setCurrentUser(res);
        closeAllPopups();
       })
      .catch((err) => { console.log(err) });
  }

  function handleUpdateAvatar(avatar) {
    api.patchUserPic(avatar)
      .then((res) => { 
        setCurrentUser(res);
        closeAllPopups(); 
      })
      .catch((err) => { console.log(err) });
  }

  ///Set and Update API Cards ////
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => { setCards(res); })
      .catch((err) => { console.log(err) });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.likeCard(card, isLiked)
      .then((res) => {
        const newCards = cards.map((c) => c._id === card._id ? res : c);
        setCards(newCards);
      })
      .catch((err) => { console.log(err) });
  }

  function handleAddCard(card) {
    api.addNewCard(card)
      .then((res) => {
        const newCards = [...cards, res];
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => { console.log(err) });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => { console.log(err) });
  }

  /// Markup ////
  return (

    <div className="App body">
      <CurrentUser.Provider value={currentUser}>

        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddCard={handleAddCardClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onClose={closeAllPopups}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleDeleteCardClick}
          key={handleCardDelete}
        />

        <Footer />

        <EditProfilePopup
          isOpen={isEditProfileOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddCardPopup
          isOpen={isAddCardOpen}
          onClose={closeAllPopups}
          onAddCard={handleAddCard}
        />

        <DeleteCardPopup
          isOpen={isDeleteCardOpen}
          onClose={closeAllPopups}
          onSubmit={handleCardDelete}
        />

        <PopupWithPhoto
          card={selectedCard}
          onClose={closeAllPopups}
        />

      </CurrentUser.Provider>
    </div>

  );
}

export default App;