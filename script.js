var activar = true;
if (activar) {
    console.log('---------- Variables ----------');
    var dato = 20;
    var dato_2 = 50;
    var nombre = 'Nelo iver';
    console.log("La suma de los valores de las variables ".concat(dato, " + ").concat(dato_2));
    var id = 20;
    console.log('id: ', id);
    console.log('---------- Arrays ----------');
    var datos = ['Nelo', 'Samuel'];
    console.log(datos[0]);
    var datos_2 = ['Nelo', 'Samuel', true, 5];
    console.log('datos_2: ', datos_2[3]);
    var datos_3 = ['Nelo', 'Samuel', true, 5];
    console.log('datos_3: ', datos_3);
    var employee = void 0;
    employee = [
        [20, 'nelo'],
        [335, 'juan'],
    ];
    console.log('employee: ', employee);
    var palabras = void 0;
    palabras = 'Presentacion desde cero de typescript';
    // palabras = 250
    console.log('palabras: ', palabras);
    // console.log('palabras: ', palabras);
    console.log('--- Objetos ---');
    var personas = void 0;
    (function (personas) {
        personas[personas["jun"] = 1] = "jun";
        personas[personas["Hernesto"] = 2] = "Hernesto";
        personas[personas["piter"] = 3] = "piter";
    })(personas || (personas = {}));
    console.log(personas);
    console.log(personas.Hernesto);
    var personasString = void 0;
    (function (personasString) {
        personasString["jun"] = "Juan";
        personasString["Hernesto"] = "hernesto";
        personasString["piter"] = "piter";
    })(personasString || (personasString = {}));
    console.log(personasString.Hernesto);
    var hijo = {
        edad: 8,
        gusto: 'helado',
        colegio: 'maroscal de zepita'
    };
    console.log('hijo: ', hijo.edad);
    var datosVarios = {
        id: 2,
        edad: 25,
        peso: 'Kilos'
    };
    console.log(datosVarios.peso);
    var user = {
        primerNombre: 'Samuelito mi pequeño',
        edad: 20,
    };
    console.log(user.primerNombre);
    console.log('--------- Funciones typescript -------------');
    function suma(valor_a, valor_b) {
        return valor_a + valor_b;
    }
    console.log(suma(10, 20));
    function operacion(valor_a, valor_b) {
        return "La suma de los valores ".concat(valor_a, " y ").concat(valor_b, " es: ").concat(valor_a + valor_b);
    }
    console.log('operacion(): ', operacion(60, 10));
    var prueba = function (saludo) {
        if (saludo === void 0) { saludo = 'Bienvenido'; }
        return saludo;
    };
    var resp = prueba();
    console.log(resp);
    console.log('------- Clases typescript -------');
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(ancho, alto) {
            this.ancho = ancho;
            this.alto = alto;
        }
        // Template
        Rectangulo.prototype.area = function () {
            return this.ancho * this.alto;
        };
        return Rectangulo;
    }());
    // instanciacion de la clase Rectangulo
    var r = new Rectangulo(10, 30);
    r.area();
    console.log('r: ', r.area());
    console.log('------- Fin Clases -------');
    console.log('------- Interfaces typescript -------');
    console.log('------- Fin typescript -------');
    // type asesrtion
    var apellido = 'Oscar';
    apellido = 50;
    console.log('apellido: ', apellido);
    var body = document.querySelector('body');
    body.style.backgroundColor = 'orange';
    var input_1 = document.querySelector('#input');
    var boton = document.querySelector('#button');
    var contenedor_datos_1 = document.querySelector('#contenedor_datos');
    var valorDeInput_1 = input_1.value;
    boton.addEventListener('click', function () {
        if (valorDeInput_1) {
            var valorDeInput_2 = input_1.value;
            console.log('valorDeInput: ', valorDeInput_2);
            contenedor_datos_1.innerHTML = "<span>".concat(valorDeInput_2, "</span>");
            valorDeInput_2 = input_1.value = '';
            // valorDeInput + input.focus()
            valorDeInput_2 + "".concat(input_1.focus());
        }
    });
}
console.log(' ------- Practicas ----------');
// const nombre = prompt('Escribe Tu nombre');
// const saludo = alert(`Hola ${nombre} eres bien venido`);
// let edad = prompt(`ingrasa tu edad`);
// if(edad){
//   console.log(`tu edad es ${edad}`);
// } else {
//   console.log(edad);
// } 
console.log(' ------- Operadores logicos (datos primitivos) ----------');
var logico = false;
console.log('logico: ', logico);
// por inferencia al tratarce de boleanos no es necesario pasarle el tipo de dato, dependiendo el caso
var numero = 60;
console.log('numero: ', numero);
var nulo = null;
console.log('nulo: ', nulo);
