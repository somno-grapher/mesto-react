import api from '../utils/api';
import avatarPlaceholderPath from '../images/avatar.jpg';
import Card from './Card.js';
import React from 'react';

function Main({
  handleAddPlaceClick,
  handleEditAvatarClick,
  handleEditProfileClick,
  onCardClick }) {

  const [userName, setUserName] = React.useState('Ваше имя...');
  const [userDescription, setUserDescription] = React.useState('О вас...');
  const [userAvatar, setUserAvatar] = React.useState(avatarPlaceholderPath);
  const [cards, setCards] = React.useState([]);

  React.useEffect(getInitialDataFromServer, []);

  function getInitialDataFromServer() {
    Promise.all([
      api.getCurrentUser(),
      api.getInitialCards()
    ])
      .then(([
        jsonResponseUser,
        jsonResponseCards
      ]) => {
        setUserName(jsonResponseUser.name);
        setUserDescription(jsonResponseUser.about);
        setUserAvatar(jsonResponseUser.avatar);
        setCards(jsonResponseCards);
      })
      .catch(err => { console.log(err); });
  }

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <button className="profile__avatar-container"
          onClick={handleEditAvatarClick}>
          <img src={userAvatar}
            alt="Аватар"
            className="avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button"
            className="edit-button profile__edit-button edit-button_type_profile"
            onClick={handleEditProfileClick}>
          </button>
          <p className="profile__about">{userDescription}</p>
        </div>
        <button type="button"
          className="add-button profile__add-button add-button_type_card"
          onClick={handleAddPlaceClick}>
        </button>
      </section>
      <section className="photo-grid">
        <ul className="photo-grid__list">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
              />
            )
          })}
        </ul>
      </section>
    </main>
  );

}

export default Main;
