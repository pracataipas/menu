var menuApp = angular.module("menu", []);
menuApp.controller("menuCtrl", ['$scope', function ($scope) {

    // --- DATA
    $scope.chapters = [
        {name: "ENTRADAS", index: 0, isSelected: false, partialName: "src/app/partial/chaptersPartials/00_fingerFoodPartial.html"},
        {name: "PREGO", index: 1, isSelected: false, partialName: "src/app/partial/chaptersPartials/01_pregoPartial.html"},
        {name: "HAMBURGER", index: 2, isSelected: false, partialName: "src/app/partial/chaptersPartials/02_hamburgerPartial.html"},
        {name: "SOBREMESAS", index: 3, isSelected: false, partialName: "src/app/partial/chaptersPartials/03_sobremesasPartial.html"},
        {name: "SHISHA", index: 4, isSelected: false, partialName: "src/app/partial/chaptersPartials/04_shishaPartial.html"},
        {name: "GIN", index: 5, isSelected: false, partialName: "src/app/partial/chaptersPartials/05_ginPartial.html"},
        {name: "WHISKY", index: 6, isSelected: false, partialName: "src/app/partial/chaptersPartials/06_whiskyPartial.html"},
        {name: "VODKA", index: 7, isSelected: false, partialName: "src/app/partial/chaptersPartials/07_vodkaPartial.html"},
        {name: "RUM", index: 8, isSelected: false, partialName: "src/app/partial/chaptersPartials/08_rumPartial.html"},
        {name: "SANGRIA", index: 9, isSelected: false, partialName: "src/app/partial/chaptersPartials/09_sangriaPartial.html"},
        {name: "PONCHA", index: 10, isSelected: false, partialName: "src/app/partial/chaptersPartials/10_ponchaPartial.html"},
        {name: "CERVEJA", index: 11, isSelected: false, partialName: "src/app/partial/chaptersPartials/11_cervejaPartial.html"},
        {name: "VINHO", index: 12, isSelected: false, partialName: "src/app/partial/chaptersPartials/12_vinhoPartial.html"},
        {name: "ESPUMANTE", index: 13, isSelected: false, partialName: "src/app/partial/chaptersPartials/13_espumantePartial.html"},
        {name: "CHAMPAGNE", index: 14, isSelected: false, partialName: "src/app/partial/chaptersPartials/14_champagnePartial.html"},
        {name: "APERITIVOS", index: 15, isSelected: false, partialName: "src/app/partial/chaptersPartials/15_aperitivosPartial.html"},
        {name: "LICORES", index: 16, isSelected: false, partialName: "src/app/partial/chaptersPartials/16_licoresPartial.html"},
        {name: "COCKTAILS", index: 17, isSelected: false, partialName: "src/app/partial/chaptersPartials/17_cocktailsPartial.html"},
        {name: "COCKTAILS S/ ALCOOL", index: 18, isSelected: false, partialName: "src/app/partial/chaptersPartials/18_cocktailsSAlcoolPartial.html"},
        {name: "SHOT", index: 19, isSelected: false, partialName: "src/app/partial/chaptersPartials/19_shotPartial.html"},
        {name: "CAFETARIA", index: 20, isSelected: false, partialName: "src/app/partial/chaptersPartials/20_cafetariaPartial.html"},
        {name: "BEBIDAS S/ ALCOOL", index: 21, isSelected: false, partialName: "src/app/partial/chaptersPartials/21_bebidasSAlcoolPartial.html"}
    ];

    // --- MECHANISM
    $scope.showHideChapter = function(inputChapterIndex) {
        const auxConditions = [-1, inputChapterIndex];
        const indexChapterToHide = $scope.chapters.findIndex(chapter => chapter.isSelected === true);
        // hide opened chapter
        if (!auxConditions.includes(indexChapterToHide)) $scope.chapters[indexChapterToHide].isSelected = false;
        // show or hide input chapter
        $scope.chapters[inputChapterIndex].isSelected = !$scope.chapters[inputChapterIndex].isSelected;
    }
}]);
