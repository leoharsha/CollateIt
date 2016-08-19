
Router.configure({
	layoutTemplate: 'main',
  notFoundTemplate:'notFoundTemplate',
  loadingTemplate:'loadingTemplate'
});
Router.route('/', function () {
  this.render('home');
  this.layout('mainn');
});
Router.route('/compare', function () {
  this.render('table');
this.layout('mainnn');
});
Router.route('/home', function () {
  this.render('home');
  this.layout('mainn');
});
Router.route('/login', function () {
  this.render('login');
  this.layout('mainn');
});
Router.route('/contact', function () {
  this.render('contact');
  this.layout('mainn');
});
Router.route('/rank', function () {
  this.render('rank');
  this.layout('mainn');
});
Router.route('/about', function () {
  this.render('about');
  this.layout('mainn');
});
Router.route('/forum', function () {
  this.render('forum');
  this.layout('mainn');
});
