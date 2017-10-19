if (navigator) {
    var _userAgent = navigator.userAgent.toLowerCase(),
        _IE, _IEver,
        _Edge, _EdgeVer,
        _Chrome, _ChromeVer,
        _FireFox, _FireFoxVer;

    if (_userAgent.indexOf("msie") != -1) {
        _IE = true;
        _userAgent.match(/msie (\d+\.\d)/);
        _IEver = parseFloat(RegExp.$1);

    } else if (_userAgent.indexOf('trident') != -1) {
        _IE = true;
        _userAgent.match(/rv:(\d+\.\d)/);
        _IEver = parseFloat(RegExp.$1);

    } else if (_userAgent.indexOf('edge/') != -1) {
        _Edge = true;
        _userAgent.match(/edge[\/ ]?(\d+\.\d)/);
        _EdgeVer = parseFloat(RegExp.$1);

    } else if (_userAgent.indexOf("chrome") != -1) {
        _Chrome = true;
        _userAgent.match(/chrome[\/ ]?(\d+\.\d+)/);
        _ChromeVer = parseFloat(RegExp.$1);

    } else if (_userAgent.indexOf("firefox") != -1) {
        _FireFox = true;
        _userAgent.match(/firefox[\/ ]?(\d+\.\d+)/);
        _FireFoxVer = parseFloat(RegExp.$1);
    }

    _ua = {
        ie: !!_IE,
        edge: !!_Edge,
        chrome: !!_Chrome,
        firefox: !!_FireFox,

        version: {
            ie: _IEver,
            edge: _EdgeVer,
            firefox: _FireFoxVer,
            chrome: _ChromeVer,
        }
    };

}