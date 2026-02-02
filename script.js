const pages = [
  "home",
  "subscribe",
  "dashboard",
  "startup",
  "maintenance",
  "finance"
];

const nav = document.getElementById("nav");

function hideAllPages() {
  pages.forEach(page =>
    document.getElementById(page).classList.add("hidden")
  );
}

function showPage(page) {
  const subscribed = localStorage.getItem("subscribed") === "true";

  if (!subscribed && page !== "home" && page !== "subscribe") {
    goToSubscribe();
    return;
  }

  hideAllPages();
  document.getElementById(page).classList.remove("hidden");
  nav.classList.remove("hidden");
}

function goToSubscribe() {
  hideAllPages();
  document.getElementById("subscribe").classList.remove("hidden");
}

function subscribe() {
  alert("Subscription successful! Welcome to Business Assistance Bureau.");
  localStorage.setItem("subscribed", "true");
  hideAllPages();
  nav.classList.remove("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
}

function logout() {
  localStorage.removeItem("subscribed");
  nav.classList.add("hidden");
  hideAllPages();
  document.getElementById("home").classList.remove("hidden");
}

/* On page load */
if (localStorage.getItem("subscribed") === "true") {
  nav.classList.remove("hidden");
  hideAllPages();
  document.getElementById("dashboard").classList.remove("hidden");
}
