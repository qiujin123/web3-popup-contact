// @codekit-prepend "scrollTrigger.js";

$( document ).ready(function() {

   $("#show-form-btn").on("click", function(){
      //console.log("button clicked");

      // hide contact-button-section
      $("#contact-button-section").hide();

      // show form container
      $("#form-container").show();

   });

});

