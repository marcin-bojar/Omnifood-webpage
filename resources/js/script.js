$(document).ready(function() {
   
    new Waypoint({
        element: document.getElementsByClassName('js--section-features'),
        handler: function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            }else {
                $('nav').removeClass('sticky');
            }
        }, 
        
        offset: '60px;'
        
    });
    
    
    
 /* var waypoint = new Waypoint({
  element: document.getElementById('new-operator'),
  handler: function(direction) {
    notify(this.id + ' hit')
  }
})

*/
    
});