import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function DeleteCardPopup(props) {

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({ });
        props.onClose();
    }

return (
    <PopupWithForm name="Delete" title="Are you sure?" isOpen={props.isOpen} btnText="yes" onClose={props.onClose} onSubmit={handleSubmit}>

    </PopupWithForm>
)
}

export default DeleteCardPopup;