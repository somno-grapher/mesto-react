import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);
  const [isConfirmPopupOpen, setConfirmPopupState] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupState] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupState] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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

  function handleEditAvatarClick() {
    setEditAvatarPopupState(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupState(true);
  }

  return (
    <>


      {/* regular page */}

      <div className="page">
        <Header />
        <Main
          handleAddPlaceClick={handleAddPlaceClick}
          handleEditAvatarClick={handleEditAvatarClick}
          handleEditProfileClick={handleEditProfileClick}
          onCardClick={handleCardClick}
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

    </>
  );
}

export default App;
