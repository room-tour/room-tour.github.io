const image = document.getElementById('cross')                   
const texte = document.getElementById('txt');


//  Variable presentation artist cartel

const fleuryfontaine = '<h1 class="artsname">fleuryfontaine</h1>' +
                        '<h1 class="projectname">Ange</h1>'+
                        '<h1 class="dateProject">2019</h1>'+
                        '<img id="fleury" class="responsiveI" src="./Data/Fleury.png">'+
                        '<p>Ange is the result of discutions with a “hikikomori”. This term imported from Japan, which has no equivalent in France, is used to describe young adults, sometimes even teenagers, choosing not to leave their room or their apartment for months or even years. Ael is one of them, recluse in a shed in his parents garden for 13 years, somewhere in the south of France. We maintained a relationship with him using internet, using video game as a medium to try to reconstruct the world of this hikikomori and to engage a dialogue during game sessions where Ael evolves in the environments we made for him. His room, his objects, the parental home, his neighborhood, this film reveals the fragmented portrait of a man hiding from the world.</p>'+
                        '<a href="https://vimeo.com/869562165/bd7c2a7098" target="_blank"><button id="myButton" class="center-button">WATCH</button></a>' +
                        '<p> <span class="highlight-name">fleuryfontaine</span> is an artistic duo exploring the place each of us occupies in the neo-liberal, artificial and secure environments that condition our behaviors, our bodies, our relationship to the world and to others. They work with installations, sculptures, performances, as well as digitally generated images. Graduated from the Paris Malaquais School of Architecture in 2008, Galdric Fleury and Antoine Fontaine began a training at the Paris- Cergy School of Arts in 2010 where they start a practice as a duo, under the pseudonym fleuryfontaine. They are graduated from the Studio national des Arts contemporains Le Fresnoy in 2020.</p>';
                        
const VetF = '<h1 class="artsname">Faustine De Bock & Vincent Duché</h1>' +
              '<h1 class="projectname">In My Room</h1>'+
              '<h1 class="dateProject">2023</h1>'+
              '<img id="fleury" class="responsiveI" src="./Data/VetF.png">'+
              "<p> In reference to the autobiographical novel by Guillaume Dustan in which the author describes his interior as a shared space, crossed by lovers and flows, In My Room opens up a digital double of Vincent Duché's bedroom to browse easyly through. Thus, the artwork materializes the paradox of exposed intimacy. Manipulatable and yet elusive, modeled and fragmented, the 3D model functions like an imprint, a physical contact already lost to reality. Closed and fragile diegesis surrounded by indefinite space, In My Room is an antechamber permeable to others elsewhere, accessible via hyperlink objects. This exposed space/exhibition space has to be visited in a subjective, immobile view, but the exploration must be meticulous: links connecting one intimacy to another has to be unearthed. The presence of these transitional objects recalls the strange absence of the works. In My Room, is an exhibition space that can be tamed, with which we become familiar, with which we enter into intimacy.</p>"+
              //'<a href="https://fleuryfontaine.fr/ange/" target="_blank"><button id="myButton" class="center-button">WATCH</button></a>' +
              '<p> <span class="highlight-name">Faustine De Bock</span> is a video artist and director. Her artistic production  (under the name of Konpyuta, as a duet) includes experimental films, clips and audiovisual performances. She is particularly interested by the body in movement and the disappearance of the figurative quality of the image by analog or digital alteration processes. She has performed at the Gaîté Lyrique in Paris and at the Dour Festival. At the same time, she develops image education and mediation workshops for various audiences. In this context she works on what she calls "embodied writing" in relation to social issues, such as eco-anxiety or our presence on the internet. <br> <br>    <span class="highlight-name">Vincent Duché</span> is an artist, researcher and teacher. His work deals with aesthetic and sociopolitical issues related to the representation of body, face and domestic space on the Internet. His practice includes video installations, slideshows, sound pieces, academic papers and educational / curatorial projects. He graduated from Ecole Supérieure d’Art et de Design Grenoble-Valence, then joined the “Spatial Media” research program at Ecole Nationale Supérieure des Arts Décoratifs (EnsadLab), and afterwards the “Aesthetic, Sciences and Technologies of the Art” Phd program at the Paris 8 University Vincennes-Saint-Denis. He notably showed his work at the Biennale Internationale du Design (Saint-Etienne) and at the contemporary art centre Synesthésie (Saint-Denis).</p>';
              
