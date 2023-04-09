function Card({
  card,
  onCardClick }) {

  function handleCardClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <button type="button"
        className="delete-button card__delete-button"></button>
      <img
        className="card__photo"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__info-likes">
          <button type="button"
            className="like-button card__like-button"></button>
          <p className="card__counter-likes">{card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;
