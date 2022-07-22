import "../index.css";
import { useState, useEffect } from "react";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = useState(false);
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = useState(false);
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = useState(false);
  const [ selectedCard, setSelectedCard ] = useState(null);
  const [ currentUser, setCurrentUser ] = useState({});
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

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
        />
        <Footer />
        <PopupWithForm 
          name="update-avatar"
          title="Обновить аватар"
          ariaLabel="Сохранить"
          textButton="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            name="avatar-name"
            id="avatar-link"
            type="url"
            placeholder="Ссылка на новый аватар"
            required
            className="popup__input popup__input_update_avatar"
          />
          <span id="avatar-link-error" className="popup__error"></span>
        </PopupWithForm>
        <PopupWithForm
          name="profile"
          title="Редактировать профиль"
          ariaLabel="Сохранить"
          textButton="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            name="profile-name"
            id="input-name"
            type="text"
            placeholder="Имя"
            required
            minLength={2}
            maxLength={40}
            className="popup__input popup__input_profile_name"
          />
          <span id="input-name-error" className="popup__error"></span>
          <input
            name="profile-about"
            id="input-about"
            type="text"
            placeholder="О себе"
            required
            minLength={2}
            maxLength={200}
            className="popup__input popup__input_profile_about"
          />
          <span id="input-about-error" className="popup__error"></span>
        </PopupWithForm>
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
      </CurrentUserContext.Provider>
    </div>  
  );
}

export default App;
