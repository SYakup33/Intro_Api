import { useEffect, useState } from "react";
import { Form } from "./componnents/Form";
import { Table } from "./componnents/Table";
import axios from "axios";

export const App = () => {
  const [list, setList] = useState([]);
  // useEffect sert à effectuer un code seulement lorsque le "componnent" sera complétement chargé par React
  useEffect(() => {
    axios
      .get("http://localhost:3001/participants")
      .then((reponse) => setList(reponse.data));
    // utilisation des crochets (dépendances), afin que ce code ne s'execute qu'une seule fois
  }, []);

  // Une fois que l'on réceptionne l'email voulue
  // on demande à axios de chercher dans la db le participant en question
  // puis on remplace notre liste initiale par la réponse
  const handleRequest = (email, firstname) => {
    if (email && firstname) {
      return axios
        .get(
          "http://localhost:3001/participants?email=" +
            email +
            "&firstName=" +
            firstname
        )
        .then((reponse) => setList(reponse.data));
    }
    if (email) {
      return axios
        .get("http://localhost:3001/participants?email=" + email)
        .then((reponse) => setList(reponse.data));
    }
    if (firstname) {
      return axios
        .get("http://localhost:3001/participants?firstName=" + firstname)
        .then((reponse) => setList(reponse.data));
    }
  };

  // list.length === 0, pareil
  if (!list.length) return <h4>Loading ....</h4>;

  return (
    <main className="container my-5">
      <h1 className="text-center">Recherche de participants</h1>

      {/* on passe en props notre fonction handleRequest */}
      <Form chercheParticipant={handleRequest} />
      {/* on passe en props notre fonction list */}
      <Table listAPasser={list} />

      <a href="post.html" className="btn btn-success">
        Créer une personne
      </a>
    </main>
  );
};
