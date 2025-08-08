// atividade 1 
/*const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 
'Pippin', 'Aragorn', 'Boromir'];

const hobbits = ['Frodo', 'Sam', 'Merry', 'Pippin'];

for (let i = 0; i < sociedade.length; i++) {
    if (hobbits.includes(sociedade[i])) {
        console.log(sociedade[i]);
    }
}


// atividade 2 
const personagens = [
   { nome: 'Luke Skywalker', jedi: true },
   { nome: 'Leia Organa', jedi: false },
   { nome: 'Yoda', jedi: true },
   { nome: 'Darth Vader', jedi: false },
 ];
 
 for (const personagem of personagens) {
   if (personagem.jedi) {
     console.log(personagem.nome);
   }
 }
 

 // atividade 3
 const personagen: { [nome: string]: string } = {
  Naruto: 'Uzumaki',
  Sasuke: 'Uchiha',
  Sakura: 'Haruno',
  Kakashi: 'Hatake'
};

for (const nome in personagen) {
  const clã = personagen[nome];
  console.log(`${nome} pertence ao clã ${clã}`);
}*/


 // atividade 4
 const personagens = [
  { nome: 'Goku', poder: 15000 },
  { nome: 'Vegeta', poder: 14999 },
  { nome: 'Krillin', poder: 7500 },
  { nome: 'Freeza', poder: 20000 },
];

personagens.forEach(personagem => {
  if (personagem.poder > 8000) {
    console.log(`O poder de ${personagem.nome} é de mais de 8000!`);
  }
});


// atividade 5 
const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];

let i = 0;

while (i < pokemons.length) {
  const nome = pokemons[i];

  if (nome === 'Mewtwo') {
    console.log(`Pokémon lendário encontrado: ${nome}!`);
    break;
  }

  console.log(`Capturando ${nome}`);
  i++;
}


// atividade 6
let passos = 0;
const passosParaMordor = 5;

do {
  passos++;
  console.log(`Dando passo ${passos}`);
} while (passos < passosParaMordor);

console.log("Chegamos em Mordor!");