const Serra = '<h1 class="artsname">Bérénice Serra</h1>' +
              '<h1 class="projectname">Customs: Home Screens</h1>'+
              '<h1 class="dateProject">2023</h1>'+
              '<img id="fleury" class="responsiveI" src="./Data/Serra.png">'+  
              '<p>Customs is an image bank that has been curated since 2020 through a unique protocol. Personal data, including names, first names, addresses, phone numbers, and email addresses, is manually collected outside of digital channels. This information is gathered from luggage tags attached to suitcases left on trains that the artist regularly travels on between France and Switzerland. Through this method, passengers are approached and invited to initiate a conversation that may lead to the exchange of multimedia content: videos, images, and sometimes even audio recordings. These contents are then used by the artist on various occasions, as she receives invitations from the art community. As part of The Wrong Biennale 2023, a selection of images was made based on the conversations that took place with passengers. Customs: Home Screens thus brings together all the photographs sent by passengers who mentioned going home as the purpose of their journey. The project s website is conceived as a photo novel that compiles these brief encounters. Visitors are free to download these images (CC-BY NC 4.0) with the intention of using them as the home screen wallpapers on their own devices.</p>'+
              '<a href="http://berenice-serra.com/home-screens/" target="_blank"><button id="myButton" class="center-button">VISIT WORK</button></a>' +
              '<p> <span class="highlight-name">Bérénice Serra</span> (b.1990) is a media artist and researcher based in Zürich (CH). She develops both artistic and theoretical projects that question the modes of conception, production and exchange of cultural forms in the digital age. By collecting user-generated images, designing hybrid books with the languages of the web and curating wild exhibitions with smartphones, she is essentially interested in the problem of publication — how contents go public. By considering digital devices and technical infrastructures (smartphones, servers, platforms, etc.) as reticular means of publication and edition, giving individuals new forces for emancipation, Bérénice Serra’s research focuses on the aesthetic and sociopolitical issues of the contemporary experience of public space. Her work has been included in numerous group exhibitions, in France and abroad (Biennale internationale du design de Saint-Étienne, Mucem, CCA Kitakyushu, Athens Digital Art Festival, Ars Electronica Linz, etc.). </p>';

const Lenay = '<h1 class="artsname">Alice Lenay</h1>' +
              '<h1 class="projectname">Figuring Out Images</h1>'+
              '<h1 class="dateProject">2023</h1>'+
              '<img id="fleury" class="responsiveI" src="./Data/lenay.jpeg">'+
              '<p>Test video for a performative investigation into the influence of images. For this project, I ask the algorithm to inlay an image on my own body. To do this, instead of a green background color, I select one of the colors of my skin. In my apartment, the different light variations visible on my naked body create a chattering, unstable image, which I can play with live, in front of my personal computer. Featured extract : Le Mépris, Jean-Luc Godard, with Brigitte Bardot.</p>'+
              '<a href="https://mega.nz/file/oj1B1QaQ#P6YZ9NsgqjB-rhMznHtpwK7cShBMq_6yqWb_Ii_2_28" target="_blank"><button id="myButton" class="center-button">WATCH</button></a>' +
              '<p><span class="highlight-name">Alice Lenay</span> is an artist and researcher. She creates performances and video installations which question our desire to meet others. After studying cinema and philosophy, she presented a PhD in 2020 on communication with on-screen faces. She is now Assistant Professor at the University of Paris 8, where she teaches and develops her art-based research within the AIAC (TEAMeD) laboratory. She pursues her studies on online “listening protocols”, through a methodology of performance as research which questions the very embodied relationship with screens.</p>';
                            
const Gala = '<h1 class="artsname">Gala Hernández López</h1>' +
              '<h1 class="projectname">How to access your desired reality <br> <br> (a tutorial)</h1>'+
              '<h1 class="dateProject">2022</h1>'+
              '<img id="fleury" class="responsiveI" src="./Data/gala.jpg">'+ 
              '<p>“Reality shifting” is a practice that became popular among adolescents and young people in the #shiftok universe on TikTok at the beginning of the COVID-19 pandemic. It consists of reaching an altered state of consciousness through different exercises -meditation, self-hypnosis, writing a script, repeating “affirmations”, music- that allows you to escape from your current reality (CR, Current Reality) to access or “shift” to your desired reality (DR, Desired Reality). The desired reality is usually the world of a pre-existing fiction such as Harry Potter or Narnia, in which the person wishes to live. <br> <br> Adopting the form of a tutorial, the performance will expose the different methods at our disposal to build our desired reality in digital capitalism. What is a desired or desirable reality, hyper-adapted to the subject that inhabits it? What fictions do we live in? What does the “reality shifting” tell us about a society increasingly terrified of risk, conflict and dissensions and immersed in a fantasy of security and individual omnipotence without limits?</p>'+
              '<a href="https://www.galahernandez.com/en/proyectos/how-to-access-your-desired-reality-a-tutorial/" target="_blank"><button id="myButton" class="center-button">VISIT WORK</button></a>' +
              '<p><span class="highlight-name">Gala Hernández López</span> is an artist-researcher and filmmaker. Her work articulates interdisciplinary research with the production of essay films, video installations and performances on the new modes of subjectivation specifically produced by computational digital capitalism. She examines from a feminist and critical lens the discourses and imaginaries circulating in virtual communities as symptomatic fictions of a state of the world. Her work has been shown at DOK Leipzig, Cinéma du Réel, IndieLisboa, the Clermont-Ferrand Short Film Festival and the Salon de Montrouge, among others. She participated in Berlinale Talents 2023 and has won the Experimental Work Award 2023 of La SCAM (France). She is a PhD candidate at the University Paris 8, where she is developing a research-creation project on screen capture and where she has taught for 3 years. She has been an Associate Professor (ATER) at the University Gustave Eiffel and a visiting researcher at the Filmuniversität Babelsberg Konrad Wolf (Germany) thanks to a DAAD research grant. In 2023-2024, she will be artist in residence at the French Academy in Spain – Casa de Velázquez. She co-directs the research and creation collective After Social Networks (www.after-social-networks.com). In 2023, she is artist in residence in La Métive (FR), Vidéoformes (FR), Maison Artagon (FR) and GuestRoom Maribor (Slovenia). She regularly gives workshops and lectured-performances, in places such as the Filmuniversität Konrad Wolf, Sorbonne University, Beaux Arts de Marseille or the Locarno Film Festival.</p>';
              
