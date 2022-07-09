import "../index.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup"

function App() {
  const [ isEditAvatarPopupOpen, setIsEditAvatarPopupOpen ] = React.useState(false);
  const [ isEditProfilePopupOpen, setIsEditProfilePopupOpen ] = React.useState(false);
  const [ isAddPlacePopupOpen, setIsAddPlacePopupOpen ] = React.useState(false);

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
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
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
          minLength="{2}"
          maxLength="{40}"
          className="popup__input popup__input_profile_name"
        />
        <span id="input-name-error" className="popup__error"></span>
        <input
          name="profile-about"
          id="input-about"
          type="text"
          placeholder="О себе"
          required
          minLength="{2}"
          maxLength="{200}"
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
          minLength="{2}"
          maxLength="{30}"
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

      <ImagePopup />




      <template className="card-template" />
      <div className="popup popup_open-card">
        <div className="popup__container popup__container_open_img">
          <button
            type="button"
            aria-label="Закрыть форму"
            className="popup__close"
          />
          <figure className="popup__big-img">
            <img src="#" alt="#" className="popup__image" />
            <figcaption className="popup__image-title" />
          </figure>
        </div>
      </div>
    </div>  
  );
}

export default App;
