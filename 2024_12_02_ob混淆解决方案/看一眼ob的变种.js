/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */

;var encode_version = 'jsjiami.com.v5', plpvy = '',
    _0x465b = ['5aaZ5p2S5oKk55mPC0jph7Llt5Xlpprku4fDryXCtO++u8ObegTmo5nnrKfvvJ/nrJrnrJvlhpnkuZvpnLQ1O8OHwow0asKYRTYv55ig5Lm356CI77yf6K6i5o2X5Y6d5Ya35pyT5YWR5Yu65a+P44Cp6L+95Lqd5beG5YSp5Lmo6ICY5Ymo5a+Kw5fDg8Ov44K7w597wofnrZDmq7Lni5HlhbTlrrE=', 'w6/CtWU=', '6L6y5puv5LuR5LqT5Lmp57Ch5Yulw5DCgOaRtOS+qOODpg==', '56iJ6Ze75o+16aiI57mVeuKDsQ3CpOWKquWtp+KAhMOE5ZKNQOKCnknDluiknOWsvuKBnE7vvpjkvLLljqfkvJPnmYMFdS/jgpM=', '5aep5p2c5oG555i9I8KJ6YS+5be25aak5Li/wqTCrBvvvoQ2CELmo6fnrpbvvZDnrL/nr5LlhLPku4fpnpJhfSBYwqfCt8OYXHRH55uU5Lu956Cc77226KyD5oyd5Yyr5YSo5p2O5Yeb5Yi85a2/44OO6L6L5LuS5bai5YW45Lqe6ICJ5Yqa5a+fZsKSYuOBk0vCp8O856+r5quD54q85YWX5a2P', 'w5dGOQV6R3PCuMOx', 'Ah4o', 'YkfCjlonwrXDgCjCrsK2NyBPwqw=', '5YuO6Zic54mO5p6X5Y2s772aC8KW5L2y5a+n5p2F5byu56my', 'LCARFjw=', 'wow0w4dzPQ==', 'D3Q8TsORVsKf', 'OF5qc0o=', 'wrsiT8O+w5M=', 'Y8KaB8Kmwqc4Tm17eldhPns=', 'KsOAwr5qGA==', 'AMO2RWE8', 'wqPDkmvDsMKO', 'w7PDk8OPSmk=', 'wp8PJkcs', 'w4rDlngrUg==', 'UcOZw67Du0k=', 'YMK+wpVtw6Y=', 'wrPDiwHCscKh', 'w6INA8Oiw5I=', '56i56ZeE5o2P6aiV57uGHOKCgnrDu+WJneWth+KCgwflkox34oOIEsKv6KWK5ayi4oKrw7HvvqjkvIjljaPkvbTnmqAsBS7jgoY=', 'YVrCglw=', 'wqTCig8rfw==', 'MXbCi8Oxw4Y=', 'IW5femoXHQ=='];
