// // var KEYUTIL = require('jsrsasign').KEYUTIL;
// // var KJUR = require('jsrsasign').KJUR;
// // var hextob64 = require('jsrsasign').hextob64;
// // var hextob64u = require('jsrsasign').hextob64u;
// //
// //
// //
// // var _0x3051cc = '-----BEGIN PRIVATE KEY-----\n' +
// //     'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMvbPyPuExTOqhjouNe8Y6DzGIWwFVPxQRNAQ56NNBYy67nKmr2YB44UXz49AUTagbjikQyJHvmcL6tnJtNwEKc2yrrtag1NY25oENOoGIC+ts0iTTiuvus0IOGy6m6LxGrlN9SvW8nCw3m3L0XDZnx6XyTxBu8J0m0HUJTI5zUBAgMBAAECgYBFWlmox54GPijwQHxiKN1cLFfzY2xeGn2hJwPaNP+7bad0ldD/H3GyjIu6iNadrhjj5XCjayL2mIQ/M+Cpnj6LiLvmEIlSqRy6X4hV/DbesVWvfFv+QnFV53wo5oEwGS8BxED11lbEVY59B6UWpPCNrWVSOaQhtgt3A23bw9MwgQJBAPkJdVodDqx5A4f0RejFj8J4mFWToMaQdaqp1QrzkHoFH0pe8Gq2JGME32FAc5QIa4J8iLPUiSqK0G6gEC0Igv0CQQDRjmXbgX+/sbPxcOe2isF+cXOyahvUKWcyuu0HAqQU4W546+G0SjgzWJ00YajTtJBNjTCBR8L8+zjaxOtIkcNVAkB/+IFKPjZFIKZU3YxzEdpO14OILiVnA+LDQSRNzV1HpowuvlySqWhHTcCwC9uYjT8ZvX7N0gBuUQjMYAoP6hjNAkB7NdNztXdsOUqIqg7DSGAuPPx+qV7FZraToE5e8dGRqV4v4NjrDTxwDCkaNFV0bFTwFBSx3oSqA/fQwTlpiLKlAkEAhbyo9sJAbo2RFo3trIPCpufgAlgHl45aDimleZbko5nC100R7t6rUUs5itzjiY1Psn0yb6darH3dXx0o795Jlg==\n' +
// //     '-----END PRIVATE KEY-----'
// //
// // var _0xad2e02 = function(_0x8c7424) {
// //     var  _0x4fd74e = KEYUTIL['getKey'](_0x3051cc)
// //       , _0x26889a = new KJUR['crypto']["Signature"]({
// //         alg: 'SHA1withRSA'
// //     });
// //     return _0x26889a.init(_0x4fd74e),
// //     _0x26889a['updateString'](_0x8c7424),
// //     hextob64(_0x26889a.sign());
// // }
// //
// //
// // console.log(_0xad2e02('123456') == 'iwVoAEhUgvL60XikW31Lirx6fsUKfAjKEvjIIYrpT8yx6X6NxEZM7kyc8eadP6H+LEvV8I4sf1Y2fLkU3s504utP3lZlmPo9XRg07wHFKvKXjI/t2zDNmAIDSBd30uPNpF0ueetzN77D3t15gKARDS0pQA4QBBg/Ra+3GjgfsoE=')
// //
//



