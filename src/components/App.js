import "../index.css";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = useState(false);
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false);
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = useState(false);
  const [ selectedCard, setSelectedCard ] = useState(null);
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getCards()
    ])
      .then(([userInfo, cards]) => {
        setCurrentUser(userInfo);
        setCards(cards);
      })
      .catch(err => console.log(err));
  }, []);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards(state => state.map(c => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards(state => state.filter(d => d._id !== card._id));
      })
      .catch(err => console.log(err));
  }

  function handleUpdateUser({ name, about }) {
    api.updateInfo({ name, about })
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleUpdateAvatar({ avatar }) {
    api.updateAvatar({ avatar })
      .then((userInfo) => {
        setCurrentUser(userInfo);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <PopupWithForm
          name="add-card"
          title="Новое место"
          ariaLabel="Создать"
          textButton="Создать"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            name="item-name"
            id="card-name"
            type="text"
            placeholder="Название"
            required
            minLength={2}
            maxLength={30}
            className="popup__input popup__input_card_name"
          />
          <span id="card-name-error" className="popup__error"></span>
          <input
            name="item-link"
            id="card-link"
            type="url"
            placeholder="Ссылка на картинку"
            required
            className="popup__input popup__input_card_link"
          />
          <span id="card-link-error" className="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm className="popup popup_type_confirm"
          name="confirm"
          title="Вы уверены?"
          ariaLabel="Да"
          textButton="Да"
          onClose={closeAllPopups}
        >
        </PopupWithForm>
        <ImagePopup
          name={"open-card"}
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup 
          isOpen={isEditAvatarPopupOpen} 
          onClose={closeAllPopups} 
          onUpdateAvatar={handleUpdateAvatar}
        />
      </CurrentUserContext.Provider>
    </div>  
  );
}

export default App;
