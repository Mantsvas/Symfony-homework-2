const axios = require('axios');

let name = document.getElementById('name');
let validationResultName = document.getElementById('validation-result-name');

let team = document.getElementById('team');
let validationResultTeam = document.getElementById('validation-result-team');

const validate = (validationResult) => {
    validationResult.innerText = '...';
    axios.post(validationResult.dataset.path, {team: team.value, name: name.value})
        .then(function(response) {
            if (response.data.valid) {
                validationResult.innerHTML = ":)";
            } else {
                validationResult.innerHTML = ":(";
            }
        })
        .catch(function (error) {
            validationResult.innerText = 'Error: ' + error;
        });
};

name.onkeyup = () => validate(validationResultName);
name.onchange = () => validate(validationResultName);

team.onkeyup = () => validate(validationResultTeam);
team.onchange = () => validate(validationResultTeam);