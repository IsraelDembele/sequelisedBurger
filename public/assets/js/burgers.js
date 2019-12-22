$(function() {

    $.ajax("/burgers", {
        type: "GET"
    }).then(function(data){
        var devouredElem = $("#dev"); 
        var notdevouredElem = $("#und");

        var burgers = data.burgers;

        for (var i = 0; i < burgers.length; i++){
          if(burgers[i].devoured == true){
            var div = "<div class='dvorElem'>"+burgers[i].burger_name+"</div>";
            devouredElem.append(div);
          } else {
            var meta_data = burgers[i].id;
            var div = "<div class='row'><div class='undvor-title col-8'>"+burgers[i].burger_name+"</div> <button class='undvorElem col-4' data-bn='"+meta_data+"'>Devour</button> </div>";
            notdevouredElem.append(div);
          }
        }
    }); 
    
      $(document).on("click","#submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#ca")
            .val()
            .trim()
        };
    
        // Send the POST request.
        $.ajax("/burgers", {
          type: "POST",
          data: JSON.stringify(newBurger),
          dataType:'json',
          contentType: 'application/json'
        }).then(function(res) {
          console.log(res);
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        });
      });

      $(document).on('click', '.undvorElem', function(event){
        console.log($(this).data('bn'));

        var id = $(this).data('bn');

        var newDevouredState = {
          state : 1
        }

        $.ajax("/burgers/" + id, {
          type: "PUT",
          data: JSON.stringify(newDevouredState),
          dataType:'json',
          contentType: 'application/json'
        }).then(function(response) {
          console.log("changed devoured to", response);
          // Reload the page to get the updated list
          location.reload();
        });
      })
    
      // $(document).on("click", ".delete-burger", function(event) {
      //   var id = $(this).data("id");
    
      //   // Send the DELETE request.
      //   $.ajax("/burgers/" + id, {
      //     type: "DELETE"
      //   }).then(function() {
      //     console.log("deleted burger", id);
      //     // Reload the page to get the updated list
      //     location.reload();
      //   });
      // });
});
