"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStaticMapUrl(address, options) {
    return "https://maps.googleapis.com/maps/api/staticmap?markers=" + encodeURIComponent(address) + "&size=" + (options.width + 'x' + options.height) + "&scale=2&key=__API_KEY__";
}
exports.getStaticMapUrl = getStaticMapUrl;
//# sourceMappingURL=plugin-google-places.common.js.map