import { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = useContext(CurrentUserContext);
  const[avatar, setAvatar] = useState("");

  useEffect(() => {
    if (currentUser) {
      setAvatar(currentUser?.avatar);
    }
  }, [currentUser]);

  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar
    });
  }

  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      ariaLabel="Сохранить"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="avatar-name"
        id="avatar-link"
        type="url"
        placeholder="Ссылка на новый аватар"
        required

        onChange={handleChangeAvatar}
        className="popup__input popup__input_update_avatar"
      />
      <span id="avatar-link-error" className="popup__error"></span>
    </PopupWithForm>
  )  
}

export default EditAvatarPopup;