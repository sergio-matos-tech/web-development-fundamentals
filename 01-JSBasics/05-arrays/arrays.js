let lottoNumbers = [];

for (i = 0; i < 6; i++) {
  lottoNumbers[i] = Math.floor(Math.random() * 10);
}

console.log(lottoNumbers);

const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];

leaderboard[1] = "Luna";
leaderboard[leaderboard.length - 1] = "Draco";
leaderboard[leaderboard.length] = "Cuda";
leaderboard.push("Lua");
leaderboard.splice(1, 1);

console.log(leaderboard);
