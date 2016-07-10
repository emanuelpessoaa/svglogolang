(function() {
    
    Element.prototype.hasClass = function (className) {
           return this.className.search('(\\s|^)' + className + '(\\s|$)') != -1 ? true : false;
    };  

function createSVG(svgViewBox, elem, opts) {

        var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var svgNS = svg.namespaceURI;
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        if (svgViewBox) {
            svg.setAttribute('viewBox', svgViewBox);
        };
        
        if (elem == "rect") {
            var rect = document.createElementNS(svgNS,'rect');
            rect.setAttribute('x',opts.x);
            rect.setAttribute('y',opts.x);
            rect.setAttribute('width',opts.width);
            rect.setAttribute('height',opts.height);
            rect.setAttribute('fill',opts.fill);
            svg.appendChild(rect);
            return svg;
        };
        
        if (elem == "path") {
            var path = document.createElementNS(svgNS,'path');
            path.setAttribute('d', opts.coord);
            path.setAttribute('transform', 'scale(.3, .3)');
            svg.appendChild(path);
            return svg;
        };
        
};
    

var icons = {
        sizes : {
            normal: '120px',
            large:  '250px',
            small:  '60px'
        },
        javascript : {
            rect: {
              fill:     '#f7df1e',
              width:    '100%',
              height:   '100%',
              x:0,      
              y:0  
            },
            path:{
                coord:  'm423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z',
                fill:   '#000000'
                
            }
        }
};

// teste.get('icon-js');
// teste.get('icon-js');


function Dome (els) {
    for(var i = 0; i < els.length; i++ ) {
        this[i] = els[i];
    }
    this.length = els.length;
}

var jow = {
    get: function (className) {
        var els;
        if (typeof className === "string") {
            els = document.getElementsByClassName(className);
        } else if (className.length) {
            els = className;
        } else {
            els = [className];
        }
        return new Dome(els);
    }  
};


console.log(jow.get('icon-js') );

if (document.getElementsByClassName('icon-js').length > 0) { 
    
    var iconjs = document.getElementsByClassName('icon-js');
    for (var i = 0; i < iconjs.length; i++) {
    
        iconjs[i].appendChild(new createSVG(null, 'rect', icons.javascript.rect));
        iconjs[i].firstChild.appendChild(new createSVG('-10 -10 200 200','path', icons.javascript.path));
        
        if (iconjs[i].hasClass('icon-js')) {
            iconjs[i].setAttribute('style', 'width:' +icons.sizes.normal+ ';height:' +icons.sizes.normal+'');
        };
        if (iconjs[i].hasClass('lg')) {
            iconjs[i].setAttribute('style', 'width:' +icons.sizes.large+ ';height:' +icons.sizes.large+ '');
        };
        if (iconjs[i].hasClass('sm')) {
            iconjs[i].setAttribute('style', 'width:' +icons.sizes.small+ ';height:' +icons.sizes.small+ '');
        };
};
      
};


})();




