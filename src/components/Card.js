function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <button type="button"
        className="delete-button card__delete-button"></button>
      <img
        className="card__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <div className="card__info">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__info-likes">
          <button type="button"
            className="like-button card__like-button"></button>
          <p className="card__counter-likes">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;