//Recuperar boton
const button = document.querySelector('button') 

//al hacer click en el boton tenemos que ejecutar una acción

button.addEventListener('click',function(){
    //recuperar la id del atributo del HTML
    const id = button.getAttribute('data-id')

    //llar a un servicio para actualizar si me gusta
    //toggleLike(id)

    if(button.classList.contains('liked')){
        button.classList.remover('liked')
        button.innerText = 'Me gusta'
    }else{
        button.classList.add('liked')
        button.innerText = 'Quitar me gusta'
    }
})