//MENU
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Закрытие меню при клике вне его
window.onclick = function(event) {
  if (!event.target.matches('.drop_down svg')) {
      const menu = document.getElementById('menu');
      if (menu.style.display === 'block') {
          menu.style.display = 'none';
      }
  }
}
// Header 
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});
//BACK TO TOP
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

// СНЕГ
document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.querySelector(".snow-container");

  const particlesPerThousandPixels = 0.1;
  const fallSpeed = 1.25;
  const pauseWhenNotActive = true;
  const maxSnowflakes = 200;
  const snowflakes = [];

  let snowflakeInterval;
  let isTabActive = true;

  function resetSnowflake(snowflake) {
      const size = Math.random() * 5 + 1;
      const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
      const viewportHeight = window.innerHeight;

      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
      snowflake.style.top = `-${size}px`;

      const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
      snowflake.style.animationDuration = `${animationDuration}s`;
      snowflake.style.animationTimingFunction = "linear";
      snowflake.style.animationName =
          Math.random() < 0.5 ? "fall" : "diagonal-fall";

      setTimeout(() => {
          if (parseInt(snowflake.style.top, 10) < viewportHeight) {
              resetSnowflake(snowflake);
          } else {
              snowflake.remove(); // Remove when it goes off the bottom edge
          }
      }, animationDuration * 1000);
  }

  function createSnowflake() {
      if (snowflakes.length < maxSnowflakes) {
          const snowflake = document.createElement("div");
          snowflake.classList.add("snowflake");
          snowflakes.push(snowflake);
          snowContainer.appendChild(snowflake);
          resetSnowflake(snowflake);
      }
  }

  function generateSnowflakes() {
      const numberOfParticles =
          Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
          particlesPerThousandPixels;
      const interval = 5000 / numberOfParticles;

      clearInterval(snowflakeInterval);
      snowflakeInterval = setInterval(() => {
          if (isTabActive && snowflakes.length < maxSnowflakes) {
              requestAnimationFrame(createSnowflake);
          }
      }, interval);
  }

  function handleVisibilityChange() {
      if (!pauseWhenNotActive) return;

      isTabActive = !document.hidden;
      if (isTabActive) {
          generateSnowflakes();
      } else {
          clearInterval(snowflakeInterval);
      }
  }

  generateSnowflakes();

  window.addEventListener("resize", () => {
      clearInterval(snowflakeInterval);
      setTimeout(generateSnowflakes, 1000);
  });

  document.addEventListener("visibilitychange", handleVisibilityChange);
});

$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide(){
    $("#popup1").hide();
}