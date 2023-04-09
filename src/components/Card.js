function Card(props) {
  return (
    <li className="card" key={props.item._id}>
      <button type="button"
        className="delete-button card__delete-button"></button>
      <img className="card__photo" src={props.item.link} alt={props.item.name} />
      <div className="card__info">
        <h2 className="card__title">{props.item.name}</h2>
        <div className="card__info-likes">
          <button type="button"
            className="like-button card__like-button"></button>
          <p className="card__counter-likes">{props.item.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;