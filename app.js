document.getElementById('attendanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let employeeName = document.getElementById('employeeName').value;
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let time = hours + ":" + (minutes < 10 ? '0' : '') + minutes;

    let historyList = document.getElementById('historyList');
    let listItem = document.createElement('li');

    listItem.textContent = `${employeeName} checked in at ${time}`;

    if (hours < 10 || (hours == 10 && minutes <= 5)) {
        listItem.style.color = 'green';
    } else {
        listItem.style.color = 'red';
    }

    historyList.appendChild(listItem);
});
