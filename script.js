var select = document.querySelectorAll(".currency"),
    input_currency = document.getElementById("input_currency"),
    output_currency = document.getElementById("output_currency");

fetch("https://api.frankfurter.app/currencies")
    .then((response) => response.json())
    .then((data) => {
        const entries = Object.entries(data); // Corrected from object.entries to Object.entries
        for (let i = 0; i < entries.length; i++) {  // Corrected loop to start at 0
            const currencyCode = entries[i][0];  // Currency code (key)
            const currencyName = entries[i][1];  // Currency name (value)

            // Add the option to both select elements
            select[0].innerHTML += `<option value="${currencyCode}">${currencyName}</option>`;
            select[1].innerHTML += `<option value="${currencyCode}">${currencyName}</option>`;
        }
    })
    .catch((error) => console.error('Error fetching currencies:', error));
