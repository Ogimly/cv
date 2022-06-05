window.onload = () => {
  const burger = document.getElementById('burger');
  burger.addEventListener('click', () => {
    burger.classList.toggle('burger_open');
  });

  const linkArray = document.querySelectorAll('.nav__item');
  linkArray.forEach((el) => {
    el.addEventListener('click', () => {
      burger.classList.remove('burger_open');
    });
  });
};
