abstract class Figura {
    #name: string
    constructor(name: string) {
        this.#name = name
    }

    abstract get area(): number
}

class Cuadrado extends Figura {
    #lado: any
    constructor(name: string, lado: number) {
        super(name)
        this.#lado = lado
    }
    get area() {
        return this.#lado ** 2
    }
}


class Circulo extends Figura {
    #radio: any
    constructor(name: string,radio: number) {
        super(name)
        this.#radio =radio
    }
    get area() {
        return Math.PI*this.#radio ** 2
    }
}


class Rectangulo extends Figura {
    #base: any
    #altura: number
    constructor(name: string, base: number, altura: number) {
        super(name)
        this.#base = base
        this.#altura = altura
    }
    get area() {
        return this.#base * this.#altura
    }
}

const figuras: Figura[] = [
    new Cuadrado("c1", 50),
    new Rectangulo("r1", 20, 30),
    new Circulo("C1",30)
]

figuras.forEach(figura => {
    console.log(figura.area)
})

