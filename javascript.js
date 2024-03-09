let botonEncriptar = document.querySelector(".encriptar-boton");
let botonDesencriptar = document.querySelector(".desencriptar-boton");
let muneco = document.querySelector(".imagen-muneco");
let mostraEncriptado = document.querySelector(".parrafo-encriptado");
let  cajaresultado = document.querySelector(".resultado");
let textoaencriptar = document.querySelector(".caja");
let mensajeEmergente = document.querySelector(".mensajecontenedor")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick= desencriptar;

function encriptar(){
    ocultarAdelante();
    verificarMayusculas(textoaencriptar);
    let cajaTexto = recuperarTexto();
    cajaresultado.textContent = encriptarText(cajaTexto);
 
    textoBotonorigen();
}

function desencriptar(){
    ocultarAdelante();
    let cajaTexto = recuperarTexto();
    cajaresultado.textContent = desencriptarText(cajaTexto);
    textoBotonorigen();
}

function recuperarTexto(){
    let cajaTexto = document.querySelector(".caja");
    return cajaTexto.value
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    mostraEncriptado.classList.add("ocultar");
}

function encriptarText(mensaje){
    let texto = mensaje;
    let textofinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "ai"
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "enter"
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "imes"
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "ober"
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "ufat"
        }
        else{
            textofinal = textofinal + texto[i];
        }
    }

    return textofinal;
}

function desencriptarText(mensaje){
    let texto = mensaje;
    let textofinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "o"
            i = i+3
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "u"
            i = i+3;
        }
        else{
            textofinal = textofinal + texto[i];
        }
    }

    return textofinal;
}

const botonCopiar = document.querySelector(".copiar-boton");
botonCopiar.addEventListener("click", copiar = () =>{
    let contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
    limpiarcaja();
    removerResultado();
    textoBoton();

})
function limpiarcaja(){
    document.querySelector('.caja').value = '';
}

function removerResultado(){
    var resultado = document.querySelector('.resultado');
    resultado.innerHTML = ''

}

function textoBoton(){
    var boton = document.querySelector('.copiar-boton');
    boton.value = 'Texto copiado';
}
function textoBotonorigen(){
    var boton = document.querySelector('.copiar-boton');
    boton.value = 'Copiar';
}

function verificarMayusculas() {
        let textoaverificar = textoaencriptar.value;
        var comparacion = /^[A-Z]^/;
        if (!comparacion.test(textoaverificar)) {
            window.alert('Solo letras minusculas y sin acentos');
            textoaencriptar.value = "";
            removerResultado()
        } 
               
    }



