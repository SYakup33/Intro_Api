import { useState } from "react";

export const Form = (props) => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  // console.log(email);

  const submitForm = (evt) => {
    evt.preventDefault();
    props.chercheParticipant(email, firstname);
  };

  return (
    <form
      onSubmit={submitForm}
      style={{ gap: 30 }}
      className="mt-5 w-50 mx-auto d-flex align-items-center"
    >
      <div className="w-100">
        <input
          type="text"
          className="form-control"
          id="search-email"
          placeholder="Recherche par email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
      </div>
      <div className="w-100">
        <input
          type="text"
          className="form-control"
          id="search-firstname"
          placeholder="Recherche par prénom"
          value={firstname}
          onChange={(evt) => setFirstName(evt.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>
  );
};
