function ageInDays() {
    const birthYear = prompt('What year were you bron friend?');
    const ageInDays = (new Date().getFullYear() - birthYear) * 365;
    document.getElementById('flex-box-result').innerText = `You are ${ageInDays} days old`;
}

function reset() {
    document.getElementById('flex-box-result').innerText = '';
}