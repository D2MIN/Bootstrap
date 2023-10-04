// Найдем кнопку по ее id
var button = document.getElementById("myButton");
var nuv = document.getElementById("nuv")

// Добавим обработчик события click
button.addEventListener("click", function() {
    // Этот код будет выполнен при нажатии кнопки
    console.log("Кнопка была нажата!");
    if (nuv.style.display === "none" || nuv.style.display === "") {
        nuv.style.display = "inline";
    } else {
        nuv.style.display = "none";
    }
});