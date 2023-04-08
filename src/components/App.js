import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <main className="content page__content">
          <section className="profile content__profile">
            <button className="profile__avatar-container">
              <img src="<%=require('./images/avatar.jpg')%>"
                alt="Аватар"
                className="avatar" />
            </button>
            <div className="profile__info">
              <h1 className="profile__name">Ваше имя...</h1>
              <button type="button"
                className="edit-button profile__edit-button edit-button_type_profile"></button>
              <p className="profile__about">О вас...</p>
            </div>
            <button type="button"
              className="add-button profile__add-button add-button_type_card"></button>
          </section>
          <section className="photo-grid">
            <ul className="photo-grid__list">
              <template id="card-template">
                <li className="card">
                  <button type="button"
                    className="delete-button card__delete-button"></button>
                  <img className="card__photo" />
                  <div className="card__info">
                    <h2 className="card__title"></h2>
                    <div className="card__info-likes">
                      <button type="button"
                        className="like-button card__like-button"></button>
                      <p className="card__counter-likes">55</p>
                    </div>
                  </div>
                </li>
              </template>
            </ul>
          </section>
        </main>
        <Footer />
      </div>

      <div className="popup popup_type_edit-profile">
        <div className="popup__container popup__container_type_edit-window">
          <button type="button"
            className="close-button popup__close-button"></button>
          <h2 className="popup__title popup__title_type_edit-window">Редактировать профиль</h2>
          <form name="edit-profile-form"
            className="popup__form"
            novalidate>
            <label className="popup__label">
              <input name="profile-name"
                type="text"
                placeholder="Имя"
                id="profile-name-input"
                className="input-field input-field_name_profile-name popup__input"
                minlength="2"
                maxlength="40"
                required />
              <span className="profile-name-input-error popup__error"></span>
            </label>
            <label className="popup__label">
              <input name="profile-about"
                type="text"
                placeholder="О себе"
                id="profile-about-input"
                className="input-field input-field_name_profile-about popup__input"
                minlength="2"
                maxlength="200"
                required />
              <span className="profile-about-input-error popup__error"></span>
            </label>
            <button type="submit"
              className="save-button popup__save-button">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add-card">
        <div className="popup__container popup__container_type_edit-window">
          <button type="button"
            className="close-button popup__close-button"></button>
          <h2 className="popup__title popup__title_type_edit-window">Новое место</h2>
          <form name="add-card-form"
            className="popup__form"
            novalidate>
            <label className="popup__label">
              <input name="card-title"
                type="text"
                placeholder="Название"
                id="card-title-input"
                className="input-field input-field_name_card-title popup__input"
                minlength="2"
                maxlength="30"
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
            novalidate>
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
            novalidate>
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
