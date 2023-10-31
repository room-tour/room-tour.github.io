



AFRAME.registerComponent('custom-camera-controls', {
    init: function () {
      const cameraEl = document.getElementById('cam');
      const horizontalStartAngle = -45;   // Angle
      const horizontalEndAngle = 28;      // Angle 
      const verticalStartAngle = -14;     // Angle 
      const verticalEndAngle = 30;        // Angle 
      const rotationSpeed = 0.1;          // Rotation speed
      let isRotating = false;
      let previousMouseX;
      let previousMouseY;
  
      // Update camera rotation 
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
  
          // Restrict vertical rotation
          newRotation.x = Math.min(verticalEndAngle, Math.max(verticalStartAngle, newRotation.x));
  
          // horizontal rotation angle exceeds stop angle
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
  
      // activate rotation on click
      const startRotation = function (event) {
        if (event.button === 0) { // Le clic gauche est enfoncé
          isRotating = true;
          previousMouseX = event.clientX;
          previousMouseY = event.clientY;
        }
      };
  
      // activate rotation on click
      const stopRotation = function (event) {
        if (event.button === 0) { // Le clic gauche est relâché
          isRotating = false;
        }
      };
  
      // events click mouse movement camera rotation
      window.addEventListener('mousedown', startRotation);
      window.addEventListener('mousemove', updateRotation);
      window.addEventListener('mouseup', stopRotation);
    }
  });
  