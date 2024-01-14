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
  // Retrieve current URL
  let currentUrl = window.location.href;

  // Select all menu links
  let menuLinks = document.querySelectorAll(".menu-link");

  // Browse each link and check if it matches the current URL
  menuLinks.forEach(function (link) {
    let linkUrl = link.href;

    // Compare URL path parts
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
      // Add the link to the document and trigger the download
      document.body.appendChild(lien);
      lien.click();
      // Delete document link
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

  // Retrieve field values
  let sendername = document.querySelector("#name").value;
  let to = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;

  // Check that all required fields have been completed
  if (!sendername || !to || !subject || !message) {
    alert("Veuillez remplir tous les champs du formulaire.");
    return;
  }
  // Check that email fields are valid
  if (!validateEmail(to)) {
    alert("Veuillez entrer une adresse email valide.");
    return;
  }
  // EmailJS service and template ID
  let serviceID = "service_1gjwsyn";
  let templateID = "template_88cm4wa";

  // Sending parameters
  let params = {
    sendername: sendername,
    to: to,
    subject: subject,
    message: message,
  };
  // Send e-mail
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("E-mail envoyé avec succès!");

      // Clear form fields after successful submission
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#subject").value = "";
      document.querySelector("#message").value = "";
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi de l'e-mail:", error);
    });
}

// Function to validate an email address
function validateEmail(email) {
  // Use a regular expression to validate the email address
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
// Use "fr" by default if language is not defined in local storage
let isFrench =
  localStorage.getItem("language") === "fr" ||
  localStorage.getItem("language") === null;

const texts = {
  fr: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    project: "Projets",
    contact: "Contact",
    jobTitle: "<h3>Développeuse Full-Stack</h3>",
    aboutMe: "A propos de <span class='pink-text'>Moi</span> !",
    aboutContentText:
      "Je suis une développeuse dotée de solides compétences en programmation et conception de logiciels. Avec une expérience de deux ans, ma passion pour les technologies me motive à contribuer activement à des projets innovants. Mon objectif est d'allier mon expertise technique à la créativité afin d'atteindre des résultats probants.",
    langButton: "Changer la langue",
    skillsTitle: "Mes <span class='pink-text'>Compétences</span>",
    projectTitle: "Mes <span class='pink-text'>Projets</span>",
    learnMore: "En savoir plus",
    descriptionToolbox:"<p>Plateforme web pour enseignants, propose idées et outils pédagogiques pour des cours interactifs et personnalisés.</p>",
    descriptionSteamer:"<p>Application de rencontres synchronisée avec STEAM, mettant en relation des utilisateurs en fonction de leurs jeux communs au cours des 15 derniers jours.</p>",
    descriptionAvenir:"<p>L'application mobile permet aux utilisateurs de rédiger des messages positifs et de planifier des rappels quotidiens basés sur ces messages.</p>",
    projectSteamer: "<span class='pink-text'> Steamer</span>",
    business: "<strong>Entreprise</strong> : Mithra production",
    techno:
      " <strong>Les technologies</strong> : Ionic pour le frontend, NestJS pour le backend et MariaDB comme base de données.",
    projectOne:
      "<p>Dans ce projet, j'ai conçu la page de profil et créé la page 'favorites' avec des badges pour les nouveaux likes et matchs. J'ai aussi géré l'enregistrement des informations sur les likes, dislikes, et les matchs entre utilisateurs, incluant une suppression automatique des dislikes après 30 jours.</p>",
    projectAvenir: "<span class='pink-text'> Avenir</span>",
    avenir: "<strong>Entreprise</strong> : Avenir",
    technos:
      " <strong>Les technologies</strong> : Ionic pour le frontend, NestJS pour le backend et MariaDB comme base de données.",
    projectTwo:"<p>Mon rôle dans ce projet consistait à concevoir un formulaire permettant aux utilisateurs d'ajouter des messages positifs, tout en mettant en place une fonctionnalité de rappels quotidiens personnalisables. Cette option permettait aux utilisateurs de programmer des rappels en fonction de leurs propres messages inspirants.</p>",
    projectToolbox: "<span class='pink-text'> La boîte à Outils</span>",
    toolbox: "<strong>Entreprise</strong> : Université de Haute Alsace",
    technoToolbox:"<strong>Les technologies</strong> : JavaScript pour le frontend, PHP et WordPress pour le backend et MySQL comme base de données.",
    projectBox: "<p>En tant que développeuse unique du projet 'La Boîte à Outils', j'ai effectué la migration des fonctionnalités vers un plugin. Cela a impliqué le transfert et la refonte complète d'aspects essentiels tels que l'affichage des outils pédagogiques, la gestion du panier et la sauvegarde des sélections. Mon objectif principal était d'optimiser le code pour une meilleure performance et d'améliorer l'expérience utilisateur du site. Pour découvrir le résultat final, veuillez cliquer sur le bouton ci-dessous.</p>",
    contactMe: "Contactez-<span class='pink-text'>Moi</span> !",
    placeholders: {
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
    },
  },
  en: {
    home: "Home",
    about: "About",
    skills: "Skills",
    project: "Projects",
    contact: "Contact",
    jobTitle: "<h3>Full-Stack Developer</h3>",
    aboutMe: "About  <span class='pink-text'>Me</span>",
    aboutContentText:
      "I am a developer with strong programming skills and software design. With two years of experience, ma passion for technologies motivates me to actively contribute to innovative projects. My goal is to combine my technical expertise with creativity in order to achieve convincing results.",
    langButton: "Change Language",
    skillsTitle: "My <span class='pink-text'>skills</span>",
    projectTitle: "My  <span class='pink-text'>Projects<span>",
    learnMore: "Learn more",
    descriptionToolbox: "<p>Web platform for teachers, offers ideas and educational tools for interactive and personalized courses.</p>",
    descriptionSteamer: "<p>Dating application synchronized with STEAM, connecting users based on their shared games over the past 15 days.</p>",
    descriptionAvenir:"<p>The mobile app allows users to write positive messages and schedule daily reminders based on these messages.</p>",
    projectSteamer: "<span class='pink-text'>Steamer</span>",
    business: "<strong>Company</strong> : Mithra production",
    techno:
      "<strong>The technologies</strong> : Ionic for the frontend, NestJS for the backend and  MariaDB for the database.",
    projectOne:
      "<p>In this project, I designed the profile page and created the 'favorites' page with badges for new likes and matches. I also managed the recording of information on likes, dislikes, and matches between users, including automatic deletion of dislikes after 30 days.</p>",
    projectAvenir: "<span class='pink-text'> Avenir</span>",
    avenir: "<strong>Company</strong> : Avenir",
    technos:
      "<strong>The technologies</strong> : Ionic for the frontend, NestJS for the backend and  MariaDB for the database.",
    projectTwo:
      "<p>My role in this project was to design a form allowing users to add positive messages, while implementing a customizable daily reminders functionality. This option allowed users to schedule reminders based on their own inspirational messages.</p>",
    projectToolbox: "<span class='pink-text'> La boîte à Outils</span>",
    toolbox: "<strong>Company</strong> : Université de Haute Alsace",
    technoToolbox:
    "<strong>The technologies</strong> : JavaScript for the frontend, PHP and WordPress for the backend, and MySql as the database.",
    projectBox:
    "<p>As part of the 'Toolbox' project, I identified and improved essential functionalities. Through the development of a custom plugin, I facilitated a more efficient integration while ensuring a smooth transition of existing functionality. My goal was to optimize the user experience, and as the sole developer on the project, my work significantly improved the performance and usability of the Toolbox.</p>",
    contactMe: "Contact <span class='pink-text'>Me</span>!",
    placeholders: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
    },
  },
};

