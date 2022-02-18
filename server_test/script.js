// axios
//   .get("http://localhost:3001/participants")
//   .then((reponse) => console.log(reponse.data))
//   .catch((error) => console.log("Erreur serveur"));

const form = document.querySelector("form");
const input = document.querySelector("input");
const inputEmail = document.querySelector("#search-email");
const inputFirstName = document.querySelector("#search-firstname");
const tbody = document.querySelector("tbody");

/* On écrit dans les input le mail et le prénom des participants de la base de donnés */

// Cette fonction permet de modifier l'url, selon si on écrit seulement le mail ou le prénom ou les 2
// pour trouver l'url modifié => inspecter, Network, ctrl+r
const url = () => {
  if (inputEmail.value && inputFirstName.value) {
    return (
      "http://localhost:3001/participants?email=" +
      inputEmail.value +
      "&firstName=" +
      inputFirstName.value
    );
  }
  if (inputEmail.value) {
    return "http://localhost:3001/participants?email=" + inputEmail.value;
  }
  if (inputFirstName.value) {
    return (
      "http://localhost:3001/participants?firstName=" + inputFirstName.value
    );
  }
};

// Récupérer la personne selon le mail, le prénom ou les 2 écrit dans les input, et affiche dans le tableau ses coordonnées
form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  axios
    .get(url())
    .then((reponse) => {
      tbody.innerHTML = ` 
          <tr>
              <td>${reponse.data[0].firstName}</td> 
              <td>${reponse.data[0].lastName}</td>
              <td>${reponse.data[0].email}</td>
          </tr>
           `;
      // reponse.data[0]pour récupérer le 1er participant de la base de donnés répondant au critère(ici à l'email)
      console.log(reponse);
    })
    .catch((error) => console.log("Erreur serveur"));
});
