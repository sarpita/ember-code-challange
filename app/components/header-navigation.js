import Component from '@ember/component';

export default Component.extend({
	isShowingModal: false,
  	actions: {
  		showPricingModal: function(){
  			this.send('showModalDialog','this is pricing modal')
  		},
  		showAboutModal: function(){
  			this.send('showModalDialog','this is about modal')
  		},
  		closeModal: function(){
  			this.set('isShowingModal',false);
  		},
    	showModalDialog: function(message) {
    		this.set('modalDialogText', message);
      		this.set('isShowingModal',true);
    	}
  	}
});
