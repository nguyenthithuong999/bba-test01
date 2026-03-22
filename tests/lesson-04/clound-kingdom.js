const playerName = "Mario";
const currentLives = 3;
const coins = {
  level1: 25,
  level2: 30,
  level3: 45,
};

const totalCoin =  coins.level1 + coins.level2 + coins.level3
const averageCoins = totalCoin / currentLives;
const remainderCoins = totalCoin % 3;

console.log("Số coin dư là : ", remainderCoins);
