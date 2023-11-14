
document.getElementById("createTableBtn").addEventListener("click", function () {
    // Step 1: Display the form popup
    document.querySelector(".popup-container").style.display = "block";
});

document.getElementById("AddField").addEventListener("click", function () {
    // Step 2: Add dynamically new fields
    const container = document.querySelector(".container.text-center .row .col");
    const newField = document.createElement("div");
    newField.innerHTML = `
            <label for="FieldNames">Field Names</label>
            <input type="text" id="FieldNames" name="FieldNames" required>
        
            <label for="DataType">Type</label>
            <select id="DataType" name="DataType">
                <option selected disabled></option>
                <option value="STRING">STRING</option>
                <option value="INTEGER">INTEGER</option>
                <option value="BOOLEAN">BOOLEAN</option>
                <option value="JSON">JSON</option>
                <option value="DOUBLE">DOUBLE</option>
            </select>
        `;
    container.appendChild(newField);
});

document.getElementById("CreateTable").addEventListener("click", function () {
    // Step 3: Close the popup
    document.querySelector(".popup-container").style.display = "none";
});

document.querySelector(".close-btn").addEventListener("click", function() {
    // Close the popup when the close button is clicked
    document.getElementById("createTableForm").reset();
    document.querySelector(".popup-container").style.display = "none";
});

