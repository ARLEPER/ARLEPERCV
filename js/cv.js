
document.getElementById('boton').onclick = function (){
    console.log("Capturamos el elemento Click");
    document.getElementById("demo").innerHTML = "Este es mi CV"
}



document.getElementById('boton').addEventListener('click', function(){
    console.log("Hola Mundo desde Argentina");
    document.getElementById("demo").innerHTML = "Este es mi cv"
})

document.getElementById('boton_color').addEventListener('click' , function(){
    document.body.style.backgroundColor = '#BAF2BB';
    });

document.getElementById('boton_default').addEventListener('click' , function(){
    document.body.style.backgroundColor = '#C6C7C4';
    });





 