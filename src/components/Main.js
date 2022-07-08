function Main() {
  function handleEditAvatarClick() {
    const popupUpdateAvatar = document.querySelector('.popup_update-avatar');
    popupUpdateAvatar.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const popupEditProfile = document.querySelector('.popup_profile');
    popupEditProfile.classList.add('popup_opened');
  }

  function handleAddPlaceClick() {
    const popupAddCard = document.querySelector('.popup_add-card');
    popupAddCard.classList.add('popup_opened');
  }

  return (
    <main>
      <section className="profile">
        <button
          type="button"
          aria-label="Обновить аватар"
          className="profile__avatar"
          onClick={handleEditAvatarClick}
        />
        <div className="profile__info">
          <h1 className="profile__info-title">Жак-Ив Кусто</h1>
          <button
            type="button"
            aria-label="Редактировать профиль"
            className="profile__edit-button"
            onClick={handleEditProfileClick}
          />
          <p className="profile__info-subtitle">Исследователь океана</p>
        </div>
        <button
          type="button"
          aria-label="Добавить карточку"
          className="profile__add-card"
          onClick={handleAddPlaceClick}
        />
      </section>
      <section className="elements">
        <ul className="element-grid"></ul>
      </section>
    </main>
  );
}
  
export default Main;