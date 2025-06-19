const menuIcon = document.getElementById('menu-icon');
const navlist = document.getElementById('navlist');

menuIcon.addEventListener('click', () => {
  navlist.classList.toggle('active');
});


const video = document.getElementById('gameVideo');


video.addEventListener('loadedmetadata', () => {
  const savedTime = localStorage.getItem('videoTime');
  if (savedTime) {
    video.currentTime = savedTime;
  }
});


video.addEventListener('timeupdate', () => {
  localStorage.setItem('videoTime', video.currentTime);
});