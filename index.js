function addingEventListener() {
  const clickMe = document
    .querySelector("#button")
    .addEventListener("click", () => alert("I was Clicked"));
}
addingEventListener();
