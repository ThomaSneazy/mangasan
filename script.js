console.log("hello mangasan");

let swiper;

function initSwiper() {
  if (window.innerWidth >= 768) {
    if (swiper === undefined) {
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        centeredSlide: true,
        loop: true,
        speed: 1500,
        grabCursor: true,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        parallax: true,
      });
    }
  } else {
    if (swiper !== undefined) {
      swiper.destroy(true, true);
      swiper = undefined;
    }
  }
}

initSwiper();

window.addEventListener("resize", initSwiper);

document.addEventListener("DOMContentLoaded", () => {
  const btnSoundContainers = document.querySelectorAll(".btn_sound-container");
  const btnStopMusic = document.querySelector(".btn_lottie-stop-music");

  const audio = new Audio(
    "https://www.dropbox.com/scl/fi/1ykyp5z9gops8ezry1fsx/peaceful-garden-healing-light-piano-for-meditation-zen-landscapes-112199.mp3?rlkey=gdw9pmru9nvlyel9wlmiq9kf7&dl=1",
  );
  audio.volume = 0.1;
  audio.loop = true;

  const playSound = () => {
    setTimeout(() => {
      audio.play();
    }, 2000);
  };

  btnSoundContainers.forEach((btnSoundContainer) => {
    btnSoundContainer.addEventListener("click", playSound);
  });

  btnStopMusic.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
});
