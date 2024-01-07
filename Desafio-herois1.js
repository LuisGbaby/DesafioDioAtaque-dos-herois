class herois{
    constructor(nome,idade,tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
 }
 atacar() {
    if (this.tipo === "mago") {
    console.log("O mago " + this.nome + " atacou usando magia")

  } else if (this.tipo === "guerreiro") {
       console.log("O guerreiro " + this.nome + " atacou usando espada")

  } else if (this.tipo === "monge") {
        console.log("O monge " + this.nome + " atacou usando artes marciais")

  } else if (this.tipo === "ninja") {
        console.log("O ninja " + this.nome + " atacou usando shuriken");
    }
    
 }

}

const rasta = new herois ("rasta", 18, "ninja")
const careca = new herois ("careca", 45, "mago")


rasta.atacar();


