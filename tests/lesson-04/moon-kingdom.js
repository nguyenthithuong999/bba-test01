// Bai 1
const characters = [
  { name: "Mario", level: 1, health: 100 },
  { name: "Luigi", level: 2, health: 500 },
  { name: "Peach", level: 3, health: 600 },
];

const createCharacters = () =>
  characters.map((item) => ({
    name: item.name.toUpperCase(),
    level: item.level * 2,
    health: item.health * 3,
  }));

const charactersPowerUp = createCharacters();
const possibleWinners = charactersPowerUp.filter((item) => item.health > 1000);

console.log("possibleWinners", possibleWinners);

// Bai 2

const players = [
  { name: "Yoshi", score: 800 },
  { name: "Mario", score: 1000 },
  { name: "Peach", score: 850 },
  { name: "Luigi", score: 900 },
  { name: "Phong", score: 500 },
];

const printLeaderboard = (players) => {
  const sortPlayers = players.sort((a, b) => b.score - a.score);
  sortPlayers.forEach((player, index) => {
    let icon = "";
    if (index === 0) icon = "🥇 ";
    else if (index === 1) icon = "🥈 ";
    else if (index === 2) icon = "🥉 ";
    else icon = "   ";
    console.log(`${icon} ${index + 1}. ${player.name} - ${player.score} pts`);
  });
};

printLeaderboard(players);
