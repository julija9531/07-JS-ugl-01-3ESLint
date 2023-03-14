const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'маг', health: 0 },
  { name: 'лучник', health: 0 },
];
characters[0].health -= 10;
const alive = characters.filter((item) => (item.health > 0));
document.write(alive);
