const game = {
  team1: 'Bayern Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaab',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],

  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

// console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;

// console.log(gk, fieldPlayers);

const allplayers = [...players1, ...players2];
// console.log(allplayers.length);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

const { team1, x: draw, team2 } = game.odds;

// console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);

  players.forEach((player) => {
    console.log(player);
  });
};

/* printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');

printGoals(...game.scored); */

// team1 < team2 && console.log('Team 1 is more likely to win');

// team1 > team2 && console.log('Team 2 is more likely to win');

// 1
for (const [index, playerName] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${playerName}`);
}

// 2

let acc = 0;

const { odds } = game;

// console.log(odds);

const values_odds = Object.values(odds);

// console.log(values_odds);

for (const value of values_odds) {
  acc += value;
}

const avg = acc / values_odds.length;

console.log(avg.toFixed(2));

// 3

const odds_entries = Object.entries(odds);

for (const [team, odd_value] of odds_entries) {
  let team_n = game[team] ?? '';
  console.log(`Odd of ${team_n? 'victory ': 'draw'}${team_n}: ${odd_value}`);
}


// Bonus: Basicamente vê se já existe aquele player (chave). Se já existir, aumenta o valor dele em 2, senão inicializa ele como 1

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}


console.log(scorers)