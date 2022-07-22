import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      ariaLabel="Сохранить"
      textButton="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
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
  )
}

export default EditProfilePopup;