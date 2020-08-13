
const range = document.querySelector(".range");
const thumb = document.querySelector(".thumb");
const progressBar = document.querySelector(".progress-bar-cover");

function setthumb(range, thumb) {
  const val = range.value;

  const min = range.min || 0;
  const max =  range.max || 100;

  const offset = Number(((val - min) * 100) / (max - min));

  thumb.textContent = val;
  thumb.style.left = `${val}%`;
  progressBar.style.width = `${val}%`;
}

range.addEventListener("input", () => {
  setthumb(range, thumb);
});
setthumb(range, thumb);


// yes, 14px is a magic number
//thumb.style.left = `calc(${offset}% - 10px)`;
// thumb.style.transform = `translate(${0-val}%, -50%)`
