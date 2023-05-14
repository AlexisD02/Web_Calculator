function openNav() {
    document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.display = "none";
}

function handleValue(event, calc, value) {
    event.preventDefault();

    const lastChar = calc.display.value.charAt(calc.display.value.length - 1);
    const operators = /[+\-*/]/;

    if (lastChar.match(operators) && value.match(operators)) {
        // If the last character is an operator and the new value is also an operator, remove the last one before adding the new one
        calc.display.value = calc.display.value.slice(0, calc.display.value.length - 1);
    }

    if (calc.display.value === "0") {
        calc.display.value = "";
    }
    if (value === '%') {
        // Convert percentage to decimal and display the result
        calc.display.value = (math.evaluate(calc.display.value + '/100')).toString();
    }
    else if (value === '+/-') {
        // Invert the sign of the current number
        calc.display.value = (-1 * Number(calc.display.value)).toString();
    }
    else if (value === 'C') {
        // Clear the display
        calc.display.value = '0';
    }
    else {
        // Add the value to the display
        calc.display.value += value;
    }
}

window.onload = function () {
    const calculator = document.getElementById('calc');

    document.addEventListener('keydown', function(event) {
        const key = event.key;

        switch (key) {
            case 'Backspace':
                backspace(calculator);
                break;
            case 'Escape':
                // Clear the display
                calculator.display.value = '0';
                break;
            case '=':
            case 'Enter':
                calculate(calculator);
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                handleValue(event, calculator, key);
                break;
            default:
                if (!isNaN(key) || key === '.') {
                    handleValue(event, calculator, key);
                }
                break;
        }
    });
};

function backspace(calc) {
    let size = calc.display.value.length;
    calc.display.value = calc.display.value.substring(0, size - 1);
}

function calculate(calc) {
    let size, n, f;
    try {
        if (calc.display.value.includes("!")) {
            // Factorial operation
            size = calc.display.value.length;
            n = Number(calc.display.value.substring(0, size - 1));
            if (n < 0) {
                throw new Error("Factorial of a negative number is undefined.");
            }
            f = 1;
            for (let i = 2; i <= n; i++) {
                f = f * i;
                if (f === Infinity) {
                    throw new Error("Result is too large to display.");
                }
            }
            calc.display.value = f;
        }
        else {
            // Other arithmetic operations
            const result = new Function('return ' + calc.display.value)();
            if (isNaN(result)) {
                throw new Error("Invalid input.");
            }
            calc.display.value = result.toString();
        }
    } catch (err) {
        alert(err.message);
    }
}

window.onerror = function (message, source, lineno, colno, error) {
    alert(error.message);
    return false;
};