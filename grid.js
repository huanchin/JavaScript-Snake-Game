const GRID_SIZE = 21;

function getRandomNumberA(quantity_of_nums) {
  let milliseconds = new Date().getMilliseconds();
  return Math.floor((milliseconds * quantity_of_nums) / 1000);
}

function getRandomNumberB(quantity_of_nums) {
  let milliseconds = new Date().getMilliseconds();
  return Math.floor((milliseconds * quantity_of_nums) / 1000);
}

export function randomGridPosition() {
  return {
    x: getRandomNumberA(21) + 1,
    y: getRandomNumberB(16) + 4,
  };
}

export function ousideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  );
}
