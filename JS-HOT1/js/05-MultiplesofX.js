document.addEventListener("DOMContentLoaded", function() {
    const MIN = 1;
    const MAX = 100;

    function main() {
        let result = '';
        for (let i = 15; i <= MAX; i += 15) {
            result += i + '<br>'; 
        }

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = result; 
    }

    const btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", main);
});