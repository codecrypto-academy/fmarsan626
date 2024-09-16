interface IPersona{
    dni: String
    nombre: String
    saldo:Number

}

const Clientes: IPersona[]=
[
    {
        dni:"123",
        nombre:"Jose",
        saldo:1234
    }
]

Clientes.push({
    dni:"222",
    nombre: "Pepe",
    saldo:999

})

var clienteFind = Clientes.find((cliente: IPersona)=> cliente.dni == "123")

if(clienteFind){
    console.log(clienteFind.saldo)
}else{
    console.log("No existe")
}
