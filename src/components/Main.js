import React from "react";
import api from "../utils/Api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main(props) {
  const [ cards, setcards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getCards()
      .then(res => {
        setcards(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <div
          type="button"
          aria-label="Обновить аватар"
          className="profile__avatar"
          onClick={props.onEditAvatar}
          style={{backgroundImage: `url(${currentUser.avatar})`}}
        />
        <div className="profile__info">
          <h1 className="profile__info-title">{currentUser.name}</h1>
          <button
            type="button"
            aria-label="Редактировать профиль"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          />
          <p className="profile__info-subtitle">{currentUser.about}</p>
        </div>
        <button
          type="button"
          aria-label="Добавить карточку"
          className="profile__add-card"
          onClick={props.onAddPlace}
        />
      </section>
      <section className="elements">
        <ul className="element-grid">
          {cards.map((item) => {
            return (
              <Card 
                key={item._id}
                card={item}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
  
export default Main;