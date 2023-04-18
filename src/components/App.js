// react import
import { useEffect, useState } from 'react';

// project import
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupState] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupState] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setAddPlacePopupState(false);
    setConfirmPopupState(false);
    setEditAvatarPopupState(false);
    setEditProfilePopupState(false);
    setSelectedCard({});
  }

  function handleAddPlaceClick() {
    setAddPlacePopupState(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  // TODO provide catch
  function handleCardDelete(card) {
    api.deleteCardFromServer(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((c) =>
            c._id !== card._id));
      });
  }

  // TODO provide catch
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.likeCard(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) =>
            c._id === card._id ? newCard : c));
      });
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupState(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupState(true);
  }

  useEffect(() => {
    Promise.all([api.getCurrentUser(), api.getInitialCards()])
      .then(([jsonResponseUser, jsonResponseCards]) => {
        setCurrentUser(jsonResponseUser);
        setCards(jsonResponseCards)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>

      {/* regular page */}

      <div className="page">
        <Header />
        <Main
          cards={cards}
          handleAddPlaceClick={handleAddPlaceClick}
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
        />
        <Footer />
      </div>


      {/* popups */}

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <PopupWithForm
        name="add-card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title="Новое место"
      >
        <label className="popup__label">
          <input name="card-title"
            type="text"
            placeholder="Название"
            id="card-title-input"
            className="input-field input-field_name_card-title popup__input"
            minLength="2"
            maxLength="30"
            required />
          <span className="card-title-input-error popup__error"></span>
        </label>
        <label className="popup__label">
          <input name="card-photo-link"
            type="url"
            placeholder="Ссылка"
            id="card-link-input"
            className="input-field input-field_name_card-photo-link popup__input"
            required />
          <span className="card-link-input-error popup__error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="confirm"
        buttonText="Да"
        isOpen={isConfirmPopupOpen}
        onClose={closeAllPopups}
        title="Вы уверены?"
      >
      </PopupWithForm>

      <PopupWithForm
        name="edit-profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title="Редактировать профиль"
      >
        <label className="popup__label">
          <input name="profile-name"
            type="text"
            placeholder="Имя"
            id="profile-name-input"
            className="input-field input-field_name_profile-name popup__input"
            minLength="2"
            maxLength="40"
            required />
          <span className="profile-name-input-error popup__error"></span>
        </label>
        <label className="popup__label">
          <input name="profile-about"
            type="text"
            placeholder="О себе"
            id="profile-about-input"
            className="input-field input-field_name_profile-about popup__input"
            minLength="2"
            maxLength="200"
            required />
          <span className="profile-about-input-error popup__error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm
        name="update-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title="Обновить аватар"
      >
        <label className="popup__label">
          <input name="avatar-link"
            type="url"
            placeholder="Ссылка"
            id="avatar-link-input"
            className="input-field input-field_name_avatar-link popup__input"
            required />
          <span className="avatar-link-input-error popup__error"></span>
        </label>
      </PopupWithForm>

    </CurrentUserContext.Provider>
  );
}

export default App;
