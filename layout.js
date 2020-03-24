$(document).ready(function() {
  const body = $('#body');
  const images = [
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-r0EEyCgsFt8%2FTmOhfw8sVfI%2FAAAAAAAABcI%2FEFuJbh6WB_4%2Fs1600%2Fmountain%252Breflexion.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.wallpapersin4k.org%2Fwp-content%2Fuploads%2F2017%2F04%2FUltra-High-Res-Wallpaper-4.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.esa.int%2Fvar%2Fesa%2Fstorage%2Fimages%2Fesa_multimedia%2Fimages%2F2017%2F11%2Fautumn_fireball%2F17255671-1-eng-GB%2FAutumn_fireball_node_full_image_2.jpg&f=1&nofb=1',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F8lU1GHBrqls%2Fmaxresdefault.jpg&f=1&nofb=1'
  ];
  images.forEach(img => {
    let image = $('<div>');
    let h1 = $('<h1>');
    let divider = $('<div>');

    h1.text('Hello and welcome');

    divider.attr('class', 'divider');
    divider.append(h1);

    image.attr('style', `background-image: url(${img})`);
    image.attr('class', 'parallax');

    body.append(divider);
    body.append(image);
  });
});
