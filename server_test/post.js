const inputFirstName = document.querySelector("#firstName");
const inputLastName = document.querySelector("#lastName");
const inputEmail = document.querySelector("#email");
const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  if (!inputFirstName.value || !inputLastName.value || !inputEmail.value) {
    result.innerHTML =
      "<h3 class='text-danger'>Merci de remplir tous les champs</h3>";
    return;
  }
  const newParticipant = {
    id: uuid.v4(),
    firstName: inputFirstName.value,
    lastName: inputLastName.value,
    email: inputEmail.value,
    avatar: `https://robohash.org/${inputFirstName.value}.png?size=50x50&set=set1`,
  };
  // Récupère le nouveau participant
  axios.post("http://localhost:3001/participants", newParticipant).then(() => {
    result.innerHTML = "<h4 class='text-success'>Utilisateur créé</h4>";
  });
});
