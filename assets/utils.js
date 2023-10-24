




// Light event for object

AFRAME.registerComponent('light-event', {
    init: function () {
        var el = this.el;
        var light = document.getElementById('ambientLight');
        var spot_fleury = document.getElementById('spot-fleury');
        var spot_Laptop = document.getElementById('spot-Laptop');
        var spot_phone = document.getElementById('spot-phone');
        var spot_tn = document.getElementById('spot-tn');
        var spot_cadre = document.getElementById('spot-cadre');
        var spot_med = document.getElementById('spot-med');
        var spot_sponge = document.getElementById('spot-sponge');
        var spot_disco = document.getElementById('spot-disco');
        var spot_vr = document.getElementById('spot-vr');
        var spot_manette = document.getElementById('spot-manette');
        var spot_chien = document.getElementById('spot-chien');
        
        
        el.addEventListener('mouseenter', function () {
            light.emit('fadein');
            spot_fleury.setAttribute('light', 'color', '#FF00c8');
            spot_fleury.setAttribute('light', 'intensity', '2');
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
            spot_vr.setAttribute('light', 'color', '#FF00c8');
            spot_vr.setAttribute('light', 'intensity', '2');
            spot_manette.setAttribute('light', 'color', '#FF00c8');
            spot_manette.setAttribute('light', 'intensity', '2');
            spot_chien.setAttribute('light', 'color', '#FF00c8');
            spot_chien.setAttribute('light', 'intensity', '2');
        });
    
        el.addEventListener('mouseleave', function () {
            light.emit('fadeout');
            spot_fleury.setAttribute('light', 'color', '#ffffff');
            spot_fleury.setAttribute('light', 'intensity', '4.2');
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
            spot_vr.setAttribute('light', 'color', '#ffffff');
            spot_vr.setAttribute('light', 'intensity', '5');
            spot_manette.setAttribute('light', 'color', '#ffffff');
            spot_manette.setAttribute('light', 'intensity', '5');
            spot_chien.setAttribute('light', 'color', '#ffffff');
            spot_chien.setAttribute('light', 'intensity', '5');
        });
    }

}); 

        
        
        
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


document.addEventListener("DOMContentLoaded", function () {
    const cameraRotation = document.querySelector("#camera-rotation");
    
    document.querySelector("a-scene").addEventListener("loaded", function () {
        
        const cameraEntity = document.querySelector("[camera]");
        
        cameraEntity.addEventListener("componentchanged", function (event) {
            if (event.detail.name === "rotation") {
                const currentRotation = cameraEntity.getAttribute("rotation");
                if (currentRotation.y > 45) {
                    currentRotation.y = 45;
                    cameraEntity.setAttribute("rotation", currentRotation);
                } else if (currentRotation.y < -45) {
                    currentRotation.y = -45;
                    cameraEntity.setAttribute("rotation", currentRotation);
                }
            }
        });
    });
});


