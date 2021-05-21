//creamos una constante llamada hamburguer, que sera igual osea tomara  nuestra clase amburger que es nuestro boton menu
const hamburger = document.querySelector('.hamburguer');
//creamos otra constante que seran nuestros enlaces de navegacion
const menu = document.querySelector('.menu-navegacion');
//vamos a crear un evento a nuestro elemento hamburguer osea nuestro menu que va hacer de tipo click
//lo que se va a ejecutar sera esa funcion que cuando le demos click al menu se despliejen nuestra navegacion
hamburger.addEventListener('click', () => {
    //en tonces le decimos con .classList que agrege una clase
    // y con toggle le decimos que quite o ponga esa clase, que la clase que le agregamos es spread
    //esa clase spread en css agregamos la funcion de que oculte el menu de navegacion
    //con esto hacemos que aparesca el menu de navegacion o que lo quite con un solo click
    //quitando la clase y poniendola cuando le demos click
    menu.classList.toggle("spread")


})

//
//con este codigo de abajo hacemos que cuando le demos click a nuestro menu nos igual haga lo del codigo de arrriga desprender neustro menu de navegacion
//pero que tambuen si le damos click afuera de la pagina oculte nuestra navegacion 
//



// con el windows y la e que pusimos window.addEventListener('click', e => {
//indicamos a que cosa le damos click en la pagina
window.addEventListener('click', e => {
    //con el if le decimos que si nuestra constante menu. que es igual a nuestro menu de navegacion
    //menu.claslist tiene el elemento spread que es el que nos oculta nuestra navegacion
    // que nos ejecute este codijo     menu.classList.toggle("spread")
    if (menu.classList.contains('spread') &&
        //y si e que es nuestro elemento que cuando le demos click  algo de nuestra pagina nos diga que es
        // le decimos que si e es diferente a nenu y a nuestro icono hamburgesa
        e.target != menu &&
        e.target != hamburger) {
        //que nos ejecute este codigo, que lo que hara es ocultar o aparecer nuestra navegacion en forma de toogle
        menu.classList.toggle("spread")
    }
})