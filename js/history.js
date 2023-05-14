function showHistory() {
    const historyList = document.getElementById('history');
    const menuBar = document.getElementById('menu_button');
    const historyBtn = document.querySelector('.history-btn');
    const binBtn = document.querySelector('.bin-btn');
    const historyIcon = historyBtn.querySelector('i');

    if (historyList.style.display === 'none') {
        historyIcon.classList.remove('fa-history');
        historyIcon.classList.add('fa-times');

        // Show history
        historyList.style.display = 'block';
        binBtn.style.display = 'block';
        menuBar.style.display = 'none';

        // Clear previous list items
        while (historyList.firstChild) {
            historyList.removeChild(historyList.firstChild);
        }

        // Retrieve history from localStorage
        let history = [];
        const historyData = localStorage.getItem('history');

        if (historyData !== null) {
            history = JSON.parse(historyData);
        }

        // Add new list items for each history entry
        for (let i = 0; i < history.length; i++) {
            const listItem = document.createElement('li');
            const calculationText = document.createTextNode(history[i].calculation + ' = ');
            const resultText = document.createTextNode(history[i].result);
            listItem.appendChild(calculationText);
            listItem.appendChild(resultText);
            historyList.appendChild(listItem);
        }
    }
    else {
        historyIcon.classList.add('fa-history');
        historyIcon.classList.remove('fa-times');

        // Hide history
        historyList.style.display = 'none';
        menuBar.style.display = 'block';
        binBtn.style.display = 'none';
    }
}

function deleteHistory() {
    localStorage.removeItem('history');
    const historyList = document.getElementById('history');

    // Remove all child nodes
    while (historyList.firstChild) {
        historyList.removeChild(historyList.firstChild);
    }
}