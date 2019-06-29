$(function() {
    $("#burgerSubmit").on("click", function(event) {

        event.preventDefault();

        var newBurger = {
          name: $("#newBurger").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/burger", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".devour").on("click", function(event) {

        event.preventDefault();
        var id = this.id.charAt(2);
        console.log(id)

        // Send the POST request.

        $.ajax("/api/burger/" + id, {

        // $.ajax("/api/burger/" + id + "/true", {
          type: "PUT",
          data: {"devoured": true}
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".reorder").on("click", function(event) {

        event.preventDefault();
        var id = this.id.charAt(2);
        console.log(id)
        // Send the POST request.
        $.ajax("/api/order/" + id, {

        // $.ajax("/api/burger/" + id + "/false", {
          type: "PUT",
          data: {"devoured": false}
        }).then(
          function() {
            console.log("reordered burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

      $(".delete").on("click", function(event) {

        event.preventDefault();
        var id = this.id.charAt(2);
        console.log(id)
        // Send the POST request.
        $.ajax("/api/burger/" + id, {
          type: "DELETE",
        }).then(
          function() {
            console.log("reordered burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});
//     $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
  
//       var newCat = {
//         name: $("#ca").val().trim(),
//         sleepy: $("[name=sleepy]:checked").val().trim()
//       };
  
//       // Send the POST request.
//       $.ajax("/api/cats", {
//         type: "POST",
//         data: newCat
//       }).then(
//         function() {
//           console.log("created new cat");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".delete-cat").on("click", function(event) {
//       var id = $(this).data("id");
  
//       // Send the DELETE request.
//       $.ajax("/api/cats/" + id, {
//         type: "DELETE"
//       }).then(
//         function() {
//           console.log("deleted cat", id);
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//   });
  