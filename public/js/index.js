$(".search-btn").click((event) => {
  event.preventDefault();
  const SearchVal = $("#search").val();

  const MovieTitle = {
    title: SearchVal
  };

  $.ajax("/api/movie", {
    type: "POST",
    data: MovieTitle
  }).then(
    () => {
      location.reload();
    }
  );
});