const RASSEL = '<h1 class="artsname">Élodie Rassel</h1>' +
              '<h1 class="projectname">SUPREME I, II, III & IV</h1>'+
              '<h1 class="dateProject">2017</h1>'+
              '<img id="fleury" class="responsiveI" src="./Data/Rassel.jpeg">'+
              '<p>"The camera searches the walls, following the trail of the dwarf crocodile. The music of Unglee Izi, with its electric-throated elfin mass, gives direction. It says to look in the Ardennes, in a pavilion basement, in little-girl memories. Then the crocodile, if you know how to play its belly like a mandolin, will tell you what s burning behind the wallpaper." Jérôme Momcilovic</p>'+
              '<a href="https://www.youtube.com/watch?v=TjcS2hgpU7E" target="_blank"><button id="myButton" class="center-button">WATCH</button></a>' +
              '<p><span class="highlight-name">Élodie Rassel</span> is a director and videographer. She produces video objects that she distributes on the Internet, sometimes under the pseudonym Zofie Taueber.Using images captured with a camcorder, webcam recordings and videos gleaned from the net, Youtube and Google Earth, she creates a waking dream, a new world, adding an echo, a visual reverberation to the melancholy of everyday life. She regularly collaborates with artist Unglee Izi.</p>';
              
const Zanin = '<h1 class="artsname">Kévin Zanin</h1>' +
              '<h1 class="projectname">Crossover</h1>'+
              '<h1 class="dateProject">2021</h1>'+
              '<img id="fleury" class="responsiveI" src="./Data/Crossover_1.png">'+
              '<p>What similarities are there between a conspiracy theory born on an imageboard dedicated to english-speaking otaku culture and the militant video of a TikTok influencer who reproduces dance moves from cosplay? One of the first elements of similarity was a strange sensation for me: that of being faced with socio-numerical phenomena that reminded me of video games and my fan practice. Based on this feeling, In this essay I investigate conspiracy narratives linked to the QAnons, cosplayer gestures on TikTok as well as digital profiles of e-girl and waifu on the networks. Phenomena that participate through their interactions and recombinations in the writing of contemporary cultural, economic and political narratives. Although they may seem far apart, I hypothesise that these different cases of study are crossovers. Cultural objects assembled by fans from fragments of narrative elements and visual details drawn from shared cultural ensembles and evolving on digital platforms. It is from my experience of fandom culture and the notions of database and hyperstition that I explore this hypothesis.</p>'+
              '<a href="http://www.kevinzanin.com/crossover" target="_blank"><button id="myButton" class="center-button">READ</button></a>' +
              '<p><span class="highlight-name">Kévin Zanin</span> is an artist-researcher and graphic designer. He investigates and documents the expansion and polyphony of cultural narratives on the Internet. Somewhere between ethnography, being a fan and forensic practices, his work seeks to account for both the sensitive experience induced by the use of digital platforms and the multiplicity of voices participating in the creation and interpretation of the same story, same lore and same gimmick. His research takes the form of editions, installations and conferences, all of which put research into narrative, questioning the visual references, power relationships and political stakes that are played out and thwarted in popular cultures, digital communities and fandoms. Kévin Zanin studied at Esad de Reims and La Villa Arson. In 2018, he joined CyDRe at Esad de Saint-Étienne. At CyDRe, he works on the graphic and editorial design of the magazine Azimuts (no. 50, Négocier les futurs (2019) and no. 51, -formation (2020)) and participates as co-curator and co-scenographer in the exhibition La table des négociations at the 11th Saint-Étienne International Design Biennial in 2019. In 2020, he presents a solo exhibition at l Antenne, hit or miss I guess they never miss huh, which introduces TikTok and cosplay as new subjects of investigation. In 2021 he defends a design research diploma, The Doom Lab at Esad/Cité du design de Saint-Étienne, an exploration of various contemporary socio-numerical phenomena: QAnon, e-girls, waifus and cosplay on TikTok. In 2022, at the 12th Saint-Étienne International Design Biennial, he develops an editorial project for the À l intérieur de la production exhibition, La Navette, with Thibault le Page. In 2023, he launched Digital Drifting, exploring network folklores with Thibault le Page, a fanzine about digital drifting and emerging popular cultures. Currently, and since 2021, with the Quick & Dirty collective, he has been working on the creation of a database of stories linked to a "deviant" conception of truth circulating on social networks. This project will be presented in the form of a radio reading at the Method Room in 2023.</p>';

