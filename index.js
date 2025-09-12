const bodyStyle = getComputedStyle(document.body);
const bgImage = bodyStyle.backgroundImage;

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function responsiveImage () {
    const bodyStyle = getComputedStyle(document.body);
    const bgImage = bodyStyle.backgroundImage;
    console.log(bgImage);

    if (window.width < 768) {

    }
}

const debouncedResize = debounce(onResize, 200);

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    box.style.backgroundColor = 'lightblue';
  } else {
    box.style.backgroundColor = 'pink';
  }
});
