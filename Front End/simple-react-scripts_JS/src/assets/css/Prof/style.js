// $("nav a").click(function(){
//     var newLink = $(this);
//     newLink.siblings().removeClass("active");
//     newLink.addClass("active");
//   });
  
//   (function(window, document){
//       // Options
//       var injectorOptions = {
//         evalScripts: 'once',
//         // reference fragments via views - generated with grunt-svg-sprite
//         spritesheetURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/436544/mui-assets.svg',
//         spriteClassIdName: 'icon-'
//       };
//       // Setup the injector
//       var injector = new SVGInjector(injectorOptions);
//       // inject single svg
//       injector.inject(document.querySelectorAll('svg[data-src]'));
//       // inject svgs from spritesheets
//       injector.inject(document.querySelectorAll('svg[class^=icon-]'));
//     })(window, document); 