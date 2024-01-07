class herois{
    constructor(nome,idade,tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
 }
 atacar() {
    switch (this.tipo) {
        case "mago":
          console.log("O mago atacou usando magia");
          break;
        case "guerreiro":
          console.log("O guerreiro atacou usando espada");
          break;
        case "monge":
          console.log("O monge atacou usando artes marciais");
          break;
        
    }
 }

}

const rasta = new herois ("rasta", 18, "mago")
const careca = new herois ("careca", 18, "guerreiro")

careca.atacar();