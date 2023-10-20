document.addEventListener("DOMContentLoaded", function () {
const birthDate = document.getElementById("birthDate");
const result = document.getElementById("result");
const validation = document.getElementById("validation");

validation.addEventListener("click", function () {
    const birth = new Date(birthDate.value);
    const actual = new Date();

    const years = actual.getFullYear() - birth.getFullYear();

    if (
    birth.getMonth() > actual.getMonth() ||
    (birth.getMonth() === actual.getMonth() &&
        birth.getDate() > actual.getDate())
    ) {
    years--;
    }

    if (years >= 18) {
    result.textContent = "You are older";
    } else {
    result.textContent = "No es mayor de years en Colombia.";
    }
});
}); 
