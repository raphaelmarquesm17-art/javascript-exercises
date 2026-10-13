const reverseString = function(string) {
    const reverse = string.split("") //turned all letters of the string into individual elements
    const finalReverse = reverse.reverse() //reverses the elements of the split array
    let finalForm = finalReverse.join("") //joins the elements to fully reverse the string
    return finalForm


};

// Do not edit below this line
module.exports = reverseString;
