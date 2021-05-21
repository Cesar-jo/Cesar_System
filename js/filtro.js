$(function() {
    //le vamos a decir que los elementos de la clase filter cuando le demos click se ejecute una funcion
    //la clase filter se alojan los botones de diseño,programacion, marketin de nuestra galeria de proyectos
    $('.filter').click(function() {
        //nos dice que al elemento que selecciones, va agregar una clase en este case es la clase active que esta
        //en el boton todos que su classe es active, cuando le de click va a lanzar todas las imagenes de nuestra galeria de trabajos
        //con sublings ssignifica hermanos, entonses cuando le demos click al boton todos que es el de active por su clase
        //va a remover a sus otros hermanos en este caso los otros botones, como diseño, programacion,marketin,etc
        //cuando se remueva nos va aparecer las imagenes de acuerdo al boton que elegimos.
        $(this).addClass('active').siblings().removeClass('active');
        //creamos una variable llamada ""valor" que  va hacer igual al elemento que seleccionamos.
        //y va a tomar el atibuto=(attr) ('data-nombre')
        let valor = $(this).attr('data-nombre');
        //creamos un if y le decimos que si if es == a todos, pues al precionar el boton todos,
        // nos lanza todas las imagenes
        if (valor == 'todos') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not('.' + valor).hide('1000');
            $('.cont-work').filter('.' + valor).show('1000');
        }
    });
});