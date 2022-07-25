const cipher = {
    encode: function(offSet, text){
    if(text === 'null' || text.length === 0 || text === 0){
        throw new TypeError();
        //throw new TypeError('Se han introducido valores invalidos');
    }
    let array=[];//me guardara el nuevo mensaje//
    for  (let i=0; i<text.length; i++){
        //Obtiene Codigo ASCII de cada caracter 
        let ascii = text.charCodeAt(i); // video michelle//
        if((ascii>64)&&(ascii<91)){//itera en el rango de 65 al 90 codigo ascii
        //Obtiene numero de la letra a codificar
        let asciiOffSet = (ascii- 65 + offSet) % 26 + 65;
        //Cambio de Codigo ASCII a Letra Cifrada
        let codedText = String.fromCharCode(asciiOffSet);
        array+=codedText // este me va arma el mensaje codificado  
        }
     else if((ascii>96)&&(ascii<123)){
        //Minusculas, mejorar esta parte//
         // obtiene numero de la letra codificada
         let asciiOffSet = (ascii- 97 + offSet) % 26 + 97;
         // console.log(asciiOffSet);
         //Cambio de numero ascii a letra
         let codedText = String.fromCharCode(asciiOffSet);
         // console.log(codedText);
         array+=codedText  
     }
     else{
        array+= String.fromCharCode(ascii);
     }
    }
    return array
},
decode: function(offSet2,text2){
    if(text2 === 'null' || text2.length === 0 || text2 === 0){
        throw new TypeError ();
    }
    let array = [];
    for  (let i=0; i<text2.length; i++){
     let ascii = text2.charCodeAt(i);
     if((ascii>64) && (ascii<91)){
      //  console.log(ascii);
       let asciiOffSet = (ascii + 65 - offSet2) % 26 + 65;//cambiar los valores
      //  console.log(asciiOffSet);
       let decodedText = String.fromCharCode(asciiOffSet);
      //  console.log(decodedText);
         array+=decodedText
     }
     else if((ascii>96)&&(ascii<123)){
      // obtiene numero de la letra codificada
      let asciiOffSet = (ascii- 122 + offSet2) % 26 + 122;
      // console.log(asciiOffSet);
      //Cambio de numero ascii a letra
      let codedText = String.fromCharCode(asciiOffSet);
      // console.log(codedText);
      array+=codedText  
  }
    else{     
        array+= String.fromCharCode(ascii);
     }
  }
   return array
}
};
export default cipher;