var ASSERT = require('assert');
var FREEZE = require('..').freeze;
var BORSCHIK = require('..');
var FS = require('fs');
var PATH = require('path');

describe('WebP convert', function() {

    var path;

    before(function(){
        FREEZE.convertToWebp(FREEZE.realpathSync('test/freeze_webp/test.png'), 
            FREEZE.realpathSync('test/freeze_webp/test.webp'));
    });

    it('WebP convert ok', function() {
        var file = FS.readFileSync(FREEZE.realpathSync('test/freeze_webp/test.webp'));
        ASSERT.equal('5CjvycK_uBE_kCXRcfXSPaaHaNo', FREEZE.fixBase64(FREEZE.sha1Base64(file)) );
    });

    after(function() {
        FS.unlinkSync(FREEZE.realpathSync('test/freeze_webp/test.webp'));
    });

    
});

describe('WebP convert per path', function() {
    testFreeze('css', 'freeze_webp', 'test.css', '_test.css', 'ok_css.css', true, false, true, [
        'test/test2/qpycPIWZtbn5bup4LjfkHuu-n-M.webp'
    ]);
    testFreeze('css', 'freeze_webp2', 'test.css', '_test.css', 'ok_css.css', true, false, true, [
        'test/test2/qpycPIWZtbn5bup4LjfkHuu-n-M.png',
        'test/webp/qpycPIWZtbn5bup4LjfkHuu-n-M.webp'
    ]);
    
    after(function() {
        FS.unlinkSync(FREEZE.realpathSync('test/freeze_webp/test/test2/qpycPIWZtbn5bup4LjfkHuu-n-M.webp'));
        FS.rmdirSync(FREEZE.realpathSync('test/freeze_webp/test/test2'));
        FS.rmdirSync(FREEZE.realpathSync('test/freeze_webp/test'));
        
        FS.unlinkSync(FREEZE.realpathSync('test/freeze_webp2/test/test2/qpycPIWZtbn5bup4LjfkHuu-n-M.png'));
        FS.unlinkSync(FREEZE.realpathSync('test/freeze_webp2/test/webp/qpycPIWZtbn5bup4LjfkHuu-n-M.webp'));
        FS.rmdirSync(FREEZE.realpathSync('test/freeze_webp2/test/webp'));
        FS.rmdirSync(FREEZE.realpathSync('test/freeze_webp2/test/test2'));
        FS.rmdirSync(FREEZE.realpathSync('test/freeze_webp2/test'));
    });
});

describe('isConvertibleImage', function() {
    it('isConvertibleImage ok', function() {
        ASSERT.ok(FREEZE.isConvertibleImage('xxx.jpg'));
        ASSERT.ok(FREEZE.isConvertibleImage('xxx.jpeg'));
        ASSERT.ok(FREEZE.isConvertibleImage('xxx.png'));
        ASSERT.ok(!FREEZE.isConvertibleImage('xxx.ico'));
        ASSERT.ok(!FREEZE.isConvertibleImage('xxx.gif'));
        ASSERT.ok(!FREEZE.isConvertibleImage('xxx.svg'));
        ASSERT.ok(!FREEZE.isConvertibleImage('xxx.swf'));
        ASSERT.ok(!FREEZE.isConvertibleImage('xxx.ttf'));
        ASSERT.ok(!FREEZE.isConvertibleImage('xxx.eot'));
        ASSERT.ok(!FREEZE.isConvertibleImage('xxx.otf'));
        ASSERT.ok(!FREEZE.isConvertibleImage('xxx.woff'));
    });
});

function readFile(path) {
    return FS.readFileSync(PATH.resolve(__dirname, path));
}

function testFreeze(tech, dir, inPath, outPath, okPath, freeze, minimize, webp,
    rmFiles) {
    inPath = PATH.resolve(PATH.join(__dirname, dir, inPath));
    outPath = PATH.resolve(PATH.join(__dirname, dir, outPath));
    okPath = PATH.resolve(PATH.join(__dirname, dir, okPath));

    before(function() {
        return BORSCHIK.api({ tech: tech, input: inPath, output: outPath, freeze: freeze, minimize: minimize, webp: webp });
    });

    it('freeze ' + tech + ' ok', function() {
        ASSERT.equal(readFile(outPath).toString(), readFile(okPath).toString());
    });

    after(function() {
        FS.unlinkSync(outPath);
    });
}