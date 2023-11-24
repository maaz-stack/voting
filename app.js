let addCandidateBtn = document.getElementById("addCandidate");
let newCandidateInput = document.getElementById("newCandidate");
let candidates = ["Saim", "Hassan", "Talha", "Asad", "Raza", "Sameer", "Wasif"];

addCandidateBtn.addEventListener("click", () => {
    candidates.push(newCandidateInput.value);
    newCandidateInput.value = "";
    displayCandidates();
});

function displayCandidates() {
    var candidatesTable = document.getElementById("candidatesTable");
    candidatesTable.innerHTML = "";

    candidates.forEach((candidate, index) => {
        var row = document.createElement("tr");

        var nameCell = document.createElement("td");
        nameCell.textContent = candidate;

        var indexCell = document.createElement("td");
        indexCell.textContent = index + 1;

        var voteCell = document.createElement("td");
        voteCell.textContent = 0;

        row.appendChild(indexCell);
        row.appendChild(nameCell);
        row.appendChild(voteCell);

        row.addEventListener("click", () => {
            voteCell.innerHTML++;
            voteCell.style.color = "#ffae00";
        });

        candidatesTable.appendChild(row);
    });
}

displayCandidates();
