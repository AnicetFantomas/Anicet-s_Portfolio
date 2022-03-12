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
    Image: 'images/img5.png',
    name: 'Tonic',
    Description: 'A daily selection of privately personalized roads; no accounts or sign-up required.',
    Technologies: [
      'html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap',
    ],
    linkTolive: 'https://anicetfantomas.github.io/setup-and-mobile-version-skeleton/',
    linkTosource: 'https://github.com/AnicetFantomas/setup-and-mobile-version-skeleton/settings',

    fullDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eum consequatur aperiam tempore veniam asperiores a voluptas, deserunt expedita voluptatum et aspernatur sit minus eveniet distinctio recusandae minima ducimus tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit dolor architecto quod repellendus quis rem. Alias, ab ducimus unde laudantium id distinctio corporis, delectus temporibus eos dolor, nesciunt ipsa? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam doloremque, vel nihil eum veritatis repellat saepe culpa possimus totam explicabo expedita porro illum, nulla rem quisquam. Voluptatum, impedit laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque nobis ipsam facilis. Unde ab quae eaque est harum praesentium, a suscipit? Perspiciatis nam illo maiores accusamus eligendi illum adipisci!',
  },

  {
    id: 'project-2',
    Image: 'images/img4.png',
    name: 'Multi-Post Stories',
    Description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    Technologies: [
      'html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap',
    ],
    linkTolive: 'https://anicetfantomas.github.io/setup-and-mobile-version-skeleton/',
    linkTosource: 'https://github.com/AnicetFantomas/setup-and-mobile-version-skeleton/settings',
    fullDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eum consequatur aperiam tempore veniam asperiores a voluptas, deserunt expedita voluptatum et aspernatur sit minus eveniet distinctio recusandae minima ducimus tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit dolor architecto quod repellendus quis rem. Alias, ab ducimus unde laudantium id distinctio corporis, delectus temporibus eos dolor, nesciunt ipsa? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam doloremque, vel nihil eum veritatis repellat saepe culpa possimus totam explicabo expedita porro illum, nulla rem quisquam. Voluptatum, impedit laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque nobis ipsam facilis. Unde ab quae eaque est harum praesentium, a suscipit? Perspiciatis nam illo maiores accusamus eligendi illum adipisci!',
  },

  {
    id: 'project-3',
    Image: 'images/img1.png',
    name: 'Facebook 360',
    Description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    Technologies: [
      'html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap',
    ],
    linkTolive: 'https://anicetfantomas.github.io/setup-and-mobile-version-skeleton/',
    linkTosource: 'https://github.com/AnicetFantomas/setup-and-mobile-version-skeleton/settings',
    fullDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eum consequatur aperiam tempore veniam asperiores a voluptas, deserunt expedita voluptatum et aspernatur sit minus eveniet distinctio recusandae minima ducimus tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit dolor architecto quod repellendus quis rem. Alias, ab ducimus unde laudantium id distinctio corporis, delectus temporibus eos dolor, nesciunt ipsa? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam doloremque, vel nihil eum veritatis repellat saepe culpa possimus totam explicabo expedita porro illum, nulla rem quisquam. Voluptatum, impedit laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque nobis ipsam facilis. Unde ab quae eaque est harum praesentium, a suscipit? Perspiciatis nam illo maiores accusamus eligendi illum adipisci!',
  },

  {
    id: 'project-4',
    Image: 'images/im2.png',
    name: 'Multi-Post Stories',
    Description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    Technologies: [
      'html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap',
    ],
    linkTolive: 'https://anicetfantomas.github.io/setup-and-mobile-version-skeleton/',
    linkTosource: 'https://github.com/AnicetFantomas/setup-and-mobile-version-skeleton/settings',
    fullDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eum consequatur aperiam tempore veniam asperiores a voluptas, deserunt expedita voluptatum et aspernatur sit minus eveniet distinctio recusandae minima ducimus tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit dolor architecto quod repellendus quis rem. Alias, ab ducimus unde laudantium id distinctio corporis, delectus temporibus eos dolor, nesciunt ipsa? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam doloremque, vel nihil eum veritatis repellat saepe culpa possimus totam explicabo expedita porro illum, nulla rem quisquam. Voluptatum, impedit laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque nobis ipsam facilis. Unde ab quae eaque est harum praesentium, a suscipit? Perspiciatis nam illo maiores accusamus eligendi illum adipisci!',
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