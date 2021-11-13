// 1
// It will return 8 and 1846

// 2
// It will return 1846 and 1659

// 3
// It will return alejandro, purpule
// Melissa, green
// undefined, green

// 4
// It will return Maya, Maria. Chi

// 5
// It will return "Raindrops on roses"
//"whiskers on kittens"
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// 6
// It will return [10, 30, 20]

// 7
const obj = { numbers: { a: 1, b: 2 } };

const { numbers: { a, b } } = obj;

// 8
const arr = [1, 2];

[arr[0], arr[1]] = [arr[1], arr[0]];

// 9
const raceResults = ([first, second, third, ...rest] = arr) => ({ first, second, third, rest });
