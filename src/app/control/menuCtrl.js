var menuApp = angular.module("menu", []);
menuApp.controller("menuCtrl", ['$scope', function ($scope) {

    // --- DATA
    $scope.chapters = [
        {name:"FINGER FOOD", index: 0, partialName:"src/app/partial/chaptersPartials/00_fingerFoodPartial.html", isSelected: false},
        {name:"PREGO", index: 1, partialName:"src/app/partial/chaptersPartials/01_pregoPartial.html", isSelected: false},
        {name:"HAMBURGER", index: 2, partialName:"src/app/partial/chaptersPartials/02_hamburgerPartial.html", isSelected: false},
        {name:"SOBREMESAS", index: 3, partialName:"src/app/partial/chaptersPartials/03_sobremesasPartial.html", isSelected: false},
        {name:"SHISHA", index: 4, partialName:"src/app/partial/chaptersPartials/04_shishaPartial.html", isSelected: false},
        {name:"GIN", index: 5, partialName:"src/app/partial/chaptersPartials/05_ginPartial.html", isSelected: false},
        {name:"WHISKY", index: 6, partialName:"src/app/partial/chaptersPartials/06_whiskyPartial.html", isSelected: false},
        {name:"VODKA", index: 7, partialName:"src/app/partial/chaptersPartials/07_vodkaPartial.html", isSelected: false},
        {name:"RUM", index: 8, partialName:"src/app/partial/chaptersPartials/08_rumPartial.html", isSelected: false},
        {name:"SANGRIA", index: 9, partialName:"src/app/partial/chaptersPartials/09_sangriaPartial.html", isSelected: false},
        {name:"PONCHA", index: 10, partialName:"src/app/partial/chaptersPartials/10_ponchaPartial.html", isSelected: false},
        {name:"CERVEJA", index: 11, partialName:"src/app/partial/chaptersPartials/11_cervejaPartial.html", isSelected: false},
        {name:"VINHO", index: 12, partialName:"src/app/partial/chaptersPartials/12_vinhoPartial.html", isSelected: false},
        {name:"ESPUMANTE", index: 13, partialName:"src/app/partial/chaptersPartials/13_espumantePartial.html", isSelected: false},
        {name:"CHAMPAGNE", index: 14, partialName:"src/app/partial/chaptersPartials/14_champagnePartial.html", isSelected: false},
        {name:"APERITIVOS", index: 15, partialName:"src/app/partial/chaptersPartials/15_aperitivosPartial.html", isSelected: false},
        {name:"LICORES", index: 16, partialName:"src/app/partial/chaptersPartials/16_licoresPartial.html", isSelected: false},
        {name:"COCKTAILS", index: 17, partialName:"src/app/partial/chaptersPartials/17_cocktailsPartial.html", isSelected: false},
        {name:"COCKTAILS S/ ALCOOL", index: 18, partialName:"src/app/partial/chaptersPartials/18_cocktailsSAlcoolPartial.html", isSelected: false},
        {name:"SHOT", index: 19, partialName:"src/app/partial/chaptersPartials/19_shotPartial.html", isSelected: false},
        {name:"CAFETARIA", index: 20, partialName:"src/app/partial/chaptersPartials/20_cafetariaPartial.html", isSelected: false},
        {name:"BEBIDAS S/ ALCOOL", index: 21, partialName:"src/app/partial/chaptersPartials/21_bebidasSAlcoolPartial.html", isSelected: false}
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
