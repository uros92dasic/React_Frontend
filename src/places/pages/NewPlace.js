import React from "react";

import Input from "../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/components/util/validators";
import './NewPlace.css';

const NewPlace = () => {
    return (
        <>
        <h3>New Place!</h3>
        <form className="place-form">
            <Input
                element="input"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
            />
        </form>
        </>
    );
}

export default NewPlace;