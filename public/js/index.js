$(".search-btn").click((event) => {
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
      location.assign("/");
    }
  );
});
//put and delete request
$("#toWatched").click((event) => {
  event.preventDefault();
  const movieId = $("#onDeck").data("movieid");
  $.ajax("/api/watched", {
    type: "POST",
    data: {movieId}
  }).then(
    () => {
      location.assign("/");
    }
  );
});

$("#toChallenged").click((event) => {
  event.preventDefault();
  const movieId = $("#onDeck").data("movieid");
  $.ajax("/api/challenged", {
    type: "POST",
    data: {movieId}
  }).then(
    () => {
      location.assign("/");
    }
  );
});
//jquery for buttons  