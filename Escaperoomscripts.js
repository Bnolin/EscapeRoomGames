function ButtonOver(buttonId) {
    var button = $('#Button' + buttonId);

    if (button !== null) {
        button.removeClass("Button").addClass("ButtonHover");
    }
}

function ButtonOut(buttonId) {
    var button = $('#Button' + buttonId);

    if (button !== null) {
        button.removeClass("ButtonHover").addClass("Button");
    }
}