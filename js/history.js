function showHistory() {
    const historyList = document.getElementById('history');
    if (historyList.style.display === 'none') {
        // Show history
        historyList.style.display = 'block';
        // Clear previous list items
        while (historyList.firstChild) {
            historyList.removeChild(historyList.firstChild);
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
        // Hide history
        historyList.style.display = 'none';
    }
}