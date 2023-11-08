class hero {
    constructor(nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    
    escrever(){
    	console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let heroi = new hero ("Merlin", 3500, "mago", "magia");
let heroi2 = new hero ("Conan", 150, "guerreiro", "uma espada");
let heroi3 = new hero ("Karma", 70, "monge", "artes marciais");
let heroi4 = new hero ("Jyraia", 30, "ninja", "shuriken");


heroi.escrever()
heroi2.escrever()
heroi3.escrever()
heroi4.escrever()