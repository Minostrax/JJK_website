                        // NAVBAR HEADER

                // PART MENU ANIMATION

    let MenuHamburger = document.getElementById("menu-icon")
    let barres = document.querySelectorAll(".barre")
    let navBar = document.querySelector(".nav-bar")

    MenuHamburger.addEventListener("click", () => {
        barres.forEach(barre => {
            barre.classList.toggle("barre-animation");
        });
        MenuHamburger.classList.toggle("active");

        if (MenuHamburger.classList.contains("active")) {
            navBar.style.transform = "translateX(0)";
        } else {
            navBar.style.transform = "translateX(-100%)";
        }
    });
    
    // SCROOL ANIMATION

    let scrollVerif = document.documentElement.scrollTop;

    document.addEventListener("scroll", () => {
        scrollAnimationHeader();
    });

    function scrollAnimationHeader() {
        const header = document.querySelector("header");
        const scrollVerifFunction = document.documentElement.scrollTop;
        header.style.transition = "0.6s ease"
        if (scrollVerifFunction > scrollVerif) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0%)";
        }

        // Update scrollVerif after the comparison
        scrollVerif = scrollVerifFunction;
    }





    // PART  HISTORY

let arc1 = document.querySelector(".arc1")
let arc2 = document.querySelector(".arc2")
let arc3 = document.querySelector(".arc3")
let arc4 = document.querySelector(".arc4")

let titleArcs = document.querySelector(".title-carrousel")
let txtArcs = document.querySelector(".txt-carrousel")
let BckgrdArcs = document.querySelector(".carrousel-images")


arc1.addEventListener("click", () => {
    titleArcs.innerHTML = "Arc Introduction"
    txtArcs.innerHTML = 
    "Yuji Itadori, un lycéen ordinaire doté d'une force physique extraordinaire, voit sa vie basculer lorsqu'il avale un doigt du démon Sukuna Ryomen pour sauver ses amis. Devenu l'hôte de Sukuna, il rejoint l'École d'exorcisme de Tokyo, où il apprend à utiliser ses nouveaux pouvoirs pour combattre les esprits maléfiques sous la tutelle de Satoru Gojo. Ce premier arc pose les bases de l'univers de Jujutsu Kaisen, introduisant les personnages principaux et les concepts clés de l'exorcisme."
    BckgrdArcs.style.background = 'linear-gradient(to bottom, transparent, 65%, #96d3ff40),url("./Images/wallpapersden.com_77225-1920x1080.jpg") no-repeat center center / cover'
})
arc2.addEventListener("click", () => {
    titleArcs.innerHTML = "Arc Assaut de la Prison"
    txtArcs.innerHTML = 
    "Lors d'une mission dans une prison abandonnée, Yuji et ses camarades, Megumi Fushiguro et Nobara Kugisaki, affrontent des malédictions terrifiantes. Ils découvrent les dangers de leur nouvelle vie d'exorcistes, et Yuji est confronté à la brutalité de ses pouvoirs lorsqu'il invoque involontairement Sukuna. Cet arc approfondit les relations entre les personnages et montre les premiers signes de l'immense potentiel de Yuji."
    BckgrdArcs.style.background = 'linear-gradient(to bottom, transparent, 65%, #96d3ff40),url("./Images/ARC2-history.jpg") no-repeat center center / cover'
})
arc3.addEventListener("click", () => {
    titleArcs.innerHTML = "Arc Tournoi de Kyoto"
    txtArcs.innerHTML = 
    "L'École d'exorcisme de Tokyo et celle de Kyoto s'affrontent lors d'un tournoi annuel visant à renforcer les liens entre les étudiants et à améliorer leurs compétences. Ce concours amical prend une tournure dramatique lorsque des ennemis redoutables, dirigés par Mahito, attaquent, forçant les deux écoles à collaborer pour survivre. Cet arc met en lumière les rivalités et les alliances entre les étudiants, ainsi que l'évolution de leurs compétences en exorcisme."
    BckgrdArcs.style.background = 'linear-gradient(to bottom, transparent, 65%, #96d3ff40),url("./Images/arc3-history.jpg") no-repeat center center / cover'
})
arc4.addEventListener("click", () => {
    titleArcs.innerHTML = "Arc Incident de Shibuya"
    txtArcs.innerHTML = 
    "Un incident majeur se déroule à Shibuya, où les sorciers et les malédictions s'affrontent dans une bataille épique. La ville se transforme en un champ de bataille chaotique, et Yuji, accompagné de ses alliés, doit faire face à des ennemis puissants et des dilemmes moraux déchirants. Cet arc est l'un des plus intenses de la série, révélant des secrets bouleversants et changeant à jamais la dynamique entre les personnages principaux."
    BckgrdArcs.style.background = 'linear-gradient(to bottom, transparent, 65%, #96d3ff40),url("./Images/arc4-history.webp") no-repeat center center / cover'
})

                // PART PERSONNAGE
// 1
let fleche = document.querySelector(".fleche")
let primcontainer = document.querySelector(".container-equipe3")

fleche.addEventListener("click", () => {
    primcontainer.classList.toggle("class-height");
    primcontainer.style.transition = "height 0.8s ease";
})
// 2
let fleche2 = document.querySelector(".fleche2")
let secondcontainer = document.querySelector(".container-gojo")

fleche2.addEventListener("click", () => {
    secondcontainer.classList.toggle("class-height2");
    secondcontainer.style.transition = " 0.8s ease";
})

let fleche3 = document.querySelector(".fleche3")
let thirdcontainer = document.querySelector(".container-sukuna")

fleche3.addEventListener("click", () => {
    thirdcontainer.classList.toggle("class-height2");
    thirdcontainer.style.transition = " 0.8s ease";
})

