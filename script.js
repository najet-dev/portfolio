console.log("Script.js is running on this page");
// Function to set theme based on user choice
function setThemeMode(isDarkMode) {
  const toggleIcon = document.querySelector(".toggle-icon");

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    toggleIcon.classList.remove("bx-moon");
    toggleIcon.classList.add("bx-sun");
  } else {
    document.body.classList.remove("dark-mode");
    toggleIcon.classList.remove("bx-sun");
    toggleIcon.classList.add("bx-moon");
  }
}

// Function to switch between dark and light mode
function toggleThemeMode() {
  const isDarkMode = document.body.classList.contains("dark-mode");
  setThemeMode(!isDarkMode);
}

// Écouteur d'événements pour le bouton de changement de thème
const toggleThemeButton = document.querySelector(".toggle-theme");
toggleThemeButton.addEventListener("click", toggleThemeMode);

// Event listener for theme change button
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  setThemeMode(storedTheme === "dark");
}

// Save user choice to local storage
toggleThemeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

//Menu active
document.addEventListener("DOMContentLoaded", function () {
  // Récupérer l'URL actuelle
  let currentUrl = window.location.href;

  // Sélectionner tous les liens du menu
  let menuLinks = document.querySelectorAll(".menu-link");

  // Parcourir chaque lien et vérifier s'il correspond à l'URL actuelle
  menuLinks.forEach(function (link) {
    let linkUrl = link.href;

    // Comparer les parties de chemin de l'URL
    if (currentUrl.includes(linkUrl)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

//PDF
document.addEventListener("DOMContentLoaded", function () {
  const boutonCV = document.getElementById("cv-button");

  if (boutonCV) {
    boutonCV.addEventListener("click", function () {
      console.log("Button clicked!");

      const lien = document.createElement("a");
      lien.href = "./images/cv.pdf";
      lien.download = "cv.pdf";

      // Ajouter le lien au document et déclencher le téléchargement
      document.body.appendChild(lien);
      lien.click();

      // Supprimer le lien du document
      document.body.removeChild(lien);
    });
  } else {
    console.error("Élément avec l'ID 'cv-button' non trouvé");
  }
});

//carousel
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".skills")) {
    const list = document.querySelector("#list");
    const listContent = Array.from(list.children);

listContent.forEach((item) => {
  const duplicatedItem = item.cloneNode(true);
  duplicatedItem.setAttribute("aria-hidden", true);
  list.appendChild(duplicatedItem);
});
//changement de langue
// Fonction pour changer la langue
function switchLanguage() {
  let langButton = document.getElementById("langButton");
  let frenchElements = document.querySelectorAll(".french");
  let englishElements = document.querySelectorAll(".english");

  // Récupérer la langue actuelle depuis le stockage local
  let currentLanguage = localStorage.getItem("language") || "fr";

  // Si la langue actuelle est le français, basculez vers l'anglais et vice versa
  if (currentLanguage === "fr") {
    langButton.innerHTML = "En";

    frenchElements.forEach(function (element) {
      element.style.display = "none";
    });

    englishElements.forEach(function (element) {
      element.style.display = "block";
    });

    // Mettre à jour la langue dans le stockage local
    localStorage.setItem("language", "en");
  } else {
    langButton.innerHTML = "Fr";

    frenchElements.forEach(function (element) {
      element.style.display = "block";
    });

    englishElements.forEach(function (element) {
      element.style.display = "none";
    });

    // Mettre à jour la langue dans le stockage local
    localStorage.setItem("language", "fr");
  }
}

// Appeler la fonction pour initialiser la page avec la langue stockée localement
switchLanguage();

//Email
function sendMail() {
  emailjs.init("OLC9XWnhpO7QsE0DA");

  // Récupérer les valeurs des champs
  let sendername = document.querySelector("#name").value;
  let to = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;

  // Vérifier si tous les champs obligatoires sont remplis
  if (!sendername || !to || !subject || !message) {
    alert("Veuillez remplir tous les champs du formulaire.");
    return;
  }

  // Vérifier si les champs email sont valides
  if (!validateEmail(to)) {
    alert("Veuillez entrer une adresse email valide.");
    return;
  }

  // ID du service et du modèle EmailJS
  let serviceID = "service_1gjwsyn";
  let templateID = "template_88cm4wa";

  // Paramètres pour l'envoi
  let params = {
    sendername: sendername,
    to: to,
    subject: subject,
    message: message,
  };

  // Envoyer l'e-mail
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("E-mail envoyé avec succès!");

      // Effacer les champs du formulaire après l'envoi réussi
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#subject").value = "";
      document.querySelector("#message").value = "";
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi de l'e-mail:", error);
    });
}

// Fonction pour valider une adresse email
function validateEmail(email) {
  // Utilisez une expression régulière pour valider l'adresse email
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

///Robot
