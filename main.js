const hamburgerButton = document.querySelector(".nav-btn");
const slider = document.querySelector(".x-nav");
const display = document.querySelector(".desktop-nav");
const listEl = document.querySelectorAll("ul li");
const body = document.querySelector("body");

hamburgerButton.addEventListener("click", (e) => {
    display.style.display = "block";
    hamburgerButton.style.display = "none";
    slider.style.display = "block";
    body.style.overflow = "hidden"
})

slider.addEventListener("click", (e) => {
    display.style.display = "none";
    hamburgerButton.style.display = "block";
    slider.style.display = "none";
    body.style.overflow = "scroll"
})


listEl.forEach(
    clickForClose => {
        clickForClose.addEventListener("click", (e) => {
            display.style.display = "none";
            hamburgerButton.style.display = "block";
            body.style.overflow = "scroll"
        })
    }
)

// //-------------------------------Work section --------------------------------------

const details = [
    {
        id: 1,
        Image: "images/img5.png",
        name: "Tonic",
        Description: "A daily selection of privately personalized roads; no accounts or sign-up required.",
        Technologies: [
            "html", "css", "javaScript", "github", "ruby", "Bootstrap"
        ],
        linkTolive: "See Project",

        fullDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eum consequatur aperiam tempore veniam asperiores a voluptas, deserunt expedita voluptatum et aspernatur sit minus eveniet distinctio recusandae minima ducimus tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit dolor architecto quod repellendus quis rem. Alias, ab ducimus unde laudantium id distinctio corporis, delectus temporibus eos dolor, nesciunt ipsa? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam doloremque, vel nihil eum veritatis repellat saepe culpa possimus totam explicabo expedita porro illum, nulla rem quisquam. Voluptatum, impedit laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque nobis ipsam facilis. Unde ab quae eaque est harum praesentium, a suscipit? Perspiciatis nam illo maiores accusamus eligendi illum adipisci!"
    },

    {
        id: 2,
        Image: "images/img4.png",
        name: "Multi-Post Stories",
        Description: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
        Technologies: [
            "html", "css", "javaScript", "github", "ruby", "Bootstrap"
        ],
        linkTolive: "See Project",
        fullDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eum consequatur aperiam tempore veniam asperiores a voluptas, deserunt expedita voluptatum et aspernatur sit minus eveniet distinctio recusandae minima ducimus tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit dolor architecto quod repellendus quis rem. Alias, ab ducimus unde laudantium id distinctio corporis, delectus temporibus eos dolor, nesciunt ipsa? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam doloremque, vel nihil eum veritatis repellat saepe culpa possimus totam explicabo expedita porro illum, nulla rem quisquam. Voluptatum, impedit laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque nobis ipsam facilis. Unde ab quae eaque est harum praesentium, a suscipit? Perspiciatis nam illo maiores accusamus eligendi illum adipisci!"
    },

    {
        id: 3,
        Image: "images/img1.png",
        name: "Facebook 360",
        Description: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
        Technologies: [
            "html", "css", "javaScript", "github", "ruby", "Bootstrap"
        ],
        linkTolive: "See Project",
        fullDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eum consequatur aperiam tempore veniam asperiores a voluptas, deserunt expedita voluptatum et aspernatur sit minus eveniet distinctio recusandae minima ducimus tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit dolor architecto quod repellendus quis rem. Alias, ab ducimus unde laudantium id distinctio corporis, delectus temporibus eos dolor, nesciunt ipsa? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam doloremque, vel nihil eum veritatis repellat saepe culpa possimus totam explicabo expedita porro illum, nulla rem quisquam. Voluptatum, impedit laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque nobis ipsam facilis. Unde ab quae eaque est harum praesentium, a suscipit? Perspiciatis nam illo maiores accusamus eligendi illum adipisci!"
    },

    {
        id: 4,
        Image: "images/im2.png",
        name: "Multi-Post Stories",
        Description: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
        Technologies: [
            "html", "css", "javaScript", "github", "ruby", "Bootstrap"
        ],
        linkTolive: "See Project",
        fullDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eum consequatur aperiam tempore veniam asperiores a voluptas, deserunt expedita voluptatum et aspernatur sit minus eveniet distinctio recusandae minima ducimus tenetur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, reprehenderit dolor architecto quod repellendus quis rem. Alias, ab ducimus unde laudantium id distinctio corporis, delectus temporibus eos dolor, nesciunt ipsa? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni aperiam doloremque, vel nihil eum veritatis repellat saepe culpa possimus totam explicabo expedita porro illum, nulla rem quisquam. Voluptatum, impedit laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque nobis ipsam facilis. Unde ab quae eaque est harum praesentium, a suscipit? Perspiciatis nam illo maiores accusamus eligendi illum adipisci!"
    },
]

