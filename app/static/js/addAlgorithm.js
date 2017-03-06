/*Script para que al añadir un algoritmo, se muestre la "ventana" de configuración para cada algoritmo
Lo que se controla es que al dar click, se ponen los campos inputs en blanco, y se ocultan el input del 
algoritmo introducido y su botón + que aparece. Además, se muestra el div con la configuración del algoritmo.
Y una vez añadida la configuración del algoritmo, se desaparece la ventana de configuración del mismo.*/

$('#insertAlgorithm').click(() => {
  console.log("di click...");
  let nAlgorithms = document.getElementById('nAlgorithms').value;
  console.log(nAlgorithms);
  $('#nAlgorithms').css('display','none');
  $('#insertAlgorithm').css('display','none');
  let i=1;
  while(i <= nAlgorithms){
    let inputAlgorithms = 
    `<div class="row" >
       <div class="input-field  col s12">
         <input type="text" name="nalgorithm${i}" placeholder="Add Algorithm ${i}" id="algorithm${i}">
         <button class="btn-floating waves-effect waves-light grey darken-3" type="button" name="action" id="btnAlgorithm${i}" value=introduceAlgoritmo${i}" onclick="insertAlgorithms(${i})">
          <i class="material-icons right">add</i>
       </div>
    </div>`
    $("#addAlgorithms").append(inputAlgorithms);

    i+=1;
  }
  i=1;
})

/*Funcion que obtiene el nombre del algoritmo introducido por el usuario,elimina los valores de los inputs
de configuracion de los algoritmos y muestra el div de configuracion del algoritmo*/
insertAlgorithms= (i) => {
  let algorithmName = document.getElementById(`algorithm${i}`).value;
  //funcion de jquery para comprobar que se tiene un array de botones.  
  $(`#btnAlgorithm${i}`).each(() => {
    //Al darle al boton del algoritmo a configurar, se ponen los campos de texto escritos anteriormente vacíos
    $('#algoritmo').val('');
    $('#nVariablesAlgorithm').val('');

    
    //console.log(algorithmName);
    //console.log('le diii y soy el boton '+ i);
    //cambiar a remove para ver si no borra datos..
    $(`#btnAlgorithm${i}`).css("display","none");
    $(`#algorithm${i}`).css("display","none");
    $('#algorithmConfiguration').show();
  })
  
  console.log(`soy el consolelog del final: ${algorithmName}`);
  return (algorithmName)
}


/*Funcion que al darle click al botón de añadir el algoritmo con la configuración introducida por el usuario,
oculta todos los campos y muestra un alert diciendo que el algoritmo ha sido introducido*/

$("#introduceAlgoritmo").click(() =>{
  //$('#introduceAlgoritmo').prop('disabled');
  //$("#ficheroPruebas").css("display", "inherit");
  //let algoritmoIntroducido = configureAlgorithm();
  //$("#algoritmo").val('')
  //$("#introducealgoritmo").css("display", "none");
  //algoritmos.push(algoritmoIntroducido)
  //console.log(algoritmoIntroducido)
  //console.log('introducido el algoritmo...')
  alert('algoritmo introducido');
  //$('#introduceAlgoritmo').hide();
  //$('#ficheroPruebas').hide();

  $('#algorithmConfiguration').hide();
  //return(algoritmoIntroducido);
}); 