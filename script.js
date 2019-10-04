let result = document.getElementById("result");

function check() {
    let regex = /^[CAP][0-9]{4}[GHIKLM]$/;
    let input = document.getElementById("inp");
    if (regex.test(input.value)) {
        result.innerText = " Valid";
    } else result.innerText = " Invalid";
    input.focus();
}