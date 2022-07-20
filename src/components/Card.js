import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__delete ${isOwn ? '' : 'card__delete_disabled'}`
  );

  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (
    `card__like-btn ${isLiked ? 'card__like-btn_active' : ''}`
  );

    function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <img 
        src={props.card.link} 
        alt={props.card.name}
        className="card__img"
        onClick={handleClick}
      />
      <button
        type="button"
        aria-label="Удалить карточку"
        className={cardDeleteButtonClassName}
      />
      <div className="card__description">
        <p className="card__title">{props.card.name}</p>
        <a href="/" className="card__like-box">
          <button
            type="button"
            aria-label="Лайкнуть сердечко"
            className={cardLikeButtonClassName}
          />
          <span className="card__like-count">
            {props.card.likes.length}
          </span>
        </a>
      </div>
    </li>
  );
}

export default Card;