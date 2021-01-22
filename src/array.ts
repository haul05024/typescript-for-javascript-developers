export {};

let numbers: number[] = [1, 2, 3];
//not recommended to write like below: Array<>interface
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Nagoya']

let strings: string[] = ['Typescript', 'JavaScript', 'CoffeeScript']

let nijigenHairetsu: number[][] = [
    [10, 100],
    [50, 150],
]

let hairetsu:(string | number | boolean)[] = [1, false, 'Japan'];
// | means 'or'