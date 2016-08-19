Template.login.events({



    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    },

});
Template.nav.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
});
Template.navbar.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
});
Template.navbarr.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
});

if(Meteor.isClient){
  Accounts.ui.config({
      requestPermissions: {},
      extraSignupFields: [{
          fieldName: 'first-name',
          fieldLabel: 'First name',
          inputType: 'text',
          visible: true,
          validate: function(value, errorFunction) {
            if (!value) {
              errorFunction("Please write your first name");
              return false;
            } else {
              return true;
            }
          }
      }, {
          fieldName: 'last-name',
          fieldLabel: 'Last name',
          inputType: 'text',
          visible: true,
      },  {
          fieldName: 'country',
          fieldLabel: 'Country',
          inputType: 'select',
          showFieldLabel: true,
          empty: 'Select your country',
          data: [{
              id: 1,
              label: 'United States',
              value: 'us'
            }, {
              id: 2,
              label: 'India',
              value: 'ind',
          }],
          visible: true
      }, ]
  });
}
