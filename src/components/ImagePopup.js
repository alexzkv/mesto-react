function ImagePopup(props) {
  
  return (
    <div className={props.card ? `popup popup_type_${props.name} popup_opened` : `popup`}>
      <div className="popup__container popup__container_open_img">
        <button
          type="button"
          aria-label="Закрыть форму"
          className="popup__close"
          onClick={props.onClose}
        />
        <figure className="popup__big-img">
          <img 
            src={props.card ? props.card.link : "null"}
            alt={props.card ? props.card.name : "null"} 
            className="popup__image"
          />
          <figcaption className="popup__image-title"/>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;