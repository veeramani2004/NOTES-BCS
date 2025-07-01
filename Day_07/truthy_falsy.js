const x = 0;

if (x) {
  console.log("Awesome");
} else {
  //   console.log("Super");
}

const csk1 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    win: 5,
    loss: 11,
  },
};

const csk2 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    loss: 11,
  },
};

// console.log(csk2.stats.win);

const csk3 = {
  captain: "MSD",
  color: "yellow",
};

const csk = null;

function getWinStat4(team) {
  if (!team || !team.stats || !team.stats.win) {
    return "data not found";
  }
  return team.stats.win;
}

function getWinStat5(team) {
  if (team && team.stats && team.stats.win) {
    return team.stats.win;
  }
  return "data not found";
}
function getWinStat6(team) {
  if (team?.stats?.win) {
    return team.stats.win;
  }
  return "data not found";
}

const getWinStat = (team) => team?.stats?.win ?? "data not found";

console.log(getWinStat(csk1));
console.log(getWinStat(csk2));
console.log(getWinStat(csk3));
console.log(getWinStat(csk));
console.log(getWinStat(csk));
