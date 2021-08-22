var allClientsInList;
setInterval(() => {
  allClientsInList = document.querySelectorAll(".list");
}, 100);
var searchInput = document.querySelector(".search");

searchInput.addEventListener("keyup", () => {
  filterClients(searchInput, allClientsInList);
});
