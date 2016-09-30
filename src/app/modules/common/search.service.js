export default class SearchService {
  /*@ngInject*/
  constructor($http, $timeout) {
    // console.log('$http', $http);
    this.name = 'SearchService';
    this.$http = $http;
    this.$timeout = $timeout;
    this.page = 0;
  }

    resetPage(){
        this.page=0;
    }

  searchItems(userInput, promise) {
      console.log("searchService.searchItems", this.$http.get('autocomplete.json'))
      console.log("promise",promise);
      this.resetPage();
    return this.$http.get('autocomplete.json');
  }

  setItems(data) {
      this.resetPage();
    this.allItems = data['items'].filter(function(item){
        return item.url;
    });
  }

  filterItems(userInput){
      console.log("this.allItems",this.allItems);
      this.filteredItems=this.allItems.filter(function(item){
          return item.description.indexOf(userInput)!==-1 && item.url;
      });
      this.resetPage();
      return this.filteredItems;
  }

    searchResponse(userInput){
        return this.allItems.filter(function(item){
            return item.description.indexOf(userInput)!==-1;
        });
    }

   clearItems(){
       this.page=0;
       this.filteredItems=undefined;
   }

  getItems(size){
      console.log("searchservice getitems page",this.page);
      console.log("this.filteredItems",this.filteredItems);
      console.log("this.allItems",this.allItems);
    let items,startIndex,endIndex;

      var filteredItems=this.filteredItems||this.allItems;
      console.log("filteredItems",filteredItems);
    if (size > 0) {
      this.page++;
      endIndex = this.page * size;
      startIndex = endIndex - size;
    } else {
      size = Math.abs(size);
      this.page--;
      endIndex = this.page*size;
      startIndex = endIndex-size;
    }
      console.log("this.page",this.page);
      console.log("startIndex",startIndex);
      console.log("endIndex",endIndex);
      items = filteredItems.slice(startIndex, endIndex);

      console.log("this.page * size",this.page * size);
      console.log("filteredItems.length",filteredItems.length);

    return {
      items: items,
      next: (this.page * size) < filteredItems.length,
      prev: ((this.page - 1) * size) > 0
    };
  }

  getRelatedItems(relative) {
    const related = this.allItems.filter(function(item) {
      return (item.category === relative.category && item.name !== relative.name);
    });
    return related;
  }
}