const Stemmer = '<h1 class="artsname">Gabrielle Stemmer</h1>' +
                          '<h1 class="projectname">Clean With Me (After Dark)</h1>'+
                          '<h1 class="dateProject">2019</h1>'+
                          '<img id="fleury" class="responsiveI" src="./Data/Stemmer.png">'+
                          '<p>On YouTube, hundreds of women film themselves cleaning their homes. It was after discovering the “clean with me” videos that the director decided to make them the subject of a documentary film exclusively shot on a computer screen. An investigation into the heart of a confusing lifestyle phenomenon, Clean With Me (After Dark) questions these images and their behind-the-scenes.</p>'+
                          '<a href="https://vimeo.com/868201863/5ab1efecdb?share=copy" target="_blank"><button id="myButton" class="center-button">WATCH</button></a>' +
                          '<p>Editor and director, <span class="highlight-name">Gabrielle Stemmer</span> explores alternative narratives through the interactive fields offered by the Internet. In parallel with her work as an editor, she focuses her personal projects on Internet archives, the theme of misleading images and the question of the female model. After literary studies and a year at Yale University, she joined La Fémis and made her first short films which combine fiction and documentary. Her graduation film, Clean With Me (After Dark), winner of the Special Jury Prize in Clermont-Ferrand in 2020, is the first stone of Sweet Home, unveiled as part of a carte blanche at CENTQUATRE-PARIS and for which she received the Scam Emergence Prize in 2020. Following on from Clean With Me (After Dark), Gabrielle produced the web series Femmes sous Algorithmes (5x10min), released in 2023.</p>';
                                                    
const wagon = '<h1 class="artsname">Gwenola Wagon & Pierre Cassou-Noguès</h1>' +
                '<h1 class="projectname">The Agents #1</h1>'+
                '<h1 class="dateProject">2023</h1>'+
                '<img id="fleury" class="responsiveI" src="./Data/wagon.jpeg">'+
                '<p>How do screens transform the problem of inhabitation as it was posed in the 20th century, for example in the opposition between Heidegger and Le Corbusier over "machines for inhabiting"? How does digital technology change the way we live? We interrogate contemporary modes of inhabitation as mediated by the digital. Digital inhabitation covers a wide range of practices and situations: the search for a home on real estate websites; the time and space occupied and organised around the screen in contemporary living; the urban transformations wrought by accommodation platforms... Real or virtual, dwelling is experienced, fantasised and analysed in the first person. Our research includes first-person accounts, fictions, speculations and theoretical analyses. It materialises in creations in several media: a book, a website, a video production and a series of performances around the texts of the book "Habiter", which aims to stage the transformative power of the digital through the use of filters. The Agents #1 is a video installation that questions the contemporary life machine. In the near future, real estate advertisements are generated by an AI. Descriptions and photographs are repeated and merged into a uniform cocoon fantasy. Soon, filters will be applied to the faces of estate agents, who will take on the stereotypical appearance of animated characters. The cocoon is so soft and colourful that it becomes a nightmare.</p>'+
                '<a href="https://vimeo.com/862966736" target="_blank"><button id="myButton" class="center-button">WATCH</button></a>' +
                '<p><span class="highlight-name">Gwenola Wagon</span> works both alone and in groups. Her projects explore the outskirts of megacities (Postcards from the Paris Suburbs, Immobile Journey), survey the virtual globe (Globodrome), analyze the mutations of work (Institute of Neoteny, Erewhon), question the automation of product, living and data processing (Cyborgs in the Mist, The World as a  Warehouse, Atlas of the Cloud), question the virality of information (Dance Party in Iraq, Cat Loves Pig, La Maison qui vous veut du bien, Virusland), psychoanalyze of the international airport (Psychanalyse de l aéroport in ternational), drift to geolocation technologies (Moillesulaz 1/1, Random GPS), imagine alternatives and paradoxical narratives to question the contemporary digital world (Planète B, Les Agents). https://d-w.fr/  <br> <br> Pierre Cassou-Noguès is a philosopher and writer. He is a professor at Paris 8 University. He is co-editor of the journal SubStance. His books include Une histoire de machines, de vampires et de fous (Vrin, 2007); Les Démons de Gödel. Logique et folie (Seuil, 2007); Mon zombie et moi (Seuil, 2009), La Mélodie du tic-tac (Flammarion, 2013); Les Rêves cybernétiques de Norbert Wiener (Seuil, 2014)). His philosophical work is based on a theoretical use of fiction. For him, fiction is a means of exploring the possible and its limits. In his most recent work, he applies this philosophy-fiction to the problems posed by new technologies. He questions the new forms that fiction can take in art and literature: What can be told this way? Or how can we analyze this e-magination?  With this in mind, he has published a volume of short stories Technofictions (Cerf, 2019) and co-directed the film Erewhon (Irrévérence Films, 2019), a ten-part video adaptation of Samuel Butler s 1871 novel Erewhon, and the book Virusland (2021), as well as an adaptation in the form of a film series on a dedicated platform Virusland.org. His latest books are La Bienveillance des machines (Seuil, 2022) and L Oncle (2023). https://pierrecassounogues.org/</p>';

