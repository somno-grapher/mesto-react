import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';

function App() {

  function handleAddPlaceClick() {
    const addPlacePopup = document.querySelector('.popup_type_add-card');
    addPlacePopup.classList.add('popup_opened');
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main handleAddPlaceClick={handleAddPlaceClick} />
        <Footer />
      </div>

      <PopupWithForm title="Новое место" name="add-card">
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
        <button type="submit"
          className="save-button popup__save-button">Сохранить</button>
      </PopupWithForm>

      <div className="popup popup_type_edit-profile">
        <div className="popup__container popup__container_type_edit-window">
          <button type="button"
            className="close-button popup__close-button"></button>
          <h2 className="popup__title popup__title_type_edit-window">Редактировать профиль</h2>
          <form name="edit-profile-form"
            className="popup__form"
            noValidate>
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
            <button type="submit"
              className="save-button popup__save-button">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_show-photo">
        <figure className="popup__container popup__container_type_photo">
          <button type="button"
            className="close-button popup__close-button"></button>
          <img className="full-photo" />
          <figcaption className="popup__title popup__title_type_photo"></figcaption>
        </figure>
      </div>

      <div className="popup popup_type_confirm">
        <div className="popup__container popup__container_type_edit-window">
          <button type="button"
            className="close-button popup__close-button"></button>
          <h2 className="popup__title popup__title_type_confirm-window">Вы уверены?</h2>
          <form name="confirm-form"
            className="popup__form"
            noValidate>
            <button type="submit"
              className="save-button popup__save-button">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_update-avatar">
        <div className="popup__container popup__container_type_edit-window">
          <button type="button"
            className="close-button popup__close-button"></button>
          <h2 className="popup__title popup__title_type_edit-window">Обновить аватар</h2>
          <form name="update-avatar-form"
            className="popup__form"
            noValidate>
            <label className="popup__label">
              <input name="avatar-link"
                type="url"
                placeholder="Ссылка"
                id="avatar-link-input"
                className="input-field input-field_name_avatar-link popup__input"
                required />
              <span className="avatar-link-input-error popup__error"></span>
            </label>
            <button type="submit"
              className="save-button popup__save-button">Сохранить</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
