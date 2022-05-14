// Import the Backpack class
import Backpack from "../js/backpack.js";

//
const backpack1 = new Backpack(
    backpack object1    "pack01",
    "Backpack1",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST",
    "../assets/images/1.svg"
);

//backpack object1
const backpack2 = new Backpack(
    "pack02",
    "Backpack2",
    8,
    "green",
    3,
    10,
    10,
    false,
    "October 16, 2019 15:00:00 PST",
    "../assets/images/2.svg"
);

//added to back pack to array
const backpackObjectArray = [backpack1, backpack2];

// Export the array
export default backpackObjectArray;
