// retaurants.forEach((rest, index) => {
//   console.log(Object.keys(rest.restaurant));
//   console.log(rest.restaurant.name, rest.restaurant);
// });

$('.uk-button').click(function(event) {
  const lon = $(this).attr('longitude');
  const lat = $(this).attr('latitude');
  const id = $(this).attr('id');
  const url = `https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&q=${id}&count=5&lat=${lat}&lon=-${lon}&sort=real_distance&apikey=`
  console.log(lat, lon);
  $.ajax({
    method: 'GET',
    url
  }).then(function(res) {
    console.log(res);
    buildLayout(res.restaurants);
  });
});

function buildLayout(restaurants) {
  restaurants.forEach(rest => {
    const { thumb, name } = rest.restaurant;

    let image = $('<div>');
    let h1 = $('<h1>');
    let divider = $('<div>');

    h1.text(name);

    divider.attr('class', 'divider');
    divider.append(h1);

    ('featured_image');
    image.attr('style', `background-image: url(${thumb})`);
    image.attr('class', 'parallax');

    body.append(divider);
    body.append(image);
  });
}
