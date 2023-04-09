function ImagePopup(props) {
  const stateClass = props.card.link && 'popup_opened';
  return (
    <div className={`popup popup_type_show-photo ${stateClass}`} >
      <figure className="popup__container popup__container_type_photo">
        <button
          type="button"
          className="close-button popup__close-button"
          onClick={props.onClose}
        >
        </button>
        <img
          className="full-photo"
          src={props.card.link}
          alt={props.card.name}
        />
        <figcaption className="popup__title popup__title_type_photo">
          {props.card.name}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;