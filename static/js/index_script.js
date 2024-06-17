window.onload = function() {
    document.getElementById('userInput').focus();
};

window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        var myElement = document.getElementById('userInput');
        if (myElement) {
            myElement.focus();
            document.getElementById('userInput').focus();
        }
    }
});

function skipAnimation() {
    var main_div = document.getElementById("introText");
    if (main_div) {
        main_div.style.animation = "none";
        document.getElementById('userInput').focus();
    }
}

function handleKeyDown(event) {
    const userInput = document.getElementById('userInput').value;
    if (event.key === 'Enter') {
        console.log('User entered:', userInput);
        switch (userInput.toLowerCase()) {
            case 'b':
                document.getElementById('userInput').value = '';
                window.location.href = '/boy_scouts';
                break;
            case 'e':
                document.getElementById('userInput').value = '';
                window.location.href = '/extracurriculars';
                break;
            case 'g':
                document.getElementById('userInput').value = '';
                window.location.href = '/github';
                break;
            case 'i':
                document.getElementById('userInput').value = '';
                window.location.href = '/inventions';
                break;
            case 's':
                document.getElementById('userInput').value = '';
                window.location.href = '/sysadmin';
                break;
            case 't':
                document.getElementById('userInput').value = '';
                window.location.href = '/tae_kwon_do';
                break;
            case 'w':
                document.getElementById('userInput').value = '';
                window.location.href = '/w3_study';
                break;
            default:
                document.getElementById('userInput').value = '';
                break;
        }
        event.preventDefault();
    }
}

const mainIntroText = document.getElementById('mainIntroText');
setTimeout(() => { mainIntroText.textContent = "My name is Pratyush Saxena."; }, 3000);
setTimeout(() => { mainIntroText.textContent = "And this is my website."; }, 6000);
setTimeout(() => { mainIntroText.textContent = "In the form of a Mac terminal."; }, 9000);