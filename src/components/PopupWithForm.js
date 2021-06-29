import React from "react";

    function PopupWithForm(props) {
        return (
            <div className={`popup-box popup-box_type_${props.name} ${props.isOpen && (`popup-box_open`)}`} name={props.name} onSubmit={props.onSubmit} >
                <form className={`popup-box__container popup-box__container_type_${props.name}`}>

                <button type="button" aria-label="Close Picture Button" className="popup-box__exit " onClick={props.onClose}></button>

                    <h2 className="popup-box__title">{props.title}</h2>

                    {props.children}

                    <button type="submit" className="popup-box__save" onClick={props.onClose}>{props.btnText}</button>
                </form>
            </div>
        )
    }

export default PopupWithForm