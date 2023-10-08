

var camera = document.querySelector('#cam');

// Définissez l'angle horizontal de limitation en degrés
var maxHorizontalAngle = 4; // Par exemple, limite à ±45 degrés

// Écoutez les événements de rotation de la caméra
camera.addEventListener('componentchanged', function (evt) {
if (evt.detail.name === 'rotation') {
    var rotation = camera.getAttribute('rotation');
    if (rotation.x > maxHorizontalAngle) {
    rotation.x = maxHorizontalAngle;
    camera.setAttribute('rotation', rotation);
    } else if (rotation.x < -maxHorizontalAngle) {
    rotation.x = -maxHorizontalAngle;
    camera.setAttribute('rotation', rotation);
    }
}
});
  


// Light event for object

AFRAME.registerComponent('light-event', {
    init: function () {
        var el = this.el;
        var light = document.getElementById('ambientLight');
        var spot_fleury = document.getElementById('spot-fleury');
        var spot_Serra = document.getElementById('spot-Serra');
        var spot_Laptop = document.getElementById('spot-Laptop');
        var spot_phone = document.getElementById('spot-phone');
        var spot_tn = document.getElementById('spot-tn');
        var spot_cadre = document.getElementById('spot-cadre');
        var spot_med = document.getElementById('spot-med');
        var spot_sponge = document.getElementById('spot-sponge');
        var spot_disco = document.getElementById('spot-disco');


        el.addEventListener('mouseenter', function () {
        console.log('Day !');
        light.emit('fadein');
        spot_fleury.setAttribute('light', 'color', '#FF00c8');
        spot_fleury.setAttribute('light', 'intensity', '2');
        spot_Serra.setAttribute('light', 'color', '#FF00c8');
        spot_Serra.setAttribute('light', 'intensity', '2');
        spot_Laptop.setAttribute('light', 'color', '#FF00c8');
        spot_Laptop.setAttribute('light', 'intensity', '2');
        spot_phone.setAttribute('light', 'color', '#FF00c8');
        spot_phone.setAttribute('light', 'intensity', '2');
        spot_tn.setAttribute('light', 'color', '#FF00c8');
        spot_tn.setAttribute('light', 'intensity', '2');
        spot_cadre.setAttribute('light', 'color', '#FF00c8');
        spot_cadre.setAttribute('light', 'intensity', '2');
        spot_med.setAttribute('light', 'color', '#FF00c8');
        spot_med.setAttribute('light', 'intensity', '2');
        spot_sponge.setAttribute('light', 'color', '#FF00c8');
        spot_sponge.setAttribute('light', 'intensity', '2');
        spot_disco.setAttribute('light', 'color', '#FF00c8');
        spot_disco.setAttribute('light', 'intensity', '2');
        });
        
        el.addEventListener('mouseleave', function () {
        console.log('Night !');
        light.emit('fadeout');
        spot_fleury.setAttribute('light', 'color', '#ffffff');
        spot_fleury.setAttribute('light', 'intensity', '4.2');
        spot_Serra.setAttribute('light', 'color', '#ffffff');
        spot_Serra.setAttribute('light', 'intensity', '4.2');
        spot_Laptop.setAttribute('light', 'color', '#ffffff');
        spot_Laptop.setAttribute('light', 'intensity', '5');
        spot_phone.setAttribute('light', 'color', '#ffffff');
        spot_phone.setAttribute('light', 'intensity', '5');
        spot_tn.setAttribute('light', 'color', '#ffffff');
        spot_tn.setAttribute('light', 'intensity', '5');
        spot_cadre.setAttribute('light', 'color', '#ffffff');
        spot_cadre.setAttribute('light', 'intensity', '5');
        spot_med.setAttribute('light', 'color', '#ffffff');
        spot_med.setAttribute('light', 'intensity', '5');
        spot_sponge.setAttribute('light', 'color', '#ffffff');
        spot_sponge.setAttribute('light', 'intensity', '5');
        spot_disco.setAttribute('light', 'color', '#ffffff');
        spot_disco.setAttribute('light', 'intensity', '5');
        });
    }
});


// Écouteur d'événement raycaster-intersected sur la caméra
// document.querySelector('#cam').addEventListener('raycaster-intersected', function (event) {
//     if (event.detail.els && event.detail.els.length > 0) {
//       const intersectedElement = event.detail.els[0]; // Premier élément intersecté
//       console.log('Ray intersected with', intersectedElement);
//     }
//   });
  
  







// mouse
const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});

document.addEventListener('DOMContentLoaded', () => {
    const fullPageDiv = document.querySelector('.full-page-div');
    const closeSquare = document.querySelector('.close-square');

    // Ajouter un gestionnaire d'événements pour le carré
    closeSquare.addEventListener('click', () => {
        fullPageDiv.style.display = 'none';
    });
});






// Welcome Page
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const fullPageDiv = document.querySelector('.full-page-div');

// Sélectionnez l'élément .close-square
const closeSquare = document.querySelector('.close-square');

// Stockez les styles d'origine de .title et .subtitle pour une réinitialisation ultérieure
const originalTitleStyles = {
    color: title.style.color,
    textShadow: title.style.textShadow
};

const originalSubtitleStyles = {
    color: subtitle.style.color,
    textShadow: subtitle.style.textShadow
};

const originalFullPageDivStyle = {
    backgroundColor: fullPageDiv.style.backgroundColor
};

// Ajoutez un gestionnaire d'événements pour le survol
closeSquare.addEventListener('mouseenter', () => {
    // Changez la couleur du texte et la ombre portée de .title et .subtitle en rose
    title.style.textShadow = '0px 0px 10px rgb(255, 255, 255)';
    subtitle.style.textShadow = '0px 0px 10px rgb(255, 255, 255)';
    fullPageDiv.style.backgroundColor = 'rgba(255, 19, 204, 0.5)'
});

// Ajoutez un gestionnaire d'événements pour le départ du survol (pour rétablir les styles d'origine)
closeSquare.addEventListener('mouseleave', () => {
    // Retabilr paramtre default style 
    title.style.textShadow = originalTitleStyles.textShadow;
    subtitle.style.textShadow = originalSubtitleStyles.textShadow;
    fullPageDiv.style.backgroundColor = originalFullPageDivStyle.backgroundColor;
});