const Fabre = '<h1 class="artsname">Raphaël Fabre</h1>' +
                '<h1 class="projectname">Uniform</h1>'+
                '<h1 class="dateProject">2022</h1>'+
                '<img id="fleury" class="responsiveI" src="./Data/Capture.JPG">'+
                '<p>Nuances surrounding surveillance, migration, and identification are continually in flux as a result of the expansion of datafication through technology. The ongoing economic dynamics between political systems of the contentiously defined “Global South” and “Global North” texture these nuances, specifically through the lens of migration. Raphaël Fabre has interpreted these correspondences with the creation of Uniform, a surreal digital panopticon, that further complicates the binary between fictitious and authentic forms of identity. With the virtual incorporation of harbors, immigration inspection stations, and freeport art storage, Fabre has built an inescapable, disorienting ecosystem that at first presents itself as a harbour of freedom. Uniform is an imagined space for infinite wandering and repeated circling, which mirrors the initial encounter between migrating people and the administration that dictates their movement. Text by Mikeeh Zwirner and Ignazio Nicastro</p>'+
                '<a href="https://simmer.io/@icContemporary/uniform" target="_blank"><button id="myButton" class="center-button">VISIT WORK</button></a>' +
                "<p>Between performance, immersive installation, 3D animation,artificial intelligence and virtual reality, <span class='highlight-name'>R. Fabre's</span> work is characterised by the creation of fictional environments through the powerful means of new digital technologies. The artist observes a society dependent on and obsessed by the media, and questions the ambiguity of its relationship to truth and information. The spaces he creates virtually, real playgrounds for him, make us believe in an existing reality and let the spectator immerse himself in parallel universes. These tend to both amaze the viewer and invite him to develop his own interpretation of the media. For all that, Raphaël Fabre does not position himself as a judge of digital technologies, but creates enough doubts for the public to develop a critical mind about the way society functions and the relationship to power and freedom. - Isabella D’Aprile</p>";
              
const Nicolas = '<h1 class="artsname">Nicolas Bailleul</h1>' +
                '<h1 class="projectname">RGB TOUR</h1>'+
                '<h1 class="dateProject">2022</h1>'+
                '<img id="fleury" class="responsiveI" src="./Data/Nicolas.png">'+
                '<p>The video installation "RGB Tour" is an evolving HTML page that accumulates an increasing number of video excerpts from room tours (an extremely popular practice that consists of a filmed guided tour of the creator s room), listed and downloaded using a program that transforms specific sequences of YouTube videos into animated GIFs lasting 5 to 10 seconds. Each downloaded excerpt is categorized in the grid of the page based on the objects that appear in the image and the resulting lighting atmospheres. It is a collaborative and evolving work that will eventually become a procedurally generated film, an endless room tour whose editing will be orchestrated by an algorithm that associates images, objects, and colors.</p>'+
                '<a href="https://nicolasbailleul.fr/rgb.tour/fr" target="_blank"><button id="myButton" class="center-button">VISIT WORK</button></a>' +
                "<p>Through the creation of documentary films, installations, and performances, the work of <span class='highlight-name'>Nicolas Bailleul</span> is defined by the use, appropriation, collection, and exploration of platforms, virtual worlds, connected spaces, and the web's uncertain logics and geographies. By attempting to concretely depict what unfolds in supposedly unreal, invisible, and inaccessible places, NB aims to bring forth contemporary issues related to creation, sociology, economy, and ecology. Graduated from the Haute école des Arts du Rhin (Strasbourg) and with a Master's 2 degree in Anthropological and Documentary Cinema (Paris Nanterre). Since October 2020, PHD candidate at the AIAC laboratory (University Paris 8).</p>";
              




//  Style function for cartel presentation 

function setupStyle(infoContainer, infoItem, image) {

  infoContainer.style.display = 'grid';
  infoContainer.style.gridTemplateRows = '1fr 1fr 1fr';
  infoContainer.style.gridTemplateColumns = '1fr 1fr';

  infoItem.style.position = 'relative';
  infoItem.style.overflow = 'auto';
  infoItem.style.zIndex = '2';
  infoItem.style.color = 'Black';
  infoItem.style.fontFamily = 'Archia-r';
  infoItem.style.fontWeight = 'bolder';
  infoItem.style.marginTop = '10%';
  infoItem.style.marginRight = '10%';
  infoItem.style.padding = '3%';
  infoItem.style.backgroundColor = 'rgba(255, 19, 204, 0.6)';
  infoItem.style.boxShadow = '0px 0px 10px 21px rgba(255,19,204,0.6)';
  infoItem.style.borderRadius = '4px';
  infoItem.style.textAlign = 'justify';   
  infoItem.style.padding = '50px';
  
  image.setAttribute('src', '/Data/cross.png');
  image.style.display = 'block';
  image.style.paddingLeft = '95%';
  image.style.zIndex = '200';
  image.style.width = '100%';
  image.style.maxWidth = '40px';
  image.style.height = 'auto';
}



//  Composant A-frame pour chaque cartel 

AFRAME.registerComponent('fleuryfontaine', {
  
  init: function() {
    
    const cameraEl = document.querySelector('[camera]');    // Recover camera     
    const pointEl = this.el;                                         
    
    pointEl.addEventListener('click', () => {               // click event 
      
      // style 
      setupStyle(infoContainer, infoItem, image);
      // text 
      texte.innerHTML = fleuryfontaine;
      
      
      
      // First Position cam
      const zoomDuration = 2500;                            
      cameraEl.setAttribute('animation', {                           
        property: 'position',                                        
        to: `${0.193} ${0.688} ${0.518}`,               
        dur: zoomDuration,                                         
      });                                                          
      
    });
    
    // BackPosition cam
    image.addEventListener('click', () =>{                         
      cameraEl.setAttribute('animation', {                       
        property: 'position',                                      
        to: '-0.133 0.675 0.428',                    
      });                                                          
      infoContainer.style.display = 'none';          
    })
  }
});



