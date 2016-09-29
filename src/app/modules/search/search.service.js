export default class SearchService {
  /*@ngInject*/
  constructor($http, $timeout) {
    // console.log('$http', $http);
    this.name = 'SearchService';
    this.$http = $http;
    this.$timeout = $timeout;
    this.itemIndex = 0;
    this.page = 0;
  }

  searchItems(userInput, promise) {
    return this.$http.get('autocomplete.json');
  }

  setItems(items) {
    var allItems = this.allItems = [];
    items["bread"].forEach(function(item) {
      allItems.push(item);
    });

    items["eggs"].forEach(function(item) {
      allItems.push(item);
    });
  }

  getItems(size) {
    let items;
    if (size > 0) {
      this.page++;
      let endIndex = this.page * size;
      let startIndex = endIndex - size;
      if (endIndex < this.allItems.length) {
        items = this.allItems.slice(startIndex, size);
      } else if (startIndex < this.allItems.length - 1) {
        items = this.allItems.slice(startIndex);
      }
    } else {
      size = Math.abs(size);
      this.page--;
      let endIndex = this.page*size;
      let startIndex = endIndex-size;
      if (startIndex >= 0) {
        items = this.allItems.slice(startIndex, endIndex);
      }
    }

    console.log("this.page",this.page);
    return {
      items: items,
      next: (this.page * size) < this.allItems.length,
      prev: ((this.page - 1) * size) > 0
    };
  }
}
