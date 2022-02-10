'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('~/cartridge/experience/utilities/ImageTransformation.js');

module.exports.render = function(context) {
    var model = new HashMap();
    var content = context.content;

    model.text_headline = content.text_headline;
    if (content.text_headline) {
        model.text_subline = content.text_subline;
    }

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

    model.link = content.link;

    return new Template('experience/components/assets/banner').render(model).text;
};
