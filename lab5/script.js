const form = document.getElementById("userForm");

const patterns = {
    fullName: /^[А-ЯІЇЄҐ]{6}\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/iu,
    group: /^[А-ЯІЇЄҐ]{2}-\d{2}$/iu,
    phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
    idCard: /^[А-ЯІЇЄҐ]{2}\s№\d{6}$/iu,
    faculty: /^[А-ЯІЇЄҐ]{4}$/iu
};

const errorMessages = {
    fullName: "Формат: 6 літер, пробіл, ініціали (наприклад, Пашнюк І.О.).",
    group: "Формат: дві літери, дефіс, дві цифри (наприклад, ІМ-44).",
    phone: "Формат: (067)-123-45-67.",
    idCard: "Формат: дві літери, пробіл, знак № та шість цифр (наприклад, АБ №123456).",
    faculty: "Введіть чотири літери."
};

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isFormValid = true;

    const fields = Object.keys(patterns);

    fields.forEach(function (fieldId) {
        const input = document.getElementById(fieldId);
        const error = input.parentElement.querySelector(".error");
        const value = input.value.trim();

        if (!patterns[fieldId].test(value)) {
            input.classList.add("invalid");
            input.classList.remove("valid");
            error.textContent = errorMessages[fieldId];
            isFormValid = false;
        } else {
            input.classList.remove("invalid");
            input.classList.add("valid");
            error.textContent = "";
        }
    });

    if (isFormValid) {
        const resultWindow = window.open(
            "",
            "_blank",
            "width=500,height=400"
        );

        if (!resultWindow) {
            alert("Дозвольте відкривання спливаючих вікон у браузері.");
            return;
        }

        const doc = resultWindow.document;
        doc.title = "Введені дані";
        doc.body.innerHTML = "";
        doc.body.style.padding = "20px";

        const heading = doc.createElement("h2");
        heading.textContent = "Введені дані";
        doc.body.appendChild(heading);

        fields.forEach(function (fieldId) {
            const input = document.getElementById(fieldId);
            const paragraph = doc.createElement("p");

            paragraph.textContent =
                input.name + ": " + input.value.trim();

            doc.body.appendChild(paragraph);
        });
    }
});


const tableBody = document.querySelector("#numberTable tbody");

for (let row = 0; row < 6; row++) {
    const tr = document.createElement("tr");

    for (let col = 0; col < 6; col++) {
        const td = document.createElement("td");
        const number = row * 6 + col + 1;

        td.textContent = number;
        td.dataset.number = number;
        td.dataset.column = col;

        td.addEventListener("mouseover", function () {
            if (number === 2) {
                td.style.backgroundColor =
                    "#" + Math.floor(Math.random() * 16777215)
                        .toString(16).padStart(6, "0");
            }
        });

        td.addEventListener("click", function () {
            if (number === 2) {
                td.style.backgroundColor =
                    document.getElementById("colorPicker").value;
            }
        });

        td.addEventListener("dblclick", function () {
            if (number === 2) {
                const selectedColor =
                    document.getElementById("colorPicker").value;

                const cells = document.querySelectorAll(
                    '#numberTable td[data-column="' + col + '"]'
                );

                cells.forEach(function (cell) {
                    cell.style.backgroundColor = selectedColor;
                });
            }
        });

        tr.appendChild(td);
    }

    tableBody.appendChild(tr);
}
