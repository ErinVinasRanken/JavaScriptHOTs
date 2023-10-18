document.addEventListener("DOMContentLoaded", function() {
    const MIN = 1;
    const MAX = 100;

    function main() {
        let result = '';
        for (let i = 1; i <= 100; i += 2) {
            result += i + '<br>'; 
        }
        document.getElementById("result").innerHTML = result;
    }

    const btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", main);
});

