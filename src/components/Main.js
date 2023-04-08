import api from '../utils/api';
import avatarPlaceholderPath from '../images/avatar.jpg';
import React from 'react';

function Main(props) {

  const [userName, setUserName] = React.useState('Ваше имя...');
  const [userDescription, setUserDescription] = React.useState('О вас...');
  const [userAvatar, setUserAvatar] = React.useState(avatarPlaceholderPath);

  React.useEffect(getInitialDataFromServer, []);

  function getInitialDataFromServer() {
    Promise.all([
      api.getCurrentUser(),
      // api.getInitialCards()
    ])
      .then(([
        jsonResponseUser,
        // jsonResponseCards
      ]) => {
        setUserName(jsonResponseUser.name);
        setUserDescription(jsonResponseUser.about);
        setUserAvatar(jsonResponseUser.avatar);
        // currentUserId = jsonResponseUser._id;
        // userInfo.setInitialUserInfo(jsonResponseUser);
        // photoGridList.generateAndAddInitialItems(jsonResponseCards);
      })
      .catch(err => { console.log(err); });
  }

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <button className="profile__avatar-container"
          onClick={props.handleEditAvatarClick}>
          <img src={userAvatar}
            alt="Аватар"
            className="avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button"
            className="edit-button profile__edit-button edit-button_type_profile"
            onClick={props.handleEditProfileClick}>
          </button>
          <p className="profile__about">{userDescription}</p>
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
