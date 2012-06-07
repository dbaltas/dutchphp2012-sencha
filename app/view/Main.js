Ext.define("pandora.view.Main", {
    extend: 'Ext.Container',
    requires: [
    ],
    config: {
		items: [{
			xtype: 'toolbar',
			docked: 'top'
		}, {
			html: 'Left List',
			docked: 'left',
			width: 250
		}, {
			html: 'Center Area'
		}]
    }
});
