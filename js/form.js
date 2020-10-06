/*	InternForm.js
 *		Handles the functionality of the internship signup form
*/

$(document).ready(function() {
  

  // Called when the intern form is submitted
  $('#internForm').submit(function() {

    $(".submit-button").attr("value","Submitting...");

    setTimeout(function(){
      $("#internFormOpen").fadeOut( "slow", function() {	// Fadeout the form and fadein the "thanks message"

        $("#internFormSubmitted").fadeIn("slow");

        var formData = $( "#internForm" ).serializeArray();

        // Output form data to the console
        console.log("*** FORM DATA ***");
        formData.forEach(function(element) {
          
          console.log(element.name + ": " + element.value);
        });
      });
    }, 2000);

    event.preventDefault();
  });

  // Changes the colour of the select options to give an illusion of a placeholder
  $(".select-interest").change(function(){
    $(this).css("color", "#000000");
  });
});