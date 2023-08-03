


AFRAME.registerComponent('open-info', {
  init: function () {

    const infoContainer = document.getElementById('infoContainer');  // Recuperer Container 
    const infoItem = document.getElementById('infoItem');            // Recuperer Item
    const image = document.getElementById('cross')                   // Recuperer cross
    const texte = document.getElementById('txt');                    // Recuperer txt
    const nbr = document.getElementById('nbr');
    const cameraEl = document.querySelector('[camera]');             // Recupérer la cam
    const pointEl = this.el;                                         // Récupérer point interactif
    
    pointEl.addEventListener('click', () => {                        // Click envent interactive point 

      infoContainer.style.display = 'grid';                          //|
      infoContainer.style.gridTemplateRows = '1fr 1fr 1fr';          //|------> Style for Container 
      infoContainer.style.gridTemplateColumns = '1fr 1fr';           //|

      const position = pointEl.getAttribute('position');             //|
      const zoomDuration = 2500;                            //<------//| Duration zooming
      cameraEl.setAttribute('animation', {                           //|
        property: 'position',                                        //|------------------------------> Zoom in the camera towards the sphere
          to: `${-1.184} ${1.105} ${-1.189}`,               //<------//| Move camera closer to circle
          dur: zoomDuration,                                         //|    
      });                                                            //|

      pointEl.setAttribute('position', '-1.230 1.105 -1.235');       //|----> Position of circle next animation 
      pointEl.setAttribute('radius', '0.005');                       //|----> Scale of circle next animation   
      nbr.setAttribute('scale', '0.03 0.03 0.03');
      nbr.setAttribute('position', ' ');
      
      infoItem.style.color = 'Black';                                       //|
      infoItem.style.cursor = 'grab';                                       //|
      infoItem.style.fontFamily = 'webFont'                                 //|
      infoItem.style.fontWeight = 'normal';                                 //|
      infoItem.style.marginTop = '10%';                                     //|
      infoItem.style.marginRight = '10%';                                   //|
      infoItem.style.padding = '5%';                                        //|-------> Style for Item 
      infoItem.style.backgroundColor = "rgba(255, 255, 255, 0.9)";          //|
      infoItem.style.zIndex = '100';                                        //|
      infoItem.style.borderRadius = '4px';                                  //|
      infoItem.style.textAlign = 'justify';                                 //|
      infoItem.style.boxShadow =  '0px 50px 50px rgba(255, 255, 255, 0.9)'; //|

      image.setAttribute("src", "/Data/cross.png");  //|--> Style of Item 
      image.style.display = 'block';                 //|
      image.style.paddingLeft = '95%';               //|--> Reminder: Create cross in css 
      image.style.zIndex = '200';                    //|
      image.style.width = '100%';                    //|
      image.style.maxWidth = '30px';                 //|
      image.style.height = 'auto';                   //|
    
      // text 
      texte.innerHTML = 
      '<h1>ecrire ici</h1>' +
      '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a sem risus. Morbi vitae massa tortor. Aenean et mi tincidunt, dignissim mauris sed, sollicitudin purus. Vivamus gravida lorem ante, ullamcorper mattis ante pellentesque ut. Proin sit amet lobortis mi. Etiam quam purus, pellentesque in lectus et, elementum semper nisl. Suspendisse vitae pulvinar nibh. Integer aliquam non sem ornare porta. Suspendisse risus purus, consequat a dui non, varius elementum lacus. Ut tellus odio, sollicitudin a facilisis sit amet, aliquet sed eros. Vivamus faucibus lobortis sapien, eu cursus nisi tincidunt at. Fusce facilisis, ipsum vitae scelerisque ultricies, est nunc tempus diam, lacinia rhoncus purus libero eget nibh. In eget laoreet purus. Morbi tempor vel ligula sed gravida. Cras a felis mattis, elementum sem vitae, lobortis odio. Fusce ut est faucibus, tempor ligula ac, viverra justo. Phasellus id finibus dui. Praesent molestie est velit, nec hendrerit velit sodales vitae. Ut et ex eu eros ultricies mollis. In elementum ligula non eros interdum tempus. Aliquam quis dolor vel ex faucibus porttitor. Vestibulum dignissim malesuada sapien. Nam bibendum libero in ultrices lobortis. Nulla facilisi. Vivamus sollicitudin molestie est, nec porta ligula facilisis quis. Proin porta urna sit amet dolor vestibulum, vel pharetra magna tincidunt. Sed accumsan molestie bibendum. Vivamus quam ipsum, molestie vitae hendrerit nec, vehicula ac lectus. Morbi eros leo, porta ac ullamcorper sed, vestibulum non enim. Sed laoreet feugiat mi nec tristique. Mauris elit ante, iaculis vel mi tincidunt, vulputate aliquam leo. Vestibulum at lorem vestibulum, ornare magna ac, sagittis orci. In luctus cursus hendrerit. Nam tempus, quam at imperdiet ultrices, odio nunc finibus arcu, placerat faucibus urna turpis sit amet sem. Curabitur sapien ipsum, finibus nec lorem id, maximus imperdiet magna. Ut fringilla quis neque ac vehicula. Etiam ut ullamcorper dolor, a euismod lectus. Suspendisse dictum nisl ut metus pretium, vel facilisis massa ultricies. Cras tincidunt mi sollicitudin ex lobortis, nec tempor arcu tincidunt. Praesent elit mauris, eleifend nec semper vel, eleifend a nisi. Ut tincidunt laoreet purus, sit amet efficitur augue venenatis ut. </p>'+
      '<p> Nunc convallis gravida nibh ut placerat. Mauris risus lectus, imperdiet sed tortor non, consectetur congue justo. Fusce cursus nisi elit, non commodo ipsum convallis in. Aliquam hendrerit tortor porttitor turpis dapibus convallis. Nunc tempor, justo eu ultricies volutpat, tortor orci viverra nunc, ac tempor turpis arcu eu ex. Ut consequat lobortis malesuada. Nullam porta tellus vitae urna dignissim, et lobortis nisi consequat. Curabitur in tincidunt libero. Donec non posuere ex. Nullam tempus sed dolor rhoncus condimentum. Mauris a accumsan dui. Sed sollicitudin leo elit. Pellentesque sed varius sapien. Nunc semper maximus arcu id egestas. Aenean condimentum ornare ipsum, et sodales lectus bibendum non. In feugiat ex eu efficitur viverra. Phasellus commodo posuere urna quis blandit. Morbi mattis aliquet libero sit amet porttitor. Nam sed mauris ut mauris iaculis accumsan. Sed urna diam, ultrices vitae nisi eu, scelerisque faucibus ipsum. Nunc finibus lorem vel arcu condimentum sagittis eget eget nisi. Vivamus faucibus pellentesque nunc, nec aliquet dui porta non. Donec nisl tortor, maximus nec malesuada eget, ultricies sed libero. Mauris auctor eleifend lorem, vitae dignissim turpis elementum nec. Pellentesque gravida magna id odio luctus lobortis. Nam tempus sed sapien vel tincidunt.</p>';
    });

    image.addEventListener('click', () =>{                         //|--------------> Close div with Button 
        cameraEl.setAttribute('animation', {                       //|
        property: 'position',                                      //|
        to: '-0.262 2.148 1.803',                    //<-----------//| Back Original camera position 
      });                                                          //|
      infoContainer.style.display = 'none';          //<-----------//| Close div dispay 
      pointEl.setAttribute('position', '-1.184 1.105 -1.189'); //<-//| Back position cicle 
      pointEl.setAttribute('radius', '0.05');        //<-----------//| Back size circle 
      nbr.setAttribute('scale', '0.3 0.3 0.3');
    })

    //const pointEl = this.el; // Récupérer point interactif

    // Change color on mouse enter
    pointEl.addEventListener('mouseenter', () => {
      pointEl.setAttribute('color', 'rgba(255, 1, 255, 1)'); // Change color to red (or any other color you prefer)
    });

    // Change color back on mouse leave
    pointEl.addEventListener('mouseleave', () => {
      pointEl.setAttribute('color', 'white'); // Change color back to white
    });
  }
});


