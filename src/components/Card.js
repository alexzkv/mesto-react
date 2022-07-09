function Card(props) {
    return (
      <li className="card">
        <img 
          src={props.src}
          alt={props.alt}
          className="card__img"
        />
        <button
          type="button"
          aria-label="Удалить карточку"
          className="card__delete"
        />
        <div className="card__description">
          <p className="card__title">{props.title}</p>
          <a href="/" className="card__like-box">
            <button
              type="button"
              aria-label="Лайкнуть сердечко"
              className="card__like-btn"
            />
            <span className="card__like-count" />
          </a>
        </div>
      </li>
    );
  }

export default Card;