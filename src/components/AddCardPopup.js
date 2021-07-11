import React from "react";
import PopupWithForm from './PopupWithForm.js';

function AddCardPopup(props) {

    const [name, setName] = React.useState('');
    const [url, setUrl] = React.useState('');

    function handleName(e) {
        setName(e.target.value);
    }

    function handleUrl(e) {
        setUrl(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onAddCard({ name: name, link: url });
        props.onClose();
       
    }

    return (
        <PopupWithForm
            name="card"
            title="New place"
            isOpen={props.isOpen}
            btnText="Create"
            onClose={props.onClose}
            onSubmit={handleSubmit}
        >

            <div className="popup-box__input">
                <input id="card-title" type="text" name="field1" className="popup-box__text popup-box__text_type_card" placeholder="Title" value={name} onChange={handleName} required minLength="1" maxLength="30" />
                <span id="card-title-error" className="popup-box__error"></span>

                <input id="card-url" type="url" name="field2" className="popup-box__text popup-box__text_type_photo" placeholder="Image Link" required value={url} onChange={handleUrl} />
                <span id="card-url-error" className="popup-box__error"></span>

            </div>

        </PopupWithForm>
    )

}
export default AddCardPopup