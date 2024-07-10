function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    let resultText = `Your BMI is ${bmi.toFixed(2)}. `;
    let resultClass = '';

    if (bmi < 18.5) {
        resultText += "You are underweight.";
        resultClass = 'result-underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText += "You have a normal weight.";
        resultClass = 'result-normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText += "You are overweight.";
        resultClass = 'result-overweight';
    } else {
        resultText += "You are obese.";
        resultClass = 'result-obese';
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = resultText;
    resultDiv.className = resultClass;
}