AFRAME.registerComponent('medic', {
  
  init: function() {
    
    const cameraEl = document.querySelector('[camera]');            
    const pointEl = this.el;                                         
    
    pointEl.addEventListener('click', () => {                        
      
      // style 
      setupStyle(infoContainer, infoItem, image);
      // text 
      texte.innerHTML = VetF;
      
      // First Position cam
      const zoomDuration = 2500;                            
      cameraEl.setAttribute('animation', {                           
        property: 'position',                                        
        to: `${-0.387} ${0.515} ${0.368}`,               
        dur: zoomDuration,                                         
      });                                                          
      
    });
    
    // BackPosition cam
    image.addEventListener('click', () =>{                         
      cameraEl.setAttribute('animation', {                       
        property: 'position',                                      
        to: '-0.133 0.675 0.428',                    
      });                                                          
      infoContainer.style.display = 'none';          
    })
  }
});


AFRAME.registerComponent('cadre', {
  
  init: function() {
    
    const cameraEl = document.querySelector('[camera]');            
    const pointEl = this.el;                                         
    
    pointEl.addEventListener('click', () => {                        
      
      // style 
      setupStyle(infoContainer, infoItem, image);
      // text 
      texte.innerHTML = Serra;

      // First Position cam
      const zoomDuration = 2500;                            
      cameraEl.setAttribute('animation', {                           
        property: 'position',                                        
        to: `${-0.397} ${0.531} ${0.326}`,               
        dur: zoomDuration,                                         
      });                                                          
      
    });
    
    // BackPosition cam
    image.addEventListener('click', () =>{                         
      cameraEl.setAttribute('animation', {                       
        property: 'position',                                      
        to: '-0.133 0.675 0.428',                    
      });                                                          
      infoContainer.style.display = 'none';          
    })
  }
});



AFRAME.registerComponent('laptop', {
  
  init: function() {
    
    const cameraEl = document.querySelector('[camera]');            
    const pointEl = this.el;                                         
    
    pointEl.addEventListener('click', () => {                        
      
      // style 
      setupStyle(infoContainer, infoItem, image);
      // text 
      texte.innerHTML = Lenay;
      
      // First Position cam
      const zoomDuration = 2500;                            
      cameraEl.setAttribute('animation', {                           
        property: 'position',                                        
        to: `${-0.377} ${0.515} ${0.105}`,               
        dur: zoomDuration,                                         
      });                                                          
      
    });
    
    // BackPosition cam
    image.addEventListener('click', () =>{                         
      cameraEl.setAttribute('animation', {                       
        property: 'position',                                      
        to: '-0.133 0.675 0.428',                
      });                                                          
      infoContainer.style.display = 'none';          
    })
  }
});


AFRAME.registerComponent('tn', {
  
  init: function() {
    
    const cameraEl = document.querySelector('[camera]');            
    const pointEl = this.el;                                         
    
    pointEl.addEventListener('click', () => {                        
      
      // style 
      setupStyle(infoContainer, infoItem, image);
      // text 
      texte.innerHTML = Gala;
      
      // First Position cam
      const zoomDuration = 2500;                            
      cameraEl.setAttribute('animation', {                           
        property: 'position',                                        
        to: `${0.070} ${0.449} ${0.132}`,               
        dur: zoomDuration,                                         
      });                                                          
      
    });
    
    // BackPosition cam
    image.addEventListener('click', () =>{                         
      cameraEl.setAttribute('animation', {                       
        property: 'position',                                      
        to: '-0.133 0.675 0.428',                    
      });                                                          
      infoContainer.style.display = 'none';          
    })
  }
});


AFRAME.registerComponent('tableau', {
  
  init: function() {
    
    const cameraEl = document.querySelector('[camera]');            
    const pointEl = this.el;                                         
    
    pointEl.addEventListener('click', () => {                        
      
      // style 
      setupStyle(infoContainer, infoItem, image);
      // text 
      texte.innerHTML = RASSEL;
      
      // First Position cam
      const zoomDuration = 2500;                            
      cameraEl.setAttribute('animation', {                           
        property: 'position',                                        
        to: `${-0.278} ${0.900} ${-0.121}`,               
        dur: zoomDuration,                                         
        });                                                          
      
    });
    
    // BackPosition cam
    image.addEventListener('click', () =>{                         
      cameraEl.setAttribute('animation', {                       
        property: 'position',                                      
        to: '-0.133 0.675 0.428',                    
      });                                                          
      infoContainer.style.display = 'none';          
    })
  }
});

AFRAME.registerComponent('smartphone', {
  
  init: function() {
    
    const cameraEl = document.querySelector('[camera]');            
    const pointEl = this.el;                                         
    
    pointEl.addEventListener('click', () => {                        
      
      // style 
      setupStyle(infoContainer, infoItem, image);
      // text 
      texte.innerHTML = Zanin;
      
      // First Position cam
      const zoomDuration = 2500;                            
      cameraEl.setAttribute('animation', {                           
        property: 'position',                                        
          to: `${-0.197} ${0.497} ${0.113}`,               
          dur: zoomDuration,                                         
        });                                                          
        
      });
      
      // BackPosition cam
      image.addEventListener('click', () =>{                         
        cameraEl.setAttribute('animation', {                       
        property: 'position',                                      
        to: '-0.133 0.675 0.428',                    
      });                                                          
      infoContainer.style.display = 'none';          
    })
  }
});

