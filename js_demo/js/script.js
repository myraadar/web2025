function askQuestion() {
    var p = prompt('how much wood would a woodchuck chuck if a woodchuck could chuck wood?');
    if (p != null) {
        document.getElementById('question').innerHTML = 'yikes...! ' + p + ' is a LOT of wood!';
    }
}