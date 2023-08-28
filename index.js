const numeros = [1, 2, 3, 4, 5, 6, 7];
const ul = document.querySelector("ul");

let ultimo = numeros[numeros.length -1];
console.log(ultimo)

console.log({numeros})

let nuevoArray = numeros.push("Fulano");
console.log(nuevoArray);

let borrado = numeros.pop("Fulano");
console.log({borrado, numeros});

let posicion = numeros.indexOf(4);
console.log({posicion, numeros});

const saludo = function(){
    console.log("hola mundo");
}

saludo();
saludo();

const saludar = ()=>{
    console.log("hola mundo");
}

saludar();

// clases

let cadena = "hola"
let cadena2 = new String ("hola");

class Animal{
    constructor(especie, nombre, tamanio){
        this.especie = especie;
        this.nombre = nombre;
        this.tamanio = tamanio;
    }

    get verInfo(){
        return `El animal es un ${this.especie}, y se llama ${this.nombre}`;
    }

    /*set modificacion(nuevoTamanio){
        this.tamanio = nuevoTamanio;
    }*/
}

let perro = new Animal("canino", "perro", "grande");
let gato = new Animal("felino", "kitty", "mediano");

console.log(perro.verInfo)

perro.modificacion="chico";

console.log({perro})

class Mamiferos extends Animal{
    constructor(nombre, especie, habitat, tipoDeRespiracion){
        super(nombre, especie);
        this.habitat = habitat;
        this.tipoDeRespiracion = tipoDeRespiracion;
    }

    get mamiferoInfo(){
        return `El animal ${this.nombre} tiene un hábitat ${this.habitat}, y su respiración es ${this.tipoDeRespiracion}`;
    }
}

let mamifero = new Mamiferos("canino", "perro", "terrestre", "pulmonar");
console.log(mamifero.mamiferoInfo);


// for forEach

for(i=0; i<numeros.length; i++){

    const li = document.createElement("li");
    li.textContent = numeros[i];
    ul.appendChild(li);
}

numeros.forEach((num)=>{

    const li = document.createElement("li");
    li.textContent = num;
    ul.appendChild(li);

})

// Map

const arrayMultiplicadoDiez = numeros.map(multi => multi*10);
console.log(arrayMultiplicadoDiez);

const arrayMultiplicadoCien = numeros.map((multiCien) => {

    let resultado = multiCien*100;
    const li = document.createElement("li");
    li.textContent = resultado;
    //li.textContent = multiCien*100;
    ul.appendChild(li);

    return resultado;
});

