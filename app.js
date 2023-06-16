(function calculator() {
    let answer;
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');

    buttons.forEach(function (button) {
        button.addEventListener('click', (e) => {
            let value = e.target.value;
            screen.value += value;
        })
    });

    equal.addEventListener('click', (e) => {
        if (screen.value === "") {
            screen.value = "";
        } else {
            answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', (e) => {
        screen.value = "";
    })
})();