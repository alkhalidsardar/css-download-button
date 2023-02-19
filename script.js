let button = document.querySelector(".button");

const handler = () => {
    button.classList.toggle("progress");
    button.textContent = "";
    setTimeout(() =>{
      button.classList.toggle("done");
    }, 3500);
    button.removeEventListener("click", handler);
}

button.addEventListener("click", handler);
