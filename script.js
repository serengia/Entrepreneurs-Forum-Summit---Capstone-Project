const openBtn = document.querySelector(".menu-icon-open");
const closeBtn = document.querySelector(".menu-icon-close");
const navLinks = document.querySelector(".nav-links");
const speakersContainer = document.querySelector(".featured-speakers-body");

const openElements = () => {
  openBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  closeBtn.classList.add("visible");
  navLinks.classList.remove("hidden");
  navLinks.style.visibility = "visible";
};

const closeElements = () => {
  closeBtn.classList.add("hidden");
  openBtn.classList.remove("hidden");
  openBtn.classList.add("visible");
  navLinks.classList.add("hidden");
};

openBtn.addEventListener("click", openElements);
closeBtn.addEventListener("click", closeElements);

// Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(max-width: 768px)");
// Check if the media query is true
if (mediaQuery.matches) {
  // Then trigger an alert
  navLinks.addEventListener("click", closeElements);
}

const speakersArr = [
  {
    name: "Mike Ogalo",
    title: "Professor of Law, University of The People",
    description:
      "Mike Ogalo is a senior Professor of law with wide experience in commercial law. He is passionate about spearheading conversations that create a better work and business experience.",
    img: "./img/users/user-2.png",
  },
  {
    name: "Loreen Moli",
    title: "Director of Moli Holdings, Nairobi Kenya",
    description:
      "Loreen is a passionate entrepreneur leading the one of the most profitable privately owned fashion brand in the region. She is passionate about empowering entrepreneurs.",
    img: "./img/users/user-8.png",
  },
  {
    name: "Pius Gizman",
    title: "CEO and Team leader of the Gizma foundation",
    description:
      "With his deep focus on impacting people from vulnerable communities,Gizman is a social entrepreneur who has build several profit and no-profit organizations over the las 10 years.",
    img: "./img/users/user-3.png",
  },
  {
    name: "Joyce Mine",
    title: "Director general of Alamy trust, Germany",
    description:
      "Joyce Mine is a force to recon when it comes to spearheading efforts to fight for the rights of under disadvantaged groups in the community. She is currently the team lead at Alamy Foundation",
    img: "./img/users/user-5.png",
  },
  {
    name: "Freeman Ala",
    title: "Leadership coach and Team effectiveness ambassador",
    description:
      "Know by many as Team Effectiveness Ambassador, Dr. Freeman Ala is an executive leadership couch who is passionate about improving team effectiveness and building effective working relationships.",
    img: "./img/users/user-4.png",
  },
  {
    name: "James Serengia",
    title: "Senior Software Engineer at Sawabox.com, Nairobi",
    description:
      "James Serengia is a Senior Software Engineer at sawabox.com. He is also the author of Life Gives You What You Settle For. He is passionate about people and finding better ways to do things. ",
    img: "./img/users/user-1.png",
  },
];

const generateSpeakersMarkup = (data) => {
  const markUp = `
<div class="speaker">
<img src="${data.img}" alt="${data.name}" class="speaker-img">
<div class="speaker-details">
    <h4 class="name">${data.name}</h4>
    <p class="title">${data.title}</p>
    <p class="description">${data.description}</p>
</div>
</div>
`;

  return markUp;
};

const injectSpeakers = () => {
  let allSpeakers = "";
  speakersArr.forEach((obj) => {
    allSpeakers += generateSpeakersMarkup(obj);
  });

  speakersContainer.insertAdjacentHTML("afterbegin", allSpeakers);
};

injectSpeakers();
