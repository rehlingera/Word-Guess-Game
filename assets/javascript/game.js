    var winCount = 0;
    var lossCount = 0;
    var dinosaurs = [{
        name:"triceratops",
        picture:"assets/images/1530562710870.jpg",
        description:"Triceratops was a plant-eater with specialised teeth for cutting and slicing and a huge stomach for digesting tough plant matter. It would have used its horns for defending itself from predators like Tyrannosaurus."
    },{
        name: "stegosaurus",
        picture: "assets/images/1530562711427.jpg",
        description: "This slow-moving plant-eater used spikes on its tail to fend off would-be predators. The jury is still out on what the spiny plates on its back were used for."
    },{
        name: "tyrannosaurus",
        picture: "assets/images/1530562710952.jpg",
        description: "An infamous meat-eating predator. Scientists are still examining the evidence as to whether Tyrannosaurus hunted in packs or alone."
    },{
        name: "diploducus",
        picture: "assets/images/1530562711336.jpg",
        description: "This giant was a plant-eating dinosaur. It is still something of a mystery how it managed to support its huge neck."
    },{
        name: "coelophysis",
        picture: "assets/images/1530562711160.jpg",
        description: "This small meat-eater was one of the earliest dinosaurs. It was fast and agile and would have fed on animals like small reptiles and insects."
    },{
        name: "archaeopteryx",
        picture: "assets/images/archaeo.jpg",
        description: "Archaeopteryx lived at the end of the Jurassic period. By the Late Cretaceous, 70 million years later, 1 bird had evolved."
    },{
        name: "gallimimus",
        picture: "assets/images/gallim.jpg",
        description: "The Gallimimus was a small creature that mostly fed on insects and stole and ate eggs from the nests of other dinosaurs. Its name means ''chicken mimic.''"
    },{
        name: "allosaurus",
        picture: "assets/images/allo.jpg",
        description: "The teeth of Allosaurus were 5-10cm long and curved backwards to prevent prey from escaping. It is often confused with the T-rex, but it has three fingers instead of two."
    },{
        name: "velociraptor",
        picture: "assets/images/veloc.jpg",
        description: "As portrayed in the Jurassic Park movies,Velociraptor was recreated at twice its actual size and closely modelled on Deinonychus. Though this was seen as unscientific at the time, soon after the first film was released, a dinosaur of the same type, Utahraptor, was discovered, even larger than the virtual Velociraptors. Velociraptor is now thought to have had a fine feather-like covering."
    },{
        name: "saltasaurus",
        picture: "assets/images/salta.jpg",
        description: "Fossils have been found showing that Saltasaurus had small bony nodules embedded in its skin, finally confirming that one a least one group of sauropods, called titanosaurs, had armour plates. Saltasaurus is one of the last sauropods, living just before the group's extinction."
    },{
        name: "baryonyx",
        picture: "assets/images/bary.jpg",
        description: "The mouth shape of this dinosaur was very similar to that of a crocodile, and it had a large claw, about 31cm long, probably on its thumb. Baryonyx may have crouched on river banks or waded into shallow water to hook fish with its claws. It was also a scavenger."
    },{
        name: "iguanodon",
        picture: "assets/images/iguano.jpg",
        description: "One of the most successful dinosaurs, species of Iguanodon have been found in many parts of the world. Iguanodon could probably walk on all fours or on 2 legs. It had a large thumb spike, probably to fend off predators. Muscle attachment areas inside its head suggest that it may have had a long tongue."
    },{
        name: "spinosaurus",
        picture: "assets/images/spino.jpg",
        description: "Spinosaurus is only known from fragmentary remains. Size estimates range up to 18m, which would make it the longest meat eater, although more slender than T. rex or Giganotosaurus."
    },{
        name: "giganotosaurus",
        picture: "assets/images/giganoto.jpg",
        description: "Giganotosaurus is known from very fragmentary remains. Taller and longer but slimmer than Tyrannosaurus rex, Giganotosaurus lived millions of years earlier and in South America not North America. Giganotosaurus had 3 fingers on its hands, not 2 like T.rex. It may have hunted Argentinosaurus."
    },{
        name: "dilophosaurus",
        picture: "assets/images/dilopho.jpg",
        description: "Dilophosaurus was a fast-moving meat-eating dinosaur. A kink in its upper jaw may mean that it ate a certain kind of food, or attacked by gripping and holding on to prey – modern crocodiles have a similar kink. The pair of thin bony crests on its head may have been for display."
    },{
        name: "ankylosaurus",
        picture: "assets/images/ankyl.jpg",
        description: "One of the largest armoured dinosaurus, Ankylosaurus had a wide, heavily armoured skull and a large tail club. It had a large gut space for digesting plant material."
    },{
        name: "caudipteryx",
        picture: "assets/images/caudip.jpg",
        description: "This bird-like dinosaur lived after Archaeopteryx. It had a fan of feathers at the end of its tail. Caudipteryx has been found with gizzard stones (small stones swallowed by the dinosaur, perhaps to help digest food) and had small, weak teeth. It probably ate insects and maybe plants as well."
    },{
        name: "deinonychus",
        picture: "assets/images/deinon.jpg",
        description: "Deinonychus could hold onto its prey with fearsome front claws. One huge claw on each foot swivelled - a kick would rip prey apart. When not in use the claw was held out of the way to keep it sharp. Deinonychus may have hunted Tenontosaurus."
    },{
        name: "torosaurus",
        picture: "assets/images/toro.jpg",
        description: "This dinosaur may have lived in social groups. It has the largest display crest of any ceratopsian and, like all the others, had a 'beak' for grazing."
    },{
        name: "juravenator",
        picture: "assets/images/Juravenator.jpg",
        description: "Juravenator was the second non-avian (not bird-like) theropod (small meat-eating dinosaur) to be found in the region of Solnhofen. The type specimen shows impressions of scaly skin along the tail."
    }];

