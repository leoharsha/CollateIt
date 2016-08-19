Template.forum.events({

  "submit .message": function (event) {

    // Prevent default browser form submit

    event.preventDefault();



    // Get value from form element

    var InputName = event.target.InputName.value;
      var InputMessage = event.target.InputMessage.value;



    // Insert a task into the collection

    Message.insert({

      name: InputName,

      message: Message // current time

    });



    // Clear form

    event.target.text.value = "";

  }

});
Template.messages.helpers({
  messages: function(){
    return Messages.find({}, {sort: {time: -1}} );
  }
})
Template.forum.helpers({
  message: function(){
    return Message.find();

  }
});
Template.input.events = {
  'submit form': function(event){
    event.preventDefault();

    if (Meteor.user()){
      var name = Meteor.user().profile.name;
    } else {
      var name = 'Annoymous';
    }

    var message = document.getElementById('message');

    if (message.value !== '') {
      Messages.insert({
        name: name,
        message: message.value,
        time: Date.now()
      })

      document.getElementById('message').value = '';
      message.value = '';
    };
  }
}
