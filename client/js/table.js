Template.table.helpers({
  book: function(){

    return College.find({'name':'NIT-Warangal'}).fetch();
  },
'show': function() {

    return College.findOne({'name': Session.get('selectValue')});


},
'showw': function() {

    return College.findOne({'name': Session.get('selectValuee')});


},
'showww': function() {

    return College.findOne({'name': Session.get('selectValueee')});


},
'showwww': function() {

    return College.findOne({'name': Session.get('selectValueeee')});


}


});
Template.table.events({
  'change #addcollege': function(event, template){

var selectValue = $("#addcollege").val();
var select = Session.set('selectValue', selectValue);

console.log(selectValue);


  },
  'change #addcollegee': function(event, template){

var selectValuee = $("#addcollegee").val();
var selectt = Session.set('selectValuee', selectValuee);

console.log(selectValuee);


  },
  'change #addcollegeee': function(event, template){

var selectValueee = $("#addcollegeee").val();
var selecttt = Session.set('selectValueee', selectValueee);

console.log(selectValueee);


  },
  'change #addcollegeeee': function(event, template){

var selectValueeee = $("#addcollegeeee").val();
var selectttt = Session.set('selectValueeee', selectValueeee);

console.log(selectValueeee);


  }
});
Template.rank.helpers({
  groups: function(){
    return College.find({'rank':{ $gte : 1, $lt:10 }}).fetch();
  }
});
