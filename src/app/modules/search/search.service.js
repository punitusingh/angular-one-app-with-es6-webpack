export default class SearchService {
  /*@ngInject*/
  constructor($http, $timeout) {
    console.log('$http', $http);
    this.name = 'SearchService';
    this.$http = $http;
    this.$timeout = $timeout;
  }

  searchItems(userInput, promise) {
    return this.$http.get('autocomplete.json');
  }
}
