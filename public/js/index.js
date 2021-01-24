// Movie search
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

// Add movie on deck to watched list
$("#toWatched").click((event) => {
  event.preventDefault();
  const movieId = $("#onDeck").data("movieid");
  $.ajax("/api/watched", {
    type: "POST",
    data: { movieId }
  }).then(() => {
    const movieId = "null";
    $.ajax("/api/user/ondeck", {
      type: "POST",
      data: { movieId }
    }).then(() => {
      location.assign("/");
    });
  }).catch((err)=>{
    console.log(err);
  });
});

// Add movie on deck to challenge list
$("#toChallenged").click((event) => {
  event.preventDefault();
  const movieId = $("#onDeck").data("movieid");
  $.ajax("/api/challenge", {
    type: "POST",
    data: { movieId }
  }).then(() => {
    const movieId = "null";
    $.ajax("/api/user/ondeck", {
      type: "POST",
      data: { movieId }
    }).then(() => {
      location.assign("/");
    });
  }).catch((err)=>{
    console.log(err);
  });
});

$(".watched-list-item").click((event) => {
  event.preventDefault();
  const answer = confirm("Are you sure you want to remove this from your watched list?");
  if(answer){
    const movieId = $(event.target).data("movieid");
    $.ajax("/api/watched/" + movieId, {
      type: "DELETE"
    }).then(() => {
      $.ajax("/api/user/ondeck", {
        type: "POST",
        data: { movieId }
      }).then(() => {
        location.assign("/");
      });
    }).catch((err)=>{
      console.log(err);
    });
  }
});

$(".challenge-list-item").click((event) => {
  event.preventDefault();
  const movieId = $(event.target).data("movieid");
  $.ajax("/api/challenged/" + movieId, {
    type: "DELETE"
  }).then(() => {
    $.ajax("/api/user/ondeck", {
      type: "POST",
      data: { movieId }
    }).then(() => {
      location.assign("/");
    });
  }).catch((err)=>{
    console.log(err);
  });

});