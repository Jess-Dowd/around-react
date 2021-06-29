import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import CurrentUser from '../context/CurrentUser.js';

function EditAvatarPopup(props) {
    const currentUser = React.useContext(CurrentUser);
    const avatarUrl = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({ avatar: avatarUrl.current.value });
        props.onClose();
        avatarUrl.current.value = null;
    }

    return (
        <PopupWithForm name="form-pic" title="Change userpic" isOpen={props.isOpen} btnText="Save" onClose={props.onClose} onSubmit={handleSubmit}>
            <div className="popup-box__input">
                <input ref={avatarUrl} id="form-name" name="primary" className="form__name popup-box__text popup-box__text_type_user-pic" type="url" placeholder={currentUser.avatar} required />
                <span id="form-name-error" className="popup-box__error"></span>
            </div>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;