import cipher from './cipher.js';
//console.log(cipher);//
document.getElementById("BotonCifrar").addEventListener("click", function(){
   // Esta funcion realiza la asignacion de las variables  text y offset 
   //y que de un mensaje si el campo texto  esta en blanco.
    let text = document.getElementById("string").value;
    let offSet =Number.parseInt(document.getElementById("offset").value);
    if(text===''){
      alert('Aún no haz ingresado un Mensaje a Cifrar');
      throw new TypeError('Se han introducido valores invalidos');
    }
    // Esta funcion llama a cipher.encode le da los valores que necesita
    // y asigna al ID MensajeCifrado el resultado//
    else{
    let codedText= cipher.encode(offSet,text);
    let finalText= document.getElementById("MensajeCifrado");
    finalText.value=codedText
    }
  }, true);
  /*document.getElementById("BotonDeCifrar").addEventListener("click", function(){
    let text2 = document.getElementById("string2").value;
    let offSet2 =Number.parseInt(document.getElementById("offset2").value);//Number.parseInt() pasa offSet2 automaticamente a numero 
    if(text2===''){
      alert('Aún no haz ingresado un Mensaje a Decifrar')
    }
    else{
    let decodedText = cipher.decode(offSet2,text2);
    let finalText= document.getElementById("MensajeDeCifrado")
    finalText.value=decodedText
    }
   }, true);*/ 