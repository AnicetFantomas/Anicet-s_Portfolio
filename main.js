const hamburgerButton = document.querySelector('.nav-btn');
const slider = document.querySelector('.x-nav');
const display = document.querySelector('.desktop-nav');
const listEl = document.querySelectorAll('ul li');
const body = document.querySelector('body');

hamburgerButton.addEventListener('click', () => {
  display.style.display = 'block';
  hamburgerButton.style.display = 'none';
  slider.style.display = 'block';
  body.style.overflow = 'hidden';
});

slider.addEventListener('click', () => {
  display.style.display = 'none';
  hamburgerButton.style.display = 'block';
  slider.style.display = 'none';
  body.style.overflow = 'scroll';
});

listEl.forEach(
  (clickForClose) => {
    clickForClose.addEventListener('click', () => {
      display.style.display = 'none';
      hamburgerButton.style.display = 'block';
      body.style.overflow = 'scroll';
    });
  },
);

// popa-up-window

const details = [
  {
    id: 'project-1',
    Image: 'images/YourCryptoDay.png',
    name: 'YourCryptoDay',
    Description: '"YourCryptoDay" is a capstone built with React/redux, and the coinbase API. It helps them to keep an eye on the top trends on the market, crypto prices, and all their details.',
    Technologies: [
      'React-redux', 'API', 'Testing', 'github', 'ruby', 'Bootstrap',
    ],
    linkTolive: 'https://lively-cendol-a1ffaf.netlify.app',
    linkTosource: 'https://github.com/AnicetFantomas/YourCryptoDay',

    fullDescription: 'YourCryptoDay" is a capstone built with React/redux, and the coinbase API. It helps them to keep an eye on the top trends on the market, crypto prices, and all their details.',
  },

  {
    id: 'project-2',
    Image: 'images/spaceTrav.png',
    name: 'Space-travelers',
    Description: '"Space travelers" is a website for minds attracted and passionate about adventure in space. This project is real live data from the SpaceX API. Your task is to build a web application for a company that provides commercial and scientific space travel services.',
    Technologies: [
      'React-reduc', 'API', 'Testing', 'github', 'ruby', 'Bootstrap',
    ],
    linkTolive: 'https://gorgeous-tanuki-e47e88.netlify.app',
    linkTosource: 'https://github.com/AnicetFantomas/Space-travelers',
    fullDescription: '"Space travelers" is a website for minds attracted and passionate about adventure in space. This project is real live data from the SpaceX API. Your task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
  },

  {
    id: 'project-3',
    Image: 'images/BookStoreApp.png',
    name: 'BookStore',
    Description: "A single page application (SPA) wich can store, comment, remove and edit a specific book from the list using REST API. This is BookStore app is for all minds fascinated by reading.",
    Technologies: [
      'React-redux', 'Rest-Api', 'SPA', 'github', 'ruby', 'Bootstrap',
    ],
    linkTolive: 'https://helpful-croquembouche-5c6e11.netlify.app',
    linkTosource: 'https://github.com/AnicetFantomas/Book_Store',
    fullDescription: 'A single page application (SPA) wich can store, comment, remove and edit a specific book from the list using REST API. This is BookStore app is for all minds fascinated by reading.',
  },

  {
    id: 'project-4',
    Image: 'images/MathMag.png',
    name: 'Math-Magicians',
    Description: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make some calculations and read some rendom math-related quotes.',
    Technologies: [
      'Css', 'SPA', 'ReactJs', 'github', 'ruby', 'Bootstrap',
    ],
    linkTolive: 'https://mathmagician9.herokuapp.com/',
    linkTosource: 'https://github.com/AnicetFantomas/Math_Magicians',
    fullDescription: '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make some calculations and read some rendom math-related quotes.',
  },

  {
    id: 'project-5',
    Image: 'images/TvMaze.png',
    name: 'TV-maze',
    Description: 'It is a single page application named AniHamzAl based on the names of members in our group. In this application we are fetching the tvMazaAPI to get all the data and displaying it on screen, the data is in the form of movies. The users can like, comments on movies and also can put reservation for future',
    Technologies: [
      'Html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstrap',
    ],
    linkTolive: 'https://famous-lebkuchen-8dcdb2.netlify.app/',
    linkTosource: 'https://github.com/AnicetFantomas/Tv-maze',
    fullDescription: 'It is a single page application named AniHamzAl based on the names of members in our group. In this application we are fetching the tvMazaAPI to get all the data and displaying it on screen, the data is in the form of movies. The users can like, comments on movies and also can put reservation for future',
  },

  {
    id: 'project-6',
    Image: 'images/EndYourDayNfts.png',
    name: 'End your day with NFTs',
    Description: 'A web-site that is related to NFTs topic based on Javascript DOM manupilation, html5 and css3 with linters experimentations.',
    Technologies: [
      'Html', 'css', 'JavaScript', 'github', 'ruby', 'Bootstrap',
    ],
    linkTolive: 'https://precious-toffee-600fae.netlify.app',
    linkTosource: 'https://github.com/AnicetFantomas/Math_Magicians',
    fullDescription: 'A web-site that is related to NFTs topic based on Javascript DOM manupilation, html5 and css3 with linters experimentations.',
  },
];

