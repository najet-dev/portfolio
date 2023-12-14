// Fonction pour définir le thème en fonction du choix de l'utilisateur
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

// Fonction pour basculer entre le mode sombre et clair
function toggleThemeMode() {
  const isDarkMode = document.body.classList.contains("dark-mode");
  setThemeMode(!isDarkMode);
}

// Écouteur d'événements pour le bouton de changement de thème
const toggleThemeButton = document.querySelector(".toggle-theme");
toggleThemeButton.addEventListener("click", toggleThemeMode);

// Vérifier si l'utilisateur a déjà choisi un thème
const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  setThemeMode(storedTheme === "dark");
}

// Enregistrer le choix de l'utilisateur dans le stockage local
toggleThemeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
});

//PDF
document.addEventListener("DOMContentLoaded", function () {
  const boutonCV = document.getElementById("cv-button");

  boutonCV.addEventListener("click", function () {
    // Créer un élément de lien pour déclencher le téléchargement
    const lien = document.createElement("a");
    lien.href = "./images/cv.pdf"; // Mettez le chemin correct vers votre fichier PDF
    lien.download = "cv.pdf";

    // Ajouter le lien au document et déclencher le téléchargement
    document.body.appendChild(lien);
    lien.click();

    // Supprimer le lien du document
    document.body.removeChild(lien);
  });
});
//carousel
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
  let sendername = document.querySelector("#sendername").value;
  let to = document.querySelector("#to").value;
  let subject = document.querySelector("#subject").value;
  let replyto = document.querySelector("#replyto").value;
  let message = document.querySelector("#message").value;

  // Vérifier si tous les champs obligatoires sont remplis
  if (!sendername || !to || !subject || !replyto || !message) {
    alert("Veuillez remplir tous les champs du formulaire.");
    return;
  }

  // Vérifier si les champs email sont valides
  if (!validateEmail(to) || !validateEmail(replyto)) {
    alert("Veuillez entrer des adresses email valides.");
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
    replyto: replyto,
    message: message,
  };

  // Envoyer l'e-mail
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("E-mail envoyé avec succès!");

      // Effacer les champs du formulaire après l'envoi réussi
      document.querySelector("#sendername").value = "";
      document.querySelector("#to").value = "";
      document.querySelector("#subject").value = "";
      document.querySelector("#replyto").value = "";
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
