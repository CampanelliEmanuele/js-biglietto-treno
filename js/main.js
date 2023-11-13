let km = prompt("Enter distance (in km): ");
let age = prompt("Enter your age: ");

if (km > 0 && age > 0 && age <= 100) {
    let basePrice = 0.21 * km;
    let onePercent = basePrice / 100;
    let finalPrice = basePrice;

    if (age >= 18)
        finalPrice = basePrice - 20 * onePercent;
    else if (age >= 65)
        finalPrice = basePrice - 40 * onePercent;

    console.log("The base price is: " + basePrice);

} else if (km == 0 || age == 0) {
    console.log("ERROR: input cannot be equal to 0.");
} else {
    console.log("ERROR: invalid inputs.")
}
