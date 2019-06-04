function PetFinderService($http, $q) {
    const service = this;
    service.key = 'rEKWKvPrW7HpooXYxbjymSfIAOyKcwvvhixHIIWNAYlZeLLzmv'; // Fill in here
    service._secret = 'OlpuSV27PqFDXswHBLBMPCHuTPh6DfxauvnwNSO5'; // Fill in here
    service.token = '';
    service.doAuth = () => {
        return $q(function (resolve, reject) {
            $http({
                url: 'https://api.petfinder.com/v2/oauth2/token',
                data: {
                    grant_type: 'client_credentials',
                    client_id: service.key,
                    client_secret: service._secret
                },
                method: 'POST'
            })
                .then((response) => {
                    service.token = response.data.access_token;
                    resolve(service.token);
                });
        })
    };
    service.getData = (type, name, gender, size) => {
        console.log("getting data...");
        return $q(function (resolve, reject) {
            service.doAuth()
                .then((token) => {
                    $http({
                        // url: 'https://api.petfinder.com/v2/animals?type=dog',
                        url: `https://api.petfinder.com/v2/animals`,
                        method: 'GET',
                        headers: {
                            'Authorization': 'Bearer ' + token
                        },
                        params: {
                            type: type,
                            name:  name,     
                            gender: gender,
                            size: size
                        }
                    })
                        .then((response) => {
                            console.log("response...", response.data.animals);
                            resolve(response.data.animals);
                        })
                        .catch((err) => {
                            console.log(err);
                            reject(err);
                        })
                });
        });
    }
}
angular
    .module('PetApp')
    .service('PetFinder', ['$http', '$q', PetFinderService])