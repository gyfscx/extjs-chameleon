Ext.define('Chameleon.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Chameleon',

    stores: [],
    
    launch: function () {},

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
