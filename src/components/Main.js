function Main() {
  function handleEditAvatarClick(evt) {
    console.log(evt);
  }

  function handleEditProfileClick(evt) {
    console.log(evt);
  }

  function handleAddPlaceClick(evt) {
    console.log(evt);
  }

  return (
  <>
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
  </>
  );
}
  
export default Main;