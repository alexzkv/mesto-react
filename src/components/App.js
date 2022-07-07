import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
  <>
  <body className="page">
    <Header />
    <Main />
    <Footer />

    <template className="card-template" />
    <div className="popup popup_update-avatar">
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть форму"
          className="popup__close"
        />
        <p className="popup__title">Обновить аватар</p>
        <form name="update-avatar" className="popup__form">
          <input
            name="avatar-name"
            id="avatar-link"
            type="url"
            placeholder="Ссылка на новый аватар"
            required=""
            className="popup__input popup__input_update_avatar"
          />
          <span id="avatar-link-error" className="popup__error" />
          <button type="submit" className="popup__save-button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
    <div className="popup popup_profile">
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть форму"
          className="popup__close"
        />
        <p className="popup__title">Редактировать профиль</p>
        <form name="edit-profile" className="popup__form">
          <input
            name="profile-name"
            id="input-name"
            type="text"
            placeholder="Имя"
            required=""
            minLength={2}
            maxLength={40}
            className="popup__input popup__input_profile_name"
          />
          <span id="input-name-error" className="popup__error" />
          <input
            name="profile-about"
            id="input-about"
            type="text"
            placeholder="О себе"
            required=""
            minLength={2}
            maxLength={200}
            className="popup__input popup__input_profile_about"
          />
          <span id="input-about-error" className="popup__error" />
          <button type="submit" className="popup__save-button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
    <div className="popup popup_add-card">
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть форму"
          className="popup__close"
        />
        <p className="popup__title">Новое место</p>
        <form name="add-card" className="popup__form">
          <input
            name="item-name"
            id="card-name"
            type="text"
            placeholder="Название"
            required=""
            minLength={2}
            maxLength={30}
            className="popup__input popup__input_card_name"
          />
          <span id="card-name-error" className="popup__error" />
          <input
            name="item-link"
            id="card-link"
            type="url"
            placeholder="Ссылка на картинку"
            required=""
            className="popup__input popup__input_card_link"
          />
          <span id="card-link-error" className="popup__error" />
          <button type="submit" className="popup__save-button">
            Создать
          </button>
        </form>
      </div>
    </div>
    <div className="popup popup_confirm">
      <div className="popup__container">
        <form name="confirm-deletion" className="popup__form">
          <button
            type="button"
            aria-label="Закрыть форму"
            className="popup__close"
          />
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="submit" className="popup__save-button">
            Да
          </button>
        </form>
      </div>
    </div>
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
  </body>  
  </>
  );
}

export default App;
