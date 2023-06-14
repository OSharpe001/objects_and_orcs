//  USING AN ARRAY INSIDE OF AN OBJECT
const adventurer = {
    name: "Spark",
    hitPoint: 10,
    belongings: ["sack", "sword", "potions", "daggers"],
    companion: {
        name: "ember",
        type: "dragon",
        belongings: ["potions", "elemental orbs", "sack"]
    }
};

// ACCESS THE VALUES IN THE PLAYERS BELONGINGS ARRAY
console.log(adventurer.belongings);

// ACCESS ADVENTURER'S FIRST BELONGING
console.log(`${adventurer.name}'s first belongin: ${adventurer.belongings[0]}`)

// ITERATE OVER AN ARRAY WITHIN AN OBJECT
for (let i =0; i<adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i])
};

// ACCESS NESTED ELEMENTS WITHIN OUR OBJECT
console.log(`${adventurer.name}'s companion's name is ${adventurer.companion.name}`);
console.log(`${adventurer.companion.name}'s belongings is ${adventurer.companion.belongings[2]}`);

//
const movies = [
    {title:"SpiderMan"},
    {title:"A Goofy Movie"},
    {title:"A Christmas Story"},
];

console.log(movies[0]);
console.log(movies[0].title);
console.log("-------------------------------------");
// LOOPING OVER ARRAY OF OBJECTS
for (let i=0; i < movies.length; i++) {
    console.log(movies[i].title);
};

/*
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/astitt1/objects_and_orcs_code_along.git
git push -u origin main
*/