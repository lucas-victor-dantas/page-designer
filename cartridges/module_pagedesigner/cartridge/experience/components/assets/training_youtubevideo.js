'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('~/cartridge/experience/utilities/ImageTransformation.js');

module.exports.render = function(context) {
    var model = new HashMap();
    var content = context.content;

    model.id = content.videoid;
    if (content.image) {
        model.image = {
            src: {
                mobile: ImageTransformation.url(content.image, { device: 'mobile' }),
                desktop: ImageTransformation.url(content.image, { device: 'desktop' })
            },
            alt: content.image.file.getAlt(),
            focalPointX: content.image.focalPoint.x * 100 + '%',
            focalPointY: content.image.focalPoint.y * 100 + '%'
        };
    }

    return new Template('experience/components/assets/training_youtubevideo').render(model).text;
};
