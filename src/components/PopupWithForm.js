function PopupWithForm(props) {
  const stateClass = props.isOpen ? 'popup_opened' : '';
  return (
    <div className={`popup popup_type_${props.name} ${stateClass}`}>
      <div className="popup__container popup__container_type_edit-window">
        <button type="button"
          className="close-button popup__close-button"
          onClick={props.onClose}>
        </button>
        {/* ! props for h2 class confirmation popup needed */}
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