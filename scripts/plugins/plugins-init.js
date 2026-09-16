
new WOW().init();



document.addEventListener('DOMContentLoaded', function () {
  var TextAnim = function (element) {
    this.element = element;
    this.wrapper = this.element.getElementsByClassName('text-anim__wrapper')[0];
    this.words = this.element.getElementsByClassName('text-anim__word');
    this.selectedWordIndex = 0;
    this.duration = 2000;
    this.init();
  };

  TextAnim.prototype.init = function () {
    if (!this.wrapper || this.words.length === 0) return;
    this.startAnimation();
  };

  TextAnim.prototype.startAnimation = function () {
    var self = this;
    
    // Explicitly set width after layout load
    self.wrapper.style.width = self.words[0].offsetWidth + 'px';

    setInterval(function () {
      self.switchWord();
    }, self.duration);
  };

  TextAnim.prototype.switchWord = function () {
    var nextIndex = (this.selectedWordIndex + 1) % this.words.length;
    var currentWord = this.words[this.selectedWordIndex];
    var nextWord = this.words[nextIndex];

    // Shrink wrapper width to 0
    this.wrapper.style.width = '0px';

    setTimeout(() => {
      currentWord.classList.remove('text-anim__word--in');
      nextWord.classList.add('text-anim__word--in');

      // Set width to match the new active word
      this.wrapper.style.width = nextWord.offsetWidth + 'px';
      this.selectedWordIndex = nextIndex;
    }, 350);
  };

  var animHeadlines = document.getElementsByClassName('js-text-anim');
  if (animHeadlines.length > 0) {
    for (var i = 0; i < animHeadlines.length; i++) {
      new TextAnim(animHeadlines[i]);
    }
  }
});


$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});