const Credit = document.getElementById('Credit');                        //| Recuperer img 
const infoContainer1 = document.getElementById('infoContainer1');        //| Recuperer div a afficher 
const infoItem1 = document.getElementById('infoItem1');
const infoItem2 = document.getElementById('infoItem2');
const txt1 = document.getElementById('p1');
const txt2_1 = document.getElementById('p2_1');
const txt2_2 = document.getElementById('p2_2');
const txt2_3 = document.getElementById('p2_3');
const quitImage = document.getElementById('quitimage');

// Ajouter un événement de clic à l'image
Credit.addEventListener('click', () => {
  
  
  infoContainer1.style.display = 'grid';                                         //|     
  infoContainer1.style.gridTemplateRows = '1fr 1fr 1fr';                         //|------> Style for Container 
  infoContainer1.style.gridTemplateColumns = '1fr 1fr';                          //|
  infoContainer1.style.margin = '5%';
  infoContainer1.style.cursor = 'pointer';
  
  infoItem1.style.zIndex = '10000';  // Make the div appear on top
  infoItem1.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
  infoItem1.style.position = 'relative'; // Position the div relative to the viewport
  infoItem1.style.fontFamily = 'Lausanne';                                 //|
  infoItem1.style.fontWeight = 'light';
  infoItem1.style.fontSize = '1.4rem';
  infoItem1.style.textAlign = 'match-parent';
  infoItem1.style.lineHeight = '1.5';
  infoItem1.style.paddingTop = '1.5%';
  infoItem1.style.paddingBottom = '1.5%';
  infoItem1.style.paddingLeft = '3%';
  infoItem1.style.paddingRight = '3%';
  txt1.innerHTML = 
  '<p>L’intimité est une notion très abordée dans le champ de l’art contemporain, en particulier entre les années 70 et 90 (Nan Goldin, Sophie Calle, Greg Araki, etc.) puis, à partir des années 2000 avec la démocratisation d’Internet. Néanmoins, nous avons identifié une ré- surgence particulièrement forte de la question de l’intimité depuis la crise du Covid-19, en particulier via l’espace domestique médiatisé sur le web. Un exemple frappant (bien qu’il concerne essentiellement les classes moyennes et supérieures et non les classes ouvrières/prolé- taires) : la généralisation partielle du télétravail. Nos intérieurs (salons, chambres...) sont peu à peu pensés et transformés pour devenir les décors de nos activités professionnelles, à l’image des influenceur. euse.s, streamer.euse.s et des travailleur.euse.s du sexe digitales. Nous assistons ainsi à une reconfiguration des distinctions entre le privé et le public, le personnel et le professionnel... \n \n  Partant de ce constat, notre pavillon virtuel prend la forme d’une chambre dans laquelle nous invitons des artistes et chercheur.euse.s à intervenir et/ou exposer. Comme une actualisation de The Kitchen Show (1991) d’Hans Ulrich Obrist, ou encore d’Open Bedroom (1993) de Jeremy Deller, nous envisageons l’espace domestique comme un lieu d’exposition alternatif pour mieux interroger les nouveaux enjeux de l’exposition de nos intérieurs sur le web.</p>'
  
  
  infoItem2.style.zIndex = '10000';  // Make the div appear on top
  infoItem2.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
  infoItem2.style.position = 'relative'; // Position the div relative to the viewport
  infoItem2.style.fontFamily = 'Lausanne';
  infoItem2.style.display = 'flex';
  infoItem2.style.flexDirection= 'row';
  infoItem2.style.flexWrap = 'nowrap';
  infoItem2.style.justifyContent = 'space-around';
  infoItem2.style.alignItems = 'stretch'; 
  infoItem2.style.alignContent = 'stretch';
  infoItem2.style.paddingTop = '1.5%';
  infoItem2.style.paddingBottom = '1.5%';
  infoItem2.style.paddingLeft = '3%';
  infoItem2.style.paddingRight = '3%';
  infoItem2.style.overflowY = 'auto';
  infoItem2.style.maxHeight = '70vh';
  
  txt2_1.style.display = 'block';
  txt2_1.style.flexGrow = '0';
  txt2_1.style.flexShrink = '1';
  txt2_1.style.flexBasis = 'auto';
  txt2_1.style.alignSelf = 'auto';
  txt2_1.style.order = '0';
  txt2_1.innerHTML = 
  '<h2 class="Status">Artiste</h2>' + 
  '<p class="name">Nicolas Bailleul</p>'+
  '<p class="name">Faustine de Bock</p>'+
  '<p class="name">Simone C. Niquille</p>'+
  '<p class="name">Vincent Duché</p>'+
  '<p class="name">Raphaël Fabre</p>'+
  '<p class="name">Fleuryfontaine</p>'+
  '<p class="name">Gala Hernandez</p>'+
  '<p class="name">Alice Lenay</p>'+
  '<p class="name">Bérénice Serra</p>'+
  '<p class="name">Kévin Zanin</p>'+
  '<h2 class="Status margin">Curateur</h2>' + 
  '<p class="name">Vincent Duché \n \n \n \n</p>'+
  '<h2 class="Status">en collaboration avec</h2>'+
  '<p class="name">Faustine de Bock</p>';
  
  txt2_2.style.display = 'block';
  txt2_2.style.flexGrow = '0';
  txt2_2.style.flexShrink = '1';
  txt2_2.style.flexBasis = 'auto';
  txt2_2.style.alignSelf = 'auto';
  txt2_2.style.order = '0';
  txt2_2.innerHTML = 
  '<h2 class="Status">CGI</h2>' + 
  '<p class="name">Erwin Souveton</p>'+
  '<h2 class="Status margin">Programmation</h2>' + 
  '<p class="name">Benoit Fage</p>'+
  '<h2 class="Status margin">Design Graphique</h2>'+
  '<p class="name">Camille Chatelaine</p>';
  
  txt2_3.style.display = 'block';
  txt2_3.style.flexGrow = '0';
  txt2_3.style.flexShrink = '1';
  txt2_3.style.flexBasis = 'auto';
  txt2_3.style.alignSelf = 'auto';
  txt2_3.style.order = '0';
  // txt2_3.appendChild(quitImage);
  // quitImage.style.display = 'block'; // Display the image
  txt2_3.innerHTML = 
  '<h2 class="Status">Remerciements</h2>' + 
  '<p class="name">Marie Bonhomme</p>'+
  '<p class="name">Simon Blanjoie</p>'+
  '<p class="name">Jonathan Coryn</p>'+
  '<p class="name">Gabriel Desplanque</p>'+
  '<p class="name">Angèle Ferrere</p>'+
  '<p class="name">Colette Morel</p>'+
  '<p class="name">Le Fresnoy</p>'+
  '<p class="name">Fanny Vagné</p>'+
  '<p class="name">Gwenola Wagon</p>'+
  '<img id="quitimage" class="responsivecross" src="/Data/cross.png"">';

  infoItem2.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.id === 'quitimage') {
      infoContainer1.style.display = 'none';
    }
  });
  
});

