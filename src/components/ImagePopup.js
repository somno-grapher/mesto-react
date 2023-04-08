function ImagePopup() {
  return (
    <div className="popup popup_type_show-photo">
      <figure className="popup__container popup__container_type_photo">
        <button type="button"
          className="close-button popup__close-button"></button>
        <img className="full-photo" />
        <figcaption className="popup__title popup__title_type_photo"></figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;