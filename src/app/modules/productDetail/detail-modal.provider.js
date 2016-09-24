/**
 * @ngInject
 */
export default class DetailModalProvider{
    $get(ModalService){
        var provider={
            open:()=>{
                console.log("ModalService",ModalService);
                ModalService.showModal({
                    template: require('./detail-modal.html'),
                    contoller:'DetailModalController'
                }).then(function(modal) {
                    modal.element.modal();
                });
            }
        };

        return provider;
    }
}

