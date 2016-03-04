require([
        'jquery',
        'Magento_Ui/js/modal/alert'
    ],
    function($, alert) {
        $('#modal').on('click', 'button.modalRun', function(event){
            event.preventDefault();
            alert({
                content: $(event.target).parent().children('#msg').text()
            })
        })
    }
);