interface ICoordinate {
    log: number,
    lat: number
}

function printCoordinate(c: ICoordinate) {
    console.log(`coordenada longitud ${c.lat} longitud ${c.log}`)

}

const arrCoord: ICoordinate[] = [
    {
        log: 11,
        lat: 4

    },

    {
        log: 44,
        lat: 42

    },

    {
        log: 55,
        lat: 45

    },

    {
        log: 66,
        lat: 6

    }

]


arrCoord.forEach((c) => {
    //console.log(c)
})

const res = arrCoord.filter((c) => c.lat > 10)
//console.log(res)

//Tipado de funciones

type fn = (a: number, b: number) => number

interface ICalculadora {
    suma: fn
    resta: fn
    multi: fn
}

const calculadora: ICalculadora = {
    suma: (a, b) => a + b,
    resta: (a, b) => a - b,
    multi: (a, b) => a * b
}

// console.log(calculadora.suma(4,5))

// console.log(calculadora.resta(4,5))

// console.log(calculadora.multi(4,5))

//TTUPLAS

type RoleType = "Delantero" | "Defensa" | "Portero"

type TeamPlayer = [string, number, string]

const ju1: TeamPlayer = ["Paco", 28, "Delantero"]
//console.log(ju1)

//Clases
type ColorType = "rojo" | "azul" | "verde"
class Triangulo {
    static createTria(base: number, altura: number) {
        return new Triangulo(base, altura)
    }

    #base: number
    #altura: number
    #color: ColorType
    private constructor(base: number, altura: number) {
        this.#base = base
        this.#altura = altura
        this.#color = "verde"
    }

    get area() {
        return (this.#base * this.#altura) / 2
    }
    get color() {
        return this.#color
    }
    set color(valor:ColorType) {
        this.#color = valor
    }

}

// const tr1 = new Triangulo(10, 2, "rojo")
// const tr2 = new Triangulo(30, 40, "azul")

const tr1 = Triangulo.createTria(40, 42)
console.log(tr1.area)
//console.log(tr2.area)

//const arrTriangulos = [tr1, tr2]
//const total = arrTriangulos.reduce((acc, item) => acc + item.area, 0)

//console.log("total", total)