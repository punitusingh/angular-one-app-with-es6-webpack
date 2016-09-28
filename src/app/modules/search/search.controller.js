export default class SearchController {
  /**
   *
   * @param $scope to interact with autocomplete-callbacks like searchItems,searchResponseFormatter,objectSelectedCallback
   * @param SearchService
   *@ngInject
   */
  constructor($scope, SearchService) {
    console.log('search.controller arguments', arguments);
    console.log('search.controller this', this);
    this.name = 'Search Items';
    this.searchService = SearchService;
    var search = this;
    this.defaultResults();
    $scope.searchItems = this.searchItems.bind(this);
    $scope.searchResponseFormatter = function(json) {
      for (var key of Object.keys(json)) {
        if (key.indexOf(search.userInput)!== -1) {
          return {results:json[key]}
        }
      }
      return {results:[]};
    };
    $scope.objectSelectedCallback = function(object) {
      // console.log('objectSelectedCallback object', object);
      search.searchResultItems = [{"name":"bread", "description":"simple white bread"},
        {"name":"gluten free bread", "description":"gluten free bread"},
        {"name":"sourdough bread", "description":"sourdough bread"},
        {"name":"whole wheat bread", "description":"whole wheat bread"},
        {"name":"pita bread", "description":"pita bread"}
      ];
    };
  }

  defaultResults() {
    let results = [];
    var search = this;

    this.searchService.searchItems().then(function(response) {
      search.searchService.setItems(response.data);
      search.next();
    });
  }

  searchItems(userInput, promise) {
    this.userInput = userInput;
    return this.searchService.searchItems(userInput, promise);
  }

  next(){
      var stateObj=this.searchService.getItems(5);
      console.log("stageObj",stateObj);
      this.searchResultItems=stateObj.items;
      this.pageState={next:stateObj.next, prev:stateObj.prev};
  }
    prev(){
        var stateObj=this.searchService.getItems(-5);
        this.searchResultItems=stateObj.items;
        this.pageState={next:stateObj.next, prev:stateObj.prev};
    }
}
