import React from "react";
import api from "../utils/Api";

function Main(props) {
  const [ userName, setUserName ] = React.useState('');
  const [ userDescription , setUserDescription ] = React.useState('');
  const [ userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo()
    .then(res => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <main>
      <section className="profile">
        <button
          type="button"
          aria-label="Обновить аватар"
          className="profile__avatar"
          onClick={props.onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})`}}
        />
        <div className="profile__info">
          <h1 className="profile__info-title">{userName}</h1>
          <button
            type="button"
            aria-label="Редактировать профиль"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          />
          <p className="profile__info-subtitle">{userDescription}</p>
        </div>
        <button
          type="button"
          aria-label="Добавить карточку"
          className="profile__add-card"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="elements">
        <ul className="element-grid"></ul>
      </section>
    </main>
  );
}
  
export default Main;