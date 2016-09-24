export default class ResultController{
    constructor(DetailModalProvider){
        console.log('DetailModalProvider',DetailModalProvider);
        this.detailModalProvider=DetailModalProvider;
    }
    productDetail(){
        console.log("Result Controller productDetail called.");
        this.detailModalProvider.open();
    }
}