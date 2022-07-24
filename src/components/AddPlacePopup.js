import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const currentUser = useContext(CurrentUserContext);
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (currentUser) {
      setLink(currentUser?.link);
      setTitle(currentUser?.title);
    }
  }, [currentUser, isOpen]);

  function handleChangeLink(e) { setLink(e.target.value) }
  function handleChangeTitle(e) { setTitle(e.target.value) }
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ link: link, name: title });
  }

   return (
    <PopupWithForm
      name="add-card"
      title="Новое место"
      ariaLabel="Создать"
      textButton="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        name="item-name"
        id="card-name"
        type="text"
        placeholder="Название"
        required
        minLength={2}
        maxLength={30}
        value={title || ""}
        onChange={handleChangeTitle}
        className="popup__input popup__input_card_name"
      />
      <span id="card-name-error" className="popup__error"></span>
      <input
        name="item-link"
        id="card-link"
        type="url"
        placeholder="Ссылка на картинку"
        required
        value={link || ""}
        onChange={handleChangeLink}
        className="popup__input popup__input_card_link"
      />
      <span id="card-link-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;














// import { useRef } from "react";
// import PopupWithForm from "./PopupWithForm";

// function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
//   const linkRef = useRef();
//   const nameRef = useRef();

//   function handleSubmit(e) {
//     e.preventDefault();
//     onAddPlace({
//       link: linkRef.current.value, 
//       name: nameRef.current.value, 
//     });
//   }

//   if (isOpen) {
//     linkRef.current.value = ""
//     nameRef.current.value = ""
//   }

//   return (
//     <PopupWithForm
//       name="add-card"
//       title="Новое место"
//       ariaLabel="Создать"
//       textButton="Создать"
//       isOpen={isOpen}
//       onClose={onClose}
//       onSubmit={handleSubmit}
//     >
//       <input
//         name="item-name"
//         id="card-name"
//         type="text"
//         placeholder="Название"
//         required
//         minLength={2}
//         maxLength={30}
//         ref={nameRef}
//         className="popup__input popup__input_card_name"
//       />
//       <span id="card-name-error" className="popup__error"></span>
//       <input
//         name="item-link"
//         id="card-link"
//         type="url"
//         placeholder="Ссылка на картинку"
//         required
//         ref={linkRef}
//         className="popup__input popup__input_card_link"
//       />
//       <span id="card-link-error" className="popup__error"></span>
//     </PopupWithForm>
//   );
// }

// export default AddPlacePopup;