var menuApp = angular.module("menu", []);
menuApp.controller("menuCtrl", ['$scope', function ($scope) {

    // --- DATA
    $scope.chapters = [
        {name: "PARA PARTILHAR", index: 0, isSelected: false, items: [
            {name: "BATATA FRITA", price: "3"},
            {name: "MOZARELLA STICKS", price: "6.5"},
            {name: "CAMEMBERT BITES", price: "6.5"},
            {name: "NUGGETS", price: "6.5"},
            {name: "ASINHAS DE FRANGO", price: "7.5"},
            {name: "TOSTA MISTA", price: "3"},
            {name: "AMENDOINS", price: "0.5"},
            {name: "AMENDOINS C/ MEL E SAL", price: "1"},
            {name: "TREMOÇOS", price: "0.5"}
       ]},
        {name: "CAFETARIA", index: 1, isSelected: false, items: [
            {name: "CAFE", price: "1"},
            {name: "DESCAFEINADO", price: "1"},
            {name: "CARIOCA DE CAFE", price: "0.8"},
            {name: "CARIOCOA DE LIMÃO", price: "0.8"},
            {name: "CARIOCA DE LIMÃO DUPLO", price: "1.2"},
            {name: "CHA", price: "2"},
            {name: "CAPUCCINO", price: "2.5"}
        ]},
        {name: "VINHOS", index: 2, isSelected: false, items: [
            {name: "- Maduro Branco", price: ""},
            {name: "GRAVIDADE", price: "23"},
            {name: "VAL MOREIRA", price: "23"},
            {name: "SILICA", price: "12"},
            {name: "VOLTE FACE", price: "18"},
            {name: "QUINTA DAS CAMELIAS", price: "15"},
            {name: " ", price: " "},
            {name: "- Verde Branco", price: ""},
            {name: "BURRA DE FERRO", price: "10"},
            {name: " ", price: " "},
            {name: "- Maduro Tinto", price: ""},
            {name: "VALE DO BRAGÃO", price: "10"},
            {name: "VALE DO BRAGÃO Reserva", price: "20"},
            {name: "SOITO", price: "18"},
            {name: "VOLTE FACE", price: "18"},
            {name: " ", price: " "},
            {name: "- Espumante", price: ""},
            {name: "DALVA", price: "17"},
            {name: "ALEIXO", price: "20"},
            {name: " ", price: " "},
            {name: "- Champanhe", price: ""},
            {name: "GH MUMM", price: "75"},
            {name: "TAITTINGER", price: "80"},
            {name: " ", price: " "},
            {name: "- Rosé", price: ""},
            {name: "BLEND.PT", price: "11"}
        ]},
        {name: "SANGRIA", index: 3, isSelected: false, items: [
            {name: "MARACUJÁ 1L", price: "15"},
            {name: "MARACUJÁ 2L", price: "25"},
            {name: "MAÇÃ E KIWI 1L", price: "15"},
            {name: "MAÇÃ E KIWI 2L", price: "25"},
            {name: "FRUTOS VERMELHOS 1L", price: "15"},
            {name: "FRUTOS VERMELHOS 2L", price: "25"},
            {name: "MANGA E MARACUJÁ 1L", price: "15"},
            {name: "MANGA E MARACUJÁ 2L", price: "25"}
        ]},
        {name: "PONCHA", index: 4, isSelected: false, items: [
            {name: "MARACUJÁ", price: "4.5"},
            {name: "TANGERINA", price: "4.5"},
            {name: "REGIONAL", price: "5"},
            {name: "GARRAFA DE MARACUJÁ", price: "22"},
            {name: "GARRAFA DE TANGERINA", price: "22"},
            {name: "GARRAFA DE REGIONAL", price: "25"}
        ]},
        {name: "COCKTAIL", index: 5, isSelected: false, items: [
            {name: "MOJITO", price: "7.5"},
            {name: "CAIPIRINHA", price: "6.5"},
            {name: "OLD FASHIONED", price: "8.5"},
            {name: "IRISH COFFEE", price: "9.5"},
            {name: "NEGRONI", price: "8.5"},
            {name: "WHISKEY SOUR", price: "8"},
            {name: "VODKA SOUR", price: "8"},
            {name: "VODKA SOUR C/ SABOR", price: "9"},
            {name: "maracujá, maçã, kiwi, coco, morango, framboesa e manga", price: ""},
            {name: "ESPRESSO MARTINI", price: "8.5"}
        ]},
        {name: "CERVEJA", index: 6, isSelected: false, items: [
            {name: "SUPER BOCK 20CL", price: "1.5"},
            {name: "SUPER BOCK 35CL", price: "2.5"},
            {name: "SUPER BOCK 50CL", price: "3"},
            {name: "SUPER BOCK ABADIA 33CL", price: "2.5"},
            {name: "CARLSBERG", price: "1.7"},
            {name: "GRIMBERGEN", price: "3"},
            {name: "1927 MUNICH DUNKEL", price: "3"},
            {name: "SOMERSBY 33CL", price: "3"},
            {name: "frutos vermelhos, maçã", price: ""}
        ]},
        {name: "GIN", index: 7, isSelected: false, items: [
            {name: "BEEFEATER", price: "7"},
            {name: "BOMBAY SAPHIRE", price: "7.5"},
            {name: "MARTIN MILLER'S", price: "8"},
            {name: "TANQUERAY TEN", price: "8.5"},
            {name: "CITADELLE", price: "8.5"},
            {name: "NORDÉS", price: "9"},
            {name: "GIN MARE", price: "9.5"},
            {name: "MONKEY 47", price: "12.5"},
        ]},
        {name: "WHISKY", index: 8, isSelected: false, items: [
            {name: "BALLANTINE'S", price: "6.5"},
            {name: "JAMESON", price: "7"},
            {name: "JACK DANIELS", price: "8"},
            {name: "J.WALKER BLACK LABEL", price: "8.5"},
            {name: "MONKEY SHOULDER", price: "9.5"},
            {name: "OLD PARR 12 ANOS", price: "11.5"}
        ]},
        {name: "VODKA", index: 9, isSelected: false, items: [
            {name: "MOSKOVSKAYA", price: "6.5"},
            {name: "ABSOLUT", price: "7.5"},
            {name: "BELVEDERE", price: "8.5"},
            {name: "GREY GOOSE", price: "9.5"}
        ]},
        {name: "RUM", index: 10, isSelected: false, items: [
            {name: "BACARDI LIMÓN", price: "6.5"},
            {name: "HAVANA CLUB 3 ANOS", price: "7"}
        ]},
        {name: "APERITIVO E DIGESTIVO", index: 11, isSelected: false, items: [
            {name: "SHOT", price: "2.5"},
            {name: "SHOT PREMIUM", price: "3"},
            {name: "", price: ""},
            {name: "PORTO", price: "3"},
            {name: "PORTO TÓNICO", price: "5"},
            {name: "MARTINI BIANCO", price: "5"},
            {name: "MACIEIRA", price: "3.5"},
            {name: "CROFT", price: "3.5"},
            {name: "CR&F", price: "4"}
        ]},
        {name: "LICOR", index: 12, isSelected: false, items: [
            {name: "AMÊNDOA AMARGA", price: "3.5"},
            {name: "LICOR BEIRÃO", price: "4"},
            {name: "BAILEYS", price: "4.5"}
        ]},
        {name: "ÁGUA E SUMO", index: 13, isSelected: false, items: [
            {name: "ÁGUA", price: "1"},
            {name: "ÁGUA DAS PEDRAS", price: "1.5"},
            {name: "ÁGUA DAS PEDRAS SABORES", price: "1.7"},
            {name: "COCA-COLA", price: "1.8"},
            {name: "COCA-COLA ZERO", price: "1.8"},
            {name: "ICE TEA Pêssego", price: "1.8"},
            {name: "ÁGUA TÓNICA", price: "2"},
            {name: "GINGER ALE", price: "2"},
            {name: "REDBULL", price: "2.5"},
            {name: "SUMO DE LARANJA NATURAL", price: "4"},
            {name: "LIMONADA", price: "3"}
        ]},
        {name: "SHISHA", index: 14, isSelected: false, items: [
            {name: "LOVE 66", price: "20"},
            {name: "melão, melancia, maracujá e menta", price: ""},
            {name: "L.KILL", price: "20"},
            {name: "melão, manga, pêssego e menta", price: ""},
            {name: "MI AMOR", price: "20"},
            {name: "ananás, banana e menta", price: ""}
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
