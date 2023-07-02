var menuApp = angular.module("menu", []);
menuApp.controller("menuCtrl", ['$scope', function ($scope) {

    // --- DATA
    $scope.chapters = [
        {name: "ENTRADAS", index: 0, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_00.html"},
        {name: "PREGOS", index: 1, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_01.html"},
        {name: "HAMBURGUERES", index: 2, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_02.html"},
        {name: "PANQUECA", index: 3, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_03.html"},
        {name: "CREPE", index: 4, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_04.html"},
        {name: "GELADO", index: 5, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_05.html"},
        {name: "SANGRIA", index: 6, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_06.html"},
        {name: "PONCHA", index: 7, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_07.html"},
        {name: "COCKTAIL", index: 8, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_08.html"},
        {name: "SISHA", index: 9, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_09.html"},
        {name: "CERVEJA", index: 10, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_10.html"},
        {name: "VINHOS", index: 11, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_11.html"},
        {name: "CHAMPANHE E ESPUMANTE", index: 12, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_12.html"},
        {name: "GIN", index: 13, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_13.html"},
        {name: "WHISKY", index: 14, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_14.html"},
        {name: "VODKA", index: 15, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_15.html"},
        {name: "RUM", index: 16, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_16.html"},
        {name: "APERITIVO E DIGESTIVO", index: 17, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_17.html"},
        {name: "LICOR", index: 18, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_18.html"},
        {name: "SHOT", index: 19, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_19.html"},
        {name: "CAFETARIA", index: 20, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_20.html"},
        {name: "BEBIDAS S/ ÁLCOOL", index: 21, isSelected: false, partialName: "src/app/partial/chaptersPartials/chapter_21.html"}
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
