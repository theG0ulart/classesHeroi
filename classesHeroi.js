// Definindo a classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método de ataque
  atacar() {
    let ataque;

    switch (this.tipo) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque indefinido';
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

// Exemplo de uso
const mago = new Heroi('Merlin', 50, 'mago');
const guerreiro = new Heroi('Aragorn', 35, 'guerreiro');
const monge = new Heroi('Lee', 40, 'monge');
const ninja = new Heroi('Hanzo', 30, 'ninja');

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
