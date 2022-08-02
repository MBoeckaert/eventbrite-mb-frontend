import { useState } from "react";

const PayTickets = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const firstNameInputHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameInputHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const ticketBuyerData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
    };

    console.log(ticketBuyerData);
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <h3>Contactgegevens</h3>
        <div className="form-details">
          <label>First Name</label>
          <input
            type="text"
            value={enteredFirstName}
            onChange={firstNameInputHandler}
          />
        </div>
        <div className="form-details">
          <label>Last Name</label>
          <input
            type="text"
            value={enteredLastName}
            onChange={lastNameInputHandler}
          />
        </div>
        <div className="form-details">
          <label>Email</label>
          <input
            type="email"
            value={enteredEmail}
            onChange={emailInputHandler}
          />
        </div>
        <button type="submit">Bestellen</button>
      </form>
    </>
  );
};

export default PayTickets;
