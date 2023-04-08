function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
      <div className="popup__container popup__container_type_edit-window">
        <button type="button"
          className="close-button popup__close-button"></button>
        {/* ! props for h2 class needed */}
        <h2 className="popup__title popup__title_type_edit-window">{props.title}</h2>
        <form name={`${props.name}-form`}
          className="popup__form"
          noValidate>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;