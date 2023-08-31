var sumForUs = 0; // تغيير مسمى المتغير لنا
var sumForThem = 0; // تغيير مسمى المتغير لهم
var previousNumberForUs = 0; // تغيير مسمى المتغير للرقم السابق لنا
var previousNumberForThem = 0; // تغيير مسمى المتغير للرقم السابق لهم
var currentInput = "numberForUs"; // تغيير مسمى المدخل الحالي لنا

function toggleInput() {
    if (currentInput === "numberForUs") {
        currentInput = "numberForThem"; // تغيير مسمى المدخل الحالي لهم
    } else {
        currentInput = "numberForUs"; // تغيير مسمى المدخل الحالي لنا
    }
}

function performAction() {
    if (currentInput === "numberForUs") {
        addNumber(currentInput, "sumForUs"); // تغيير مسمى المدخل والمجموع لنا
    } else {
        addNumber(currentInput, "sumForThem"); // تغيير مسمى المدخل والمجموع لهم
    }
}

function addNumber(inputId, sumId) {
    var number = parseInt(document.getElementById(inputId).value);

    if (!isNaN(number)) {
        if (sumId === "sumForUs") {
            sumForUs += number; // تغيير مسمى المجموع لنا
            previousNumberForUs = number; // تغيير مسمى المتغير للرقم السابق لنا
            document.getElementById("sumForUs").innerHTML = "الجمع لنا: " + sumForUs; // تغيير مسمى المجموع لنا
        } else if (sumId === "sumForThem") {
            sumForThem += number; // تغيير مسمى المجموع لهم
            previousNumberForThem = number; // تغيير مسمى المتغي للرقم السابق لهم
            document.getElementById("sumForThem").innerHTML = "الجمع لهم: " + sumForThem; // تغيير مسمى المجموع لهم
        }

        document.getElementById(inputId).value = "";
        toggleInput(); // تغيير مسمى المدخل بعد إضافة الرقم
    }
}

function deletePreviousNumber(inputId) {
    if (inputId === "numberForUs") {
        sumForUs -= previousNumberForUs; // تغيير مسمى المجموع لنا
        document.getElementById("numberForUs").value = previousNumberForUs; // تغيير مسمى المدخل لنا
        document.getElementById("sumForUs").innerHTML = "الجمع لنا: " + sumForUs; // تغيير مسمى المجموع لنا
    } else if (inputId === "numberForThem") {
        sumForThem -= previousNumberForThem; // تغيير مسمى المجموع لهم
        document.getElementById("numberForThem").value = previousNumberForThem; // تغيير مسمى المدخل لهم
        document.getElementById("sumForThem").innerHTML = "الجمع لهم: " + sumForThem; // تغيير مسمى المجموع لهم
    }
}

function resetCounters() {
    sumForUs = 0; // تغيير مسمى المجموع لنا
    sumForThem = 0; // تغيير مسمى المجموع لهم
    document.getElementById("sumForUs").innerHTML = "الجمع لنا: 0"; // تغيير مسمى المجموع لنا
    document.getElementById("sumForThem").innerHTML = "الجمع لهم: 0"; // تغيير مسمى المجموع لهم
}