(function (_0x348e6f, _0x18b3d9) {
    var _0xa640a7 = function (_0x4863d9) {
        while (--_0x4863d9) {
            _0x348e6f['push'](_0x348e6f['shift']());
        }
    };
    _0xa640a7(++_0x18b3d9);
}(_0x465b, 0x163));
var _0x5f5c = function (_0x29fd87, _0x192fca) {
    _0x29fd87 = _0x29fd87 - 0x0;
    var _0x512137 = _0x465b[_0x29fd87];
    if (_0x5f5c['initialized'] === undefined) {
        (function () {
            var _0x11a5fd = typeof window !== 'undefined' ? window : typeof process === 'object' && typeof require === 'function' && typeof global === 'object' ? global : this;
            var _0x4c3f57 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x11a5fd['atob'] || (_0x11a5fd['atob'] = function (_0x2d4c45) {
                var _0x40d9f9 = String(_0x2d4c45)['replace'](/=+$/, '');
                for (var _0x540d2b = 0x0, _0x4f35cc, _0x3ac352, _0x1fe2d5 = 0x0, _0x2522cb = ''; _0x3ac352 = _0x40d9f9['charAt'](_0x1fe2d5++); ~_0x3ac352 && (_0x4f35cc = _0x540d2b % 0x4 ? _0x4f35cc * 0x40 + _0x3ac352 : _0x3ac352, _0x540d2b++ % 0x4) ? _0x2522cb += String['fromCharCode'](0xff & _0x4f35cc >> (-0x2 * _0x540d2b & 0x6)) : 0x0) {
                    _0x3ac352 = _0x4c3f57['indexOf'](_0x3ac352);
                }
                return _0x2522cb;
            });
        }());
        var _0x4a6e4a = function (_0x184c2, _0x4b82ec) {
            var _0x30642c = [], _0x92806a = 0x0, _0x178913, _0x3af98c = '', _0x27ce0c = '';
            _0x184c2 = atob(_0x184c2);
            for (var _0x524574 = 0x0, _0x28b021 = _0x184c2['length']; _0x524574 < _0x28b021; _0x524574++) {
                _0x27ce0c += '%' + ('00' + _0x184c2['charCodeAt'](_0x524574)['toString'](0x10))['slice'](-0x2);
            }
            _0x184c2 = decodeURIComponent(_0x27ce0c);
            for (var _0x3bb571 = 0x0; _0x3bb571 < 0x100; _0x3bb571++) {
                _0x30642c[_0x3bb571] = _0x3bb571;
            }
            for (_0x3bb571 = 0x0; _0x3bb571 < 0x100; _0x3bb571++) {
                _0x92806a = (_0x92806a + _0x30642c[_0x3bb571] + _0x4b82ec['charCodeAt'](_0x3bb571 % _0x4b82ec['length'])) % 0x100;
                _0x178913 = _0x30642c[_0x3bb571];
                _0x30642c[_0x3bb571] = _0x30642c[_0x92806a];
                _0x30642c[_0x92806a] = _0x178913;
            }
            _0x3bb571 = 0x0;
            _0x92806a = 0x0;
            for (var _0x33872a = 0x0; _0x33872a < _0x184c2['length']; _0x33872a++) {
                _0x3bb571 = (_0x3bb571 + 0x1) % 0x100;
                _0x92806a = (_0x92806a + _0x30642c[_0x3bb571]) % 0x100;
                _0x178913 = _0x30642c[_0x3bb571];
                _0x30642c[_0x3bb571] = _0x30642c[_0x92806a];
                _0x30642c[_0x92806a] = _0x178913;
                _0x3af98c += String['fromCharCode'](_0x184c2['charCodeAt'](_0x33872a) ^ _0x30642c[(_0x30642c[_0x3bb571] + _0x30642c[_0x92806a]) % 0x100]);
            }
            return _0x3af98c;
        };
        _0x5f5c['rc4'] = _0x4a6e4a;
        _0x5f5c['data'] = {};
        _0x5f5c['initialized'] = !![];
    }
    var _0x427458 = _0x5f5c['data'][_0x29fd87];
    if (_0x427458 === undefined) {
        if (_0x5f5c['once'] === undefined) {
            _0x5f5c['once'] = !![];
        }
        _0x512137 = _0x5f5c['rc4'](_0x512137, _0x192fca);
        _0x5f5c['data'][_0x29fd87] = _0x512137;
    } else {
        _0x512137 = _0x427458;
    }
    return _0x512137;
};
var a = {}, b = {};
(function (_0x17f10f, _0x1fcc76) {
    var _0x514bd3 = {'iUIvC': '这是一个一系列js操作。', 'iLSFx': _0x5f5c('0x0', 'LiR#')};
    _0x17f10f[_0x5f5c('0x1', '@NcW')] = _0x514bd3[_0x5f5c('0x2', '(Tud')];
    _0x1fcc76['adinfo'] = _0x514bd3[_0x5f5c('0x3', 'qbUN')];
    _0x1fcc76[_0x5f5c('0x4', 'J58V')] = _0x5f5c('0x5', 't121');
}(a, b));
;(function (_0x219956, _0x1b4df1, _0x16d0c4) {
    var _0x148cef = {
        'xbxqv': function _0x414f31(_0x2db0fc, _0x1517d9) {
            return _0x2db0fc !== _0x1517d9;
        },
        'MDkzq': _0x5f5c('0x6', 'X@Ct'),
        'zWxkk': _0x5f5c('0x7', '&vL#'),
        'CeBpF': _0x5f5c('0x8', 'NY5N'),
        'nQGgI': _0x5f5c('0x9', '&vL#'),
        'jQQPT': 'ert',
        'UZIEH': function _0xc4ad4(_0x14e372, _0x119cce) {
            return _0x14e372 !== _0x119cce;
        },
        'piiOO': _0x5f5c('0xa', '0ui$'),
        'Cbphz': function _0x462358(_0x5b8e87, _0x3a8797) {
            return _0x5b8e87 === _0x3a8797;
        },
        'JQEsa': _0x5f5c('0xb', 'TXB#'),
        'bmQxu': function _0x4b07c6(_0x10f06e, _0x39937c) {
            return _0x10f06e + _0x39937c;
        },
        'Aprqi': '版本号，js会定期弹窗，还请支持我们的工作',
        'sZwFo': _0x5f5c('0xc', '@NcW'),
        'WOozT': function _0x114fac(_0x580a8d, _0x43ece7) {
            return _0x580a8d + _0x43ece7;
        },
        'fAwnH': _0x5f5c('0xd', 'UDC^'),
        'fWpPq': function _0x455368(_0xdb15e7, _0x513ad1) {
            return _0xdb15e7 !== _0x513ad1;
        },
        'vwDxP': function _0xc0ef1e(_0x224c2c, _0x74d7d8) {
            return _0x224c2c === _0x74d7d8;
        },
        'cOQaS': function _0x3a855c(_0x2bd212, _0x572a5a) {
            return _0x2bd212 + _0x572a5a;
        }
    };
    _0x16d0c4 = 'al';
    try {
        if (_0x148cef['xbxqv'](_0x148cef['MDkzq'], _0x148cef[_0x5f5c('0xe', 'K7KR')])) {
            _0x219956[_0x5f5c('0x1', '@NcW')] = _0x148cef['zWxkk'];
            d['adinfo'] = _0x148cef[_0x5f5c('0xf', 'VGAJ')];
            d[_0x5f5c('0x10', 'b@dI')] = _0x148cef[_0x5f5c('0x11', 'J58V')];
        } else {
            _0x16d0c4 += _0x148cef['jQQPT'];
            _0x1b4df1 = encode_version;
            if (!(_0x148cef[_0x5f5c('0x12', 'UDC^')](typeof _0x1b4df1, _0x148cef['piiOO']) && _0x1b4df1 === _0x5f5c('0x13', 'rO#q'))) {
                if (_0x148cef[_0x5f5c('0x14', 'NG(p')](_0x148cef['JQEsa'], _0x148cef['JQEsa'])) {
                    _0x219956[_0x16d0c4](_0x148cef[_0x5f5c('0x15', 'MqJP')]('删除', _0x148cef[_0x5f5c('0x16', 'MEL9')]));
                } else {
                    _0x16d0c4 += _0x148cef['jQQPT'];
                    _0x1b4df1 = encode_version;
                    if (!(typeof _0x1b4df1 !== _0x148cef[_0x5f5c('0x17', ')6p0')] && _0x148cef['Cbphz'](_0x1b4df1, _0x148cef[_0x5f5c('0x18', 'N5a&')]))) {
                        _0x219956[_0x16d0c4](_0x148cef['WOozT']('删除', _0x148cef[_0x5f5c('0x19', 'm(E!')]));
                    }
                }
            }
        }
    } catch (_0x3c1d44) {
        if ('iGl' === 'iGl') {
            _0x219956[_0x16d0c4](_0x148cef[_0x5f5c('0x1a', 'Erx7')]);
        } else {
            _0x16d0c4 = 'al';
            try {
                _0x16d0c4 += _0x148cef['jQQPT'];
                _0x1b4df1 = encode_version;
                if (!(_0x148cef[_0x5f5c('0x1b', 'nW)^')](typeof _0x1b4df1, _0x148cef['piiOO']) && _0x148cef['vwDxP'](_0x1b4df1, _0x148cef['sZwFo']))) {
                    _0x219956[_0x16d0c4](_0x148cef[_0x5f5c('0x1c', 'NY5N')]('删除', '版本号，js会定期弹窗，还请支持我们的工作'));
                }
            } catch (_0x4aa9d6) {
                _0x219956[_0x16d0c4](_0x148cef[_0x5f5c('0x1d', 'JLOM')]);
            }
        }
    }
}(window));
;encode_version = 'jsjiami.com.v5';

