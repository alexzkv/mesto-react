function PopupWithForm(props) {
  return (
  <>  
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container">
        <button type="button" className="popup__close"></button>
        <p className="popup__title">{props.title}</p>
        <form noValidate name={props.name} className="popup__form">
          {props.children}
          <button type="submit" aria-label={props.ariaLabel} className="popup__save-button">
            {props.textButton}
          </button>
        </form>
      </div>
    </div>
  </>
  );
}

export default PopupWithForm;