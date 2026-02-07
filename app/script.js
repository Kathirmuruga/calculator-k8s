const display = document.getElementById("display");

function appendValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        const result = Function('"use strict";return (' + display.value + ')')();
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

/* 🔹 Keyboard Support */
document.addEventListener("keydown", (event) => {
    const key = event.key;

    // Numbers
    if (!isNaN(key)) {
        appendValue(key);
    }

    // Operators
    if (["+", "-", "*", "/"].includes(key)) {
        appendValue(key);
    }

    // Enter = calculate
    if (key === "Enter") {
        event.preventDefault();
        calculate();
    }

    // Backspace = delete last char
    if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    // Escape = clear
    if (key === "Escape") {
        clearDisplay();
    }
});

