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
      "<p>Dans le cadre du projet Steamer, j'ai développé l'affichage de l'avatar et du pseudo Steamer, ainsi que la page de profil avec des badges pour les nouveaux likes et matchs. J'ai également créé les tables 'swipe' et 'match' pour enregistrer les interactions entre utilisateurs, incluant la suppression automatique des dislikes après 30 jours.</p>",
    projetAvenir: "Le projet<span class='pink-text'> Avenir</span>",
    avenir: "Entreprise : Avenir",
    technos:
      " Les technologies : Ionic pour le frontend, NestJS pour le backend et MariaDB comme base de données.",
    projetTwo:
      "Le projet Avenir représente une initiative mobile visant à cultive une mentalité positive chez ses utilisateurs. Mon rôle essentiel dans ce projet a été la conception d'un formulaire permettant aux utilisateurs de partager des messages positifs et la mise en place d'une fonctionnalité de rappels quotidiens personnalisables. En permettant aux utilisateurs de programmer des rappels basés sur leurs messages inspirants.",
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
      "<p>As part of the Steamer project, I developed the display of  the Steamer avatar and nickname, as well as the profile page with badges for new likes and matches. I also created the 'swipe' and 'match' tables to record interactions between including automatic deletion of dislikes after 30 days.</p>",
    projectAvenir: "The <span class='pink-text'> avenir</span> project",
    avenir: "Company : Avenir",
    technos:
      "The technologies : Ionic for the frontend, NestJS for the backend and  MariaDB for the database.",
    projectTwo:
      "<p>The Avenir project represents a mobile initiative aimed at cultivating a positive mentality among its users. My key role in this project was the design of a form allowing users to share positive messages, and the implementation of a customizable daily reminder feature. At allowing users to set reminders based on their inspirational inspirational messages.</p>",
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
    nameInput: document.getElementById("name"),
    emailInput: document.getElementById("email"),
    subjectInput: document.getElementById("subject"),
    messageTextarea: document.getElementById("message"),
  };

  for (const key in elements) {
    const element = elements[key];
    if (element && texts[isFrench ? "fr" : "en"][key]) {
      element.innerHTML = texts[isFrench ? "fr" : "en"][key];
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
