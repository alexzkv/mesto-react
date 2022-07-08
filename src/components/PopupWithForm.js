function PopupWithForm() {
  return (
  <>
    <div classname="popup popup_update-avatar">
      <div classname="popup__container">
        <button type="button" aria-label="Закрыть форму" classname="popup__close">
          <p classname="popup__title">Обновить аватар</p>
          <form name="update-avatar" classname="popup__form">
            <input
              name="avatar-name"
              id="avatar-link"
              type="url"
              placeholder="Ссылка на новый аватар"
              required=""
              classname="popup__input popup__input_update_avatar"
            />
            <span id="avatar-link-error" classname="popup__error"></span>
          </form>
        </button>
        <button type="submit" classname="popup__save-button">
          Сохранить
        </button>
      </div>
    </div>
    <div classname="popup popup_profile">
      <div classname="popup__container">
        <button type="button" aria-label="Закрыть форму" classname="popup__close">
          <p classname="popup__title">Редактировать профиль</p>
          <form name="edit-profile" classname="popup__form">
            <input
              name="profile-name"
              id="input-name"
              type="text"
              placeholder="Имя"
              required=""
              minLength="{2}"
              maxLength="{40}"
              classname="popup__input popup__input_profile_name"
            />
            <span id="input-name-error" classname="popup__error">
              <input
                name="profile-about"
                id="input-about"
                type="text"
                placeholder="О себе"
                required=""
                minLength="{2}"
                maxLength="{200}"
                classname="popup__input popup__input_profile_about"
              />
              <span id="input-about-error" classname="popup__error"></span>
            </span>
          </form>
        </button>
        <button type="submit" classname="popup__save-button">
          Сохранить
        </button>
      </div>
    </div>
    <div classname="popup popup_add-card">
      <div classname="popup__container">
        <button type="button" aria-label="Закрыть форму" classname="popup__close">
          <p classname="popup__title">Новое место</p>
          <form name="add-card" classname="popup__form">
            <input
              name="item-name"
              id="card-name"
              type="text"
              placeholder="Название"
              required=""
              minLength="{2}"
              maxLength="{30}"
              classname="popup__input popup__input_card_name"
            />
            <span id="card-name-error" classname="popup__error">
              <input
                name="item-link"
                id="card-link"
                type="url"
                placeholder="Ссылка на картинку"
                required=""
                classname="popup__input popup__input_card_link"
              />
              <span id="card-link-error" classname="popup__error"></span>
            </span>
          </form>
        </button>
        <button type="submit" classname="popup__save-button">
          Создать
        </button>
      </div>
    </div>
    <div classname="popup popup_confirm">
      <div classname="popup__container">
        <form name="confirm-deletion" classname="popup__form">
          <button
            type="button"
            aria-label="Закрыть форму"
            classname="popup__close"
          >
            <h2 classname="popup__title">Вы уверены?</h2>
          </button>
          <button type="submit" classname="popup__save-button">
            Да
          </button>
        </form>
      </div>
    </div>
  </>
  );
}

export default PopupWithForm;