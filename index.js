
var openProfile = document.getElementById('openProfile')
var closeProfile = document.getElementById('closeProfile')
var profil = document.getElementById('profil')
// openProfile.addEventListener('click', afficherProfil)
// closeProfile.addEventListener('click', fermerProfil)
console.log(closeProfile)
console.log(openProfile)
console.log(profil)

function afficherProfile(){
    console.log('ouvrir')
    closeProfile.style.display= 'block';
    openProfile.style.display='none';
    profil.style.display= 'block';
}

function fermerProfile(){
    console.log('fermer')
    console.log(closeProfile)
    console.log(profil)
    closeProfile.style.display= 'none';
    openProfile.style.display='block';
    profil.style.display= 'none';
}