<!-- JavaScript to toggle the theme -->
const displayValue = document.getElementById('display');
const body = document.body;

const menuBar = document.getElementById('menu_button');
const historyBtn = document.querySelector('.history-btn');

function themeToggle(button){
    const themeBtn = button.querySelector('i');
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        body.style.backgroundColor = '#FFFFFF';
        menuBar.style.color = '#000000';
        historyBtn.style.color = '#000000';
        displayValue.style.color = '#000000';
        themeBtn.classList.remove('fas', 'fa-moon');
        themeBtn.classList.add('fas', 'fa-sun');
        themeBtn.style.color = '#000000';
    }
    else {
        body.style.backgroundColor = '#000000';
        menuBar.style.color = '#FFFFFF';
        historyBtn.style.color = '#FFFFFF';
        displayValue.style.color = '#FFFFFF';
        themeBtn.classList.remove('fas', 'fa-sun');
        themeBtn.classList.add('fas', 'fa-moon');
        themeBtn.style.color = '#FFFFFF';
    }
}