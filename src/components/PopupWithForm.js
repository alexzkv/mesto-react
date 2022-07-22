function PopupWithForm({ name, isOpen, onClose, title, children, ariaLabel, textButton }) {
  return (  
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : " "}`}>
      <div className="popup__container">
        <button onClick={onClose} type="button" className="popup__close"></button>
        <p className="popup__title">{title}</p>
        <form name={name} className="popup__form">
          {children}
          <button type="submit" aria-label={ariaLabel} className="popup__save-button">
            {textButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;