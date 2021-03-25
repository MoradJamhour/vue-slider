var app = new Vue(
  {
    el: '#root',
    data: {
      index: 0,
      arrayPictures: [
        'galaxy.jpg',
        'ocean.jpg',
        'eye.jpg',
      ]
    },
    methods: {
      next: function() {
        if(this.index > 0){
          this.index--;
        } else {
          this.index = 2;
        }
      },
      prev: function() {

        if(this.index < this.arrayPictures.length - 1){
          this.index++;
        } else {
          this.index = 0;
        }
      },
      dotClick: function(i) {
        this.index = i;
      }
    }
  });
