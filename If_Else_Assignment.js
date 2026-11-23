const country = "Greece";
let population = 10372335;

//population = 13000000;
//population = 130000000;

if(population < 33000000){
    console.log(`${country}'s population is ${(33000000 - population)/1000000} million below average 😣`);
} else if (population == 33000000){
    console.log(`${country}'s population is the average 😮`);
} else {
    console.log(`${country}'s population is ${(population - 33000000)/1000000} million above average 😏`);
}

/*
If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
*/
