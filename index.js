// Strings

const farmAnimals = 'cow horse sheep pig chicken';

// Destructure animals based on their sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

console.log(moo);   // Output: cow
console.log(neigh); // Output: horse
console.log(baa);   // Output: sheep
console.log(oink);  // Output: pig
console.log(cluck); // Output: chicken

// Destructure without the horse, naming them appropriately
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

console.log(bessie); // Output: cow
console.log(dolly);  // Output: sheep
console.log(babe);   // Output: pig
console.log(little); // Output: chicken

// Destructure without the horse and chicken, using color variables
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');

console.log(blackAndWhite); // Output: cow
console.log(black);         // Output: sheep
console.log(pink);          // Output: pig


// Arrays

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Destructure colors using color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

console.log(red);    // Output: red
console.log(orange); // Output: orange
console.log(yellow); // Output: yellow
console.log(green);  // Output: green
console.log(blue);   // Output: blue
console.log(indigo); // Output: indigo
console.log(violet); // Output: violet

// Destructure while leaving out indigo, using the first letter of each color
const [r, o, y, g, b, , v] = colors;

console.log(r); // Output: red
console.log(o); // Output: orange
console.log(y); // Output: yellow
console.log(g); // Output: green
console.log(b); // Output: blue
console.log(v); // Output: violet

// Assign only indigo using `indg`
const [, , , , , indg] = colors;

console.log(indg); // Output: indigo


// Objects

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// Destructure all keys from the `muppet` object
const { muppetName, color, song, job, partner } = muppet;

console.log(muppetName); // Output: Miss Piggy
console.log(color);      // Output: pink
console.log(song);       // Output: Never Before, Never Again
console.log(job);        // Output: Cast member of The Muppet Show
console.log(partner);    // Output: Kermit


const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Destructure songs 2 and 4, and Kermit's job and partner
const { 
  album: { 
    theMuppetMovie: { song2, song4 } 
  }, 
  nestedJob, 
  nestedPartner 
} = nestedMuppet;

console.log(song2);        // Output: Moving Right Along
console.log(song4);        // Output: I Hope That Something Better Comes Along
console.log(nestedJob);    // Output: Host of The Muppet Show
console.log(nestedPartner); // Output: Miss Piggy
