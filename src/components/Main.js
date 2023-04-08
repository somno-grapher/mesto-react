function Main(props) {

  // function handleAddPlaceClick() {
  //   const addPlacePopup = document.querySelector('.popup_type_add-card');
  //   addPlacePopup.classList.add('popup_opened');
  // }

  function handleEditAvatarClick() {
    const editAvatarPopup = document.querySelector('.popup_type_update-avatar');
    editAvatarPopup.classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    const editProfilePopup = document.querySelector('.popup_type_edit-profile');
    editProfilePopup.classList.add('popup_opened');
  }

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <button className="profile__avatar-container"
          onClick={handleEditAvatarClick}>
          <img src="<%=require('./images/avatar.jpg')%>"
            alt="Аватар"
            className="avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">Ваше имя...</h1>
          <button type="button"
            className="edit-button profile__edit-button edit-button_type_profile"
            onClick={handleEditProfileClick}>
          </button>
          <p className="profile__about">О вас...</p>
        </div>
        <button type="button"
          className="add-button profile__add-button add-button_type_card"
          onClick={props.handleAddPlaceClick}>
        </button>
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
  );

}

export default Main;
