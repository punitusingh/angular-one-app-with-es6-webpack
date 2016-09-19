

export default class SearchService{


    /*@ngInject*/
    constructor($http,$timeout){
        console.log("$http",$http);
        this.name='SearchService';
        this.$http=$http;
        this.$timeout=$timeout;
    }

    searchItems(userInput,promise){
        console.log("arguments",arguments);
        console.log("this.name",this.name);
        return this.$http.get('autocomplete.json');

        //{"data": [Array of objects]}

    }

}