const mainWorkSection = document.querySelector('.work-section');
const PopUpModal = document.querySelector('#portfolio-modal');

mainWorkSection.classList.add('projects');

Array.from(mainWorkSection.children).forEach((child, index) => {
  child.innerHTML = `<div class="container container1" > 
  <div class="Card1"><img src="${details[index].Image}" alt="here is an image of art printing" class="card1" />
  </div>
  <div class="p-desktop ">
      <div>
          <h2>${details[index].name}</h2>
      </div>
      <div class="lister">
          <p><strong>CANOPY</strong></p>
          <div class="point"></div>
          <P>Back End Dev</P>
          <div class="point"></div>
          <p>2015</p>
      </div>
      <p class="para001" id="para1">${details[index].Description}</p>
      <ul>
         <li class="html-btn">${details[index].Technologies[0]}<a href="#"></a></li>
          <li  class="css-btn">${details[index].Technologies[1]}<a href="#"></a></li>
        <li class="javaScript-btn">${details[index].Technologies[2]}<a href="#"></a></li>
      </ul>
      <div class="to-project"><a href="#">See Project</a></div>
  </div>
      </div>
         `;
});

Array.from(mainWorkSection.children).forEach((item, index) => {
  item.firstElementChild.lastElementChild.lastElementChild.firstElementChild.addEventListener(
    'click',
    () => {
      PopUpModal.innerHTML = `<div class="main-for-pop-up")>
      <div class="pop-up-window">
         <div class"for-heading">
          <h2>${details[index].name}</h2>
          <span class="close" id="buttonForClose">&times;</span>
         </div>
          <div class="lister">
              <p><strong>CANOPY</strong></p>
              <div class="point"></div>
              <P>Back End Dev</P>
              <div class="point"></div>
              <p>2015</p>
          </div>
          <div class="for-img"><img src="${details[index].Image}" alt=""></div>
          <div class="for-tech-para">
              <div class="for-para">
                  <p>${details[index].fullDescription}</p>
              </div>
  
              <div class="for-technologies">
                  <ul>
                      <li class="html-btn">${details[index].Technologies[0]}<a href="#"></a></li>
                      <li class="css-btn">${details[index].Technologies[1]}</li><a href="#"></a></li>
                      <li class="javaScript-btn">${details[index].Technologies[2]}<a href="#"></a></li>
                  </ul>
  
                  <ul>
                      <li class="github-btn">${details[index].Technologies[3]}<a href="#"></a></li>
                      <li class="ruby-btn ">${details[index].Technologies[4]}</li><a href="#"></a></li>
                      <li class="bootstrap-btn">${details[index].Technologies[5]}<a href="#"></a></li>
                  </ul>
                   <hr>
                  <div class="for-live">
                      <div class="see-live"><a href="${details[index].linkTolive}">See live <img src="./images/ExportIcon.svg"
                                  alt=""></a></div>
                      <div class="see-live  see-item2"><a href="${details[index].linkTosource}">See source <img class="githubBlue"
                                  src="./images/githubBlue.png" alt=""></a></div>
                  </div>
              </div>
          </div>
      </div>`;

      PopUpModal.style.display = 'block';
      const popUpClose = document.getElementsByClassName('close')[0];
      popUpClose.addEventListener('click', () => {
        PopUpModal.style.display = 'none';
      });
      window.addEventListener('click', (e) => {
        if (e.target === PopUpModal) {
          PopUpModal.style.display = 'none';
        }
      });
    },
  );
});

// User validation

const getForm = document.querySelector('#form');
const getEmail = document.querySelector('#mail');
const invalidMessage = document.querySelector('#form-Message');

getForm.addEventListener('submit', (event) => {
  if (getEmail.value !== getEmail.value.toLowerCase()) {
    event.preventDefault();
    invalidMessage.style.visibility = 'visible';
    invalidMessage.style.transition = '0.5s ease';
    setTimeout(() => {
      invalidMessage.style.visibility = 'hidden';
    }, 5000);
  } else {
    invalidMessage.style.visibility = 'hidden';
  }
});