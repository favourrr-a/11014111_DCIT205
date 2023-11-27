document.getElementById('mphilButton').addEventListener('click', function () {
    var hiddenContent = document.getElementById('mphil600');
    hiddenContent.style.display = (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') ? 'block' : 'none';
});

document.getElementById('mscButton').addEventListener('click', function () {
    var hiddenContent = document.getElementById('msc600');
    hiddenContent.style.display = (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') ? 'block' : 'none';
});
