function stringToArray(inputString) {
    return inputString.split('');
}

document.getElementById("submitButton").addEventListener('click', function (event) {
    event.preventDefault();

    const inputText = document.getElementById("inputText");
    const inputValue = inputText.value;

    if (inputValue.trim() !== "") {

        const resultArray = stringToArray(inputValue);

        alert("Input " + inputValue + " =>" + JSON.stringify(resultArray));
    } else {

        alert("Voer een string in.");
    }
});