document.addEventListener("DOMContentLoaded", function () {
  // Update button text when page loads
  const langButton = document.getElementById("lang-button");
  if (langButton) {
    langButton.textContent = isFrench ? "FR" : "EN";
  }
});

function changeLanguage() {
  isFrench = !isFrench;
  localStorage.setItem("language", isFrench ? "fr" : "en");
  console.log("Language set to:", isFrench ? "fr" : "en");

  updateLanguage();

  const langButton = document.getElementById("lang-button");
  if (langButton) {
    langButton.textContent = isFrench ? "FR" : "EN";
  }
}

updateLanguage();

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
    learnMore: document.querySelectorAll(".learnMore"),
    descriptionToolbox: document.getElementById("descriptionToolbox"),
    descriptionSteamer: document.getElementById("descriptionSteamer"),
    descriptionAvenir: document.getElementById("descriptionAvenir"),
    projectSteamer: document.getElementById("projectSteamer"),
    business: document.getElementById("business"),
    techno: document.getElementById("techno"),
    projectOne: document.getElementById("projectOne"),
    projectAvenir: document.getElementById("projectAvenir"),
    avenir: document.getElementById("avenir"),
    technos: document.getElementById("technos"),
    projectTwo: document.getElementById("projectTwo"),
    langButton: document.getElementById("lang-button"),
    projectToolbox: document.getElementById("projectToolbox"),
    toolbox: document.getElementById("toolbox"),
    technoToolbox: document.getElementById("technoToolbox"),
    description: document.getElementById("description"),
    projectBox: document.getElementById("projectBox"),
    contactMe: document.getElementById("contactMe"),
    nameInput: document.getElementById("name"),
    emailInput: document.getElementById("email"),
    subjectInput: document.getElementById("subject"),
    messageTextarea: document.getElementById("message"),
  };

   for (const key in elements) {
    const element = elements[key];

    if (element && texts[isFrench ? "fr" : "en"][key]) {
      // Vérifiez si l'élément est une NodeList (cas de "learnMore")
      if (key === 'learnMore' && element.length > 0) {
        // Mettez à jour le texte de tous les éléments dans la NodeList
        element.forEach((el, index) => {
          el.innerHTML = texts[isFrench ? "fr" : "en"][key];
        });
      } else {
        // Mettez à jour le texte pour les autres types d'éléments
        element.innerHTML = texts[isFrench ? "fr" : "en"][key];
      }
    } else {
      console.log("Element not found or translation missing for key:", key);
    }
  }
}

updateLanguage();

// Initial call to update placeholders on page load
function updateFormPlaceholders() {
  const placeholders = texts[isFrench ? "fr" : "en"].placeholders;

  for (const key in placeholders) {
    const element = document.getElementById(key);
    if (element) {
      element.placeholder = placeholders[key];
    } else {
      console.log("Form Element not found for key:", key);
    }
  }
}
updateFormPlaceholders();

function enlargeImage(event) {
  let image = event.target;

  // View larger image
  let enlargedContainer = document.getElementById("enlargedContainer");
  let enlargedImage = document.getElementById("enlargedImage");
  enlargedImage.src = image.src; // Définir la source de l'image agrandie
  enlargedContainer.style.display = "flex";
}

function closeEnlarged() {
  // Hide larger image
  let enlargedContainer = document.getElementById("enlargedContainer");
  enlargedContainer.style.display = "none";
}
// Select all images in the "image" class
let images = document.querySelectorAll(".image img");

// Add an event listener to each image
images.forEach(function (image) {
  image.addEventListener("click", enlargeImage);
});