// //-----------Cards-----------------



details.forEach((card) => {


    document.querySelector(".work-section").innerHTML += ` 
     <div class="container container1" id="${card.id}" > 
     <div class="Card1"><img src="${card.Image}" alt="here is an image of art printing" class="card1" />
     </div>
     <div class="p-desktop ">
         <div>
             <h2>${card.name}</h2>
         </div>
         <div class="lister">
             <p><strong>CANOPY</strong></p>
             <div class="point"></div>
             <P>Back End Dev</P>
             <div class="point"></div>
             <p>2015</p>
         </div>

         <p class="para001" id="para1">${card.Description}</p>
         <ul>
            <li class="html-btn">${card.Technologies[0]}<a href="#"></a></li>
             <li  class="css-btn">${card.Technologies[1]}<a href="#"></a></li>
           <li class="javaScript-btn">${card.Technologies[2]}<a href="#"></a></li>
         </ul>
         <div class="to-project"><a href="#">${card.linkTolive}</a></div>
         
        <div class="main-for-pop-up")>
         <div class="pop-up-window">
             <div class="for-icon"><img src="./images/exitIcon.png" alt=""></div>
             <h2>${card.name}</h2>
             <div class="lister">
                 <p><strong>CANOPY</strong></p>
                 <div class="point"></div>
                 <P>Back End Dev</P>
                 <div class="point"></div>
                 <p>2015</p>
             </div>
             <div class="for-img"><img src="./images/img6.png" alt=""></div>
             <div class="for-tech-para">
                 <div class="for-para">
                     <p>${card.fullDescription}</p>
                 </div>
     
                 <div class="for-technologies">
                     <ul>
                         <li class="html-btn">${card.Technologies[0]}<a href="#"></a></li>
                         <li class="css-btn">${card.Technologies[1]}</li><a href="#"></a></li>
                         <li class="javaScript-btn">${card.Technologies[2]}<a href="#"></a></li>
                     </ul>
     
                     <ul>
                         <li class="github-btn">${card.Technologies[3]}<a href="#"></a></li>
                         <li class="ruby-btn ">${card.Technologies[4]}</li><a href="#"></a></li>
                         <li class="bootstrap-btn">${card.Technologies[5]}<a href="#"></a></li>
                     </ul>
     
                     <div class="for-live">
                         <div class="see-live"><a href="#">See live <img src="./images/ExportIcon.svg"
                                     alt=""></a></div>
                         <div class="see-live  see-item2"><a href="#">See source <img class="githubBlue"
                                     src="./images/githubBlue.png" alt=""></a></div>
                     </div>
                 </div>
             </div>
         </div>
     </div>

         </div>
            `
            const getSeeBtn = document.querySelectorAll(".to-project");
            const getCloseBtn = document.querySelectorAll(".for-icon");

            for (let i = 0; i < getSeeBtn.length; i++) {
                getSeeBtn[i].addEventListener("click", (e) => {
                    document.querySelector(".main-for-pop-up").style.display = "block";
                    document.querySelector(".main-for-pop-up").style.overflow = "scroll";
                    body.style.overflow = "hidden";
                })
            }

            for (let i = 0; i < getCloseBtn.length; i++) {
                getCloseBtn[i].addEventListener("click", (e) => {
                    document.querySelector(".main-for-pop-up").style.display = "none";
                    body.style.overflow = "scroll";
                })
            }
})

