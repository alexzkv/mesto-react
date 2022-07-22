import { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onSubmit  }) {
  const currentUser = useContext(CurrentUserContext);
  const[name, setName] = useState("");
  const[description, setDescription] = useState("");

 useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.name);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.description);
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      ariaLabel="Сохранить"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
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
        value={name} onChange={handleChangeName}
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
        value={description} onChange={handleChangeDescription}
      />
      <span id="input-about-error" className="popup__error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;