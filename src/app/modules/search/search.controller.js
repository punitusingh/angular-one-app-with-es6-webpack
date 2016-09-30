import { each } from 'lodash';

export default class SearchController {
  /**
   *
   * @param $scope to interact with autocomplete-callbacks like searchItems,searchResponseFormatter,objectSelectedCallback
   * @param SearchService
   *@ngInject
   */
  constructor($scope, SearchService, shoppingCart) {
    this.name = 'Search Items';
    this.searchService = SearchService;
    this.shoppingCart = shoppingCart;
    this._MAX_ITEMS_PER_PAGE = 5;
    var search = this;
    this.defaultResults();
    $scope.searchItems = this.searchItems.bind(this);
    $scope.searchResponseFormatter = function(json) {
      // console.log("json",json);
        if(!(json && json.items && search.userInput && search.userInput.length>2)){
            return {results:[]};
        }
        return {results:search.searchService.searchResponse(search.userInput)};
    };
    $scope.objectSelectedCallback = function(object) {
       // console.log('objectSelectedCallback object', object);
        if(!object){
            return;
        }

        var selectedWord = object.title;
        search.searchService.filterItems(selectedWord);
        search.next();
    };
      $scope.inputChangedCallback=function(item){
          // console.log("inputChangedCallback item::",item);
          // console.log("inputChangedCallback item.length::",item.length);
          if(!item || item.length===0){
              // console.log("calling defaultResults from inputChangedCallback");
              search.searchService.clearItems();
              search.next();
          }
      }
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
      // console.log("searchItems userInput",userInput);
    this.userInput = userInput;
    return this.searchService.searchItems(userInput, promise);
  }

  next() {
      var stateObj = this.searchService.getItems(this._MAX_ITEMS_PER_PAGE);
      // console.log("stageObj",stateObj);
      this.searchResultItems=stateObj.items;
      this.pageState={next:stateObj.next, prev:stateObj.prev};
  }

  prev() {
      var stateObj = this.searchService.getItems(-1 * this._MAX_ITEMS_PER_PAGE);
      this.searchResultItems=stateObj.items;
      this.pageState = {next:stateObj.next, prev:stateObj.prev};
  }
}
