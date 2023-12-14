// https://codepen.io/RemoteDoc/pen/KbKQOB

function ImageStack (options) {

  var self = this;

  self.img_array = options.images;

  self.stack = document.createElement('div');
  self.stack.style.overflow = 'auto';
  self.stack.style.maxWidth = '100%';
  self.stack.style.height = options.height;
  self.stack.style.width = options.width;
  self.stack.style.backgroundSize = 'cover'
  self.stack.style.position = 'relative';

  var typeRegex = /(\D+)/
  var sizeType = options.height.match(typeRegex)[0]

  var numberRegex = /(\d+)/
  self.height_number = Number( options.height.match(numberRegex)[0] )

  self.wrapper = document.createElement('div');

  for (var i = 0; i < self.img_array.length; i++) {

    var image = document.createElement('img');
    image.src = self.img_array[i];

    image.style.display = 'none';
    image.style.position = 'absolute';
    image.style.width = options.width;
    image.style.height = options.height;
    image.style.top = 0;
    image.style.left = 0;
    image.dataset.iid = i;

    self.wrapper.appendChild(image);

  }

  self.image_elements = self.wrapper.querySelectorAll('img');

  self.scrollobject = document.createElement('div');
  self.scrollobject.style.width = '100%';
  self.scrollobject.style.position = 'absolute';
  self.scrollobject.style.zIndex = '2';
  self.img_count = (self.img_array.length > 15) ? self.img_array.length : 15;
  self.scrollobject_height = Math.floor( 0.1 * self.img_count * self.height_number );

  self.scrollobject.style.height = self.scrollobject_height + sizeType;

  self.scrollUpdate = function (e) {

    self.height_number = self.stack.getBoundingClientRect().height
    self.scrollobject_height = Math.floor( 0.1 * self.img_count * self.height_number );

    var sT = self.stack.scrollTop
    var hn05 = self.img_array.length - 1
    var hh = (self.scrollobject_height - self.height_number) / hn05
    scrollval = Math.floor(sT / (hh))

    self.currentimg = self.image_elements[scrollval].src

    self.stack.style.backgroundImage = 'url(' + self.currentimg + ')';

  }

  self.stack.addEventListener('scroll', self.scrollUpdate);

  self.currentimg = self.image_elements[0].src
  self.stack.style.backgroundImage = 'url(' + self.currentimg + ')';

  /*

  window.addEventListener('resize', function () {
    var stackRect = self.stack.getBoundingClientRect()

    console.log(stackRect)

    self.height_number = stackRect.height
    self.scrollobject_height = Math.floor( 0.1 * self.img_array.length * self.height_number );

    self.stack.style.width = stackRect.width + 'px'
    self.stack.style.eight = stackRect.width + 'px'
  })

  */

  self.stack.appendChild(self.wrapper);
  self.stack.appendChild(self.scrollobject);

  return self.stack;

}

export default ImageStack

/*

The function ImageStack returns a Element Node, which can be appended to an already existing element or modified, however someone wants to change it.

The parameters should have to be a height of the element, the width of the elment, and a list (Array) to all the images.

*/

// <ImageStack class="example">
// </ImageStack>

// <script>
// var images = images10;

// var stack = new ImageStack({
//   images: images,
//   height: '350px',
//   width: '350px'
// });
// document.querySelector('.example').appendChild(stack);
// </script>
