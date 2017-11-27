
  



 // Event listener for our cat-button

 var searchVal = '';
 $("#searchMe").on("click", function () {
     searchVal = $("#searchTerm").val();
     var button = $("<button>");
     button.text(searchVal);
     button.addClass("gifButton");


     $("#myButtons").append(button);

     $("#searchTerm").val("");


 })





 $("#myButtons").on("click", ".gifButton", function () {
    $("#images").empty();
     var tempSearch = $(this)[0].innerText;
     console.log(tempSearch);
     var apiKey = "nZDC9o03pF1neUTPso75tLqGxC8LUwkO"
     var searchNum = 10;
     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + tempSearch + "&api_key=" + apiKey + "&limit=" + searchNum;


     // Perfoming an AJAX GET request to our queryURL
     $.ajax({
             url: queryURL,
             method: "GET"
         })
         // After the data from the AJAX request comes back
         .done(function (response) {
             console.log(response);

             for (var i = 0; i < searchNum; i++) {
                 // Saving the image_original_url property
                 var imageUrl = response.data[i].images.original.url;
                 // Creating and storing an image tag
                 var catImage = $("<img>");
                 // Setting the catImage src attribute to imageUrl
                 catImage.attr("src", imageUrl);
                 catImage.attr("alt", "cat image");
                 // Prepending the catImage to the images div
                 $("#images").prepend(catImage);
             }

         });
 });








