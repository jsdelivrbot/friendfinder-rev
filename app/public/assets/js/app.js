    // Capture the form inputs 
    $("#submit").on("click", function(){

      // Form validation
      function validateForm() {
      var isValid = true;
      $('.form-control').each(function() {
        if ( $(this).val() === '' )
            isValid = false;
      });

      $('.chosen-select').each(function() {

        if( $(this).val() === "")
          isValid = false
      })
      return isValid;
    }

    // Form Validation
    if (validateForm() == true)
    {
      // Data Input by User
        var userData = {
          name: $("#name").val(),
          photo: $("#photo").val(),
          scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
        }

        var baseURL = window.location.origin;
        console.log(baseURL);

         $.post(baseURL + "/api/friends", userData, function(data){

          $("#match-name").text(data.name);
          $('#match-img').attr("src", data.photo);

          console.log("Name is " + data.name + ". Image source is " + data.photo);

          // Show the modal with the best match 
          $("#results-modal").modal('toggle');

        });
    }
    else
    {
      alert("Please fill out all fields before submitting!");
    }
      
      return false;
    });