var d = (function(){ // 一整个模块
    // t.exports = r;
    var n = null;
    try {
        n = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])),{}).exports
    } catch (t) {}
    function r(t, e, n) {
        this.low = 0 | t,
        this.high = 0 | e,
        this.unsigned = !!n
    }
    function o(t) {
        return !0 === (t && t.__isLong__)
    }
    r.prototype.__isLong__,
    Object.defineProperty(r.prototype, "__isLong__", {
        value: !0
    }),
    r.isLong = o;
    var l = {}
      , h = {};
    function c(t, e) {
        var n, r, o;
        return e ? (o = 0 <= (t >>>= 0) && t < 256) && (r = h[t]) ? r : (n = d(t, (0 | t) < 0 ? -1 : 0, !0),
        o && (h[t] = n),
        n) : (o = -128 <= (t |= 0) && t < 128) && (r = l[t]) ? r : (n = d(t, t < 0 ? -1 : 0, !1),
        o && (l[t] = n),
        n)
    }
    function f(t, e) {
        if (isNaN(t))
            return e ? k : S;
        if (e) {
            if (t < 0)
                return k;
            if (t >= M)
                return O
        } else {
            if (t <= -x)
                return P;
            if (t + 1 >= x)
                return T
        }
        return t < 0 ? f(-t, e).neg() : d(t % w | 0, t / w | 0, e)
    }
    function d(t, e, n) {
        return new r(t,e,n)
    }
    r.fromInt = c,
    r.fromNumber = f,
    r.fromBits = d;
    var m = Math.pow;
    function v(t, e, n) {
        if (0 === t.length)
            throw Error("empty string");
        if ("NaN" === t || "Infinity" === t || "+Infinity" === t || "-Infinity" === t)
            return S;
        if ("number" == typeof e ? (n = e,
        e = !1) : e = !!e,
        (n = n || 10) < 2 || 36 < n)
            throw RangeError("radix");
        var p;
        if ((p = t.indexOf("-")) > 0)
            throw Error("interior hyphen");
        if (0 === p)
            return v(t.substring(1), e, n).neg();
        for (var r = f(m(n, 8)), o = S, i = 0; i < t.length; i += 8) {
            var l = Math.min(8, t.length - i)
              , h = parseInt(t.substring(i, i + l), n);
            if (l < 8) {
                var c = f(m(n, l));
                o = o.mul(c).add(f(h))
            } else
                o = (o = o.mul(r)).add(f(h))
        }
        return o.unsigned = e,
        o
    }
    function y(t, e) {
        return "number" == typeof t ? f(t, e) : "string" == typeof t ? v(t, e) : d(t.low, t.high, "boolean" == typeof e ? e : t.unsigned)
    }
    r.fromString = v,
    r.fromValue = y;
    var w = 4294967296
      , M = w * w
      , x = M / 2
      , _ = c(1 << 24)
      , S = c(0);
    r.ZERO = S;
    var k = c(0, !0);
    r.UZERO = k;
    var E = c(1);
    r.ONE = E;
    var C = c(1, !0);
    r.UONE = C;
    var A = c(-1);
    r.NEG_ONE = A;
    var T = d(-1, 2147483647, !1);
    r.MAX_VALUE = T;
    var O = d(-1, -1, !0);
    r.MAX_UNSIGNED_VALUE = O;
    var P = d(0, -2147483648, !1);
    r.MIN_VALUE = P;
    var R = r.prototype;
    R.toInt = function() {
        return this.unsigned ? this.low >>> 0 : this.low
    }
    ,
    R.toNumber = function() {
        return this.unsigned ? (this.high >>> 0) * w + (this.low >>> 0) : this.high * w + (this.low >>> 0)
    }
    ,
    R.toString = function(t) {
        if ((t = t || 10) < 2 || 36 < t)
            throw RangeError("radix");
        if (this.isZero())
            return "0";
        if (this.isNegative()) {
            if (this.eq(P)) {
                var e = f(t)
                  , div = this.div(e)
                  , n = div.mul(e).sub(this);
                return div.toString(t) + n.toInt().toString(t)
            }
            return "-" + this.neg().toString(t)
        }
        for (var r = f(m(t, 6), this.unsigned), o = this, l = ""; ; ) {
            var h = o.div(r)
              , c = (o.sub(h.mul(r)).toInt() >>> 0).toString(t);
            if ((o = h).isZero())
                return c + l;
            for (; c.length < 6; )
                c = "0" + c;
            l = "" + c + l
        }
    }
    ,
    R.getHighBits = function() {
        return this.high
    }
    ,
    R.getHighBitsUnsigned = function() {
        return this.high >>> 0
    }
    ,
    R.getLowBits = function() {
        return this.low
    }
    ,
    R.getLowBitsUnsigned = function() {
        return this.low >>> 0
    }
    ,
    R.getNumBitsAbs = function() {
        if (this.isNegative())
            return this.eq(P) ? 64 : this.neg().getNumBitsAbs();
        for (var t = 0 != this.high ? this.high : this.low, e = 31; e > 0 && 0 == (t & 1 << e); e--)
            ;
        return 0 != this.high ? e + 33 : e + 1
    }
    ,
    R.isZero = function() {
        return 0 === this.high && 0 === this.low
    }
    ,
    R.eqz = R.isZero,
    R.isNegative = function() {
        return !this.unsigned && this.high < 0
    }
    ,
    R.isPositive = function() {
        return this.unsigned || this.high >= 0
    }
    ,
    R.isOdd = function() {
        return 1 == (1 & this.low)
    }
    ,
    R.isEven = function() {
        return 0 == (1 & this.low)
    }
    ,
    R.equals = function(t) {
        return o(t) || (t = y(t)),
        (this.unsigned === t.unsigned || this.high >>> 31 != 1 || t.high >>> 31 != 1) && (this.high === t.high && this.low === t.low)
    }
    ,
    R.eq = R.equals,
    R.notEquals = function(t) {
        return !this.eq(t)
    }
    ,
    R.neq = R.notEquals,
    R.ne = R.notEquals,
    R.lessThan = function(t) {
        return this.comp(t) < 0
    }
    ,
    R.lt = R.lessThan,
    R.lessThanOrEqual = function(t) {
        return this.comp(t) <= 0
    }
    ,
    R.lte = R.lessThanOrEqual,
    R.le = R.lessThanOrEqual,
    R.greaterThan = function(t) {
        return this.comp(t) > 0
    }
    ,
    R.gt = R.greaterThan,
    R.greaterThanOrEqual = function(t) {
        return this.comp(t) >= 0
    }
    ,
    R.gte = R.greaterThanOrEqual,
    R.ge = R.greaterThanOrEqual,
    R.compare = function(t) {
        if (o(t) || (t = y(t)),
        this.eq(t))
            return 0;
        var e = this.isNegative()
          , n = t.isNegative();
        return e && !n ? -1 : !e && n ? 1 : this.unsigned ? t.high >>> 0 > this.high >>> 0 || t.high === this.high && t.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(t).isNegative() ? -1 : 1
    }
    ,
    R.comp = R.compare,
    R.negate = function() {
        return !this.unsigned && this.eq(P) ? P : this.not().add(E)
    }
    ,
    R.neg = R.negate,
    R.add = function(t) {
        o(t) || (t = y(t));
        var e = this.high >>> 16
          , n = 65535 & this.high
          , r = this.low >>> 16
          , l = 65535 & this.low
          , h = t.high >>> 16
          , c = 65535 & t.high
          , f = t.low >>> 16
          , m = 0
          , v = 0
          , w = 0
          , M = 0;
        return w += (M += l + (65535 & t.low)) >>> 16,
        v += (w += r + f) >>> 16,
        m += (v += n + c) >>> 16,
        m += e + h,
        d((w &= 65535) << 16 | (M &= 65535), (m &= 65535) << 16 | (v &= 65535), this.unsigned)
    }
    ,
    R.subtract = function(t) {
        return o(t) || (t = y(t)),
        this.add(t.neg())
    }
    ,
    R.sub = R.subtract,
    R.multiply = function(t) {
        if (this.isZero())
            return S;
        if (o(t) || (t = y(t)),
        n)
            return d(n.mul(this.low, this.high, t.low, t.high), n.get_high(), this.unsigned);
        if (t.isZero())
            return S;
        if (this.eq(P))
            return t.isOdd() ? P : S;
        if (t.eq(P))
            return this.isOdd() ? P : S;
        if (this.isNegative())
            return t.isNegative() ? this.neg().mul(t.neg()) : this.neg().mul(t).neg();
        if (t.isNegative())
            return this.mul(t.neg()).neg();
        if (this.lt(_) && t.lt(_))
            return f(this.toNumber() * t.toNumber(), this.unsigned);
        var e = this.high >>> 16
          , r = 65535 & this.high
          , l = this.low >>> 16
          , h = 65535 & this.low
          , c = t.high >>> 16
          , m = 65535 & t.high
          , v = t.low >>> 16
          , w = 65535 & t.low
          , M = 0
          , x = 0
          , k = 0
          , E = 0;
        return k += (E += h * w) >>> 16,
        x += (k += l * w) >>> 16,
        k &= 65535,
        x += (k += h * v) >>> 16,
        M += (x += r * w) >>> 16,
        x &= 65535,
        M += (x += l * v) >>> 16,
        x &= 65535,
        M += (x += h * m) >>> 16,
        M += e * w + r * v + l * m + h * c,
        d((k &= 65535) << 16 | (E &= 65535), (M &= 65535) << 16 | (x &= 65535), this.unsigned)
    }
    ,
    R.mul = R.multiply,
    R.divide = function(t) {
        if (o(t) || (t = y(t)),
        t.isZero())
            throw Error("division by zero");
        var e, r, l;
        if (n)
            return this.unsigned || -2147483648 !== this.high || -1 !== t.low || -1 !== t.high ? d((this.unsigned ? n.div_u : n.div_s)(this.low, this.high, t.low, t.high), n.get_high(), this.unsigned) : this;
        if (this.isZero())
            return this.unsigned ? k : S;
        if (this.unsigned) {
            if (t.unsigned || (t = t.toUnsigned()),
            t.gt(this))
                return k;
            if (t.gt(this.shru(1)))
                return C;
            l = k
        } else {
            if (this.eq(P))
                return t.eq(E) || t.eq(A) ? P : t.eq(P) ? E : (e = this.shr(1).div(t).shl(1)).eq(S) ? t.isNegative() ? E : A : (r = this.sub(t.mul(e)),
                l = e.add(r.div(t)));
            if (t.eq(P))
                return this.unsigned ? k : S;
            if (this.isNegative())
                return t.isNegative() ? this.neg().div(t.neg()) : this.neg().div(t).neg();
            if (t.isNegative())
                return this.div(t.neg()).neg();
            l = S
        }
        for (r = this; r.gte(t); ) {
            e = Math.max(1, Math.floor(r.toNumber() / t.toNumber()));
            for (var h = Math.ceil(Math.log(e) / Math.LN2), c = h <= 48 ? 1 : m(2, h - 48), v = f(e), w = v.mul(t); w.isNegative() || w.gt(r); )
                w = (v = f(e -= c, this.unsigned)).mul(t);
            v.isZero() && (v = E),
            l = l.add(v),
            r = r.sub(w)
        }
        return l
    }
    ,
    R.div = R.divide,
    R.modulo = function(t) {
        return o(t) || (t = y(t)),
        n ? d((this.unsigned ? n.rem_u : n.rem_s)(this.low, this.high, t.low, t.high), n.get_high(), this.unsigned) : this.sub(this.div(t).mul(t))
    }
    ,
    R.mod = R.modulo,
    R.rem = R.modulo,
    R.not = function() {
        return d(~this.low, ~this.high, this.unsigned)
    }
    ,
    R.and = function(t) {
        return o(t) || (t = y(t)),
        d(this.low & t.low, this.high & t.high, this.unsigned)
    }
    ,
    R.or = function(t) {
        return o(t) || (t = y(t)),
        d(this.low | t.low, this.high | t.high, this.unsigned)
    }
    ,
    R.xor = function(t) {
        return o(t) || (t = y(t)),
        d(this.low ^ t.low, this.high ^ t.high, this.unsigned)
    }
    ,
    R.shiftLeft = function(t) {
        return o(t) && (t = t.toInt()),
        0 == (t &= 63) ? this : t < 32 ? d(this.low << t, this.high << t | this.low >>> 32 - t, this.unsigned) : d(0, this.low << t - 32, this.unsigned)
    }
    ,
    R.shl = R.shiftLeft,
    R.shiftRight = function(t) {
        return o(t) && (t = t.toInt()),
        0 == (t &= 63) ? this : t < 32 ? d(this.low >>> t | this.high << 32 - t, this.high >> t, this.unsigned) : d(this.high >> t - 32, this.high >= 0 ? 0 : -1, this.unsigned)
    }
    ,
    R.shr = R.shiftRight,
    R.shiftRightUnsigned = function(t) {
        if (o(t) && (t = t.toInt()),
        0 === (t &= 63))
            return this;
        var e = this.high;
        return t < 32 ? d(this.low >>> t | e << 32 - t, e >>> t, this.unsigned) : d(32 === t ? e : e >>> t - 32, 0, this.unsigned)
    }
    ,
    R.shru = R.shiftRightUnsigned,
    R.shr_u = R.shiftRightUnsigned,
    R.toSigned = function() {
        return this.unsigned ? d(this.low, this.high, !1) : this
    }
    ,
    R.toUnsigned = function() {
        return this.unsigned ? this : d(this.low, this.high, !0)
    }
    ,
    R.toBytes = function(t) {
        return t ? this.toBytesLE() : this.toBytesBE()
    }
    ,
    R.toBytesLE = function() {
        var t = this.high
          , e = this.low;
        return [255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24, 255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24]
    }
    ,
    R.toBytesBE = function() {
        var t = this.high
          , e = this.low;
        return [t >>> 24, t >>> 16 & 255, t >>> 8 & 255, 255 & t, e >>> 24, e >>> 16 & 255, e >>> 8 & 255, 255 & e]
    }
    ,
    r.fromBytes = function(t, e, n) {
        return n ? r.fromBytesLE(t, e) : r.fromBytesBE(t, e)
    }
    ,
    r.fromBytesLE = function(t, e) {
        return new r(t[0] | t[1] << 8 | t[2] << 16 | t[3] << 24,t[4] | t[5] << 8 | t[6] << 16 | t[7] << 24,e)
    }
    ,
    r.fromBytesBE = function(t, e) {
        return new r(t[4] << 24 | t[5] << 16 | t[6] << 8 | t[7],t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3],e)
    };
    return r;
})();
var W = "2c811d2fb18a6ac";
var ret = d['fromString'](W, !0, 16)['toUnsigned']()['toString'](10);
console.log(ret);



