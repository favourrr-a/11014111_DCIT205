var levelButtonsCS = document.getElementsByClassName('buttonForProgA');
var levelButtonsIT = document.getElementsByClassName('buttonForProgB')
for (var i = 0; i < levelButtonsCS.length; i++) {
    levelButtonsCS[i].addEventListener('click', function() {
        var level = this.getAttribute('data-level');
        var levelContent = document.getElementById('cs' + level);
        
        // Toggle the display property
        levelContent.style.display = (levelContent.style.display === 'none' || levelContent.style.display === '') ? 'block' : 'none';
    });
}

for (var i = 0; i < levelButtonsIT.length; i++) {
    levelButtonsIT[i].addEventListener('click', function() {
        var level = this.getAttribute('data-level');
        var levelContent = document.getElementById('it' + level);
        
        // Toggle the display property
        levelContent.style.display = (levelContent.style.display === 'none' || levelContent.style.display === '') ? 'block' : 'none';
    });
}