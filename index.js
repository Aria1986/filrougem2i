
var openProfile = document.getElementById('openProfile')
var closeProfile = document.getElementById('closeProfile')
var profil = document.getElementById('profil')
var openModules = document.getElementsByClassName('openModules')
var closeModules = document.getElementsByClassName('closeModules')
var modules =  document.getElementsByClassName('module')

window.addEventListener('load',function(){
    document.getElementById('lottie').style.display= "none"
})

function afficherProfile(){
    closeProfile.style.display= 'block';
    openProfile.style.display='none';
    profil.style.display= 'block';
}

function fermerProfile(){
    closeProfile.style.display= 'none';
    openProfile.style.display='block';
    profil.style.display= 'none';
}

function afficherModule(n){
    console.log('afficher module')
    let openModule = openModules[n];
    let closeModule= closeModules[n];
    let module = modules[n]
    closeModule.style.display= 'block';
    openModule.style.display='none';
    module.style.display= 'block';
}
function fermerModule(n){
    console.log('fermer module')
    console.log(openModules)
    console.log(openModules[n])
    console.log(closeModules[n])
    console.log(modules[n])
    let openModule = openModules[n];
    let closeModule= closeModules[n];
    let module = modules[n]
    closeModule.style.display= 'none';
    openModule.style.display='block';
    module.style.display= 'none';
    console.log(openModules[n])
    console.log(closeModules[n])
    console.log(modules[n])
}

let formProfil = document.getElementById('modifProfil');
formProfil.addEventListener('submit',validationModifs(e));


function validerForm(e){
    e.preventDefault(); 
            let email = document.getElementById('email').value;
            let firstname =  document.getElementById('firstname').value;
            let lastname =  document.getElementById('lasttname').value;
            let tel = document.getElementById('phone').value;
            if (firstname.length<3) {
                $('#errorName').text("Veuillez entrer un prénom valide.");
            }
            if (lastname.length<3) {
                $('#errorName').text("Veuillez entrer un nom valide.");
            }
            else if (!email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              )){
                $('#errorEmail').text("Veuillez entrer une adresse email valide.");
            }
            else if(tel.length>10 || (tel.length==0 )){
                $('#errorMessage').text("Veuillez entrer un texte  valide (300 caractères max).");
            }
            else {
                // Extraction et affichage des données
                $('#formData').html(`<ul>
                    <li>Nom : ${name}</li>
                    <li>Email : ${email}</li>
                    <li>Message : ${message}</li>
                </ul>`);
            }
}
function validationModifs(e){
    validerForm();
    alert('vos informations ont bien été enregistrées')
}