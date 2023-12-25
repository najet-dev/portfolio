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
  }
});

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

//toggle icon navbar
const icons = document.getElementById("icons");
const nav = document.querySelector(".navbar");
const closeBtn = document.createElement("div");
closeBtn.className = "close-btn";
closeBtn.innerHTML = "&times;";

// Function to toggle the menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  console.log("Menu Icon Clicked");
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  console.log("Menu State:", navbar.classList.contains("active"));
};
//change language
let isFrench = localStorage.getItem("language") === "fr";

function changeLanguage() {
  isFrench = !isFrench;
  localStorage.setItem("language", isFrench ? "fr" : "en");
  updateLanguage();

  const langButton = document.getElementById("lang-button");
  if (langButton) {
    langButton.textContent = isFrench ? "EN" : "FR";
  }
}
function updateLanguage() {
  const elements = {
    home: document.getElementById("home-link"),
    about: document.getElementById("about-link"),
    skills: document.getElementById("skills-link"),
    project: document.getElementById("project-link"),
    contact: document.getElementById("contact-link"),
    jobTitle: document.getElementById("job-title"),
    aboutMe: document.getElementById("aboutMe"),
    aboutContentText: document.getElementById("about-content-text"),
    skillsTitle: document.getElementById("skillsTitle"),
    projectTitle: document.getElementById("projectTitle"),
    projectSteamer: document.getElementById("projectSteamer"),
    business: document.getElementById("business"),
    techno: document.getElementById("techno"),
    projetOne: document.getElementById("projetOne"),
    projectAvenir: document.getElementById("projectAvenir"),
    avenir: document.getElementById("avenir"),
    technos: document.getElementById("technos"),
    projectTwo: document.getElementById("projectTwo"),
    langButton: document.getElementById("lang-button"),
    contactMe: document.getElementById("contactMe"),
  };
  const texts = {
    fr: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      project: "Projets",
      contact: "Contact",
      jobTitle: "Développeuse Full-Stack",
      aboutMe: "A propos de <span class='pink-text'>Moi</span> !",
      aboutContentText:
        "Je suis une développeuse dotée de solides compétences en programmation et conception de logiciels. Avec une expérience de deux ans, ma passion pour les technologies me motive à contribuer activement à des projets innovants. Mon objectif est d'allier mon expertise technique à la créativité afin d'atteindre des résultats probants.",
      langButton: "Changer la langue",
      skillsTitle: "Mes <span class='pink-text'>Compétences</span>",
      projectTitle: "Mes <span class='pink-text'>Projets</span>",
      projectSteamer: "Le projet<span class='pink-text'> Steamer</span>",
      business: "Entreprise : Mithra production",
      techno:
        " Les technologies : Ionic pour le frontend, NestJS pour le backend et MariaDB comme base de données.",
      projetOne:
        "Dans le cadre du projet Steamer, j'ai développé l'affichage de l'avatar et du pseudo Steamer, ainsi que la page de profil avec des badges pour les nouveaux likes et matchs. J'ai également créé les tables 'swipe' et 'match' pour enregistrer les interactions entreutilisateurs, incluant la suppression automatique des dislikes après 30 jours.",
      projetAvenir: "Le projet<span class='pink-text'> Avenir</span>",
      avenir: "Entreprise : Avenir",
      technos:
        " Les technologies : Ionic pour le frontend, NestJS pour le backend et MariaDB comme base de données.",
      projetTwo:
        "Le projet Avenir représente une initiative mobile visant à cultive une mentalité positive chez ses utilisateurs. Mon rôle essentiel dans ce projet a été la conception d'un formulaire permettant aux utilisateurs de partager des messages positifs et la mise en place d'une fonctionnalité de rappels quotidiens personnalisables. En permettant aux utilisateurs de programmer des rappels basés sur leurs messages inspirants.",
      contactMe: "Contactez-<span class='pink-text'>Moi</span> !",
    },
    en: {
      home: "Home",
      about: "About",
      skills: "Skills",
      project: "Projects",
      contact: "Contact",
      jobTitle: "Full-Stack Developer",
      aboutMe: "About  <span class='pink-text'>Me</span>",
      aboutContentText:
        "I am a developer with strong programming skills and software design. With two years of experience, ma passion for technologies motivates me to actively contribute to innovative projects. My goal is to combine my technical expertise with creativity in order to achieve convincing results.",
      langButton: "Change Language",
      skillsTitle: "My <span class='pink-text'>skills</span>",
      projectTitle: "My  <span class='pink-text'>Projects<span>",
      projectSteamer: "The <span class='pink-text'>steamer</span> project",
      business: "Company : Mithra production",
      techno:
        "The technologies : Ionic for the frontend, NestJS for the backend and  MariaDB for the database.",
      projetOne:
        "As part of the Steamer project, I developed the display of  the Steamer avatar and nickname, as well as the profile page with badges for new likes and matches. I also created the 'swipe' and 'match' tables to record interactions between including automatic deletion of dislikes after 30 days.",
      projectAvenir: "The <span class='pink-text'> avenir</span> project",
      avenir: "Company : Avenir",
      technos:
        "The technologies : Ionic for the frontend, NestJS for the backend and  MariaDB for the database.",
      projectTwo:
        "The Avenir project represents a mobile initiative aimed at cultivating a positive mentality among its users. My key role in this project was the design of a form allowing users to share positive messages, and the implementation of a customizable daily reminder feature. At allowing users to set reminders based on their inspirational inspirational messages.",

      contactMe: "Contact <span class='pink-text'>Me</span>!",
    },
  };

  for (const key in elements) {
    const element = elements[key];
    if (element && texts[isFrench ? "fr" : "en"][key]) {
      // Ajoutez une classe à la balise span pour cibler avec le CSS
      element.innerHTML = texts[isFrench ? "fr" : "en"][key];
    }
  }
}

updateLanguage();

//Robot
