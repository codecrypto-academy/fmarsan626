var crypto= require ('crypto')
var name = 'test1'

function hash(valor, algorimo){
    var hash = crypto.createHash(algorimo).update(valor).digest('hex')
    return hash
}

const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

function enc(text){
    let cipher=crypto.createCipheriv("aes-256-cbc", key, iv)
    let encrypted =cipher.update(text)
    encrypted= Buffer.concat([encrypted, cipher.final()])
    return encrypted
}




function des(text){
    let decy = crypto.createDecipheriv("aes-256-cbc", key, iv)
    let des =decy.update(text)
    des= Buffer.concat([des, decy.final()])
    return des.toString()
}

var r= enc("esto esta encriptado")
console.log(r.toString('hex'))
console.log(des(r))