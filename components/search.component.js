function PetSearch (PetFinder) {
    const ctrl = this

    ctrl.explore = (type, name, gender, size)=> {
        PetFinder.getData(type, name, gender, size)
        .then((data)=> {
            ctrl.animals = data;
        })
        .catch(() => {
            alert("You entered the wrong data. Please try again!")
        })
    }

}



angular
    .module('PetApp')
    .component('petSearch', {
        template: `
        <div class="container">
        <h2>Search for your next best friend...</h2>
        <h5>Directions: use the appropriate searches to search by type, name, gender, and size.</h5>
        <input class="search" type="type" ng-model="type" placeholder="Search Animal Type"></input>
        <input class="search" type="name" ng-model="name" placeholder="Search Name"></input>
        <input class="search" type="gender" ng-model="gender" placeholder="Search Gender"></input>
        <input class="search" type="size" ng-model="size" placeholder="Search Size"></input> 
 
        <button ng-click="$ctrl.explore(type, name, gender, size)">Fetch!</button>
        </div>

        <div class="results">
        <pet-display animals="$ctrl.animals"></pet-display>
        </div>
        `,

        controller: PetSearch
    })