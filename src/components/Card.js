// react import
import { useContext } from "react";

// project import
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({
  card,
  onCardClick,
  onCardLike }) {

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() { }

  const currentUser = useContext(CurrentUserContext);
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName =
    `like-button
    card__like-button
    ${isLiked && 'like-button_liked'}`;
  const isOwn = card.owner._id === currentUser._id;

  return (
    <li className="card">
      {isOwn &&
        <button
          // TODO exlude type
          // type="button"
          className="delete-button card__delete-button"
          onClick={handleDeleteClick}
        />
      }
      <img
        className="card__photo"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__info-likes">
          <button
            // TODO exlude type
            // type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          />
          <p className="card__counter-likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
