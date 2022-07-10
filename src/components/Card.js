function Card(props) {
  
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
        className="card__delete"
      />
      <div className="card__description">
        <p className="card__title">{props.card.name}</p>
        <a href="/" className="card__like-box">
          <button
            type="button"
            aria-label="Лайкнуть сердечко"
            className="card__like-btn"
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