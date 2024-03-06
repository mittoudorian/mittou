document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var checkbox = document.getElementById('check');
        checkbox.checked = !checkbox.checked;
    }
});