AFRAME.registerComponent('sponge', {
  
  init: function() {
    
    const cameraEl = document.querySelector('[camera]');            
    const pointEl = this.el;                                         
    
    pointEl.addEventListener('click', () => {                        
      
      // style 
      setupStyle(infoContainer, infoItem, image);
      // text 
      texte.innerHTML = Stemmer;
      
      // First Position cam
      const zoomDuration = 2500;                            
      cameraEl.setAttribute('animation', {                           
        property: 'position',                                        
        to: `${-0.234} ${0.441} ${0.253}`,               
        dur: zoomDuration,                                         
      });                                                          
      
    });
    
    // BackPosition cam
    image.addEventListener('click', () =>{                         
      cameraEl.setAttribute('animation', {                       
        property: 'position',                                      
        to: '-0.133 0.675 0.428',                    
      });                                                          
      infoContainer.style.display = 'none';          
    })
  }
});

AFRAME.registerComponent('disco', {
  
  init: function() {
    
    const cameraEl = document.querySelector('[camera]');            
    const pointEl = this.el;                                         
    
    pointEl.addEventListener('click', () => {                        

      // style 
      setupStyle(infoContainer, infoItem, image);
      // text 
      texte.innerHTML = wagon;
      
      // First Position cam
      const zoomDuration = 2500;                            
      cameraEl.setAttribute('animation', {                           
        property: 'position',                                        
        to: `${-0.199} ${0.892} ${0.297}`,               
        dur: zoomDuration,                                         
      });                                                          
      
    });
    
    // BackPosition cam
    image.addEventListener('click', () =>{                         
      cameraEl.setAttribute('animation', {                       
        property: 'position',                                      
        to: '-0.133 0.675 0.428',                    
      });                                                          
      infoContainer.style.display = 'none';          
    })
  }
});

AFRAME.registerComponent('vr', {
  
  init: function() {
    
    const cameraEl = document.querySelector('[camera]');            
    const pointEl = this.el;                                         
    
    pointEl.addEventListener('click', () => {                        
      
      // style 
      setupStyle(infoContainer, infoItem, image);
      // text 
      texte.innerHTML = Fabre;
      
      // First Position cam
      const zoomDuration = 2500;                            
      cameraEl.setAttribute('animation', {                           
        property: 'position',                                        
        to: `${0.112} ${0.590} ${0.452}`,               
        dur: zoomDuration,                                         
      });                                                          
      
    });
    
    // BackPosition cam
    image.addEventListener('click', () =>{                         
      cameraEl.setAttribute('animation', {                       
        property: 'position',                                      
        to: '-0.133 0.675 0.428',                    
      });                                                          
      infoContainer.style.display = 'none';          
    })
  }
});

AFRAME.registerComponent('manette', {
  
  init: function() {
    
    const cameraEl = document.querySelector('[camera]');            
    const pointEl = this.el;                                         
    
    pointEl.addEventListener('click', () => {                        
      
      // style 
      setupStyle(infoContainer, infoItem, image);
      // text 
      texte.innerHTML = Nicolas;
      
      // First Position cam
      const zoomDuration = 2500;                            
      cameraEl.setAttribute('animation', {                           
        property: 'position',                                        
        to: `${-0.483} ${0.547} ${0.148}`,               
        dur: zoomDuration,                                         
      });                                                          
      
    });
    
    // BackPosition cam
    image.addEventListener('click', () =>{                         
      cameraEl.setAttribute('animation', {                       
        property: 'position',                                      
        to: '-0.133 0.675 0.428',                    
      });                                                          
      infoContainer.style.display = 'none';          
    })
  }
});



//  Crédit Carlel



const Credit = document.getElementById('Credit');                       
const infoContainer1 = document.getElementById('infoContainer1');        
const infoItem1 = document.getElementById('infoItem1');
const infoItem2 = document.getElementById('infoItem2');
const txt1 = document.getElementById('p1');
const txt2_1 = document.getElementById('p2_1');
const txt2_2 = document.getElementById('p2_2');
const txt2_3 = document.getElementById('p2_3');
const quitImage = document.getElementById('quitimage');

