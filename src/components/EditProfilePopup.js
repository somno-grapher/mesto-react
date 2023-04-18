import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({
  isOpen,
  onClose
}) {
  return (
    <PopupWithForm
      name="edit-profile"
      isOpen={isOpen}
      onClose={onClose}
      title="Редактировать профиль"
    >
      <label className="popup__label">
        <input name="profile-name"
          type="text"
          placeholder="Имя"
          id="profile-name-input"
          className="input-field input-field_name_profile-name popup__input"
          minLength="2"
          maxLength="40"
          required />
        <span className="profile-name-input-error popup__error"></span>
      </label>
      <label className="popup__label">
        <input name="profile-about"
          type="text"
          placeholder="О себе"
          id="profile-about-input"
          className="input-field input-field_name_profile-about popup__input"
          minLength="2"
          maxLength="200"
          required />
        <span className="profile-about-input-error popup__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
