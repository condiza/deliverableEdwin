document.addEventListener("DOMContentLoaded", function () {
    const birthDate = document.getElementById("birthDate");
    const result = document.getElementById("result");
    const validation = document.getElementById("validation");

    validation.addEventListener("click", function () {
        const birthDateString = birthDate.value;

        // Expresión regular para validar el formato YYYY-MM-DD
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (dateRegex.test(birthDateString)) {
            const birth = new Date(birthDateString);
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
                result.textContent = "You are of legal age";
            } else {
                result.textContent = "You are under age";
            }
        } else {
            result.textContent = "Invalid option";
        }
    });
});
