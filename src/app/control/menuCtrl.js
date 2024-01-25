var menuApp = angular.module("menu", []);
menuApp.controller("menuCtrl", ['$scope', function ($scope) {

    // --- DATA
    $scope.chapters = [
        {name: "PARA PARTILHAR", index: 0, isSelected: false, items: [
            {name: "PÃO DE ALHO", price: "3"},
            {name: "PÃO DE ALHO C/ QUEIJO E PEPPERONI", price: "4"},
            {name: "PÃO DE ALHO C/ QUEIJO E BACON", price: "4"},
            {name: "BATATA FRITA", price: "2.5"},
            {name: "OVOS ROTOS ESPECIAIS", price: "6.9"},
            {name: "batata frita, bacon, pepperoni, salsicha fresca, ovo e molho de francesinha"}, 
            {name: "MOZARELLA STICKS", price: "5.9"},
            {name: "CAMEMBERT BITES", price: "5.9"},
            {name: "NUGGETS", price: "5.9"},
            {name: "ASINHAS DE FRANGO", price: "6.9"},
            {name: "AMENDOINS", price: "0.5"},
            {name: "AMENDOINS C/ MEL E SAL", price: "1"},
            {name: "TREMOÇOS", price: "0.5"},
        ]},
   	    {name: "FRANCESINHA", index: 1, isSelected: false, items: [
            {name: "FRANCESINHA ESPECIAL", price: "11.9"},
            {name: "FRANCESINHA NORMAL", price: "5.9"},
        ]},
        {name: "HAMBURGUERES", index: 2, isSelected: false, items: [
            {name: "CHEESEBURGUER", price: "6.5"},
            {name: "hamburger 120g, queijo cheddar, ketchup e alface", price: " "},
            {name: " ", price: " "},
            {name: "DOUBLE CHEESE BACON", price: "9"},
            {name: "2x hamburger 120g, queijo cheddar, bacon, ketchup e alface", price: " "},
            {name: " ", price: " "},
            {name: "BURGUESINHO", price: "8"},
            {name: "hamburger 120g, queijo brie, bacon, mostarda, mel e rúcula", price: " "},
        ]},
        {name: "PREGOS", index: 3, isSelected: false, items: [
            {name: "ANTIGO MERCADO", price: "7.5"},
            {name: "prego, fiambre, queijo e mostarda", price: " "},
            {name: " ", price: " "},
            {name: "BOÉMIO", price: "8.5"},
            {name: "prego, fiambre, queijo cheddar, bacon, maionese especial e alface", price: " "},
            {name: " ", price: " "},
            {name: "PINHEIRAL", price: "8.5"},
            {name: "prego, queijo de cabra, maçã grelhada, mostarda, mel e rúcula", price: " "}, 
        ]},
        {name: "SOBREMESA", index: 4, isSelected: false, items: [
            {name: "1 BOLA GELADO", price: "2"},
            {name: "2 BOLAS GELADO", price: "3.5"},
            {name: "CHEESECAKE", price: "4"},
        ]},
        {name: "VINHOS", index: 5, isSelected: false, items: [
            {name: "Maduro Branco", price: " "},
            {name: "CASA DO CANTO", price: "12"},
            {name: "MADRE DE ÁGUA", price: "13"},
            {name: "CASTELO DE NUMÃO", price: "14"},
            {name: " ", price: " "},
            {name: "Verde Branco", price: " "},
            {name: "QUINTA DE SANTA CRISTINA", price: "11"},
            {name: " ", price: " "},
            {name: "Maduro Tinto", price: " "},
            {name: "CASA DO CANTO", price: "12"},
            {name: "MADRE DE ÁGUA", price: "13"},
            {name: " ", price: " "},
            {name: "Espumante", price: " "},
            {name: "DALVA", price: "17"},
            {name: "PEDRA LASCADA", price: "18"},
            {name: " ", price: " "},
            {name: "Champanhe", price: ""},
            {name: "G.H.MUMM", price: "55"}
        ]},
        {name: "SANGRIA", index: 6, isSelected: false, items: [
            {name: "MARACUJÁ 1L", price: "15"},
            {name: "MARACUJÁ 2L", price: "25"},
            {name: "MAÇÃ E KIWI 1L", price: "15"},
            {name: "MAÇÃ E KIWI 2L", price: "25"},
            {name: "FRUTOS VERMELHOS 1L", price: "15"},
            {name: "FRUTOS VERMELHOS 2L", price: "25"},
            {name: "MANGA E MARACUJÁ 1L", price: "25"},
            {name: "MANGA E MARACUJÁ 2L", price: "25"},
        ]},
        {name: "PONCHA", index: 7, isSelected: false, items: [
            {name: "MARACUJÁ", price: "4"},
            {name: "TANGERINA", price: "4"},
            {name: "REGIONAL", price: "4.5"},
            {name: "GARRAFA DE MARACUJÁ", price: "20"},
            {name: "GARRAFA DE TANGERINA", price: "20"},
            {name: "GARRAFA DE REGIONAL", price: "22.5"},
        ]},
        {name: "COCKTAIL", index: 8, isSelected: false, items: [
            {name: "MOJITO", price: "7"},
            {name: "CAIPIRINHA", price: "6"},
            {name: "OLD FASHIONED", price: "7"},
            {name: "NEGRONI", price: "8"},
            {name: "WHISKEY SOUR", price: "7.5"},
            {name: "VODKA SOUR", price: "7.5"},
            {name: "VODKA SOUR C/ SABOR", price: "8.5"},
            {name: "maracujá, maçã, kiwi, coco, morango, framboesa e manga", price: " "},
            {name: "ESPRESSO MARTINI", price: "8"}
        ]},
        {name: "CERVEJA", index: 9, isSelected: false, items: [
            {name: "SAGRES 25CL", price: "1.5"},
            {name: "SAGRES 50CL", price: "2.8"},
            {name: "BOHEMIA ORIGINAL", price: "2.5"},
            {name: "BOHEMIA BOCK", price: "2.5"},
            {name: "HEINEKEN", price: "1.70"},
            {name: "PAULANER", price: "4.9"},
            {name: "ERDINGER", price: "4.9"},
            {name: "SOMERSBY", price: "3"},
            {name: "3 MONT'S", price: "8.5"}
        ]},
        {name: "GIN", index: 10, isSelected: false, items: [
            {name: "BEEFEATER", price: "6"},
            {name: "BOMBAY SAPHIRE", price: "6.5"},
            {name: "BIG BOSS", price: "7"},
            {name: "TANQUERAY TEN", price: "8"},
            {name: "CITADELLE", price: "8"},
            {name: "NORDÉS", price: "8.5"},
            {name: "GIN MARE", price: "9"},
            {name: "MONKEY 47", price: "12"}
        ]},
        {name: "WHISKY", index: 11, isSelected: false, items: [
            {name: "JAMESON", price: "6"},
            {name: "BALLANTINE'S", price: "5.5"},
            {name: "JACK DANIELS", price: "7"},
            {name: "J.WALKER BLACK LABEL", price: "8"},
            {name: "OLD PARR 12 ANOS", price: "11"},
            {name: "GLENROTHES 12 ANOS", price: "12"}
        ]},
        {name: "VODKA", index: 12, isSelected: false, items: [
            {name: "MOSKOVSKAYA", price: "5.5"},
            {name: "ABSOLUT", price: "7"},
            {name: "CIROC", price: "8"},
            {name: "GREY GOOSE", price: "9"}
        ]},
        {name: "RUM", index: 13, isSelected: false, items: [
            {name: "BACARDI LIMÓN", price: "5.5"},
            {name: "HAVANA CLUB 3 ANOS", price: "6"},
        ]},
        {name: "APERITIVO E DIGESTIVO", index: 14, isSelected: false, items: [
            {name: "PORTO", price: "2"},
            {name: "PORTO TÓNICO", price: "5"},
            {name: "MARTINI BIANCO", price: "5"},
            {name: "CR&F", price: "4"},
        ]},
        {name: "LICOR", index: 15, isSelected: false, items: [
            {name: "AMÊNDOA AMARGA", price: "3.5"},
            {name: "LICOR BEIRÃO", price: "4"},
            {name: "BAILEYS", price: "4"}
        ]},
        {name: "ÁGUA E SUMO", index: 16, isSelected: false, items: [
            {name: "ÁGUA", price: "1"},
            {name: "ÁGUA DAS PEDRAS", price: "1.2"},
            {name: "ÁGUA DAS PEDRAS SABORES", price: "1.5"},
            {name: "COCA-COLA", price: "1.8"},
            {name: "COCA-COLA ZERO", price: "1.8"},
            {name: "ICE TEA", price: "1.8"},
            {name: "SUMOL", price: "1.8"},
            {name: "ÁGUA TÓNICA", price: "2"},
            {name: "GINGER ALE", price: "2"},
            {name: "REDBULL", price: "2.5"},
            {name: "SUMO DE LARANJA NATURAL", price: "3"},
            {name: "LIMONADA", price: "3"}
        ]},
        {name: "SHISHA", index: 17, isSelected: false, items: [
            {name: "LOVE 66", price: "20"},
            {name: "melão, melancia, maracujá e menta", price: " "},
            {name: "AWAY", price: "20"},
            {name: "ananás, manga e menta", price: " "},
            {name: "KIZZ", price: "20"},
            {name: "menta", price: " "},
            {name: "MI AMOR", price: "20"},
            {name: "ananás, banana e menta", price: " "}
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
