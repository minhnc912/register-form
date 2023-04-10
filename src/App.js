import React, { useState } from "react";
import "./index.css";

export default function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState({
        firstName: { valid: false, msg: "" },
        lastName: { valid: false, msg: "" },
        email: { valid: false, msg: "" },
    });
    const mailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const firstNameHandler = (event) => {
        setFirstName(event.target.value);
    };

    const lastNameHandler = (event) => {
        setLastName(event.target.value);
    };

    const emailHandler = (event) => {
        setEmail(event.target.value);
    };
    // debugger;

    const registerSubmitHandler = (event) => {
        event.preventDefault();
        if (validate()) {
            setSubmitted(true);
            reset();
        }
    };

    const reset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
    };

    const validate = () => {
        const temp = {
            firstName: { valid: false, msg: "" },
            lastName: { valid: false, msg: "" },
            email: { valid: false, msg: "" },
        };
        if (!firstName) {
            temp.firstName = { valid: true, msg: "Please enter a first name" };
        }
        if (!lastName) {
            temp.lastName = {
                valid: true,
                msg: "Please enter a last name",
            };
        }
        if (!email) {
            temp.email = {
                valid: true,
                msg: "Please enter an email address",
            };
        } else if (!email.match(mailFormat)) {
            temp.email = {
                valid: true,
                msg: "Please enter an valid email address (example: test@gmail.com)",
            };
        }
        setValid(temp);
        return (
            !temp.firstName.valid && !temp.lastName.valid && !temp.email.valid
        );
    };

    return (
        <div className="form-container" onSubmit={registerSubmitHandler}>
            <form className="register-form">
                {submitted ? (
                    <div className="success-message">
                        Success! Thank you for registering
                    </div>
                ) : null}
                <input
                    id="first-name"
                    className="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={firstNameHandler}
                />
                {valid.firstName.valid && (
                    <span id="first-name-error">{valid.firstName.msg}</span>
                )}
                <input
                    id="last-name"
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={lastNameHandler}
                />
                {valid.lastName.valid && (
                    <span id="first-name-error">{valid.lastName.msg}</span>
                )}
                <input
                    id="email"
                    className="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={emailHandler}
                />
                {valid.email.valid && (
                    <span id="first-name-error">{valid.email.msg}</span>
                )}
                <button className="form-field" type="submit">
                    Register
                </button>
            </form>
        </div>
    );
}
