/* 
    - write an object literal that stores information about your favorite movie. nameOfMovie, runTime, characters, and genre should be keys directly inside the object.
        - characters will be an array that should store no more than 2 character objects, each of which stores name, age, and items.
        - items itself will also be an array that should store no more than 2 item objects. These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}).

    - use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS

let faveMovie = {
    nameOfMovie: 'Cry-baby',
    runTime: '85 Min',
    genre: 'Comedy/Musical',
    characters: [
            {name: 'Wade \'Cry-Baby\' Walker', age: '16', items:  
                {item1:'Leather Jacket', item2: 'motorcycle'}
                },
            {name: 'Allison Vernon-Williams', age: '16', items: 
                {item1: 'a-line dress', item2: 'microphone' }
                
            }
    ]
};
console.log(faveMovie.nameOfMovie);
console.log(faveMovie.runTime);
console.log(faveMovie.characters);
console.log(faveMovie.characters[0].name);
console.log(faveMovie.characters[1].items.item2)

