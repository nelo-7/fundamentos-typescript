const btnActive = document.querySelector('btnActive') as HTMLInputElement;
const section = document.querySelector('section') as HTMLElement;


const activarSeccion = (e: Event) => {
  const elTarget = e.target as HTMLElement
  if (elTarget.matches(".btnActive")) {
    section.classList.toggle('js--active');
  } 
};

document.addEventListener('click', activarSeccion)