//-----------DATOS-----------------
let click = 0;
let preguntaActual= 0;


let questions = [
    {question: "¿En que país fue creado el videojuego Tetris?", 
    answers: ["Estados Unidos", "Reino Unido", "España", "Rusia"],
    expected: 3
    },
    {question: "¿Cual fue la primera consola en el espacio?" , 
    answers: ["PS1", "Game Boy", "Game Boy Advance", "N64"],
    expected: 1
    },
    {question: "¿Cual fue el videojuego que tardo mas en desarrollarese?", 
    answers: ["GTA5", "Far Cry 5", "Duke Nukem Forever", "Red Dead Redemption"],
    expected: 2
    },
    {question: "¿En el primer videojuego de Mario (Donkey Kong), cual fue el nombre original de Mario?", 
    answers: ["The Plumber", "Jump Man", "The Italian Superman", "Mario Rossi"],
    expected: 1
    },
    {question: "¿Originalmente Assasin's Creed iba a ser un spinoff de que videojuego?", 
    answers: ["Prince of Persia", "Zelda", "Metal Gear", "Tomb Raider"],
    expected: 0
    }
]
//-----------FUNCIONES--------------
// Pintar Preguntas
function paint (preguntaPintar) {
    
    borrar();
    let cuestionario = document.querySelector("#onBoard");
    let form = document.createElement("form");
    form.id = "formulario";
    let pregunta = document.createElement("h2");
    form.appendChild(pregunta);
    cuestionario.appendChild(form);

    pregunta.innerText = preguntaPintar.question;
    for (let i = 0; i < preguntaPintar.answers.length; i++ ) {
        
        let labelRespuesta = document.createElement("label");
        labelRespuesta.addEventListener("click", seleccion);
        let inputRespuesta = document.createElement("input");
        inputRespuesta.type = "radio";
        inputRespuesta.name = "respuesta";
        inputRespuesta.id = `respuesta_${i}`;
        labelRespuesta.htmlFor = inputRespuesta.id;

        labelRespuesta.innerText = preguntaPintar.answers[i];
        inputRespuesta.value = i;

        form.appendChild(labelRespuesta);
        form.appendChild(inputRespuesta);
        //-------------AQUI PARA PAG RESULTADO?
    
    }
            //Boton Next
            let buttonNext = document.createElement("button");
            buttonNext.addEventListener ("click", () => pasarSiguiente(questions));
            buttonNext.id = "botonSiguiente";
            buttonNext.innerText = "Siguiente";
            cuestionario.appendChild(buttonNext);
            //Boton Anterior
            let buttonPrevious = document.createElement("button");
            buttonPrevious.addEventListener ("click", () => pasarAnterior(questions));
            buttonPrevious.id = "botonAnterior";
            buttonPrevious.innerText = "Anterior";
            cuestionario.appendChild(buttonPrevious);
        
}

paint(questions[preguntaActual]);


//Seleccion de pregunta
function seleccion (event) {

    let respuesta = event.target;
    console.log(respuesta);
    let respuestaSeleccionada = document.querySelector(`#${respuesta.htmlFor}`).value;
    console.log(respuestaSeleccionada);
    pasarSiguiente(questions);
    if (respuestaSeleccionada = questions[preguntaActual].expected) {
        respuesta.style.color = "green";
        aciertos++;
    }

    //Mostrar el resultado en pagina resultado
    //document.getElementById("results").innerHTML = `${aciertos} out of ${questions.length}`
}

// Borrar formulario
function borrar () {
    let form = document.querySelector("#formulario");
    let buttonNext = document.querySelector("#botonSiguiente");
    let buttonPrevious = document.querySelector("#botonAnterior")
    if (form, buttonNext, buttonPrevious) {
        form.remove();
        buttonNext.remove();
        buttonPrevious.remove();
    }
}

function pasarSiguiente (preguntas) {
 if (preguntaActual < preguntas.length -1) {
    preguntaActual++;
    //setTimeout(function() {pintar(preguntas[preguntaActual])}, 2000)
    paint (preguntas[preguntaActual]);
    console.log(preguntaActual)

    
   
 }
 else {
     borrar();
                  //Results
                    alert(`${aciertos} out of ${questions.length}`)
 }

 
}

//Funcion para Boton anterior
function pasarAnterior (preguntas){
    if (preguntaActual < preguntas.length) {
        preguntaActual--;
        //setTimeout(function() {pintar(preguntas[preguntaActual])}, 2000)
        paint (preguntas[preguntaActual]);
     }
     else {
         borrar();
     }
}



let aciertos = 0;
let fallos = questions.length - aciertos;

