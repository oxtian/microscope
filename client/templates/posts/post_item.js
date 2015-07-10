Template.postItem.helpers({
  'domain': function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname; //get back the link's domain name without the rest of the URL.
  }
});