window.onload = function () {

    var runScript = function() {

        var chances = 8;
        var correctGuesses = 0;
        var incorrectGuesses = 0;
        var outcome = "incorrect";
        var availLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","Enter"];
        var usedLetters = [];
        document.getElementById("wordArea").innerHTML = "";
        document.getElementById("pictureArea").innerHTML = "";
        document.getElementById("factArea").innerHTML = "";
        document.getElementById("winLossArea").innerHTML = "";
        document.getElementById("pressAny").style.display = "none";
        document.getElementById("hangmanArea").style.display = "block"
        document.getElementById("letterArea").style.display = "block";
        var revertLetters = document.getElementsByClassName("letter");
            for (iter = 0; iter < revertLetters.length; iter++) {
            revertLetters[iter].style.color = "green";
            };
        var revertMan = document.getElementsByClassName("stickMan");
            for (iter = 0; iter < revertMan.length; iter++) {
            revertMan[iter].style.color = "black";
            };

        function getRandomInt(dinoList) {
            return Math.floor(Math.random() * Math.floor(dinoList));
        };

        document.getElementById("chances").textContent = chances;
        document.getElementById("wins").textContent = winCount;
        document.getElementById("losses").textContent = lossCount;

        var randomDino = dinosaurs[getRandomInt(dinosaurs.length)];
        var dinoPic = document.createElement("img");
        dinoPic.src = randomDino.picture;

        for (var len = 0; len < randomDino.name.length; len++) {
            var targetWord = document.getElementById("wordArea");
            var newSpace = document.createElement("li");
            newSpace.className = randomDino.name.charAt(len);
            newSpace.id = len;
            newSpace.textContent = " _ ";
            targetWord.appendChild(newSpace);
        };

        document.removeEventListener("click", runScript);
        document.addEventListener("click", (e) => detectKey(e));

        var detectKey = function(e) {
            var type=e.target.className;
            var keyId=e.target.id;
            if(type==="letter") {
                turnTaken(keyId)
            }
        };

        document.onkeyup = function(e) {
            turnTaken(e.key);
        };

        var turnTaken = function(key) {
            var avail = availLetters.includes(key);
            var used = usedLetters.includes(key);

            if (avail === true && used === false) {
                for (var len = 0; len < randomDino.name.length; len++) {
                    var found = document.getElementById(len);
                    if (found.className === key){
                        found.textContent = " " + key + " ";
                        outcome = "correct";
                        correctGuesses++;
                        };
                    };
               
                if (outcome === "incorrect") {
                    chances=chances-1;
                    incorrectGuesses++;
                    document.getElementById("c"+chances).style.color = "white";
                };

                document.getElementById(key).style.color = "black";
                document.getElementById("chances").textContent = chances;
                outcome = "incorrect";
                if (correctGuesses === randomDino.name.length) {
                    document.getElementById("letterArea").style.display = "none";
                    document.getElementById("hangmanArea").style.display = "none";
                    document.getElementById("winLossArea").textContent = "You Win! (tap/click or press enter to play again)";
                    document.getElementById("pictureArea").appendChild(dinoPic);
                    document.getElementById("factArea").textContent = randomDino.description;
                    winCount++;
                    usedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
                    document.getElementById("DinoWin").load();
                    document.getElementById("DinoIntro").load();
                    document.getElementById("DinoLoss").load();
                    document.getElementById("DinoWin").pause();
                    document.getElementById("DinoIntro").pause();
                    document.getElementById("DinoLoss").pause();
                    document.getElementById("DinoWin").play();
                    document.removeEventListener("click", detectKey);
                    document.addEventListener("click", runScript)
                    document.onkeyup = function(e) {
                        if (e.keyCode === 13) {
                            runScript();
                        };
                    };
                };

                if (incorrectGuesses === 8) {
                    document.getElementById("letterArea").style.display = "none";
                    document.getElementById("hangmanArea").style.display = "none";
                    document.getElementById("winLossArea").textContent = "You Lose! (tap/click or press enter to play again)";
                    lossCount++;
                    usedLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
                    document.getElementById("DinoWin").load();
                    document.getElementById("DinoIntro").load();
                    document.getElementById("DinoLoss").load();
                    document.getElementById("DinoWin").pause();
                    document.getElementById("DinoIntro").pause();
                    document.getElementById("DinoLoss").pause();
                    document.getElementById("DinoLoss").play();
                    document.removeEventListener("click", detectKey);
                    document.addEventListener("click", runScript);
                    document.onkeyup = function(event) {
                        if (event.keyCode === 13) {
                            runScript();
                        };
                    };
                };

                document.getElementById("wins").textContent = winCount;
                document.getElementById("losses").textContent = lossCount;
                usedLetters.push(event.key);
            };
        };
    };
    document.addEventListener("click", runScript);
    document.onkeyup = function() {
        runScript();
    };
};
