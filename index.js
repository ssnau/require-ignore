'use strict';

function extify(ext) {
        return ext.charAt(0) === '.' ? ext : ('.' + ext);
}
function ignore(exts) {
    exts
        .map(extify)
        .forEach(function(ext) {
           require.extensions[ext] = function(module, filename) { }
        });
}

module.exports.install = function install(extensions) {
    // just ignore
    if (Array.isArray(extensions) || typeof extensions === 'string') {
        return ignore([].concat(extensions));
    } else {
        throw new Error('illegal extensions parameter');
    }
}
