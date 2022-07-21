import cipher from './cipher.js';

console.log(cipher);
document.getElementById("BotonDeCifrar").addEventListener("click", function(){
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
   }, true); 