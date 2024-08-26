
const textArea= document.querySelector(".text-area");
const mensagem= document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function bntencriptar()  {
  const  textoencriptado = encriptar(textArea.value);
  mensagem.value = textoencriptado;
  textArea.value ="";
}

function encriptar(stringencriptado) {

let matrizCodigo = [["e" , "enter"] , ["i"  , "imes" ] , ["a"  ,"ai"] , ["o"  , "ober"] , ["u"  , "ufat"]];
stringencriptado = stringencriptado.toLowerCase();
console.table(matrizCodigo);

for(let i = 0; i < matrizCodigo.length; i ++) {
   if(stringencriptado.includes (matrizCodigo [i][0])) {
       stringencriptado = stringencriptado.replaceAll(matrizCodigo [i] [0], matrizCodigo [i] [1]);
     }
   }

   return stringencriptado;

  }

  
function bntdesencriptar()  {
  const  textodesencriptado = stringdesencriptado(textArea.value);
  mensagem.value = textodesencriptado;
  textArea.value ="";
}

function stringdesencriptado(stringdesencriptado) {

let matrizCodigo = [["e" , "enter"] , ["i"  , "imes" ] , ["a"  ,"ai"] , ["o"  , "ober"] , ["u"  , "ufat"]];
stringdesencriptado = stringdesencriptado.toLowerCase();
console.table(matrizCodigo);

for(let i = 0; i < matrizCodigo.length; i ++) {
   if(stringdesencriptado.includes (matrizCodigo [i][1])) {
       stringdesencriptado = stringdesencriptado.replaceAll(matrizCodigo [i] [1], matrizCodigo [i] [0]);
     }
   }

   return stringdesencriptado;

  }

function bntcopiar() {
  const  textocop =  Document.getElementorById(input-texto);

  textocop.select();
  document.execCommand('copy');
  alert("texto Copiado");
}