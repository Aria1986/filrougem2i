
var openProfile = document.getElementById('openProfile')
var closeProfile = document.getElementById('closeProfile')
var profil = document.getElementById('profil')
var openModules = document.getElementsByClassName('openModules')
var closeModules = document.getElementsByClassName('closeModules')
var modules = = document.getElementsByClassName('module')

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
    let openModule = openModules[n];
    let closeModule= closeModules[n];
    let module = modules[n]
    closeModule.style.display= 'none';
    openModule.style.display='block';
    module.style.display= 'none';
}