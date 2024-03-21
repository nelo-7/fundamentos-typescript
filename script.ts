
const activar: boolean = true;

if (activar) {
  console.log('---------- Variables ----------');
  let dato: number = 20;
  let dato_2: number = 50;
  let nombre: string = 'Nelo iver';
  console.log(`La suma de los valores de las variables ${dato} + ${dato_2}`);

  let id: number = 20;
  console.log('id: ', id);

  console.log('---------- Arrays ----------');

  const datos: string[] = ['Nelo', 'Samuel'];
  console.log(datos[0]);
  const datos_2: any[] = ['Nelo', 'Samuel', true, 5];
  console.log('datos_2: ', datos_2[3]);

  const datos_3: [string, string, boolean, number] = ['Nelo', 'Samuel', true, 5];
  console.log('datos_3: ', datos_3);

  let employee: [number, string][]
  employee =[
    [20, 'nelo'],
    [335, 'juan'],
  ]
  console.log('employee: ', employee);

  let palabras: string | number
  palabras = 'Presentacion desde cero de typescript'
  // palabras = 250
  console.log('palabras: ', palabras);
  // console.log('palabras: ', palabras);

  console.log('--- Objetos ---');

  enum personas {
    jun = 1,
    Hernesto,
    piter
  }

  console.log(personas);
  console.log(personas.Hernesto);

   enum personasString {
    jun = 'Juan',
    Hernesto= 'hernesto',
    piter= 'piter'
  }

  console.log(personasString.Hernesto);

  const hijo = {
    edad: 8,
    gusto: 'helado',
    colegio: 'maroscal de zepita'
  }
  console.log('hijo: ', hijo.edad);


  const datosVarios: {
    id:number,
    edad: number,
    peso: string,
  } = {
    id: 2,
    edad: 25,
    peso: 'Kilos'
  }

  console.log(datosVarios.peso);

  type Usuarios = {
    primerNombre: string,
    edad: number
  }


  let user: Usuarios = {
    primerNombre: 'Samuelito mi pequeño',
    edad: 20,
  }

  console.log(user.primerNombre);





  console.log('--------- Funciones typescript -------------');
  function suma(valor_a: number, valor_b: number ):number{
    return valor_a + valor_b
  }
  console.log(suma(10, 20));

  function operacion(valor_a: number, valor_b: number ){
    return `La suma de los valores ${valor_a} y ${valor_b} es: ${valor_a + valor_b}`
  }
  console.log('operacion(): ', operacion(60, 10));

  const prueba = (saludo: string= 'Bienvenido') =>{
    return saludo;
  }

  let resp = prueba();
  console.log(resp);

  console.log('------- Clases typescript -------');
  class Rectangulo {
    ancho: number;
    alto: number;
    constructor(ancho: number, alto: number) {
      this.ancho = ancho
      this.alto = alto;
    }

    // Template
    area (){
      return this.ancho * this.alto
    }
  }
  // instanciacion de la clase Rectangulo
  let r = new Rectangulo(10, 30);
  r.area();
  console.log('r: ', r.area());

  console.log('------- Fin Clases -------');
  console.log('------- Interfaces typescript -------');
  
  console.log('------- Fin typescript -------');

  // type asesrtion

  let apellido : any = 'Oscar'
  apellido = 50
  console.log('apellido: ', apellido);

  let body = document.querySelector('body') as HTMLBodyElement;
  body.style.backgroundColor = 'orange';





  const input = document.querySelector('#input') as HTMLInputElement
  const boton = document.querySelector('#button') as HTMLButtonElement
  const contenedor_datos = document.querySelector('#contenedor_datos') as HTMLElement

  let valorDeInput: string = input.value
  boton.addEventListener ('click', () =>{
    if (valorDeInput) {
      let valorDeInput: string = input.value
      console.log('valorDeInput: ', valorDeInput);
      contenedor_datos.innerHTML = `<span>${valorDeInput}</span>`
      valorDeInput = input.value = ''
      // valorDeInput + input.focus()
      valorDeInput + `${input.focus()}` 
    }
  })

}


console.log(' ------- Practicas ----------' );


// const nombre = prompt('Escribe Tu nombre');
// const saludo = alert(`Hola ${nombre} eres bien venido`);
// let edad = prompt(`ingrasa tu edad`);

// if(edad){
//   console.log(`tu edad es ${edad}`);
// } else {
//   console.log(edad);
// } 

console.log(' ------- Operadores logicos (datos primitivos) ----------' );
let logico:boolean = false;
console.log('logico: ', logico);
// por inferencia al tratarce de boleanos no es necesario pasarle el tipo de dato, dependiendo el caso
let numero = 60;
console.log('numero: ', numero);
let nulo: null = null;
console.log('nulo: ', nulo);
