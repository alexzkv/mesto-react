import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup"

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm />
      <ImagePopup />

      <template className="card-template" />
      
      <div className="popup popup_open-card">
        <div className="popup__container popup__container_open_img">
          <button
            type="button"
            aria-label="Закрыть форму"
            className="popup__close"
          />
          <figure className="popup__big-img">
            <img src="#" alt="#" className="popup__image" />
            <figcaption className="popup__image-title" />
          </figure>
        </div>
      </div>
    </div>  
  );
}

export default App;
