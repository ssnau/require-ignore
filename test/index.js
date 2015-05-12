var assert = require('assert');
describe('should ignore', function() {
    it ('should not throw error when require css', function () {
        require("../").install('css');
        assert.doesNotThrow(function() {
            require('./abc.css');
        });
    });
});
