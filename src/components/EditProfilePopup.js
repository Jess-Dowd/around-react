import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import CurrentUser from '../context/CurrentUser.js';

function EditProfilePopup(props) {

    const currentUser = React.useContext(CurrentUser);
    // Hook loads user data and 
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    function handleName(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({ name: name, about: description });
        props.onClose();
        // name.current.value = null;
    }

    return (
        <PopupWithForm name="profile" title="Edit Profile" isOpen={props.isOpen} btnText="Save" onClose={props.onClose} onSubmit={handleSubmit}>
            <div className="popup-box__input">
                <input id="form-name" type="text" name="field1" className="popup-box__text popup-box__text_type_name" placeholder="name" required minLength="2" maxLength="40" value={name} onChange={handleName} />
                <span id="form-name-error" className="popup-box__error"></span>

                <input id="profile-text" type="text" name="field2" className="popup-box__text popup-box__text_about" placeholder="profession" required minLength="2" maxLength="200" value={description} onChange={handleDescription} />
                <span id="profile-text-error" className="popup-box__error"></span>

            </div>
        </PopupWithForm>
    )
}

export default EditProfilePopup;