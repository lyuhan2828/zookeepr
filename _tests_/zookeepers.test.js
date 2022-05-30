const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../../data/zookeepers");

jest.mock('fs');

test("create an zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Darlene", id: "random" },
        zookeepers
    );
    expect(zookeeper.name).toBe("Darlene");
    expect(zookeeper.id).toBe("random");
});

test("filters by query", () => {
    const startingZookeepers = [
    {
    id: "6",
    name: "Amiko",
    age: 43,
    favoriteAnimal: "Quokkas"
    },
    {
        id: "8",
        name: "Lernantino",
        age: 19,
        favoriteAnimal: "Business Cat"
        },
];

const updatedZookeepers = filterByQuery({ age: 43 }, startingZookeepers);

expect(updatedZookeepers.length).toEqual(1);

});

test("finds by id", () => {
    const startingZookeepers = [
        {
            id: "6",
            name: "Amiko",
            age: 43,
            favoriteAnimal: "Quokkas"
            },
            {
                id: "8",
                name: "Lernantino",
                age: 19,
                favoriteAnimal: "Business Cat"
                },
    ];

    const result = findById("8", startingZookeepers);

    expect(result.name).toBe("Lernantino");
});

test("validate age", () => {
    
    const zookeeper = {
        id: "6",
        name: "Amiko",
        age: 43,
        favoriteAnimal: "Quokkas"
        };
       
     const invalidZookeeper = {
            id: "8",
            name: "Lernantino",
            age: "19",
            favoriteAnimal: "Business Cat"
            };
            
            
    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});