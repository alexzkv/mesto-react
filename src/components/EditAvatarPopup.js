import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: avatarRef.current.value });
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
        ref={avatarRef}
        className="popup__input popup__input_update_avatar"
      />
      <span id="avatar-link-error" className="popup__error"></span>
    </PopupWithForm>
  )  
}

export default EditAvatarPopup;