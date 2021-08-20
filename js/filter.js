var allClientsInList = document.querySelectorAll(".list");
var searchInput = document.querySelector(".search");

searchInput.addEventListener("keyup", () => {
  filterClients(searchInput, allClientsInList);
});
