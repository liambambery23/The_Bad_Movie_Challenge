$(".search-btn").click((event) => {
  console.log("clicking?");
  event.preventDefault();
  const SearchVal = $("#search").val();

  const title = {
    title: SearchVal
  };

  $.ajax("/api/movie", {
    type: "POST",
    data: title
  }).then(
    () => {
      location.reload();
    }
  );
});

//put and delete request
$(".towatch").click((event) => {
  event.preventDefault();

})

$(".tochallenge").click((event) => {
  event.preventDefault();
  
})
//jquery for buttons  