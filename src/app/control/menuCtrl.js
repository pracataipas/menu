var menuApp = angular.module("menu", []);
menuApp.controller("menuCtrl", ['$scope', function ($scope) {

    // --- DATA
    $scope.chapters = [
        {name: "ENTRADAS", index: 0, isSelected: false, items: [
            {name: "TREMOÇOS", price: "0,50 €"},
            {name: "AMENDOINS", price: "0,50 €"},
            {name: "AMENDOINS C/ MEL E SAL", price: "1 €"},
            {name: "BATATA FRITA PALITO", price: "2,50 €"},
            {name: "BATATA FRITA RÚSTICA", price: "3 €"},
            {name: "PÃO C/ MANTEIGA DE ALHO", price: "3 €"},
            {name: "PÃO ALHO C/ QUEIJO E PEPPERONI", price: "4 €"},
            {name: "PÃO ALHO C/ QUEIJO E BACON", price: "4 €"},
            {name: "MOZARELLA STICKS", price: "5 €"},
            {name: "CAMEMBERT BITES", price: "5 €"},
            {name: "NUGGETS", price: "5 €"},
            {name: "ASINHAS DE FRANGO", price: "5,50 €"}
        ]},
        {name: "PREGOS", index: 1, isSelected: false, items: [
            {name: "ANTIGO MERCADO", price: "7,50 €"},
            {name: "BOÉMIO", price: "8,50 €"},
            {name: "PINHEIRAL", price: "8,50 €"},
            {name: "ARA DE TRAJANO", price: "8,50 €"},
            {name: "CHARNECA", price: "9 €"},
            {name: "LAMEIRA", price: "9 €"}
        ]},
        {name: "HAMBURGUERES", index: 2, isSelected: false, items: [
            {name: "CHEESEBURGUER", price: "5,50 €"},
            {name: "DOUBLE CHEESE BACON", price: "7,50 €"},
            {name: "BURGUESINHO", price: "7 €"}
        ]},
        {name: "PANQUECA", index: 3, isSelected: false, items: [
            {name: "PANQUECAS SIMPLES", price: "4,50 €"},
            {name: "OPÇÃO 1", price: "5,50 €"},
            {name: "OPÇÃO 2", price: "5,50 €"},
            {name: "OPÇÃO 3", price: "6 €"}
        ]},
        {name: "CREPE", index: 4, isSelected: false, items: [
            {name: "CREPES SIMPLES", price: "4,50 €"},
            {name: "OPÇÃO 1", price: "5,50 €"},
            {name: "OPÇÃO 2", price: "5,50 €"},
            {name: "OPÇÃO 3", price: "6 €"}
        ]},
        {name: "GELADO", index: 5, isSelected: false, items: [
            {name: "1 BOLA", price: "2,50 €"},
            {name: "2 BOLAS", price: "3,50 €"},
            {name: "3 BOLAS", price: "4,50 €"}
        ]},
        {name: "SANGRIA", index: 6, isSelected: false, items: [
            {name: "MARACUJÁ", price: " "},
            {name: "2L", price: "25 €"},
            {name: "4L", price: "50 €"},
            {name: "8L", price: "100 €"},
            {name: " ", price: " "},
            {name: "MAÇÃ E KIWI", price: " "},
            {name: "2L", price: "25 €"},
            {name: "4L", price: "50 €"},
            {name: "8L", price: "100 €"},
            {name: " ", price: " "},
            {name: "FRUTOS VERMELHOS", price: " "},
            {name: "2L", price: "25 €"},
            {name: "4L", price: "50 €"},
            {name: "8L", price: "100 €"},
            {name: " ", price: " "},
            {name: "MANGA E MARACUJÁ", price: " "},
            {name: "2L", price: "25,50 €"},
            {name: "4L", price: "50 €"},
            {name: "8L", price: "100 €"}
        ]},
        {name: "PONCHA", index: 7, isSelected: false, items: [
            {name: "MARACUJÁ", price: "3,50 €"},
            {name: "TANGERINA", price: "3,50 €"},
            {name: "PESCADOR", price: "4 €"},
            {name: "ABSINTO", price: "4 €"},
            {name: "GARRAFA DE MARACUJÁ", price: "17,50 €"},
            {name: "GARRAFA DE TANGERINA", price: "17,50 €"},
            {name: "GARRAFA DE PESCADOR", price: "20 €"},
            {name: "GARRAFA DE ABSINTO", price: "20 €"},
            {name: "PONCHA DE 4L", price: "65 €"},
            {name: "PONCHA DE 8L", price: "120 €"}
        ]},
        {name: "COCKTAIL", index: 8, isSelected: false, items: [
            {name: "MOJITO *", price: "7 €"},
            {name: "CAIPIRINHA *", price: "6 €"},
            {name: "APEROL SPRITZ", price: "6 €"},
            {name: "OLD FASHIONED", price: "7 €"},
            {name: "WHISKEY SOUR", price: "7 €"},
            {name: "VODKA SOUR *", price: "7 €"},
            {name: "MOSCOW MULE", price: "7 €"},
            {name: "ESPRESSO MARTINI", price: "8 €"},
            {name: " ", price: " "},
            {name: "* SABORES DISPONÍVEIS:", price: " "},
            {name: "- MARACUJÁ", price: " "},
            {name: "- MANGA", price: " "},
            {name: "- MAÇÃ", price: " "},
            {name: "- KIWI", price: " "},
            {name: "- COCO", price: " "},
            {name: "- MORANGO", price: " "},
            {name: "- FRAMBOESA", price: " "},
            {name: "- FRUTOS VERMELHOS", price: " "},
            {name: " ", price: " "},
            {name: "* ACRESCE 1€ AO VALOR BASE", price: " "}
        ]},
        {name: "SISHA", index: 9, isSelected: false, items: [
            {name: "LOVE 66", price: "20 €"},
            {name: "(MELÃO, MELANCIA, MARACUJÁ E MENTA)", price: " "},
            {name: " ", price: " "},
            {name: "AWAY", price: "20 €"},
            {name: "(ANANÁS, MANGA E MENTA)", price: " "},
            {name: " ", price: " "},
            {name: "KIZZ", price: "20 €"},
            {name: "(MENTA)", price: " "},
            {name: " ", price: " "},
            {name: "MI AMOR", price: "20 €"},
            {name: "(ANANÁS, BANANA E MENTA)", price: " "}
        ]},
        {name: "CERVEJA", index: 10, isSelected: false, items: [
            {name: "SAGRES DE PRESSÃO (25CL)", price: "1,50 €"},
            {name: "SAGRES DE PRESSÃO (30CL)", price: "2 €"},
            {name: "BOHEMIA (33CL)", price: "2 €"},
            {name: "BOHEMIA BOCK (33CL)", price: "2 €"},
            {name: "HEINEKEN (25CL)", price: "1,70 €"},
            {name: "CORONA (35CL)", price: "3 €"},
            {name: "SAGRES RADLER (33CL)", price: "2,50 €"},
            {name: "SOMERSBY MAÇÃ/FRUTOS VERMELHOS (33CL)", price: "3 €"},
            {name: "3 MONT'S", price: "10 €"}
        ]},
        {name: "VINHOS", index: 11, isSelected: false, items: [
            {name: "- VERDE BRANCO", price: " "},
            {name: "OURO VERDE", price: "ND *"},
            {name: "ITER", price: "ND *"},
            {name: " ", price: " "},
            {name: "- MADURO BRANCO", price: " "},
            {name: "TERRAS", price: "ND *"},
            {name: "CASTELLO DE NUMAO", price: "ND *"},
            {name: "CASA DO CANTO", price: "ND *"},
            {name: "QUINTA DE SANTA CRISTINA", price: "ND *"},
            {name: " ", price: " "},
            {name: "- MADURO TINTO", price: " "},
            {name: "TERRAS", price: "ND *"},
            {name: "CASA DO CANTO", price: "ND *"},
            {name: " ", price: " "},
            {name: "* PREÇOS AINDA NÃO DEFINIDOS", price: " "}
        ]},
        {name: "CHAMPANHE E ESPUMANTE", index: 12, isSelected: false, items: [
            {name: "CASA DO CANTO", price: "18 €"},
            {name: "PEDRA LASCADA", price: "25 €"},
            {name: "G.H.MUMM", price: "70 €"}
        ]},
        {name: "GIN", index: 13, isSelected: false, items: [
            {name: "BEEFEATER", price: "5,50 €"},
            {name: "BIG BOSS", price: "6,50 €"},
            {name: "NORDÉS", price: "7,50 €"},
            {name: "TANQUERAY TEN", price: "7,50 €"},
            {name: "STAR OF BOMBAY", price: "7,50 €"},
            {name: "CITADELLE", price: "8 €"},
            {name: "GIN MARE", price: "8 €"},
            {name: "G'VINE", price: "8,50 €"},
            {name: "MONKEY 47", price: "10 €"}
        ]},
        {name: "WHISKY", index: 14, isSelected: false, items: [
            {name: "JAMESON", price: "5,50 €"},
            {name: "BUSHMILLS", price: "5,50 €"},
            {name: "JACK DANIELS", price: "6,50 €"},
            {name: "MONKEY SHOULDER", price: "7,50 €"},
            {name: "J.WALKER BLACK LABEL", price: "7,50 €"},
            {name: "GENTLEMAN JACK", price: "7,50 €"},
            {name: "OLD PARR 12 ANOS", price: "9 €"},
            {name: "GLENROTHES 12 ANOS", price: "10 €"}
        ]},
        {name: "VODKA", index: 15, isSelected: false, items: [
            {name: "MOSKOVSKAYA", price: "5,50 €"},
            {name: "ABSOLUT", price: "6 €"},
            {name: "GREY GOOSE", price: "8 €"},
            {name: "BERVEDERE", price: "8 €"}
        ]},
        {name: "RUM", index: 16, isSelected: false, items: [
            {name: "BACARDI LIMON", price: "5,50 €"},
            {name: "HAVANA CLUB 3 ANOS", price: "5.50 €"},
            {name: "HAVANA CLUB 7 ANOS", price: "7 €"}
        ]},
        {name: "APERITIVO E DIGESTIVO", index: 17, isSelected: false, items: [
            {name: "MARTINI ROSSO", price: "2 €"},
            {name: "JAGERMEISTER", price: "2,50 €"},
            {name: "MACIEIRA", price: "2 €"},
            {name: "DONA ANTONIA 10 ANOS", price: "3 €"},
            {name: "CR&F", price: "4 €"},
            {name: "LIMONCELLO VILLA MASSA", price: "4 €"},
            {name: "MARTINI BIANCO", price: "5 €"},
            {name: "PORTO CRUZ LAGRIMA", price: "5 €"}
        ]},
        {name: "LICOR", index: 18, isSelected: false, items: [
            {name: "AMÊNDOA AMARGA", price: "3,50 €"},
            {name: "LICOR BEIRAO", price: "4 €"},
            {name: "BAILEYS", price: "4 €"}
        ]},
        {name: "SHOT", index: 19, isSelected: false, items: [
            {name: "LOW COST", price: "1,50 €"},
            {name: "PREMIUM", price: "2 €"}
        ]},
        {name: "CAFETARIA", index: 20, isSelected: false, items: [
            {name: "TORRADA", price: "1,20 €"},
            {name: "TOSTA MISTA", price: "3 €"}
        ]},
        {name: "BEBIDAS S/ ÁLCOOL", index: 21, isSelected: false, items: [
            {name: "ÁGUA 0.50L", price: "1 €"},
            {name: "ÁGUA DAS PEDRAS", price: "1,20 €"},
            {name: "ÁGUA DAS PEDRAS LIMÃO", price: "1,50 €"},
            {name: "ÁGUA DAS PEDRAS MARACUJÁ", price: "1,50 €"},
            {name: "PLENO", price: "1,50 €"},
            {name: "COCA-COLA", price: "1,80 €"},
            {name: "COCA-COLA ZERO", price: "1,80 €"},
            {name: "ICE TEA", price: "1,80 €"},
            {name: "SUMOL", price: "1,80 €"},
            {name: "ÁGUA TÓNICA", price: "2 €"},
            {name: "GINGERALLE", price: "2 €"},
            {name: "REDBULL", price: "3 €"},
            {name: "SUMO DE LARANJA NATURAL", price: "3 €"},
            {name: "LIMONADA", price: "3 €"}
        ]}
    ];

    // --- MECHANISM
    $scope.showHideChapter = function(inputChapter) {
        const auxConditions = [-1, inputChapter.index];
        const indexChapterToHide = $scope.chapters.findIndex(chapter => chapter.isSelected === true);
        // hide opened chapter, if exists
        if (!auxConditions.includes(indexChapterToHide)) $scope.chapters[indexChapterToHide].isSelected = false;
        // show or hide input chapter
        $scope.chapters[inputChapter.index].isSelected = !$scope.chapters[inputChapter.index].isSelected;
    }
}]);