var objt1 ={a:12}

objt2 = objt1

//console.log(objt2)

objt2.b = 71

//console.log(objt1, objt2)

console.log(JSON.stringify(objt2))

cadena = '{"a":1}'
objeto= JSON.parse(cadena)
console.log(cadena, objeto)
