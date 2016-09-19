
export default class SearchController{

    /**
     *
     * @param $scope to interact with autocomplete-callbacks like searchItems,searchResponseFormatter,objectSelectedCallback
     * @param SearchService
     *@ngInject
     */
    constructor($scope, SearchService){
        this.name='Search Items';
        this.searchService=SearchService;
        var search = this;
        $scope.searchItems = this.searchItems.bind(this);
        $scope.searchResponseFormatter=function(json){
            for(var key of Object.keys(json)){
                if(key.indexOf(search.userInput)!=-1){
                   return {results:json[key]}
                }
            }
            return {results:[]};
        };
        $scope.objectSelectedCallback=function(object){
            console.log("objectSelectedCallback object",object);
            search.searchResultItems=[{"name":"bread", "description":"simple white bread"},
                {"name":"gluten free bread", "description":"gluten free bread"},
                {"name":"sourdough bread", "description":"sourdough bread"},
                {"name":"whole wheat bread", "description":"whole wheat bread"},
                {"name":"pita bread", "description":"pita bread"}
            ];
        };


        search.searchResultItems=[{"name":"bread", "description":"simple white bread"},
            {"name":"gluten free bread", "description":"gluten free bread"},
            {"name":"sourdough bread", "description":"sourdough bread"},
            {"name":"whole wheat bread", "description":"whole wheat bread"},
            {"name":"pita bread", "description":"pita bread"},
            {"name":"eggs organic", "description":"eggs organic"},
            {"name":"eggs cage free", "description":"eggs cage free"},
            {"name":"pasture raised eggs", "description":"pasture raised eggs"},
            {"name":"organic brown eggs", "description":"organic brown eggs"},
            {"name": "organic cage free eggs", "description": "organic cage free eggs"}
        ];


    }

    searchItems(userInput,promise){
        this.userInput = userInput;
       return this.searchService.searchItems(userInput,promise);
    }

}


