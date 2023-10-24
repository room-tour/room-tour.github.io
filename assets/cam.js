AFRAME.registerComponent('custom-camera-controls', {
    init: function () {
      const cameraEl = document.getElementById('cam');
      const horizontalStartAngle = -45;   // Angle de départ de rotation horizontale (en degrés)
      const horizontalEndAngle = 28;     // Angle d'arrêt de rotation horizontale (en degrés)
      const verticalStartAngle = -14;     // Angle de départ de rotation verticale (en degrés)
      const verticalEndAngle = 30;       // Angle d'arrêt de rotation verticale (en degrés)
      const rotationSpeed = 0.1;        // Vitesse de rotation
      let isRotating = false;
      let previousMouseX;
      let previousMouseY;
  
      // Fonction pour mettre à jour la rotation de la caméra
      const updateRotation = function (event) {
        if (isRotating) {
          const deltaX = event.clientX - previousMouseX;
          const deltaY = event.clientY - previousMouseY;
          const currentRotation = cameraEl.getAttribute('rotation');
          const newRotation = {
            x: currentRotation.x - deltaY * rotationSpeed,
            y: currentRotation.y - deltaX * rotationSpeed,
            z: 0
          };
  
          // Restreindre la rotation verticale
          newRotation.x = Math.min(verticalEndAngle, Math.max(verticalStartAngle, newRotation.x));
  
          // Si l'angle de rotation horizontale dépasse l'angle d'arrêt, ajustez-le
          if (newRotation.y < horizontalStartAngle) {
            newRotation.y = horizontalStartAngle;
          } else if (newRotation.y > horizontalEndAngle) {
            newRotation.y = horizontalEndAngle;
          }
  
          cameraEl.setAttribute('rotation', newRotation);
          previousMouseX = event.clientX;
          previousMouseY = event.clientY;
        }
      };
  
      // Fonction pour activer la rotation lors du clic
      const startRotation = function (event) {
        if (event.button === 0) { // Le clic gauche est enfoncé
          isRotating = true;
          previousMouseX = event.clientX;
          previousMouseY = event.clientY;
        }
      };
  
      // Fonction pour désactiver la rotation lors du relâchement du clic
      const stopRotation = function (event) {
        if (event.button === 0) { // Le clic gauche est relâché
          isRotating = false;
        }
      };
  
      // Écouter les événements de clic et de mouvement de la souris pour la rotation de la caméra
      window.addEventListener('mousedown', startRotation);
      window.addEventListener('mousemove', updateRotation);
      window.addEventListener('mouseup', stopRotation);
    }
  });
  