// Ajouter un événement de clic à l'image
Credit.addEventListener('click', () => {
  
  infoContainer1.style.display = 'grid';                                         
  infoContainer1.style.gridTemplateRows = '1fr 1fr 1fr';                         
  infoContainer1.style.gridTemplateColumns = '1fr 1fr';                          
  infoContainer1.style.padding = '5%';
  infoContainer1.style.cursor = 'none';
  
  infoItem1.style.zIndex = '10000';  // Make the div appear on top
  infoItem1.style.backgroundColor = 'rgba(255, 19, 204, 0.6)';
  infoItem1.style.position = 'relative'; // Position the div relative to the viewport
  infoItem1.style.fontFamily = 'Archia';                                 
  infoItem1.style.fontWeight = 'light';
  infoItem1.style.fontSize = '1.4rem';
  infoItem1.style.textAlign = 'justify';
  infoItem1.style.lineHeight = '1.5';
  infoItem1.style.paddingTop = '1.5%';
  infoItem1.style.paddingBottom = '1.5%';
  infoItem1.style.paddingLeft = '3%';
  infoItem1.style.paddingRight = '3%';
  txt1.innerHTML = 
  '<p>Why is the bedroom overly exposed on the internet? How has the domestic space become a monetizable ressource through digital cultures and surveillance capitalism? To put it differently, what does “intimacy” really mean today? <br> <br> Room tour. Art in the age of remote work is an online exhibition as well as a research project and an artwork in itself. Inspired by the “room tour” trend on YouTube, which consists of sharing and commenting on the personal space, this exhibition takes place in the curator’s bedroom. It shows works that question the mediation of the domestic space on the internet from various points of view and various social, cultural and political perspectives. <br> <br>Whether it corresponds to the generalization of remote work since the Covid-19 pandemic, or the emergence of new jobs related to content creation (streamers, influencers, digital sexworkers, etc.), or the invisible work of machines producing data in our homes (smart objects), it seems that digital practices have reconfigured the distinctions between the private and the public, the personal and the professional... <br> <br>In the meantime, more and more artists are creating, producing and sharing from their bedrooms using laptops or smartphones. Not only has the internet become the main subject of their work but it is also their preferred medium. Screen capture, found footage, saved footage, desktop film, internet essay, online investigations... all the works exposed here question web-based and (or?) remote practices on a broader scale. <br> <br> In the curator’s bedroom, each artwork is assigned to a personal object: one selected by the artist or one added by them (from their own bedroom?). Connecting subjectivities, creating new symbolic and semantic links between the artworks and the space, the artists and the curator, the mediated bedroom — as an exhibited space as well as an exhibition space — reminds us that intimacy is part of the collective and that the personal is inherently political.</p>'
  
  
  infoItem2.style.zIndex = '10000';  // Make the div appear on top
  //infoItem2.style.boxShadow = "22px 50px 30px 50px #ffffff";
  infoItem2.style.backgroundColor = 'rgba(255, 19, 204, 0.6)';
  infoItem2.style.position = 'relative'; // Position the div relative to the viewport
  infoItem2.style.fontFamily = 'Archia';
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
  '<h2 class="Status">Artists</h2>' + 
  '<p class="name">Nicolas Bailleul</p>'+
  '<p class="name">Faustine de Bock</p>'+
  '<p class="name">Vincent Duché</p>'+
  '<p class="name">Raphaël Fabre</p>'+
  '<p class="name">fleuryfontaine</p>'+
  '<p class="name">Gala Hernández López</p>'+
  '<p class="name">Alice Lenay</p>'+
  '<p class="name">Bérénice Serra</p>'+
  '<p class="name">Gabrielle Stemmer</p>'+
  '<p class="name">Zofie Taueber & <br> <br>Unglee Izi</p>'+
  '<p class="name">Gwenola Wagon & <br> <br> Pierre Cassou-Noguès</p>'+
  '<p class="name">Kévin Zanin</p>'+
  '<h2 class="Status margin">Curator</h2>' + 
  '<p class="name">Vincent Duché</p>'+
  '<h2 class="Status">in collaboration with</h2>'+
  '<p class="name">Faustine de Bock</p>';
  
  txt2_2.style.display = 'block';
  txt2_2.style.flexGrow = '0';
  txt2_2.style.flexShrink = '1';
  txt2_2.style.flexBasis = 'auto';
  txt2_2.style.alignSelf = 'auto';
  txt2_2.style.order = '0';
  txt2_2.innerHTML = 
  '<h2 class="Status">CGI & soundscape</h2>' + 
  '<p class="name">Vincent Duché</p>'+
  '<h2 class="Status margin">Web development</h2>' + 
  '<p class="name">Benoit Fage</p>'+
  '<h2 class="Status margin">Graphic design</h2>'+
  '<p class="name">Camille Chatelaine</p>';
  
  txt2_3.style.display = 'block';
  txt2_3.style.flexGrow = '0';
  txt2_3.style.flexShrink = '1';
  txt2_3.style.flexBasis = 'auto';
  txt2_3.style.alignSelf = 'auto';
  txt2_3.style.order = '0';


  txt2_3.innerHTML = 
  '<h2 class="Status">Thanks to</h2>' + 
  '<p class="name">Margaux Auria</p>'+
  '<p class="name">Étienne Blanchot</p>'+
  '<p class="name">Simon Blanjoie</p>'+
  '<p class="name">Marie Bonhomme</p>'+
  '<p class="name">Jonathan Coryn</p>'+
  '<p class="name">Camille Cuttaz</p>'+
  '<p class="name">Angèle Ferrere</p>'+
  '<p class="name">Gabriel Desplanque</p>'+
  '<p class="name">Maxime Duché</p>'+
  '<p class="name">Nicolas Mars</p>'+
  '<p class="name">Marie Molins</p>'+
  '<p class="name">Colette Morel</p>'+
  '<p class="name">Suzy Noel</p>'+
  '<p class="name">Laura Pardini</p>'+
  '<p class="name">Erwin Souveton</p>'+
  '<p class="name">Fanny Vagné</p>'+
  '<p class="name">Rosa Wevers</p>'+
  '<p class="name">Sylvie Thiebault Girard</p>'+
  '<p class="name">Franck Girard</p>'+
  '<p class="name">Isabel Ségovia</p>'+
  '<img id="quitimage" class="responsivecross" src="/Data/cross.png">';

  infoItem2.addEventListener('click', (event) => {
    const clickedElement = event.target;
    if (clickedElement.id === 'quitimage') {
      infoContainer1.style.display = 'none';
    }
  });
});
