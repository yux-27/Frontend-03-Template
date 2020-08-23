const images = require('images');

function render(viewport, element) {
    if(element.style) {
        let img = images(element.style.width, element.style.height);

        if(element.style['background-color']) {
            let color = element.style['background-color'] || 'rgba(0, 0, 0)';
            color.match(/rgba\((\d+), (\d+), (\d+)\)/);
            img.fill(Number(RegExp.$1), Number(RegExp.$2), Number(RegExp.$3));
            viewport.drow(img, element.style.left || 0, element.style.top || 0);
        }
    }
}

module.exports = render;