var btnActive = document.querySelector('btnActive');
var section = document.querySelector('section');
var activarSeccion = function (e) {
    var elTarget = e.target;
    if (elTarget.matches(".btnActive")) {
        section.classList.toggle('js--active');
    }
};
document.addEventListener('click', activarSeccion);
