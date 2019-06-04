function PetDisplay () {
    const ctrl = this
    ctrl.makeUpSomething = ()=> {
        
    }
}



angular
    .module('PetApp')
    .component('petDisplay', {
        template: `
        <div class = "pet-info" ng-repeat="pet in $ctrl.animals">
            <h3>{{pet.name}}</h3>
            <ul>
            <li>{{pet.gender}}</li>
            <li>{{pet.species}}</li>
            <li>{{pet.size}} </li>
            </ul>
            <p>Find out more here: <a target="_blank" href="{{pet.url}}">more info</a> </p>
        </div>
        `,
        controller: PetDisplay,
        bindings:{animals: "<"} 
    })