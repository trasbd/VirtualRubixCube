Qualtrics.SurveyEngine.addOnload(function () {
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function () {


});

Qualtrics.SurveyEngine.addOnUnload(function () {
	/*Place your JavaScript here to run when the page is unloaded*/

});

(function () {
	/**
	
	@license
	
	CUBER
	-----
	
	
	Cuber is a programmable Rubiks cube of sorts.
	
	
	Made with love by:
	@author Mark Lundin - http://mark-lundin.com / @mark_lundin
	@author Stewart Smith - stewd.io
	@author Google Creative Lab
	
	
	
	NOTATION
	
	UPPERCASE = Clockwise to next 90 degree peg
	lowercase = Anticlockwise to next 90 degree peg
	
	
	
	FACE & SLICE ROTATION COMMANDS
	
	F   Front
	S   Standing (rotate according to Front Face's orientation)
	B   Back
	
	L   Left
	M   Middle (rotate according to Left Face's orientation)
	R   Right
	
	U   Up
	E   Equator (rotate according to Up Face's orientation)
	D   Down
	
	
	
	ENTIRE CUBE ROTATION COMMANDS
	
	X   Rotate entire cube according to Right Face's orientation
	Y   Rotate entire cube according to Up Face's orientation
	Z   Rotate entire cube according to Front Face's orientation
	
	
	
	NOTATION REFERENCES
	
	http://en.wikipedia.org/wiki/Rubik's_Cube#Move_notation
	http://en.wikibooks.org/wiki/Template:Rubik's_cube_notation
	
	
	
	The MIT License (MIT)
	
	Copyright (c) 2014 Cuber Authors
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
	
	*/
	var ERNO = {};
	(function () {
		function a(a, c) { c = c || { bubbles: !1, cancelable: !1, detail: void 0 }; var d = document.createEvent("CustomEvent"); d.initCustomEvent(a, c.bubbles, c.cancelable, c.detail); return d } a.prototype = window.Event.prototype; window.CustomEvent = a; Function.prototype.bind || (Function.prototype.bind = function (a) {
			if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable"); var c = Array.prototype.slice.call(arguments, 1), d = this, e = function () { }, f = function () {
				return d.apply(this instanceof e &&
					a ? this : a, c.concat(Array.prototype.slice.call(arguments)))
			}; e.prototype = this.prototype; f.prototype = new e; return f
		})
	})(); ERNO.extend = function (a, b) { if (Object.keys) for (var c = Object.keys(b), d = 0, e = c.length; d < e; d++) { var f = c[d]; Object.defineProperty(a, f, Object.getOwnPropertyDescriptor(b, f)) } else for (f in c = {}.hasOwnProperty, b) c.call(b, f) && (a[f] = b[f]); return a };/**

 @license
 The MIT License

 Copyright (c) 2010-2012 Tween.js authors.

 Easing equations Copyright (c) 2001 Robert Penner
 http://robertpenner.com/easing/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/
	void 0 === Date.now && (Date.now = function () { return (new Date).valueOf() });
	var TWEEN = TWEEN || function () { var a = []; return { REVISION: "12", getAll: function () { return a }, removeAll: function () { a = [] }, add: function (b) { a.push(b) }, remove: function (b) { b = a.indexOf(b); -1 !== b && a.splice(b, 1) }, update: function (b) { if (0 === a.length) return !1; var c = 0; for (b = void 0 !== b ? b : "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); c < a.length;)a[c].update(b) ? c++ : a.splice(c, 1); return !0 } } }();
	TWEEN.Tween = function (a) {
		var b = {}, c = {}, d = {}, e = 1E3, f = 0, g = !1, h = !1, k = 0, l = null, n = TWEEN.Easing.Linear.None, m = TWEEN.Interpolation.Linear, r = [], q = null, t = !1, u = null, p = null, s; for (s in a) b[s] = parseFloat(a[s], 10); this.to = function (a, b) { void 0 !== b && (e = b); c = a; return this }; this.start = function (e) {
			TWEEN.add(this); h = !0; t = !1; l = void 0 !== e ? e : "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(); l += k; for (var f in c) {
				if (c[f] instanceof Array) {
					if (0 === c[f].length) continue;
					c[f] = [a[f]].concat(c[f])
				} b[f] = a[f]; !1 === b[f] instanceof Array && (b[f] *= 1); d[f] = b[f] || 0
			} return this
		}; this.stop = function () { if (!h) return this; TWEEN.remove(this); h = !1; this.stopChainedTweens(); return this }; this.stopChainedTweens = function () { for (var a = 0, b = r.length; a < b; a++)r[a].stop() }; this.delay = function (a) { k = a; return this }; this.repeat = function (a) { f = a; return this }; this.yoyo = function (a) { g = a; return this }; this.easing = function (a) { n = a; return this }; this.interpolation = function (a) { m = a; return this }; this.chain = function () {
			r =
				arguments; return this
		}; this.onStart = function (a) { q = a; return this }; this.onUpdate = function (a) { u = a; return this }; this.onComplete = function (a) { p = a; return this }; this.update = function (h) {
			var w; if (h < l) return !0; !1 === t && (null !== q && q.call(a), t = !0); var s = (h - l) / e, s = 1 < s ? 1 : s, x = n(s); for (w in c) { var C = b[w] || 0, z = c[w]; z instanceof Array ? a[w] = m(z, x) : ("string" === typeof z && (z = C + parseFloat(z, 10)), "number" === typeof z && (a[w] = C + (z - C) * x)) } null !== u && u.call(a, x); if (1 == s) if (0 < f) {
				isFinite(f) && f--; for (w in d) "string" === typeof c[w] &&
					(d[w] += parseFloat(c[w], 10)), g && (s = d[w], d[w] = c[w], c[w] = s), b[w] = d[w]; l = h + k
			} else { null !== p && p.call(a); w = 0; for (s = r.length; w < s; w++)r[w].start(h); return !1 } return !0
		}
	};
	TWEEN.Easing = {
		Linear: { None: function (a) { return a } }, Quadratic: { In: function (a) { return a * a }, Out: function (a) { return a * (2 - a) }, InOut: function (a) { return 1 > (a *= 2) ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1) } }, Cubic: { In: function (a) { return a * a * a }, Out: function (a) { return --a * a * a + 1 }, InOut: function (a) { return 1 > (a *= 2) ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2) } }, Quartic: { In: function (a) { return a * a * a * a }, Out: function (a) { return 1 - --a * a * a * a }, InOut: function (a) { return 1 > (a *= 2) ? 0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2) } }, Quintic: {
			In: function (a) {
				return a * a * a *
					a * a
			}, Out: function (a) { return --a * a * a * a * a + 1 }, InOut: function (a) { return 1 > (a *= 2) ? 0.5 * a * a * a * a * a : 0.5 * ((a -= 2) * a * a * a * a + 2) }
		}, Sinusoidal: { In: function (a) { return 1 - Math.cos(a * Math.PI / 2) }, Out: function (a) { return Math.sin(a * Math.PI / 2) }, InOut: function (a) { return 0.5 * (1 - Math.cos(Math.PI * a)) } }, Exponential: { In: function (a) { return 0 === a ? 0 : Math.pow(1024, a - 1) }, Out: function (a) { return 1 === a ? 1 : 1 - Math.pow(2, -10 * a) }, InOut: function (a) { return 0 === a ? 0 : 1 === a ? 1 : 1 > (a *= 2) ? 0.5 * Math.pow(1024, a - 1) : 0.5 * (-Math.pow(2, -10 * (a - 1)) + 2) } }, Circular: {
			In: function (a) {
				return 1 -
					Math.sqrt(1 - a * a)
			}, Out: function (a) { return Math.sqrt(1 - --a * a) }, InOut: function (a) { return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1) }
		}, Elastic: {
			In: function (a) { var b, c = 0.1; if (0 === a) return 0; if (1 === a) return 1; !c || 1 > c ? (c = 1, b = 0.1) : b = 0.4 * Math.asin(1 / c) / (2 * Math.PI); return -(c * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / 0.4)) }, Out: function (a) {
				var b, c = 0.1; if (0 === a) return 0; if (1 === a) return 1; !c || 1 > c ? (c = 1, b = 0.1) : b = 0.4 * Math.asin(1 / c) / (2 * Math.PI); return c * Math.pow(2, -10 * a) * Math.sin(2 * (a -
					b) * Math.PI / 0.4) + 1
			}, InOut: function (a) { var b, c = 0.1; if (0 === a) return 0; if (1 === a) return 1; !c || 1 > c ? (c = 1, b = 0.1) : b = 0.4 * Math.asin(1 / c) / (2 * Math.PI); return 1 > (a *= 2) ? -0.5 * c * Math.pow(2, 10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / 0.4) : c * Math.pow(2, -10 * (a -= 1)) * Math.sin(2 * (a - b) * Math.PI / 0.4) * 0.5 + 1 }
		}, Back: { In: function (a) { return a * a * (2.70158 * a - 1.70158) }, Out: function (a) { return --a * a * (2.70158 * a + 1.70158) + 1 }, InOut: function (a) { return 1 > (a *= 2) ? 0.5 * a * a * (3.5949095 * a - 2.5949095) : 0.5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2) } }, Bounce: {
			In: function (a) {
				return 1 -
					TWEEN.Easing.Bounce.Out(1 - a)
			}, Out: function (a) { return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375 }, InOut: function (a) { return 0.5 > a ? 0.5 * TWEEN.Easing.Bounce.In(2 * a) : 0.5 * TWEEN.Easing.Bounce.Out(2 * a - 1) + 0.5 }
		}
	};
	TWEEN.Interpolation = {
		Linear: function (a, b) { var c = a.length - 1, d = c * b, e = Math.floor(d), f = TWEEN.Interpolation.Utils.Linear; return 0 > b ? f(a[0], a[1], d) : 1 < b ? f(a[c], a[c - 1], c - d) : f(a[e], a[e + 1 > c ? c : e + 1], d - e) }, Bezier: function (a, b) { var c = 0, d = a.length - 1, e = Math.pow, f = TWEEN.Interpolation.Utils.Bernstein, g; for (g = 0; g <= d; g++)c += e(1 - b, d - g) * e(b, g) * a[g] * f(d, g); return c }, CatmullRom: function (a, b) {
			var c = a.length - 1, d = c * b, e = Math.floor(d), f = TWEEN.Interpolation.Utils.CatmullRom; return a[0] === a[c] ? (0 > b && (e = Math.floor(d = c * (1 + b))), f(a[(e -
				1 + c) % c], a[e], a[(e + 1) % c], a[(e + 2) % c], d - e)) : 0 > b ? a[0] - (f(a[0], a[0], a[1], a[1], -d) - a[0]) : 1 < b ? a[c] - (f(a[c], a[c], a[c - 1], a[c - 1], d - c) - a[c]) : f(a[e ? e - 1 : 0], a[e], a[c < e + 1 ? c : e + 1], a[c < e + 2 ? c : e + 2], d - e)
		}, Utils: {
			Linear: function (a, b, c) { return (b - a) * c + a }, Bernstein: function (a, b) { var c = TWEEN.Interpolation.Utils.Factorial; return c(a) / c(b) / c(a - b) }, Factorial: function () { var a = [1]; return function (b) { var c = 1, d; if (a[b]) return a[b]; for (d = b; 1 < d; d--)c *= d; return a[b] = c } }(), CatmullRom: function (a, b, c, d, e) {
				a = 0.5 * (c - a); d = 0.5 * (d - b); var f =
					e * e; return (2 * b - 2 * c + a + d) * e * f + (-3 * b + 3 * c - 2 * a - d) * f + a * e + b
			}
		}
	};/**

 @license
 The MIT License

 Copyright &copy; 2010-2014 three.js authors

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/
	var THREE = { REVISION: "66" }; self.console = self.console || { info: function () { }, log: function () { }, debug: function () { }, warn: function () { }, error: function () { } };
	(function () {
		for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !self.requestAnimationFrame; ++c)self.requestAnimationFrame = self[b[c] + "RequestAnimationFrame"], self.cancelAnimationFrame = self[b[c] + "CancelAnimationFrame"] || self[b[c] + "CancelRequestAnimationFrame"]; void 0 === self.requestAnimationFrame && void 0 !== self.setTimeout && (self.requestAnimationFrame = function (b) { var c = Date.now(), f = Math.max(0, 16 - (c - a)), g = self.setTimeout(function () { b(c + f) }, f); a = c + f; return g }); void 0 === self.cancelAnimationFrame && void 0 !==
			self.clearTimeout && (self.cancelAnimationFrame = function (a) { self.clearTimeout(a) })
	})(); THREE.CullFaceNone = 0; THREE.CullFaceBack = 1; THREE.CullFaceFront = 2; THREE.CullFaceFrontBack = 3; THREE.FrontFaceDirectionCW = 0; THREE.FrontFaceDirectionCCW = 1; THREE.BasicShadowMap = 0; THREE.PCFShadowMap = 1; THREE.PCFSoftShadowMap = 2; THREE.FrontSide = 0; THREE.BackSide = 1; THREE.DoubleSide = 2; THREE.NoShading = 0; THREE.FlatShading = 1; THREE.SmoothShading = 2; THREE.NoColors = 0; THREE.FaceColors = 1; THREE.VertexColors = 2; THREE.NoBlending = 0;
	THREE.NormalBlending = 1; THREE.AdditiveBlending = 2; THREE.SubtractiveBlending = 3; THREE.MultiplyBlending = 4; THREE.CustomBlending = 5; THREE.AddEquation = 100; THREE.SubtractEquation = 101; THREE.ReverseSubtractEquation = 102; THREE.ZeroFactor = 200; THREE.OneFactor = 201; THREE.SrcColorFactor = 202; THREE.OneMinusSrcColorFactor = 203; THREE.SrcAlphaFactor = 204; THREE.OneMinusSrcAlphaFactor = 205; THREE.DstAlphaFactor = 206; THREE.OneMinusDstAlphaFactor = 207; THREE.DstColorFactor = 208; THREE.OneMinusDstColorFactor = 209;
	THREE.SrcAlphaSaturateFactor = 210; THREE.MultiplyOperation = 0; THREE.MixOperation = 1; THREE.AddOperation = 2; THREE.UVMapping = function () { }; THREE.CubeReflectionMapping = function () { }; THREE.CubeRefractionMapping = function () { }; THREE.SphericalReflectionMapping = function () { }; THREE.SphericalRefractionMapping = function () { }; THREE.RepeatWrapping = 1E3; THREE.ClampToEdgeWrapping = 1001; THREE.MirroredRepeatWrapping = 1002; THREE.NearestFilter = 1003; THREE.NearestMipMapNearestFilter = 1004; THREE.NearestMipMapLinearFilter = 1005;
	THREE.LinearFilter = 1006; THREE.LinearMipMapNearestFilter = 1007; THREE.LinearMipMapLinearFilter = 1008; THREE.UnsignedByteType = 1009; THREE.ByteType = 1010; THREE.ShortType = 1011; THREE.UnsignedShortType = 1012; THREE.IntType = 1013; THREE.UnsignedIntType = 1014; THREE.FloatType = 1015; THREE.UnsignedShort4444Type = 1016; THREE.UnsignedShort5551Type = 1017; THREE.UnsignedShort565Type = 1018; THREE.AlphaFormat = 1019; THREE.RGBFormat = 1020; THREE.RGBAFormat = 1021; THREE.LuminanceFormat = 1022; THREE.LuminanceAlphaFormat = 1023;
	THREE.RGB_S3TC_DXT1_Format = 2001; THREE.RGBA_S3TC_DXT1_Format = 2002; THREE.RGBA_S3TC_DXT3_Format = 2003; THREE.RGBA_S3TC_DXT5_Format = 2004; THREE.EventDispatcher = function () { };
	THREE.EventDispatcher.prototype = {
		constructor: THREE.EventDispatcher, apply: function (a) { a.addEventListener = THREE.EventDispatcher.prototype.addEventListener; a.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener; a.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener; a.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent }, addEventListener: function (a, b) {
			void 0 === this._listeners && (this._listeners = {}); var c = this._listeners; void 0 === c[a] && (c[a] = []); -1 === c[a].indexOf(b) &&
				c[a].push(b)
		}, hasEventListener: function (a, b) { if (void 0 === this._listeners) return !1; var c = this._listeners; return void 0 !== c[a] && -1 !== c[a].indexOf(b) ? !0 : !1 }, removeEventListener: function (a, b) { if (void 0 !== this._listeners) { var c = this._listeners[a]; if (void 0 !== c) { var d = c.indexOf(b); -1 !== d && c.splice(d, 1) } } }, dispatchEvent: function () {
			var a = []; return function (b) {
				if (void 0 !== this._listeners) {
					var c = this._listeners[b.type]; if (void 0 !== c) {
						b.target = this; for (var d = c.length, e = 0; e < d; e++)a[e] = c[e]; for (e = 0; e < d; e++)a[e].call(this,
							b)
					}
				}
			}
		}()
	}; THREE.Math = {
		PI2: 2 * Math.PI, generateUUID: function () { var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), b = Array(36), c = 0, d; return function () { for (var e = 0; 36 > e; e++)8 == e || 13 == e || 18 == e || 23 == e ? b[e] = "-" : 14 == e ? b[e] = "4" : (2 >= c && (c = 33554432 + 16777216 * Math.random() | 0), d = c & 15, c >>= 4, b[e] = a[19 == e ? d & 3 | 8 : d]); return b.join("") } }(), clamp: function (a, b, c) { return a < b ? b : a > c ? c : a }, clampBottom: function (a, b) { return a < b ? b : a }, mapLinear: function (a, b, c, d, e) { return d + (a - b) * (e - d) / (c - b) }, smoothstep: function (a,
			b, c) { if (a <= b) return 0; if (a >= c) return 1; a = (a - b) / (c - b); return a * a * (3 - 2 * a) }, smootherstep: function (a, b, c) { if (a <= b) return 0; if (a >= c) return 1; a = (a - b) / (c - b); return a * a * a * (a * (6 * a - 15) + 10) }, random16: function () { return (65280 * Math.random() + 255 * Math.random()) / 65535 }, randInt: function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)) }, randFloat: function (a, b) { return a + Math.random() * (b - a) }, randFloatSpread: function (a) { return a * (0.5 - Math.random()) }, sign: function (a) { return 0 > a ? -1 : 0 < a ? 1 : 0 }, degToRad: function () {
				var a = Math.PI /
					180; return function (b) { return b * a }
			}(), radToDeg: function () { var a = 180 / Math.PI; return function (b) { return b * a } }(), isPowerOfTwo: function (a) { return 0 === (a & a - 1) && 0 !== a }
	}; THREE.Quaternion = function (a, b, c, d) { this._x = a || 0; this._y = b || 0; this._z = c || 0; this._w = void 0 !== d ? d : 1 };
	THREE.Quaternion.prototype = {
		constructor: THREE.Quaternion, _x: 0, _y: 0, _z: 0, _w: 0, _euler: void 0, _updateEuler: function (a) { void 0 !== this._euler && this._euler.setFromQuaternion(this, void 0, !1) }, get x() { return this._x }, set x(a) { this._x = a; this._updateEuler() }, get y() { return this._y }, set y(a) { this._y = a; this._updateEuler() }, get z() { return this._z }, set z(a) { this._z = a; this._updateEuler() }, get w() { return this._w }, set w(a) { this._w = a; this._updateEuler() }, set: function (a, b, c, d) {
			this._x = a; this._y = b; this._z = c; this._w =
				d; this._updateEuler(); return this
		}, copy: function (a) { this._x = a._x; this._y = a._y; this._z = a._z; this._w = a._w; this._updateEuler(); return this }, setFromEuler: function (a, b) {
			if (!1 === a instanceof THREE.Euler) throw Error("ERROR: Quaternion's .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code."); var c = Math.cos(a._x / 2), d = Math.cos(a._y / 2), e = Math.cos(a._z / 2), f = Math.sin(a._x / 2), g = Math.sin(a._y / 2), h = Math.sin(a._z / 2); "XYZ" === a.order ? (this._x = f * d * e + c * g * h, this._y = c *
				g * e - f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e - f * g * h) : "YXZ" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e - f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e + f * g * h) : "ZXY" === a.order ? (this._x = f * d * e - c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h + f * g * e, this._w = c * d * e - f * g * h) : "ZYX" === a.order ? (this._x = f * d * e - c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e + f * g * h) : "YZX" === a.order ? (this._x = f * d * e + c * g * h, this._y = c * g * e + f * d * h, this._z = c * d * h - f * g * e, this._w = c * d * e - f * g * h) : "XZY" === a.order && (this._x = f * d * e - c * g * h, this._y = c * g * e - f * d * h,
					this._z = c * d * h + f * g * e, this._w = c * d * e + f * g * h); !1 !== b && this._updateEuler(); return this
		}, setFromAxisAngle: function (a, b) { var c = b / 2, d = Math.sin(c); this._x = a.x * d; this._y = a.y * d; this._z = a.z * d; this._w = Math.cos(c); this._updateEuler(); return this }, setFromRotationMatrix: function (a) {
			var b = a.elements, c = b[0]; a = b[4]; var d = b[8], e = b[1], f = b[5], g = b[9], h = b[2], k = b[6], b = b[10], l = c + f + b; 0 < l ? (c = 0.5 / Math.sqrt(l + 1), this._w = 0.25 / c, this._x = (k - g) * c, this._y = (d - h) * c, this._z = (e - a) * c) : c > f && c > b ? (c = 2 * Math.sqrt(1 + c - f - b), this._w = (k - g) / c, this._x =
				0.25 * c, this._y = (a + e) / c, this._z = (d + h) / c) : f > b ? (c = 2 * Math.sqrt(1 + f - c - b), this._w = (d - h) / c, this._x = (a + e) / c, this._y = 0.25 * c, this._z = (g + k) / c) : (c = 2 * Math.sqrt(1 + b - c - f), this._w = (e - a) / c, this._x = (d + h) / c, this._y = (g + k) / c, this._z = 0.25 * c); this._updateEuler(); return this
		}, inverse: function () { this.conjugate().normalize(); return this }, conjugate: function () { this._x *= -1; this._y *= -1; this._z *= -1; this._updateEuler(); return this }, lengthSq: function () { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w }, length: function () {
			return Math.sqrt(this._x *
				this._x + this._y * this._y + this._z * this._z + this._w * this._w)
		}, normalize: function () { var a = this.length(); 0 === a ? (this._z = this._y = this._x = 0, this._w = 1) : (a = 1 / a, this._x *= a, this._y *= a, this._z *= a, this._w *= a); return this }, multiply: function (a, b) { return void 0 !== b ? (console.warn("DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(a, b)) : this.multiplyQuaternions(this, a) }, multiplyQuaternions: function (a, b) {
			var c = a._x, d = a._y, e = a._z, f =
				a._w, g = b._x, h = b._y, k = b._z, l = b._w; this._x = c * l + f * g + d * k - e * h; this._y = d * l + f * h + e * g - c * k; this._z = e * l + f * k + c * h - d * g; this._w = f * l - c * g - d * h - e * k; this._updateEuler(); return this
		}, multiplyVector3: function (a) { console.warn("DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."); return a.applyQuaternion(this) }, slerp: function (a, b) {
			var c = this._x, d = this._y, e = this._z, f = this._w, g = f * a._w + c * a._x + d * a._y + e * a._z; 0 > g ? (this._w = -a._w, this._x = -a._x, this._y = -a._y, this._z =
				-a._z, g = -g) : this.copy(a); if (1 <= g) return this._w = f, this._x = c, this._y = d, this._z = e, this; var h = Math.acos(g), k = Math.sqrt(1 - g * g); if (0.001 > Math.abs(k)) return this._w = 0.5 * (f + this._w), this._x = 0.5 * (c + this._x), this._y = 0.5 * (d + this._y), this._z = 0.5 * (e + this._z), this; g = Math.sin((1 - b) * h) / k; h = Math.sin(b * h) / k; this._w = f * g + this._w * h; this._x = c * g + this._x * h; this._y = d * g + this._y * h; this._z = e * g + this._z * h; this._updateEuler(); return this
		}, equals: function (a) { return a._x === this._x && a._y === this._y && a._z === this._z && a._w === this._w },
		fromArray: function (a) { this._x = a[0]; this._y = a[1]; this._z = a[2]; this._w = a[3]; this._updateEuler(); return this }, toArray: function () { return [this._x, this._y, this._z, this._w] }, clone: function () { return new THREE.Quaternion(this._x, this._y, this._z, this._w) }
	}; THREE.Quaternion.slerp = function (a, b, c, d) { return c.copy(a).slerp(b, d) }; THREE.Vector2 = function (a, b) { this.x = a || 0; this.y = b || 0 };
	THREE.Vector2.prototype = {
		constructor: THREE.Vector2, set: function (a, b) { this.x = a; this.y = b; return this }, setX: function (a) { this.x = a; return this }, setY: function (a) { this.y = a; return this }, setComponent: function (a, b) { switch (a) { case 0: this.x = b; break; case 1: this.y = b; break; default: throw Error("index is out of range: " + a); } }, getComponent: function (a) { switch (a) { case 0: return this.x; case 1: return this.y; default: throw Error("index is out of range: " + a); } }, copy: function (a) { this.x = a.x; this.y = a.y; return this }, add: function (a,
			b) { if (void 0 !== b) return console.warn("DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b); this.x += a.x; this.y += a.y; return this }, addVectors: function (a, b) { this.x = a.x + b.x; this.y = a.y + b.y; return this }, addScalar: function (a) { this.x += a; this.y += a; return this }, sub: function (a, b) {
				if (void 0 !== b) return console.warn("DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(a, b); this.x -= a.x; this.y -=
					a.y; return this
			}, subVectors: function (a, b) { this.x = a.x - b.x; this.y = a.y - b.y; return this }, multiplyScalar: function (a) { this.x *= a; this.y *= a; return this }, divideScalar: function (a) { 0 !== a ? (a = 1 / a, this.x *= a, this.y *= a) : this.y = this.x = 0; return this }, min: function (a) { this.x > a.x && (this.x = a.x); this.y > a.y && (this.y = a.y); return this }, max: function (a) { this.x < a.x && (this.x = a.x); this.y < a.y && (this.y = a.y); return this }, clamp: function (a, b) {
				this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x); this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y);
				return this
			}, clampScalar: function () { var a, b; return function (c, d) { void 0 === a && (a = new THREE.Vector2, b = new THREE.Vector2); a.set(c, c); b.set(d, d); return this.clamp(a, b) } }(), floor: function () { this.x = Math.floor(this.x); this.y = Math.floor(this.y); return this }, ceil: function () { this.x = Math.ceil(this.x); this.y = Math.ceil(this.y); return this }, round: function () { this.x = Math.round(this.x); this.y = Math.round(this.y); return this }, roundToZero: function () {
				this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x); this.y = 0 > this.y ?
					Math.ceil(this.y) : Math.floor(this.y); return this
			}, negate: function () { return this.multiplyScalar(-1) }, dot: function (a) { return this.x * a.x + this.y * a.y }, lengthSq: function () { return this.x * this.x + this.y * this.y }, length: function () { return Math.sqrt(this.x * this.x + this.y * this.y) }, normalize: function () { return this.divideScalar(this.length()) }, distanceTo: function (a) { return Math.sqrt(this.distanceToSquared(a)) }, distanceToSquared: function (a) { var b = this.x - a.x; a = this.y - a.y; return b * b + a * a }, setLength: function (a) {
				var b =
					this.length(); 0 !== b && a !== b && this.multiplyScalar(a / b); return this
			}, lerp: function (a, b) { this.x += (a.x - this.x) * b; this.y += (a.y - this.y) * b; return this }, equals: function (a) { return a.x === this.x && a.y === this.y }, fromArray: function (a) { this.x = a[0]; this.y = a[1]; return this }, toArray: function () { return [this.x, this.y] }, clone: function () { return new THREE.Vector2(this.x, this.y) }
	}; THREE.Vector3 = function (a, b, c) { this.x = a || 0; this.y = b || 0; this.z = c || 0 };
	THREE.Vector3.prototype = {
		constructor: THREE.Vector3, set: function (a, b, c) { this.x = a; this.y = b; this.z = c; return this }, setX: function (a) { this.x = a; return this }, setY: function (a) { this.y = a; return this }, setZ: function (a) { this.z = a; return this }, setComponent: function (a, b) { switch (a) { case 0: this.x = b; break; case 1: this.y = b; break; case 2: this.z = b; break; default: throw Error("index is out of range: " + a); } }, getComponent: function (a) {
			switch (a) {
				case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw Error("index is out of range: " +
					a);
			}
		}, copy: function (a) { this.x = a.x; this.y = a.y; this.z = a.z; return this }, add: function (a, b) { if (void 0 !== b) return console.warn("DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(a, b); this.x += a.x; this.y += a.y; this.z += a.z; return this }, addScalar: function (a) { this.x += a; this.y += a; this.z += a; return this }, addVectors: function (a, b) { this.x = a.x + b.x; this.y = a.y + b.y; this.z = a.z + b.z; return this }, sub: function (a, b) {
			if (void 0 !== b) return console.warn("DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
				this.subVectors(a, b); this.x -= a.x; this.y -= a.y; this.z -= a.z; return this
		}, subVectors: function (a, b) { this.x = a.x - b.x; this.y = a.y - b.y; this.z = a.z - b.z; return this }, multiply: function (a, b) { if (void 0 !== b) return console.warn("DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(a, b); this.x *= a.x; this.y *= a.y; this.z *= a.z; return this }, multiplyScalar: function (a) { this.x *= a; this.y *= a; this.z *= a; return this }, multiplyVectors: function (a, b) {
			this.x = a.x *
				b.x; this.y = a.y * b.y; this.z = a.z * b.z; return this
		}, applyEuler: function () { var a; return function (b) { !1 === b instanceof THREE.Euler && console.error("ERROR: Vector3's .applyEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code."); void 0 === a && (a = new THREE.Quaternion); this.applyQuaternion(a.setFromEuler(b)); return this } }(), applyAxisAngle: function () { var a; return function (b, c) { void 0 === a && (a = new THREE.Quaternion); this.applyQuaternion(a.setFromAxisAngle(b, c)); return this } }(),
		applyMatrix3: function (a) { var b = this.x, c = this.y, d = this.z; a = a.elements; this.x = a[0] * b + a[3] * c + a[6] * d; this.y = a[1] * b + a[4] * c + a[7] * d; this.z = a[2] * b + a[5] * c + a[8] * d; return this }, applyMatrix4: function (a) { var b = this.x, c = this.y, d = this.z; a = a.elements; this.x = a[0] * b + a[4] * c + a[8] * d + a[12]; this.y = a[1] * b + a[5] * c + a[9] * d + a[13]; this.z = a[2] * b + a[6] * c + a[10] * d + a[14]; return this }, applyProjection: function (a) {
			var b = this.x, c = this.y, d = this.z; a = a.elements; var e = 1 / (a[3] * b + a[7] * c + a[11] * d + a[15]); this.x = (a[0] * b + a[4] * c + a[8] * d + a[12]) * e; this.y =
				(a[1] * b + a[5] * c + a[9] * d + a[13]) * e; this.z = (a[2] * b + a[6] * c + a[10] * d + a[14]) * e; return this
		}, applyQuaternion: function (a) { var b = this.x, c = this.y, d = this.z, e = a.x, f = a.y, g = a.z; a = a.w; var h = a * b + f * d - g * c, k = a * c + g * b - e * d, l = a * d + e * c - f * b, b = -e * b - f * c - g * d; this.x = h * a + b * -e + k * -g - l * -f; this.y = k * a + b * -f + l * -e - h * -g; this.z = l * a + b * -g + h * -f - k * -e; return this }, transformDirection: function (a) { var b = this.x, c = this.y, d = this.z; a = a.elements; this.x = a[0] * b + a[4] * c + a[8] * d; this.y = a[1] * b + a[5] * c + a[9] * d; this.z = a[2] * b + a[6] * c + a[10] * d; this.normalize(); return this },
		divide: function (a) { this.x /= a.x; this.y /= a.y; this.z /= a.z; return this }, divideScalar: function (a) { 0 !== a ? (a = 1 / a, this.x *= a, this.y *= a, this.z *= a) : this.z = this.y = this.x = 0; return this }, min: function (a) { this.x > a.x && (this.x = a.x); this.y > a.y && (this.y = a.y); this.z > a.z && (this.z = a.z); return this }, max: function (a) { this.x < a.x && (this.x = a.x); this.y < a.y && (this.y = a.y); this.z < a.z && (this.z = a.z); return this }, clamp: function (a, b) {
			this.x < a.x ? this.x = a.x : this.x > b.x && (this.x = b.x); this.y < a.y ? this.y = a.y : this.y > b.y && (this.y = b.y); this.z <
				a.z ? this.z = a.z : this.z > b.z && (this.z = b.z); return this
		}, clampScalar: function () { var a, b; return function (c, d) { void 0 === a && (a = new THREE.Vector3, b = new THREE.Vector3); a.set(c, c, c); b.set(d, d, d); return this.clamp(a, b) } }(), floor: function () { this.x = Math.floor(this.x); this.y = Math.floor(this.y); this.z = Math.floor(this.z); return this }, ceil: function () { this.x = Math.ceil(this.x); this.y = Math.ceil(this.y); this.z = Math.ceil(this.z); return this }, round: function () {
			this.x = Math.round(this.x); this.y = Math.round(this.y); this.z = Math.round(this.z);
			return this
		}, roundToZero: function () { this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x); this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y); this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z); return this }, negate: function () { return this.multiplyScalar(-1) }, dot: function (a) { return this.x * a.x + this.y * a.y + this.z * a.z }, lengthSq: function () { return this.x * this.x + this.y * this.y + this.z * this.z }, length: function () { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) }, lengthManhattan: function () {
			return Math.abs(this.x) +
				Math.abs(this.y) + Math.abs(this.z)
		}, normalize: function () { return this.divideScalar(this.length()) }, setLength: function (a) { var b = this.length(); 0 !== b && a !== b && this.multiplyScalar(a / b); return this }, lerp: function (a, b) { this.x += (a.x - this.x) * b; this.y += (a.y - this.y) * b; this.z += (a.z - this.z) * b; return this }, cross: function (a, b) {
			if (void 0 !== b) return console.warn("DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(a, b); var c = this.x, d = this.y, e = this.z; this.x =
				d * a.z - e * a.y; this.y = e * a.x - c * a.z; this.z = c * a.y - d * a.x; return this
		}, crossVectors: function (a, b) { var c = a.x, d = a.y, e = a.z, f = b.x, g = b.y, h = b.z; this.x = d * h - e * g; this.y = e * f - c * h; this.z = c * g - d * f; return this }, projectOnVector: function () { var a, b; return function (c) { void 0 === a && (a = new THREE.Vector3); a.copy(c).normalize(); b = this.dot(a); return this.copy(a).multiplyScalar(b) } }(), projectOnPlane: function () { var a; return function (b) { void 0 === a && (a = new THREE.Vector3); a.copy(this).projectOnVector(b); return this.sub(a) } }(), reflect: function () {
			var a;
			return function (b) { void 0 === a && (a = new THREE.Vector3); return this.sub(a.copy(b).multiplyScalar(2 * this.dot(b))) }
		}(), angleTo: function (a) { a = this.dot(a) / (this.length() * a.length()); return Math.acos(THREE.Math.clamp(a, -1, 1)) }, distanceTo: function (a) { return Math.sqrt(this.distanceToSquared(a)) }, distanceToSquared: function (a) { var b = this.x - a.x, c = this.y - a.y; a = this.z - a.z; return b * b + c * c + a * a }, setEulerFromRotationMatrix: function (a, b) { console.error("REMOVED: Vector3's setEulerFromRotationMatrix has been removed in favor of Euler.setFromRotationMatrix(), please update your code.") },
		setEulerFromQuaternion: function (a, b) { console.error("REMOVED: Vector3's setEulerFromQuaternion: has been removed in favor of Euler.setFromQuaternion(), please update your code.") }, getPositionFromMatrix: function (a) { console.warn("DEPRECATED: Vector3's .getPositionFromMatrix() has been renamed to .setFromMatrixPosition(). Please update your code."); return this.setFromMatrixPosition(a) }, getScaleFromMatrix: function (a) {
			console.warn("DEPRECATED: Vector3's .getScaleFromMatrix() has been renamed to .setFromMatrixScale(). Please update your code.");
			return this.setFromMatrixScale(a)
		}, getColumnFromMatrix: function (a, b) { console.warn("DEPRECATED: Vector3's .getColumnFromMatrix() has been renamed to .setFromMatrixColumn(). Please update your code."); return this.setFromMatrixColumn(a, b) }, setFromMatrixPosition: function (a) { this.x = a.elements[12]; this.y = a.elements[13]; this.z = a.elements[14]; return this }, setFromMatrixScale: function (a) {
			var b = this.set(a.elements[0], a.elements[1], a.elements[2]).length(), c = this.set(a.elements[4], a.elements[5], a.elements[6]).length();
			a = this.set(a.elements[8], a.elements[9], a.elements[10]).length(); this.x = b; this.y = c; this.z = a; return this
		}, setFromMatrixColumn: function (a, b) { var c = 4 * a, d = b.elements; this.x = d[c]; this.y = d[c + 1]; this.z = d[c + 2]; return this }, equals: function (a) { return a.x === this.x && a.y === this.y && a.z === this.z }, fromArray: function (a) { this.x = a[0]; this.y = a[1]; this.z = a[2]; return this }, toArray: function () { return [this.x, this.y, this.z] }, clone: function () { return new THREE.Vector3(this.x, this.y, this.z) }
	}; THREE.Box3 = function (a, b) { this.min = void 0 !== a ? a : new THREE.Vector3(Infinity, Infinity, Infinity); this.max = void 0 !== b ? b : new THREE.Vector3(-Infinity, -Infinity, -Infinity) };
	THREE.Box3.prototype = {
		constructor: THREE.Box3, set: function (a, b) { this.min.copy(a); this.max.copy(b); return this }, addPoint: function (a) { a.x < this.min.x ? this.min.x = a.x : a.x > this.max.x && (this.max.x = a.x); a.y < this.min.y ? this.min.y = a.y : a.y > this.max.y && (this.max.y = a.y); a.z < this.min.z ? this.min.z = a.z : a.z > this.max.z && (this.max.z = a.z) }, setFromPoints: function (a) { if (0 < a.length) { var b = a[0]; this.min.copy(b); this.max.copy(b); for (var b = 1, c = a.length; b < c; b++)this.addPoint(a[b]) } else this.makeEmpty(); return this }, setFromCenterAndSize: function () {
			var a =
				new THREE.Vector3; return function (b, c) { var d = a.copy(c).multiplyScalar(0.5); this.min.copy(b).sub(d); this.max.copy(b).add(d); return this }
		}(), setFromObject: function () { var a = new THREE.Vector3; return function (b) { var c = this; b.updateMatrixWorld(!0); this.makeEmpty(); b.traverse(function (b) { if (void 0 !== b.geometry && void 0 !== b.geometry.vertices) for (var e = b.geometry.vertices, f = 0, g = e.length; f < g; f++)a.copy(e[f]), a.applyMatrix4(b.matrixWorld), c.expandByPoint(a) }); return this } }(), copy: function (a) {
			this.min.copy(a.min);
			this.max.copy(a.max); return this
		}, makeEmpty: function () { this.min.x = this.min.y = this.min.z = Infinity; this.max.x = this.max.y = this.max.z = -Infinity; return this }, empty: function () { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z }, center: function (a) { return (a || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(0.5) }, size: function (a) { return (a || new THREE.Vector3).subVectors(this.max, this.min) }, expandByPoint: function (a) { this.min.min(a); this.max.max(a); return this }, expandByVector: function (a) {
			this.min.sub(a);
			this.max.add(a); return this
		}, expandByScalar: function (a) { this.min.addScalar(-a); this.max.addScalar(a); return this }, containsPoint: function (a) { return a.x < this.min.x || a.x > this.max.x || a.y < this.min.y || a.y > this.max.y || a.z < this.min.z || a.z > this.max.z ? !1 : !0 }, containsBox: function (a) { return this.min.x <= a.min.x && a.max.x <= this.max.x && this.min.y <= a.min.y && a.max.y <= this.max.y && this.min.z <= a.min.z && a.max.z <= this.max.z ? !0 : !1 }, getParameter: function (a, b) {
			return (b || new THREE.Vector3).set((a.x - this.min.x) / (this.max.x -
				this.min.x), (a.y - this.min.y) / (this.max.y - this.min.y), (a.z - this.min.z) / (this.max.z - this.min.z))
		}, isIntersectionBox: function (a) { return a.max.x < this.min.x || a.min.x > this.max.x || a.max.y < this.min.y || a.min.y > this.max.y || a.max.z < this.min.z || a.min.z > this.max.z ? !1 : !0 }, clampPoint: function (a, b) { return (b || new THREE.Vector3).copy(a).clamp(this.min, this.max) }, distanceToPoint: function () { var a = new THREE.Vector3; return function (b) { return a.copy(b).clamp(this.min, this.max).sub(b).length() } }(), getBoundingSphere: function () {
			var a =
				new THREE.Vector3; return function (b) { b = b || new THREE.Sphere; b.center = this.center(); b.radius = 0.5 * this.size(a).length(); return b }
		}(), intersect: function (a) { this.min.max(a.min); this.max.min(a.max); return this }, union: function (a) { this.min.min(a.min); this.max.max(a.max); return this }, applyMatrix4: function () {
			var a = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]; return function (b) {
				a[0].set(this.min.x, this.min.y,
					this.min.z).applyMatrix4(b); a[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(b); a[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(b); a[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(b); a[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(b); a[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(b); a[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(b); a[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(b); this.makeEmpty(); this.setFromPoints(a); return this
			}
		}(), translate: function (a) {
			this.min.add(a);
			this.max.add(a); return this
		}, equals: function (a) { return a.min.equals(this.min) && a.max.equals(this.max) }, clone: function () { return (new THREE.Box3).copy(this) }
	}; THREE.Sphere = function (a, b) { this.center = void 0 !== a ? a : new THREE.Vector3; this.radius = void 0 !== b ? b : 0 };
	THREE.Sphere.prototype = {
		constructor: THREE.Sphere, set: function (a, b) { this.center.copy(a); this.radius = b; return this }, setFromPoints: function () { var a = new THREE.Box3; return function (b, c) { var d = this.center; void 0 !== c ? d.copy(c) : a.setFromPoints(b).center(d); for (var e = 0, f = 0, g = b.length; f < g; f++)e = Math.max(e, d.distanceToSquared(b[f])); this.radius = Math.sqrt(e); return this } }(), copy: function (a) { this.center.copy(a.center); this.radius = a.radius; return this }, empty: function () { return 0 >= this.radius }, containsPoint: function (a) {
			return a.distanceToSquared(this.center) <=
				this.radius * this.radius
		}, distanceToPoint: function (a) { return a.distanceTo(this.center) - this.radius }, intersectsSphere: function (a) { var b = this.radius + a.radius; return a.center.distanceToSquared(this.center) <= b * b }, clampPoint: function (a, b) { var c = this.center.distanceToSquared(a), d = b || new THREE.Vector3; d.copy(a); c > this.radius * this.radius && (d.sub(this.center).normalize(), d.multiplyScalar(this.radius).add(this.center)); return d }, getBoundingBox: function (a) {
			a = a || new THREE.Box3; a.set(this.center, this.center); a.expandByScalar(this.radius);
			return a
		}, applyMatrix4: function (a) { this.center.applyMatrix4(a); this.radius *= a.getMaxScaleOnAxis(); return this }, translate: function (a) { this.center.add(a); return this }, equals: function (a) { return a.center.equals(this.center) && a.radius === this.radius }, clone: function () { return (new THREE.Sphere).copy(this) }
	}; THREE.Euler = function (a, b, c, d) { this._x = a || 0; this._y = b || 0; this._z = c || 0; this._order = d || THREE.Euler.DefaultOrder }; THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" "); THREE.Euler.DefaultOrder = "XYZ";
	THREE.Euler.prototype = {
		constructor: THREE.Euler, _x: 0, _y: 0, _z: 0, _order: THREE.Euler.DefaultOrder, _quaternion: void 0, _updateQuaternion: function () { void 0 !== this._quaternion && this._quaternion.setFromEuler(this, !1) }, get x() { return this._x }, set x(a) { this._x = a; this._updateQuaternion() }, get y() { return this._y }, set y(a) { this._y = a; this._updateQuaternion() }, get z() { return this._z }, set z(a) { this._z = a; this._updateQuaternion() }, get order() { return this._order }, set order(a) { this._order = a; this._updateQuaternion() },
		set: function (a, b, c, d) { this._x = a; this._y = b; this._z = c; this._order = d || this._order; this._updateQuaternion(); return this }, copy: function (a) { this._x = a._x; this._y = a._y; this._z = a._z; this._order = a._order; this._updateQuaternion(); return this }, setFromRotationMatrix: function (a, b) {
			function c(a) { return Math.min(Math.max(a, -1), 1) } var d = a.elements, e = d[0], f = d[4], g = d[8], h = d[1], k = d[5], l = d[9], n = d[2], m = d[6], d = d[10]; b = b || this._order; "XYZ" === b ? (this._y = Math.asin(c(g)), 0.99999 > Math.abs(g) ? (this._x = Math.atan2(-l, d), this._z =
				Math.atan2(-f, e)) : (this._x = Math.atan2(m, k), this._z = 0)) : "YXZ" === b ? (this._x = Math.asin(-c(l)), 0.99999 > Math.abs(l) ? (this._y = Math.atan2(g, d), this._z = Math.atan2(h, k)) : (this._y = Math.atan2(-n, e), this._z = 0)) : "ZXY" === b ? (this._x = Math.asin(c(m)), 0.99999 > Math.abs(m) ? (this._y = Math.atan2(-n, d), this._z = Math.atan2(-f, k)) : (this._y = 0, this._z = Math.atan2(h, e))) : "ZYX" === b ? (this._y = Math.asin(-c(n)), 0.99999 > Math.abs(n) ? (this._x = Math.atan2(m, d), this._z = Math.atan2(h, e)) : (this._x = 0, this._z = Math.atan2(-f, k))) : "YZX" === b ? (this._z =
					Math.asin(c(h)), 0.99999 > Math.abs(h) ? (this._x = Math.atan2(-l, k), this._y = Math.atan2(-n, e)) : (this._x = 0, this._y = Math.atan2(g, d))) : "XZY" === b ? (this._z = Math.asin(-c(f)), 0.99999 > Math.abs(f) ? (this._x = Math.atan2(m, k), this._y = Math.atan2(g, e)) : (this._x = Math.atan2(-l, d), this._y = 0)) : console.warn("WARNING: Euler.setFromRotationMatrix() given unsupported order: " + b); this._order = b; this._updateQuaternion(); return this
		}, setFromQuaternion: function (a, b, c) {
			function d(a) { return Math.min(Math.max(a, -1), 1) } var e = a.x * a.x, f =
				a.y * a.y, g = a.z * a.z, h = a.w * a.w; b = b || this._order; "XYZ" === b ? (this._x = Math.atan2(2 * (a.x * a.w - a.y * a.z), h - e - f + g), this._y = Math.asin(d(2 * (a.x * a.z + a.y * a.w))), this._z = Math.atan2(2 * (a.z * a.w - a.x * a.y), h + e - f - g)) : "YXZ" === b ? (this._x = Math.asin(d(2 * (a.x * a.w - a.y * a.z))), this._y = Math.atan2(2 * (a.x * a.z + a.y * a.w), h - e - f + g), this._z = Math.atan2(2 * (a.x * a.y + a.z * a.w), h - e + f - g)) : "ZXY" === b ? (this._x = Math.asin(d(2 * (a.x * a.w + a.y * a.z))), this._y = Math.atan2(2 * (a.y * a.w - a.z * a.x), h - e - f + g), this._z = Math.atan2(2 * (a.z * a.w - a.x * a.y), h - e + f - g)) : "ZYX" ===
					b ? (this._x = Math.atan2(2 * (a.x * a.w + a.z * a.y), h - e - f + g), this._y = Math.asin(d(2 * (a.y * a.w - a.x * a.z))), this._z = Math.atan2(2 * (a.x * a.y + a.z * a.w), h + e - f - g)) : "YZX" === b ? (this._x = Math.atan2(2 * (a.x * a.w - a.z * a.y), h - e + f - g), this._y = Math.atan2(2 * (a.y * a.w - a.x * a.z), h + e - f - g), this._z = Math.asin(d(2 * (a.x * a.y + a.z * a.w)))) : "XZY" === b ? (this._x = Math.atan2(2 * (a.x * a.w + a.y * a.z), h - e + f - g), this._y = Math.atan2(2 * (a.x * a.z + a.y * a.w), h + e - f - g), this._z = Math.asin(d(2 * (a.z * a.w - a.x * a.y)))) : console.warn("WARNING: Euler.setFromQuaternion() given unsupported order: " +
						b); this._order = b; !1 !== c && this._updateQuaternion(); return this
		}, reorder: function () { var a = new THREE.Quaternion; return function (b) { a.setFromEuler(this); this.setFromQuaternion(a, b) } }(), fromArray: function (a) { this._x = a[0]; this._y = a[1]; this._z = a[2]; void 0 !== a[3] && (this._order = a[3]); this._updateQuaternion(); return this }, toArray: function () { return [this._x, this._y, this._z, this._order] }, equals: function (a) { return a._x === this._x && a._y === this._y && a._z === this._z && a._order === this._order }, clone: function () {
			return new THREE.Euler(this._x,
				this._y, this._z, this._order)
		}
	}; THREE.Matrix3 = function (a, b, c, d, e, f, g, h, k) { this.elements = new Float32Array(9); this.set(void 0 !== a ? a : 1, b || 0, c || 0, d || 0, void 0 !== e ? e : 1, f || 0, g || 0, h || 0, void 0 !== k ? k : 1) };
	THREE.Matrix3.prototype = {
		constructor: THREE.Matrix3, set: function (a, b, c, d, e, f, g, h, k) { var l = this.elements; l[0] = a; l[3] = b; l[6] = c; l[1] = d; l[4] = e; l[7] = f; l[2] = g; l[5] = h; l[8] = k; return this }, identity: function () { this.set(1, 0, 0, 0, 1, 0, 0, 0, 1); return this }, copy: function (a) { a = a.elements; this.set(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]); return this }, multiplyVector3: function (a) { console.warn("DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."); return a.applyMatrix3(this) },
		multiplyVector3Array: function () { var a = new THREE.Vector3; return function (b) { for (var c = 0, d = b.length; c < d; c += 3)a.x = b[c], a.y = b[c + 1], a.z = b[c + 2], a.applyMatrix3(this), b[c] = a.x, b[c + 1] = a.y, b[c + 2] = a.z; return b } }(), multiplyScalar: function (a) { var b = this.elements; b[0] *= a; b[3] *= a; b[6] *= a; b[1] *= a; b[4] *= a; b[7] *= a; b[2] *= a; b[5] *= a; b[8] *= a; return this }, determinant: function () { var a = this.elements, b = a[0], c = a[1], d = a[2], e = a[3], f = a[4], g = a[5], h = a[6], k = a[7], a = a[8]; return b * f * a - b * g * k - c * e * a + c * g * h + d * e * k - d * f * h }, getInverse: function (a,
			b) {
			var c = a.elements, d = this.elements; d[0] = c[10] * c[5] - c[6] * c[9]; d[1] = -c[10] * c[1] + c[2] * c[9]; d[2] = c[6] * c[1] - c[2] * c[5]; d[3] = -c[10] * c[4] + c[6] * c[8]; d[4] = c[10] * c[0] - c[2] * c[8]; d[5] = -c[6] * c[0] + c[2] * c[4]; d[6] = c[9] * c[4] - c[5] * c[8]; d[7] = -c[9] * c[0] + c[1] * c[8]; d[8] = c[5] * c[0] - c[1] * c[4]; c = c[0] * d[0] + c[1] * d[3] + c[2] * d[6]; if (0 === c) { if (b) throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0"); console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0"); this.identity(); return this } this.multiplyScalar(1 /
				c); return this
		}, transpose: function () { var a, b = this.elements; a = b[1]; b[1] = b[3]; b[3] = a; a = b[2]; b[2] = b[6]; b[6] = a; a = b[5]; b[5] = b[7]; b[7] = a; return this }, getNormalMatrix: function (a) { this.getInverse(a).transpose(); return this }, transposeIntoArray: function (a) { var b = this.elements; a[0] = b[0]; a[1] = b[3]; a[2] = b[6]; a[3] = b[1]; a[4] = b[4]; a[5] = b[7]; a[6] = b[2]; a[7] = b[5]; a[8] = b[8]; return this }, fromArray: function (a) { this.elements.set(a); return this }, toArray: function () {
			var a = this.elements; return [a[0], a[1], a[2], a[3], a[4], a[5],
			a[6], a[7], a[8]]
		}, clone: function () { var a = this.elements; return new THREE.Matrix3(a[0], a[3], a[6], a[1], a[4], a[7], a[2], a[5], a[8]) }
	}; THREE.Matrix4 = function (a, b, c, d, e, f, g, h, k, l, n, m, r, q, t, u) { var p = this.elements = new Float32Array(16); p[0] = void 0 !== a ? a : 1; p[4] = b || 0; p[8] = c || 0; p[12] = d || 0; p[1] = e || 0; p[5] = void 0 !== f ? f : 1; p[9] = g || 0; p[13] = h || 0; p[2] = k || 0; p[6] = l || 0; p[10] = void 0 !== n ? n : 1; p[14] = m || 0; p[3] = r || 0; p[7] = q || 0; p[11] = t || 0; p[15] = void 0 !== u ? u : 1 };
	THREE.Matrix4.prototype = {
		constructor: THREE.Matrix4, set: function (a, b, c, d, e, f, g, h, k, l, n, m, r, q, t, u) { var p = this.elements; p[0] = a; p[4] = b; p[8] = c; p[12] = d; p[1] = e; p[5] = f; p[9] = g; p[13] = h; p[2] = k; p[6] = l; p[10] = n; p[14] = m; p[3] = r; p[7] = q; p[11] = t; p[15] = u; return this }, identity: function () { this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); return this }, copy: function (a) { this.elements.set(a.elements); return this }, extractPosition: function (a) {
			console.warn("DEPRECATED: Matrix4's .extractPosition() has been renamed to .copyPosition().");
			return this.copyPosition(a)
		}, copyPosition: function (a) { var b = this.elements; a = a.elements; b[12] = a[12]; b[13] = a[13]; b[14] = a[14]; return this }, extractRotation: function () { var a = new THREE.Vector3; return function (b) { var c = this.elements; b = b.elements; var d = 1 / a.set(b[0], b[1], b[2]).length(), e = 1 / a.set(b[4], b[5], b[6]).length(), f = 1 / a.set(b[8], b[9], b[10]).length(); c[0] = b[0] * d; c[1] = b[1] * d; c[2] = b[2] * d; c[4] = b[4] * e; c[5] = b[5] * e; c[6] = b[6] * e; c[8] = b[8] * f; c[9] = b[9] * f; c[10] = b[10] * f; return this } }(), makeRotationFromEuler: function (a) {
			!1 ===
				a instanceof THREE.Euler && console.error("ERROR: Matrix's .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code."); var b = this.elements, c = a.x, d = a.y, e = a.z, f = Math.cos(c), c = Math.sin(c), g = Math.cos(d), d = Math.sin(d), h = Math.cos(e), e = Math.sin(e); if ("XYZ" === a.order) { a = f * h; var k = f * e, l = c * h, n = c * e; b[0] = g * h; b[4] = -g * e; b[8] = d; b[1] = k + l * d; b[5] = a - n * d; b[9] = -c * g; b[2] = n - a * d; b[6] = l + k * d; b[10] = f * g } else "YXZ" === a.order ? (a = g * h, k = g * e, l = d * h, n = d * e, b[0] = a + n * c, b[4] = l * c - k, b[8] =
					f * d, b[1] = f * e, b[5] = f * h, b[9] = -c, b[2] = k * c - l, b[6] = n + a * c, b[10] = f * g) : "ZXY" === a.order ? (a = g * h, k = g * e, l = d * h, n = d * e, b[0] = a - n * c, b[4] = -f * e, b[8] = l + k * c, b[1] = k + l * c, b[5] = f * h, b[9] = n - a * c, b[2] = -f * d, b[6] = c, b[10] = f * g) : "ZYX" === a.order ? (a = f * h, k = f * e, l = c * h, n = c * e, b[0] = g * h, b[4] = l * d - k, b[8] = a * d + n, b[1] = g * e, b[5] = n * d + a, b[9] = k * d - l, b[2] = -d, b[6] = c * g, b[10] = f * g) : "YZX" === a.order ? (a = f * g, k = f * d, l = c * g, n = c * d, b[0] = g * h, b[4] = n - a * e, b[8] = l * e + k, b[1] = e, b[5] = f * h, b[9] = -c * h, b[2] = -d * h, b[6] = k * e + l, b[10] = a - n * e) : "XZY" === a.order && (a = f * g, k = f * d, l = c * g, n = c * d, b[0] =
						g * h, b[4] = -e, b[8] = d * h, b[1] = a * e + n, b[5] = f * h, b[9] = k * e - l, b[2] = l * e - k, b[6] = c * h, b[10] = n * e + a); b[3] = 0; b[7] = 0; b[11] = 0; b[12] = 0; b[13] = 0; b[14] = 0; b[15] = 1; return this
		}, setRotationFromQuaternion: function (a) { console.warn("DEPRECATED: Matrix4's .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code."); return this.makeRotationFromQuaternion(a) }, makeRotationFromQuaternion: function (a) {
			var b = this.elements, c = a.x, d = a.y, e = a.z, f = a.w, g = c + c, h = d + d, k = e + e; a = c * g; var l = c *
				h, c = c * k, n = d * h, d = d * k, e = e * k, g = f * g, h = f * h, f = f * k; b[0] = 1 - (n + e); b[4] = l - f; b[8] = c + h; b[1] = l + f; b[5] = 1 - (a + e); b[9] = d - g; b[2] = c - h; b[6] = d + g; b[10] = 1 - (a + n); b[3] = 0; b[7] = 0; b[11] = 0; b[12] = 0; b[13] = 0; b[14] = 0; b[15] = 1; return this
		}, lookAt: function () {
			var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3; return function (d, e, f) {
				var g = this.elements; c.subVectors(d, e).normalize(); 0 === c.length() && (c.z = 1); a.crossVectors(f, c).normalize(); 0 === a.length() && (c.x += 1E-4, a.crossVectors(f, c).normalize()); b.crossVectors(c, a); g[0] =
					a.x; g[4] = b.x; g[8] = c.x; g[1] = a.y; g[5] = b.y; g[9] = c.y; g[2] = a.z; g[6] = b.z; g[10] = c.z; return this
			}
		}(), multiply: function (a, b) { return void 0 !== b ? (console.warn("DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(a, b)) : this.multiplyMatrices(this, a) }, multiplyMatrices: function (a, b) {
			var c = a.elements, d = b.elements, e = this.elements, f = c[0], g = c[4], h = c[8], k = c[12], l = c[1], n = c[5], m = c[9], r = c[13], q = c[2], t = c[6], u = c[10], p = c[14], s = c[3], v = c[7], w = c[11],
				c = c[15], A = d[0], x = d[4], C = d[8], z = d[12], y = d[1], F = d[5], D = d[9], E = d[13], H = d[2], I = d[6], J = d[10], K = d[14], L = d[3], M = d[7], N = d[11], d = d[15]; e[0] = f * A + g * y + h * H + k * L; e[4] = f * x + g * F + h * I + k * M; e[8] = f * C + g * D + h * J + k * N; e[12] = f * z + g * E + h * K + k * d; e[1] = l * A + n * y + m * H + r * L; e[5] = l * x + n * F + m * I + r * M; e[9] = l * C + n * D + m * J + r * N; e[13] = l * z + n * E + m * K + r * d; e[2] = q * A + t * y + u * H + p * L; e[6] = q * x + t * F + u * I + p * M; e[10] = q * C + t * D + u * J + p * N; e[14] = q * z + t * E + u * K + p * d; e[3] = s * A + v * y + w * H + c * L; e[7] = s * x + v * F + w * I + c * M; e[11] = s * C + v * D + w * J + c * N; e[15] = s * z + v * E + w * K + c * d; return this
		}, multiplyToArray: function (a,
			b, c) { var d = this.elements; this.multiplyMatrices(a, b); c[0] = d[0]; c[1] = d[1]; c[2] = d[2]; c[3] = d[3]; c[4] = d[4]; c[5] = d[5]; c[6] = d[6]; c[7] = d[7]; c[8] = d[8]; c[9] = d[9]; c[10] = d[10]; c[11] = d[11]; c[12] = d[12]; c[13] = d[13]; c[14] = d[14]; c[15] = d[15]; return this }, multiplyScalar: function (a) { var b = this.elements; b[0] *= a; b[4] *= a; b[8] *= a; b[12] *= a; b[1] *= a; b[5] *= a; b[9] *= a; b[13] *= a; b[2] *= a; b[6] *= a; b[10] *= a; b[14] *= a; b[3] *= a; b[7] *= a; b[11] *= a; b[15] *= a; return this }, multiplyVector3: function (a) {
				console.warn("DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
				return a.applyProjection(this)
			}, multiplyVector4: function (a) { console.warn("DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."); return a.applyMatrix4(this) }, multiplyVector3Array: function () { var a = new THREE.Vector3; return function (b) { for (var c = 0, d = b.length; c < d; c += 3)a.x = b[c], a.y = b[c + 1], a.z = b[c + 2], a.applyProjection(this), b[c] = a.x, b[c + 1] = a.y, b[c + 2] = a.z; return b } }(), rotateAxis: function (a) {
				console.warn("DEPRECATED: Matrix4's .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
				a.transformDirection(this)
			}, crossVector: function (a) { console.warn("DEPRECATED: Matrix4's .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."); return a.applyMatrix4(this) }, determinant: function () {
				var a = this.elements, b = a[0], c = a[4], d = a[8], e = a[12], f = a[1], g = a[5], h = a[9], k = a[13], l = a[2], n = a[6], m = a[10], r = a[14]; return a[3] * (+e * h * n - d * k * n - e * g * m + c * k * m + d * g * r - c * h * r) + a[7] * (+b * h * r - b * k * m + e * f * m - d * f * r + d * k * l - e * h * l) + a[11] * (+b * k * n - b * g * r - e * f * n + c * f * r + e * g * l - c * k * l) + a[15] * (-d * g * l - b * h * n + b * g * m + d * f * n - c * f *
					m + c * h * l)
			}, transpose: function () { var a = this.elements, b; b = a[1]; a[1] = a[4]; a[4] = b; b = a[2]; a[2] = a[8]; a[8] = b; b = a[6]; a[6] = a[9]; a[9] = b; b = a[3]; a[3] = a[12]; a[12] = b; b = a[7]; a[7] = a[13]; a[13] = b; b = a[11]; a[11] = a[14]; a[14] = b; return this }, flattenToArray: function (a) { var b = this.elements; a[0] = b[0]; a[1] = b[1]; a[2] = b[2]; a[3] = b[3]; a[4] = b[4]; a[5] = b[5]; a[6] = b[6]; a[7] = b[7]; a[8] = b[8]; a[9] = b[9]; a[10] = b[10]; a[11] = b[11]; a[12] = b[12]; a[13] = b[13]; a[14] = b[14]; a[15] = b[15]; return a }, flattenToArrayOffset: function (a, b) {
				var c = this.elements;
				a[b] = c[0]; a[b + 1] = c[1]; a[b + 2] = c[2]; a[b + 3] = c[3]; a[b + 4] = c[4]; a[b + 5] = c[5]; a[b + 6] = c[6]; a[b + 7] = c[7]; a[b + 8] = c[8]; a[b + 9] = c[9]; a[b + 10] = c[10]; a[b + 11] = c[11]; a[b + 12] = c[12]; a[b + 13] = c[13]; a[b + 14] = c[14]; a[b + 15] = c[15]; return a
			}, getPosition: function () { var a = new THREE.Vector3; return function () { console.warn("DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."); var b = this.elements; return a.set(b[12], b[13], b[14]) } }(), setPosition: function (a) {
				var b = this.elements;
				b[12] = a.x; b[13] = a.y; b[14] = a.z; return this
			}, getInverse: function (a, b) {
				var c = this.elements, d = a.elements, e = d[0], f = d[4], g = d[8], h = d[12], k = d[1], l = d[5], n = d[9], m = d[13], r = d[2], q = d[6], t = d[10], u = d[14], p = d[3], s = d[7], v = d[11], d = d[15]; c[0] = n * u * s - m * t * s + m * q * v - l * u * v - n * q * d + l * t * d; c[4] = h * t * s - g * u * s - h * q * v + f * u * v + g * q * d - f * t * d; c[8] = g * m * s - h * n * s + h * l * v - f * m * v - g * l * d + f * n * d; c[12] = h * n * q - g * m * q - h * l * t + f * m * t + g * l * u - f * n * u; c[1] = m * t * p - n * u * p - m * r * v + k * u * v + n * r * d - k * t * d; c[5] = g * u * p - h * t * p + h * r * v - e * u * v - g * r * d + e * t * d; c[9] = h * n * p - g * m * p - h * k * v + e * m * v + g * k * d -
					e * n * d; c[13] = g * m * r - h * n * r + h * k * t - e * m * t - g * k * u + e * n * u; c[2] = l * u * p - m * q * p + m * r * s - k * u * s - l * r * d + k * q * d; c[6] = h * q * p - f * u * p - h * r * s + e * u * s + f * r * d - e * q * d; c[10] = f * m * p - h * l * p + h * k * s - e * m * s - f * k * d + e * l * d; c[14] = h * l * r - f * m * r - h * k * q + e * m * q + f * k * u - e * l * u; c[3] = n * q * p - l * t * p - n * r * s + k * t * s + l * r * v - k * q * v; c[7] = f * t * p - g * q * p + g * r * s - e * t * s - f * r * v + e * q * v; c[11] = g * l * p - f * n * p - g * k * s + e * n * s + f * k * v - e * l * v; c[15] = f * n * r - g * l * r + g * k * q - e * n * q - f * k * t + e * l * t; c = e * c[0] + k * c[4] + r * c[8] + p * c[12]; if (0 == c) {
						if (b) throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0"); console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");
						this.identity(); return this
					} this.multiplyScalar(1 / c); return this
			}, translate: function (a) { console.warn("DEPRECATED: Matrix4's .translate() has been removed.") }, rotateX: function (a) { console.warn("DEPRECATED: Matrix4's .rotateX() has been removed.") }, rotateY: function (a) { console.warn("DEPRECATED: Matrix4's .rotateY() has been removed.") }, rotateZ: function (a) { console.warn("DEPRECATED: Matrix4's .rotateZ() has been removed.") }, rotateByAxis: function (a, b) { console.warn("DEPRECATED: Matrix4's .rotateByAxis() has been removed.") },
		scale: function (a) { var b = this.elements, c = a.x, d = a.y; a = a.z; b[0] *= c; b[4] *= d; b[8] *= a; b[1] *= c; b[5] *= d; b[9] *= a; b[2] *= c; b[6] *= d; b[10] *= a; b[3] *= c; b[7] *= d; b[11] *= a; return this }, getMaxScaleOnAxis: function () { var a = this.elements; return Math.sqrt(Math.max(a[0] * a[0] + a[1] * a[1] + a[2] * a[2], Math.max(a[4] * a[4] + a[5] * a[5] + a[6] * a[6], a[8] * a[8] + a[9] * a[9] + a[10] * a[10]))) }, makeTranslation: function (a, b, c) { this.set(1, 0, 0, a, 0, 1, 0, b, 0, 0, 1, c, 0, 0, 0, 1); return this }, makeRotationX: function (a) {
			var b = Math.cos(a); a = Math.sin(a); this.set(1,
				0, 0, 0, 0, b, -a, 0, 0, a, b, 0, 0, 0, 0, 1); return this
		}, makeRotationY: function (a) { var b = Math.cos(a); a = Math.sin(a); this.set(b, 0, a, 0, 0, 1, 0, 0, -a, 0, b, 0, 0, 0, 0, 1); return this }, makeRotationZ: function (a) { var b = Math.cos(a); a = Math.sin(a); this.set(b, -a, 0, 0, a, b, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); return this }, makeRotationAxis: function (a, b) { var c = Math.cos(b), d = Math.sin(b), e = 1 - c, f = a.x, g = a.y, h = a.z, k = e * f, l = e * g; this.set(k * f + c, k * g - d * h, k * h + d * g, 0, k * g + d * h, l * g + c, l * h - d * f, 0, k * h - d * g, l * h + d * f, e * h * h + c, 0, 0, 0, 0, 1); return this }, makeScale: function (a, b, c) {
			this.set(a,
				0, 0, 0, 0, b, 0, 0, 0, 0, c, 0, 0, 0, 0, 1); return this
		}, compose: function (a, b, c) { this.makeRotationFromQuaternion(b); this.scale(c); this.setPosition(a); return this }, decompose: function () {
			var a = new THREE.Vector3, b = new THREE.Matrix4; return function (c, d, e) {
				var f = this.elements, g = a.set(f[0], f[1], f[2]).length(), h = a.set(f[4], f[5], f[6]).length(), k = a.set(f[8], f[9], f[10]).length(); 0 > this.determinant() && (g = -g); c.x = f[12]; c.y = f[13]; c.z = f[14]; b.elements.set(this.elements); c = 1 / g; var f = 1 / h, l = 1 / k; b.elements[0] *= c; b.elements[1] *=
					c; b.elements[2] *= c; b.elements[4] *= f; b.elements[5] *= f; b.elements[6] *= f; b.elements[8] *= l; b.elements[9] *= l; b.elements[10] *= l; d.setFromRotationMatrix(b); e.x = g; e.y = h; e.z = k; return this
			}
		}(), makeFrustum: function (a, b, c, d, e, f) { var g = this.elements; g[0] = 2 * e / (b - a); g[4] = 0; g[8] = (b + a) / (b - a); g[12] = 0; g[1] = 0; g[5] = 2 * e / (d - c); g[9] = (d + c) / (d - c); g[13] = 0; g[2] = 0; g[6] = 0; g[10] = -(f + e) / (f - e); g[14] = -2 * f * e / (f - e); g[3] = 0; g[7] = 0; g[11] = -1; g[15] = 0; return this }, makePerspective: function (a, b, c, d) {
			a = c * Math.tan(THREE.Math.degToRad(0.5 * a));
			var e = -a; return this.makeFrustum(e * b, a * b, e, a, c, d)
		}, makeOrthographic: function (a, b, c, d, e, f) { var g = this.elements, h = b - a, k = c - d, l = f - e; g[0] = 2 / h; g[4] = 0; g[8] = 0; g[12] = -((b + a) / h); g[1] = 0; g[5] = 2 / k; g[9] = 0; g[13] = -((c + d) / k); g[2] = 0; g[6] = 0; g[10] = -2 / l; g[14] = -((f + e) / l); g[3] = 0; g[7] = 0; g[11] = 0; g[15] = 1; return this }, fromArray: function (a) { this.elements.set(a); return this }, toArray: function () { var a = this.elements; return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]] }, clone: function () {
			var a =
				this.elements; return new THREE.Matrix4(a[0], a[4], a[8], a[12], a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[3], a[7], a[11], a[15])
		}
	}; THREE.Object3D = function () {
		this.id = THREE.Object3DIdCount++; this.uuid = THREE.Math.generateUUID(); this.name = ""; this.parent = void 0; this.children = []; this.up = new THREE.Vector3(0, 1, 0); this.position = new THREE.Vector3; this._rotation = new THREE.Euler; this._quaternion = new THREE.Quaternion; this.scale = new THREE.Vector3(1, 1, 1); this._rotation._quaternion = this.quaternion; this._quaternion._euler = this.rotation; this.renderDepth = null; this.rotationAutoUpdate = !0; this.matrix = new THREE.Matrix4; this.matrixWorld = new THREE.Matrix4;
		this.visible = this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0; this.receiveShadow = this.castShadow = !1; this.frustumCulled = !0; this.userData = {}
	};
	THREE.Object3D.prototype = {
		constructor: THREE.Object3D, get rotation() { return this._rotation }, set rotation(a) { this._rotation = a; this._rotation._quaternion = this._quaternion; this._quaternion._euler = this._rotation; this._rotation._updateQuaternion() }, get quaternion() { return this._quaternion }, set quaternion(a) { this._quaternion = a; this._quaternion._euler = this._rotation; this._rotation._quaternion = this._quaternion; this._quaternion._updateEuler() }, get eulerOrder() {
			console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.");
			return this.rotation.order
		}, set eulerOrder(a) { console.warn("DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order."); this.rotation.order = a }, get useQuaternion() { console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.") }, set useQuaternion(a) { console.warn("DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.") }, applyMatrix: function (a) {
			this.matrix.multiplyMatrices(a, this.matrix);
			this.matrix.decompose(this.position, this.quaternion, this.scale)
		}, setRotationFromAxisAngle: function (a, b) { this.quaternion.setFromAxisAngle(a, b) }, setRotationFromEuler: function (a) { this.quaternion.setFromEuler(a, !0) }, setRotationFromMatrix: function (a) { this.quaternion.setFromRotationMatrix(a) }, setRotationFromQuaternion: function (a) { this.quaternion.copy(a) }, rotateOnAxis: function () { var a = new THREE.Quaternion; return function (b, c) { a.setFromAxisAngle(b, c); this.quaternion.multiply(a); return this } }(), rotateX: function () {
			var a =
				new THREE.Vector3(1, 0, 0); return function (b) { return this.rotateOnAxis(a, b) }
		}(), rotateY: function () { var a = new THREE.Vector3(0, 1, 0); return function (b) { return this.rotateOnAxis(a, b) } }(), rotateZ: function () { var a = new THREE.Vector3(0, 0, 1); return function (b) { return this.rotateOnAxis(a, b) } }(), translateOnAxis: function () { var a = new THREE.Vector3; return function (b, c) { a.copy(b); a.applyQuaternion(this.quaternion); this.position.add(a.multiplyScalar(c)); return this } }(), translate: function (a, b) {
			console.warn("DEPRECATED: Object3D's .translate() has been removed. Use .translateOnAxis( axis, distance ) instead. Note args have been changed.");
			return this.translateOnAxis(b, a)
		}, translateX: function () { var a = new THREE.Vector3(1, 0, 0); return function (b) { return this.translateOnAxis(a, b) } }(), translateY: function () { var a = new THREE.Vector3(0, 1, 0); return function (b) { return this.translateOnAxis(a, b) } }(), translateZ: function () { var a = new THREE.Vector3(0, 0, 1); return function (b) { return this.translateOnAxis(a, b) } }(), localToWorld: function (a) { return a.applyMatrix4(this.matrixWorld) }, worldToLocal: function () { var a = new THREE.Matrix4; return function (b) { return b.applyMatrix4(a.getInverse(this.matrixWorld)) } }(),
		lookAt: function () { var a = new THREE.Matrix4; return function (b) { a.lookAt(b, this.position, this.up); this.quaternion.setFromRotationMatrix(a) } }(), add: function (a) { if (a === this) console.warn("THREE.Object3D.add: An object can't be added as a child of itself."); else if (a instanceof THREE.Object3D) { void 0 !== a.parent && a.parent.remove(a); a.parent = this; a.dispatchEvent({ type: "added" }); this.children.push(a); for (var b = this; void 0 !== b.parent;)b = b.parent; void 0 !== b && b instanceof THREE.Scene && b.__addObject(a) } }, remove: function (a) {
			var b =
				this.children.indexOf(a); if (-1 !== b) { a.parent = void 0; a.dispatchEvent({ type: "removed" }); this.children.splice(b, 1); for (b = this; void 0 !== b.parent;)b = b.parent; void 0 !== b && b instanceof THREE.Scene && b.__removeObject(a) }
		}, traverse: function (a) { a(this); for (var b = 0, c = this.children.length; b < c; b++)this.children[b].traverse(a) }, getObjectById: function (a, b) { for (var c = 0, d = this.children.length; c < d; c++) { var e = this.children[c]; if (e.id === a || !0 === b && (e = e.getObjectById(a, b), void 0 !== e)) return e } }, getObjectByName: function (a,
			b) { for (var c = 0, d = this.children.length; c < d; c++) { var e = this.children[c]; if (e.name === a || !0 === b && (e = e.getObjectByName(a, b), void 0 !== e)) return e } }, getChildByName: function (a, b) { console.warn("DEPRECATED: Object3D's .getChildByName() has been renamed to .getObjectByName()."); return this.getObjectByName(a, b) }, getDescendants: function (a) { void 0 === a && (a = []); Array.prototype.push.apply(a, this.children); for (var b = 0, c = this.children.length; b < c; b++)this.children[b].getDescendants(a); return a }, updateMatrix: function () {
				this.matrix.compose(this.position,
					this.quaternion, this.scale); this.matrixWorldNeedsUpdate = !0
			}, updateMatrixWorld: function (a) { !0 === this.matrixAutoUpdate && this.updateMatrix(); if (!0 === this.matrixWorldNeedsUpdate || !0 === a) void 0 === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, a = !0; for (var b = 0, c = this.children.length; b < c; b++)this.children[b].updateMatrixWorld(a) }, clone: function (a, b) {
				void 0 === a && (a = new THREE.Object3D); void 0 === b && (b = !0);
				a.name = this.name; a.up.copy(this.up); a.position.copy(this.position); a.quaternion.copy(this.quaternion); a.scale.copy(this.scale); a.renderDepth = this.renderDepth; a.rotationAutoUpdate = this.rotationAutoUpdate; a.matrix.copy(this.matrix); a.matrixWorld.copy(this.matrixWorld); a.matrixAutoUpdate = this.matrixAutoUpdate; a.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate; a.visible = this.visible; a.castShadow = this.castShadow; a.receiveShadow = this.receiveShadow; a.frustumCulled = this.frustumCulled; a.userData = JSON.parse(JSON.stringify(this.userData));
				if (!0 === b) for (var c = 0; c < this.children.length; c++)a.add(this.children[c].clone()); return a
			}
	}; THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype); THREE.Object3DIdCount = 0; THREE.Camera = function () { THREE.Object3D.call(this); this.matrixWorldInverse = new THREE.Matrix4; this.projectionMatrix = new THREE.Matrix4 }; THREE.Camera.prototype = Object.create(THREE.Object3D.prototype); THREE.Camera.prototype.lookAt = function () { var a = new THREE.Matrix4; return function (b) { a.lookAt(this.position, b, this.up); this.quaternion.setFromRotationMatrix(a) } }();
	THREE.Camera.prototype.clone = function (a) { void 0 === a && (a = new THREE.Camera); THREE.Object3D.prototype.clone.call(this, a); a.matrixWorldInverse.copy(this.matrixWorldInverse); a.projectionMatrix.copy(this.projectionMatrix); return a }; THREE.PerspectiveCamera = function (a, b, c, d) { THREE.Camera.call(this); this.fov = void 0 !== a ? a : 50; this.aspect = void 0 !== b ? b : 1; this.near = void 0 !== c ? c : 0.1; this.far = void 0 !== d ? d : 2E3; this.updateProjectionMatrix() }; THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype); THREE.PerspectiveCamera.prototype.setLens = function (a, b) { void 0 === b && (b = 24); this.fov = 2 * THREE.Math.radToDeg(Math.atan(b / (2 * a))); this.updateProjectionMatrix() };
	THREE.PerspectiveCamera.prototype.setViewOffset = function (a, b, c, d, e, f) { this.fullWidth = a; this.fullHeight = b; this.x = c; this.y = d; this.width = e; this.height = f; this.updateProjectionMatrix() };
	THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () { if (this.fullWidth) { var a = this.fullWidth / this.fullHeight, b = Math.tan(THREE.Math.degToRad(0.5 * this.fov)) * this.near, c = -b, d = a * c, a = Math.abs(a * b - d), c = Math.abs(b - c); this.projectionMatrix.makeFrustum(d + this.x * a / this.fullWidth, d + (this.x + this.width) * a / this.fullWidth, b - (this.y + this.height) * c / this.fullHeight, b - this.y * c / this.fullHeight, this.near, this.far) } else this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far) };
	THREE.PerspectiveCamera.prototype.clone = function () { var a = new THREE.PerspectiveCamera; THREE.Camera.prototype.clone.call(this, a); a.fov = this.fov; a.aspect = this.aspect; a.near = this.near; a.far = this.far; return a }; THREE.Ray = function (a, b) { this.origin = void 0 !== a ? a : new THREE.Vector3; this.direction = void 0 !== b ? b : new THREE.Vector3 };
	THREE.Ray.prototype = {
		constructor: THREE.Ray, set: function (a, b) { this.origin.copy(a); this.direction.copy(b); return this }, copy: function (a) { this.origin.copy(a.origin); this.direction.copy(a.direction); return this }, at: function (a, b) { return (b || new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin) }, recast: function () { var a = new THREE.Vector3; return function (b) { this.origin.copy(this.at(b, a)); return this } }(), closestPointToPoint: function (a, b) {
			var c = b || new THREE.Vector3; c.subVectors(a, this.origin);
			var d = c.dot(this.direction); return 0 > d ? c.copy(this.origin) : c.copy(this.direction).multiplyScalar(d).add(this.origin)
		}, distanceToPoint: function () { var a = new THREE.Vector3; return function (b) { var c = a.subVectors(b, this.origin).dot(this.direction); if (0 > c) return this.origin.distanceTo(b); a.copy(this.direction).multiplyScalar(c).add(this.origin); return a.distanceTo(b) } }(), distanceSqToSegment: function (a, b, c, d) {
			var e = a.clone().add(b).multiplyScalar(0.5), f = b.clone().sub(a).normalize(), g = 0.5 * a.distanceTo(b),
				h = this.origin.clone().sub(e); a = -this.direction.dot(f); b = h.dot(this.direction); var k = -h.dot(f), l = h.lengthSq(), n = Math.abs(1 - a * a), m, r; 0 <= n ? (h = a * k - b, m = a * b - k, r = g * n, 0 <= h ? m >= -r ? m <= r ? (g = 1 / n, h *= g, m *= g, a = h * (h + a * m + 2 * b) + m * (a * h + m + 2 * k) + l) : (m = g, h = Math.max(0, -(a * m + b)), a = -h * h + m * (m + 2 * k) + l) : (m = -g, h = Math.max(0, -(a * m + b)), a = -h * h + m * (m + 2 * k) + l) : m <= -r ? (h = Math.max(0, -(-a * g + b)), m = 0 < h ? -g : Math.min(Math.max(-g, -k), g), a = -h * h + m * (m + 2 * k) + l) : m <= r ? (h = 0, m = Math.min(Math.max(-g, -k), g), a = m * (m + 2 * k) + l) : (h = Math.max(0, -(a * g + b)), m = 0 < h ? g : Math.min(Math.max(-g,
					-k), g), a = -h * h + m * (m + 2 * k) + l)) : (m = 0 < a ? -g : g, h = Math.max(0, -(a * m + b)), a = -h * h + m * (m + 2 * k) + l); c && c.copy(this.direction.clone().multiplyScalar(h).add(this.origin)); d && d.copy(f.clone().multiplyScalar(m).add(e)); return a
		}, isIntersectionSphere: function (a) { return this.distanceToPoint(a.center) <= a.radius }, isIntersectionPlane: function (a) { var b = a.distanceToPoint(this.origin); return 0 === b || 0 > a.normal.dot(this.direction) * b ? !0 : !1 }, distanceToPlane: function (a) {
			var b = a.normal.dot(this.direction); if (0 == b) return 0 == a.distanceToPoint(this.origin) ?
				0 : null; a = -(this.origin.dot(a.normal) + a.constant) / b; return 0 <= a ? a : null
		}, intersectPlane: function (a, b) { var c = this.distanceToPlane(a); return null === c ? null : this.at(c, b) }, isIntersectionBox: function () { var a = new THREE.Vector3; return function (b) { return null !== this.intersectBox(b, a) } }(), intersectBox: function (a, b) {
			var c, d, e, f, g; d = 1 / this.direction.x; f = 1 / this.direction.y; g = 1 / this.direction.z; var h = this.origin; 0 <= d ? (c = (a.min.x - h.x) * d, d *= a.max.x - h.x) : (c = (a.max.x - h.x) * d, d *= a.min.x - h.x); 0 <= f ? (e = (a.min.y - h.y) * f, f *=
				a.max.y - h.y) : (e = (a.max.y - h.y) * f, f *= a.min.y - h.y); if (c > f || e > d) return null; if (e > c || c !== c) c = e; if (f < d || d !== d) d = f; 0 <= g ? (e = (a.min.z - h.z) * g, g *= a.max.z - h.z) : (e = (a.max.z - h.z) * g, g *= a.min.z - h.z); if (c > g || e > d) return null; if (e > c || c !== c) c = e; if (g < d || d !== d) d = g; return 0 > d ? null : this.at(0 <= c ? c : d, b)
		}, intersectTriangle: function () {
			var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Vector3, d = new THREE.Vector3; return function (e, f, g, h, k) {
				b.subVectors(f, e); c.subVectors(g, e); d.crossVectors(b, c); f = this.direction.dot(d); if (0 <
					f) { if (h) return null; h = 1 } else if (0 > f) h = -1, f = -f; else return null; a.subVectors(this.origin, e); e = h * this.direction.dot(c.crossVectors(a, c)); if (0 > e) return null; g = h * this.direction.dot(b.cross(a)); if (0 > g || e + g > f) return null; e = -h * a.dot(d); return 0 > e ? null : this.at(e / f, k)
			}
		}(), applyMatrix4: function (a) { this.direction.add(this.origin).applyMatrix4(a); this.origin.applyMatrix4(a); this.direction.sub(this.origin); this.direction.normalize(); return this }, equals: function (a) { return a.origin.equals(this.origin) && a.direction.equals(this.direction) },
		clone: function () { return (new THREE.Ray).copy(this) }
	}; THREE.Plane = function (a, b) { this.normal = void 0 !== a ? a : new THREE.Vector3(1, 0, 0); this.constant = void 0 !== b ? b : 0 };
	THREE.Plane.prototype = {
		constructor: THREE.Plane, set: function (a, b) { this.normal.copy(a); this.constant = b; return this }, setComponents: function (a, b, c, d) { this.normal.set(a, b, c); this.constant = d; return this }, setFromNormalAndCoplanarPoint: function (a, b) { this.normal.copy(a); this.constant = -b.dot(this.normal); return this }, setFromCoplanarPoints: function () {
			var a = new THREE.Vector3, b = new THREE.Vector3; return function (c, d, e) {
				d = a.subVectors(e, d).cross(b.subVectors(c, d)).normalize(); this.setFromNormalAndCoplanarPoint(d,
					c); return this
			}
		}(), copy: function (a) { this.normal.copy(a.normal); this.constant = a.constant; return this }, normalize: function () { var a = 1 / this.normal.length(); this.normal.multiplyScalar(a); this.constant *= a; return this }, negate: function () { this.constant *= -1; this.normal.negate(); return this }, distanceToPoint: function (a) { return this.normal.dot(a) + this.constant }, distanceToSphere: function (a) { return this.distanceToPoint(a.center) - a.radius }, projectPoint: function (a, b) { return this.orthoPoint(a, b).sub(a).negate() }, orthoPoint: function (a,
			b) { var c = this.distanceToPoint(a); return (b || new THREE.Vector3).copy(this.normal).multiplyScalar(c) }, isIntersectionLine: function (a) { var b = this.distanceToPoint(a.start); a = this.distanceToPoint(a.end); return 0 > b && 0 < a || 0 > a && 0 < b }, intersectLine: function () { var a = new THREE.Vector3; return function (b, c) { var d = c || new THREE.Vector3, e = b.delta(a), f = this.normal.dot(e); if (0 == f) { if (0 == this.distanceToPoint(b.start)) return d.copy(b.start) } else return f = -(b.start.dot(this.normal) + this.constant) / f, 0 > f || 1 < f ? void 0 : d.copy(e).multiplyScalar(f).add(b.start) } }(),
		coplanarPoint: function (a) { return (a || new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant) }, applyMatrix4: function () { var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Matrix3; return function (d, e) { var f = e || c.getNormalMatrix(d), f = a.copy(this.normal).applyMatrix3(f), g = this.coplanarPoint(b); g.applyMatrix4(d); this.setFromNormalAndCoplanarPoint(f, g); return this } }(), translate: function (a) { this.constant -= a.dot(this.normal); return this }, equals: function (a) {
			return a.normal.equals(this.normal) &&
				a.constant == this.constant
		}, clone: function () { return (new THREE.Plane).copy(this) }
	}; THREE.CSS3DObject = function (a) { THREE.Object3D.call(this); this.element = a; this.done = !1; this.element.style.position = "absolute"; this.addEventListener("removed", function (a) { if (null !== this.element.parentNode) { this.element.parentNode.removeChild(this.element); for (var c = 0, d = this.children.length; c < d; c++)this.children[c].dispatchEvent(a) } }) }; THREE.CSS3DObject.prototype = Object.create(THREE.Object3D.prototype); THREE.CSS3DSprite = function (a) { THREE.CSS3DObject.call(this, a) }; THREE.CSS3DSprite.prototype = Object.create(THREE.CSS3DObject.prototype);
	THREE.CSS3DRenderer = function () {
		var a, b, c, d, e = new THREE.Matrix4, f = document.createElement("div"); f.style.overflow = "hidden"; f.style.WebkitTransformStyle = "preserve-3d"; f.style.MozTransformStyle = "preserve-3d"; f.style.oTransformStyle = "preserve-3d"; f.style.transformStyle = "preserve-3d"; this.domElement = f; var g = document.createElement("div"); g.style.WebkitTransformStyle = "preserve-3d"; g.style.MozTransformStyle = "preserve-3d"; g.style.oTransformStyle = "preserve-3d"; g.style.transformStyle = "preserve-3d"; f.appendChild(g);
		this.setClearColor = function () { }; this.setSize = function (e, h) { a = e; b = h; c = a / 2; d = b / 2; f.style.width = e + "px"; f.style.height = h + "px"; g.style.width = e + "px"; g.style.height = h + "px" }; var h = function (a) { return 1E-6 > Math.abs(a) ? 0 : a }, k = function () {
			var a = new THREE.Vector3, b = new THREE.Vector3, c = new THREE.Euler, d = new THREE.Quaternion; c._quaternion = d; d._euler = c; return function (e) {
				e.decompose(a, d, b); return "translate3d(-50%,-50%,0) translate3d(" + h(a.x) + "px, " + h(a.y) + "px, " + h(a.z) + "px) rotateX(" + h(c.x) + "rad) rotateY(" + h(c.y) +
					"rad) rotateZ(" + h(c.z) + "rad) scale3d(" + h(b.x) + ", " + h(-b.y) + ", " + h(b.z) + ")"
			}
		}(), l = function (a, b) {
			if (a instanceof THREE.CSS3DObject) {
				var c; a instanceof THREE.CSS3DSprite ? (e.copy(b.matrixWorldInverse), e.transpose(), e.copyPosition(a.matrixWorld), e.scale(a.scale), e.elements[3] = 0, e.elements[7] = 0, e.elements[11] = 0, e.elements[15] = 1, c = k(e)) : c = k(a.matrixWorld); var d = a.element; d.style.WebkitTransformStyle = "preserve-3d"; d.style.MozTransformStyle = "preserve-3d"; d.style.oTransformStyle = "preserve-3d"; d.style.transformStyle =
					"preserve-3d"; d.style.WebkitTransform = c; d.style.MozTransform = c; d.style.oTransform = c; d.style.transform = c; d.parentNode !== g && g.appendChild(d)
			} c = 0; for (d = a.children.length; c < d; c++)l(a.children[c], b)
		}; this.render = function (a, e) {
			var k = 0.5 / Math.tan(THREE.Math.degToRad(0.5 * e.fov)) * b; f.style.WebkitPerspective = k + "px"; f.style.MozPerspective = k + "px"; f.style.oPerspective = k + "px"; f.style.perspective = k + "px"; a.updateMatrixWorld(); void 0 === e.parent && e.updateMatrixWorld(); e.matrixWorldInverse.getInverse(e.matrixWorld);
			var k = "translate3d(0,0," + k + "px)", q; q = e.matrixWorldInverse.elements; q = "matrix3d(" + h(q[0]) + "," + h(-q[1]) + "," + h(q[2]) + "," + h(q[3]) + "," + h(q[4]) + "," + h(-q[5]) + "," + h(q[6]) + "," + h(q[7]) + "," + h(q[8]) + "," + h(-q[9]) + "," + h(q[10]) + "," + h(q[11]) + "," + h(q[12]) + "," + h(-q[13]) + "," + h(q[14]) + "," + h(q[15]) + ")"; k = k + q + " translate3d(" + c + "px," + d + "px, 0)"; g.style.WebkitTransform = k; g.style.MozTransform = k; g.style.oTransform = k; g.style.transform = k; l(a, e)
		}
	}; var _ = { isNumeric: function (a) { return !isNaN(parseFloat(a)) && isFinite(a) }, cascade: function () { var a, b = Array.prototype.slice.call(arguments); for (a = 0; a < b.length; a++)if (void 0 !== b[a]) return b[a]; return !1 }, hexToRgb: function (a) { a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, c, d, e) { return c + c + d + d + e + e }); return (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) ? { r: parseInt(a[1], 16), g: parseInt(a[2], 16), b: parseInt(a[3], 16) } : null } }; ERNO.extend(Number.prototype, {
		absolute: function () { return Math.abs(this) }, add: function () { var a = this; Array.prototype.slice.call(arguments).forEach(function (b) { a += b }); return a }, arcCosine: function () { return Math.acos(this) }, arcSine: function () { return Math.asin(this) }, arcTangent: function () { return Math.atan(this) }, constrain: function (a, b) { var c, d, e = this; b = b || 0; c = Math.max(a, b); d = Math.min(a, b); e = Math.min(e, c); return e = Math.max(e, d) }, cosine: function () { return Math.cos(this) }, degreesToDirection: function () {
			var a =
				"N NNE NE NEE E SEE SE SSE S SSW SW SWW W NWW NW NNW N".split(" "); return a[this.scale(0, 360, 0, a.length - 1).round()]
		}, degreesToRadians: function () { return this * Math.PI / 180 }, divide: function () { var a = this; Array.prototype.slice.call(arguments).forEach(function (b) { a /= b }); return a }, isBetween: function (a, b) { var c = Math.min(a, b), d = Math.max(a, b); return c <= this && this <= d }, lerp: function (a, b) { return a + (b - a) * this }, log: function (a) { return Math.log(this) / (void 0 === a ? 1 : Math.log(a)) }, log10: function () {
			return Math.log(this) /
				Math.LN10
		}, maximum: function (a) { return Math.max(this, a) }, minimum: function (a) { return Math.min(this, a) }, modulo: function (a) { return (this % a + a) % a }, multiply: function () { var a = this; Array.prototype.slice.call(arguments).forEach(function (b) { a *= b }); return a }, normalize: function (a, b) { return a == b ? 1 : (this - a) / (b - a) }, raiseTo: function (a) { return Math.pow(this, a) }, radiansToDegrees: function () { return 180 * this / Math.PI }, rand: function (a) {
			var b; return void 0 !== a ? (b = Math.min(this, a), a = Math.max(this, a), b + Math.floor(Math.random() *
				(a - b))) : Math.floor(Math.random() * this)
		}, random: function (a) { var b; return void 0 !== a ? (b = Math.min(this, a), a = Math.max(this, a), b + Math.random() * (a - b)) : Math.random() * this }, remainder: function (a) { return this % a }, round: function (a) { var b; a = a || 0; b = this * Math.pow(10, a); b = Math.round(b); return b /= Math.pow(10, a) }, roundDown: function () { return Math.floor(this) }, roundUp: function () { return Math.ceil(this) }, scale: function (a, b, c, d) { a = this.normalize(a, b); return c == d ? d : c + a * (d - c) }, sine: function () { return Math.sin(this) }, subtract: function () {
			var a =
				this; Array.prototype.slice.call(arguments).forEach(function (b) { a -= b }); return a
		}, tangent: function () { return Math.tan(this) }, toArray: function () { return [this.valueOf()] }, toNumber: function () { return this.valueOf() }, toPaddedString: function (a) { return ("0000000000000" + String(this)).slice(-a) }, toSignedString: function () { var a = "" + this; 0 <= this && (a = "+" + a); return a }, toString: function () { return "" + this }
	}); ERNO.extend(String.prototype, {
		capitalize: function () { return this.charAt(0).toUpperCase() + this.slice(1) }, invert: function () { var a = "", b; for (b = 0; b < this.length; b++)a = this.charAt(b) === this.charAt(b).toUpperCase() ? a + this.charAt(b).toLowerCase() : a + this.charAt(b).toUpperCase(); return a }, justifyCenter: function (a) {
			var b = Math.round(this.length / 2), c = this.length - b, d = Math.round(a / 2), b = d - b; a = a - d - c; c = this; if (0 < b) for (; b--;)c = " " + c; else 0 > b && (c = c.substr(-1 * b)); if (0 < a) for (; a--;)c += " "; else 0 > a && (c = c.substr(0, c.length +
				a)); return c
		}, justifyLeft: function (a) { for (var b = this; b.length < a;)b += " "; return b }, justifyRight: function (a) { for (var b = this; b.length < a;)b = " " + b; return b }, multiply: function (a) { var b, c = ""; a = _.cascade(a, 2); for (b = 0; b < a; b++)c += this; return c }, reverse: function () { var a, b = ""; for (a = 0; a < this.length; a++)b = this[a] + b; return b }, size: function () { return this.length }, toEntities: function () { var a, b = ""; for (a = 0; a < this.length; a++)b += "&#" + this.charCodeAt(a) + ";"; return b }, toCamelCase: function () {
			var a = this.split(/\W+|_+/), b =
				a[0], c; for (c = 1; c < a.length; c++)b += a[c].capitalize(); return b
		}, directionToDegrees: function () { var a = "N NNE NE NEE E SEE SE SSE S SSW SW SWW W NWW NW NNW N".split(" "), b = a.indexOf(this.toUpperCase()); return 0 <= b ? b.scale(0, a.length - 1, 0, 360) : Number.NaN }, toArray: function () { return [this] }, toNumber: function () { return parseFloat(this) }, toString: function () { return this }, toUnderscoreCase: function () { var a = this.replace(/[A-Z]+/g, function (a) { return "_" + a }); "_" === a.charAt(0) && (a = a.substr(1)); return a.toLowerCase() },
		toUnicode: function () { var a, b, c = ""; for (a = 0; a < this.length; a++) { for (b = this.charCodeAt(a).toString(16).toUpperCase(); 4 > b.length;)b = "0" + b; c += "\\u" + b } return c }
	}); ERNO.extend(Array.prototype, {
		distanceTo: function (a) { var b, c = 0; 0 < arguments.length && (a = Array.prototype.slice.call(arguments)); if (this.length === a.length) { for (b = 0; b < this.length; b++)c += Math.pow(a[b] - this[b], 2); return Math.pow(c, 0.5) } return null }, first: function () { return this[0] }, last: function () { return this[this.length - 1] }, maximum: function () { return Math.max.apply(null, this) }, middle: function () { return this[Math.round((this.length - 1) / 2)] }, minimum: function () { return Math.min.apply(null, this) }, rand: function () {
			return this[Math.floor(Math.random() *
				this.length)]
		}, random: function () { return this[Math.floor(Math.random() * this.length)] }, shuffle: function () { var a = this.length, b, c, d; if (0 == a) return !1; for (; --a;)b = Math.floor(Math.random() * (a + 1)), c = this[a], d = this[b], this[a] = d, this[b] = c; return this }, toArray: function () { return this }, toHtml: function () { var a, b = "<ul>"; for (a = 0; a < this.length; a++)b = this[a] instanceof Array ? b + this[a].toHtml() : b + ("<li>" + this[a] + "</li>"); return b + "</ul>" }, toText: function (a) {
			var b, c, d; a = _.cascade(a, 0); c = "\n" + "\t".multiply(a); d = ""; for (b =
				0; b < this.length; b++)d = this[b] instanceof Array ? d + (c + this[b].toText(a + 1)) : d + (c + this[b]); return d
		}
	}); ERNO.Color = function (a, b, c, d, e) { this.name = a; this.initial = b; this.hex = c; this.styleF = d; this.styleB = e }; var W, O, B, R, G, Y, COLOURLESS; W = ERNO.WHITE = new ERNO.Color("white", "W", "#FFF", "font-weight: bold; color: #888", "background-color: #F3F3F3; color: rgba( 0, 0, 0, 0.5 )"); O = ERNO.ORANGE = new ERNO.Color("orange", "O", "#F60", "font-weight: bold; color: #F60", "background-color: #F60; color: rgba( 255, 255, 255, 0.9 )"); B = ERNO.BLUE = new ERNO.Color("blue", "B", "#00D", "font-weight: bold; color: #00D", "background-color: #00D; color: rgba( 255, 255, 255, 0.9 )");
	R = ERNO.RED = new ERNO.Color("red", "R", "#F00", "font-weight: bold; color: #F00", "background-color: #F00; color: rgba( 255, 255, 255, 0.9 )"); G = ERNO.GREEN = new ERNO.Color("green", "G", "#0A0", "font-weight: bold; color: #0A0", "background-color: #0A0; color: rgba( 255, 255, 255, 0.9 )"); Y = ERNO.YELLOW = new ERNO.Color("yellow", "Y", "#FE0", "font-weight: bold; color: #ED0", "background-color: #FE0; color: rgba( 0, 0, 0, 0.5 )"); ERNO.COLORLESS = new ERNO.Color("NA", "X", "#DDD", "color: #EEE", "color: #DDD"); ERNO.Direction = function (a, b, c) { this.id = a; this.name = b.toLowerCase(); this.normal = c; this.initial = b.substr(0, 1).toUpperCase(); this.neighbors = []; this.opposite = null }; ERNO.Direction.prototype.setRelationships = function (a, b, c, d, e) { this.neighbors = [a, b, c, d]; this.opposite = e }; ERNO.Direction.getNameById = function (a) { return "front up right down left back".split(" ")[a] }; ERNO.Direction.getIdByName = function (a) { return { front: 0, up: 1, right: 2, down: 3, left: 4, back: 5 }[a] };
	ERNO.Direction.getDirectionById = function (a) { return [ERNO.Direction.FRONT, ERNO.Direction.UP, ERNO.Direction.RIGHT, ERNO.Direction.DOWN, ERNO.Direction.LEFT, ERNO.Direction.BACK][a] }; ERNO.Direction.getDirectionByInitial = function (a) { return { F: ERNO.Direction.FRONT, U: ERNO.Direction.UP, R: ERNO.Direction.RIGHT, D: ERNO.Direction.DOWN, L: ERNO.Direction.LEFT, B: ERNO.Direction.BACK }[a.toUpperCase()] };
	ERNO.Direction.getDirectionByName = function (a) { return { front: ERNO.Direction.FRONT, up: ERNO.Direction.UP, right: ERNO.Direction.RIGHT, down: ERNO.Direction.DOWN, left: ERNO.Direction.LEFT, back: ERNO.Direction.BACK }[a.toLowerCase()] };
	ERNO.Direction.getDirectionByNormal = function () { var a = new THREE.Vector3; return function (b) { a.x = Math.round(b.x); a.y = Math.round(b.y); a.z = Math.round(b.z); return a.equals(ERNO.Direction.FRONT.normal) ? ERNO.Direction.FRONT : a.equals(ERNO.Direction.BACK.normal) ? ERNO.Direction.BACK : a.equals(ERNO.Direction.UP.normal) ? ERNO.Direction.UP : a.equals(ERNO.Direction.DOWN.normal) ? ERNO.Direction.DOWN : a.equals(ERNO.Direction.LEFT.normal) ? ERNO.Direction.LEFT : a.equals(ERNO.Direction.RIGHT.normal) ? ERNO.Direction.RIGHT : null } }();
	ERNO.Direction.prototype.getRotation = function (a, b, c) { void 0 === b && (b = this.neighbors[0]); if (b === this || b === this.opposite) return null; c = void 0 === c ? 1 : c.modulo(4); for (var d = 0; 5 > d && this.neighbors[d] !== b; d++); return this.neighbors[d.add(c * a).modulo(4)] }; ERNO.Direction.prototype.getClockwise = function (a, b) { return this.getRotation(1, a, b) }; ERNO.Direction.prototype.getAnticlockwise = function (a, b) { return this.getRotation(-1, a, b) };
	ERNO.Direction.prototype.getDirection = function (a, b) { return this.getRotation(1, b, a.id - 1) }; ERNO.Direction.prototype.getUp = function (a) { return this.getDirection(ERNO.Direction.UP, a) }; ERNO.Direction.prototype.getRight = function (a) { return this.getDirection(ERNO.Direction.RIGHT, a) }; ERNO.Direction.prototype.getDown = function (a) { return this.getDirection(ERNO.Direction.DOWN, a) }; ERNO.Direction.prototype.getLeft = function (a) { return this.getDirection(ERNO.Direction.LEFT, a) }; ERNO.Direction.prototype.getOpposite = function () { return this.opposite };
	ERNO.Direction.FRONT = new ERNO.Direction(0, "front", new THREE.Vector3(0, 0, 1)); ERNO.Direction.UP = new ERNO.Direction(1, "up", new THREE.Vector3(0, 1, 0)); ERNO.Direction.RIGHT = new ERNO.Direction(2, "right", new THREE.Vector3(1, 0, 0)); ERNO.Direction.DOWN = new ERNO.Direction(3, "down", new THREE.Vector3(0, -1, 0)); ERNO.Direction.LEFT = new ERNO.Direction(4, "left", new THREE.Vector3(-1, 0, 0)); ERNO.Direction.BACK = new ERNO.Direction(5, "back", new THREE.Vector3(0, 0, -1));
	ERNO.Direction.FRONT.setRelationships(ERNO.Direction.UP, ERNO.Direction.RIGHT, ERNO.Direction.DOWN, ERNO.Direction.LEFT, ERNO.Direction.BACK); ERNO.Direction.UP.setRelationships(ERNO.Direction.BACK, ERNO.Direction.RIGHT, ERNO.Direction.FRONT, ERNO.Direction.LEFT, ERNO.Direction.DOWN); ERNO.Direction.RIGHT.setRelationships(ERNO.Direction.UP, ERNO.Direction.BACK, ERNO.Direction.DOWN, ERNO.Direction.FRONT, ERNO.Direction.LEFT);
	ERNO.Direction.DOWN.setRelationships(ERNO.Direction.FRONT, ERNO.Direction.RIGHT, ERNO.Direction.BACK, ERNO.Direction.LEFT, ERNO.Direction.UP); ERNO.Direction.LEFT.setRelationships(ERNO.Direction.UP, ERNO.Direction.FRONT, ERNO.Direction.DOWN, ERNO.Direction.BACK, ERNO.Direction.RIGHT); ERNO.Direction.BACK.setRelationships(ERNO.Direction.UP, ERNO.Direction.LEFT, ERNO.Direction.DOWN, ERNO.Direction.RIGHT, ERNO.Direction.FRONT); ERNO.Queue = function (a) { void 0 !== a && a instanceof Function && (this.validate = a); this.history = []; this.useHistory = !0; this.future = []; this.isReady = !0; this.isLooping = !1 }; ERNO.Queue.prototype.add = function () { var a = Array.prototype.slice.call(arguments); void 0 !== this.validate && this.validate instanceof Function && (a = this.validate(a)); a instanceof Array && a.forEach(function (a) { this.future.push(a) }.bind(this)); return this.future };
	ERNO.Queue.prototype.remove = function () { var a = Array.prototype.slice.call(arguments); a instanceof Array && a.forEach(function (a) { this.future = this.future.filter(function (c) { return c != a }) }.bind(this)); return this.future }; ERNO.Queue.prototype.purge = function () { var a = Array.prototype.slice.call(arguments); a instanceof Array && a.forEach(function (a) { this.history = this.history.filter(function (c) { return c != a }) }.bind(this)); return this.history };
	ERNO.Queue.prototype.empty = function (a) { this.future = []; a && (this.history = []) }; ERNO.Queue.prototype.do = function () { if (this.future.length) { var a = this.future.shift(); this.useHistory && this.history.push(a); return a } this.isLooping && (this.future = this.history.slice(), this.history = []) }; ERNO.Queue.prototype.undo = function () { if (this.history.length) { var a = this.history.pop(); this.future.unshift(a); return a } }; ERNO.Queue.prototype.redo = function () { return this.do() }; ERNO.Twist = function (a, b) { a && this.set(a, b) };
	ERNO.Twist.prototype.set = function (a, b) {
		var c = { X: "Cube on X", L: "Left face", M: "Middle slice", R: "Right face", Y: "Cube on Y", U: "Up face", E: "Equator slice", D: "Down face", Z: "Cube on Z", F: "Front face", S: "Standing slice", B: "Back face" }[a.toUpperCase()]; if (void 0 !== c) {
			void 0 != b && 0 > b && (a = a.invert(), b = b.absolute()); var d = 0, e = "unwise"; a === a.toUpperCase() ? (d = 1, e = "clockwise") : a === a.toLowerCase() && (d = -1, e = "anticlockwise"); this.command = a; this.group = c; this.degrees = b; this.vector = d; this.wise = e; this.isShuffle = !1; this.getInverse =
				function () { return new ERNO.Twist(a.invert(), b) }
		} else return !1
	}; ERNO.Twist.prototype.equals = function (a) { return this.command === a.command && this.degrees === a.degrees }; ERNO.Twist.prototype.copy = function (a) { this.command = a.command; this.group = a.group; this.degrees = a.degrees; this.vector = a.vector; this.wise = a.wise; this.isShuffle = a.isShuffle; return this };
	ERNO.Twist.validate = function () {
		var a = Array.prototype.slice.call(arguments), b, c, d, e, f, g; for (c = 0; c < a.length; c++)if (b = a[c], d = c + 1 < a.length ? a[c + 1] : void 0, !(b instanceof ERNO.Twist)) if ("string" === typeof b) if (1 === b.length) a[c] = "number" === typeof d ? new ERNO.Twist(b, d) : new ERNO.Twist(b); else {
			if (1 < b.length) {
				d = /(-?\d+|[XLMRYUEDZFSB])/gi; b = b.match(d); for (f = 0; f < b.length; f++)e = b[f], _.isNumeric(e) ? b[f] = +e : (d = b.slice(0, f), g = b.slice(f + 1), e = e.split(""), b = d.concat(e, g)); d = a.slice(0, c); g = a.slice(c + 1); a = d.concat(b, g);
				c--
			}
		} else b instanceof ERNO.Direction ? a[c] = b.initial : b instanceof Array ? (d = a.slice(0, c), g = a.slice(c + 1), a = d.concat(b, g)) : a.splice(c, 1), c--; return a
	}; ERNO.Cubelet = function (a, b, c) {
		THREE.Object3D.call(this); this.cube = a; this.id = b || 0; this.setAddress(this.id); this.size = a.cubeletSize || 140; a = this.addressX * (this.size + 0.1); b = this.addressY * (this.size + 0.1); var d = this.addressZ * (this.size + 0.1); this.position.set(a, b, d); this.matrixSlice = (new THREE.Matrix4).makeTranslation(a, b, d); this.updateMatrix(); this.cube.object3D.add(this); a = 0; void 0 === c && (c = [W, O, , , G]); this.faces = []; for (b = 0; 6 > b; b++)d = c[b] || ERNO.COLORLESS, this.faces[b] = {}, this.faces[b].id = b, this.faces[b].color =
			d, this.faces[b].normal = ERNO.Direction.getNameById(b), this.faces[b].isIntrovert = d === ERNO.COLORLESS, d !== ERNO.COLORLESS && a++; this.type = ["core", "center", "edge", "corner"][a]; this.front = this.faces[0]; this.up = this.faces[1]; this.right = this.faces[2]; this.down = this.faces[3]; this.left = this.faces[4]; this.back = this.faces[5]; this.colors = (this.faces[0].color ? this.faces[0].color.initial : "-") + (this.faces[1].color ? this.faces[1].color.initial : "-") + (this.faces[2].color ? this.faces[2].color.initial : "-") + (this.faces[3].color ?
				this.faces[3].color.initial : "-") + (this.faces[4].color ? this.faces[4].color.initial : "-") + (this.faces[5].color ? this.faces[5].color.initial : "-"); this.isStickerCubelet = this.front.color && "white" === this.front.color.name && "center" === this.type; this.isTweening = !0; this.isTweening = this.isEngagedZ = this.isEngagedY = this.isEngagedX = !1; this.opacity = 1; this.radius = 0
	}; ERNO.Cubelet.prototype = Object.create(THREE.Object3D.prototype);
	ERNO.extend(ERNO.Cubelet.prototype, {
		setAddress: function (a) { this.address = a || 0; this.addressX = a.modulo(3).subtract(1); this.addressY = -1 * a.modulo(9).divide(3).roundDown().subtract(1); this.addressZ = -1 * a.divide(9).roundDown().subtract(1) }, hasColor: function (a) { var b, c, d = _.hexToRgb(a.hex); for (a = 0; 6 > a; a++)if (c = _.hexToRgb(this.faces[a].color.hex), c.r === d.r && c.g === d.g && c.b === d.b) { b = a; break } return void 0 !== b ? "front up right down left back".split(" ")[b] : !1 }, hasColors: function () {
			var a = this, b = !0; Array.prototype.slice.call(arguments).forEach(function (c) {
				b =
					b && !!a.hasColor(c)
			}); return b
		}, getRadius: function () { return this.radius }, setRadius: function (a, b) {
			if (!1 === this.isTweening && (a = a || 0, void 0 === this.radius && (this.radius = 0), this.radius !== a)) {
				this.isTweening = !0; var c = (this.radius - a).absolute(), d = { radius: this.radius }; (new TWEEN.Tween(d)).to({ radius: a }, c).easing(TWEEN.Easing.Quartic.Out).onUpdate(function () {
					this.position.set(this.addressX.multiply(this.size + d.radius) + 0.2, this.addressY.multiply(this.size + d.radius) + 0.2, this.addressZ.multiply(this.size + d.radius) +
						0.2); this.updateMatrix(); this.matrixSlice.copy(this.matrix); this.radius = d.radius
				}.bind(this)).onComplete(function () { this.isTweening = !1; this.position.set(this.addressX.multiply(this.size + d.radius) + 0.2, this.addressY.multiply(this.size + d.radius) + 0.2, this.addressZ.multiply(this.size + d.radius) + 0.2); this.updateMatrix(); this.matrixSlice.copy(this.matrix); this.radius = d.radius; b instanceof Function && b() }.bind(this)).start(this.cube.time)
			}
		}
	}); ERNO.Group = function () { this.cubelets = []; this.add(Array.prototype.slice.call(arguments)) }; ERNO.extend(ERNO.Group.prototype, THREE.EventDispatcher.prototype);
	ERNO.extend(ERNO.Group.prototype, {
		add: function () { var a = this; Array.prototype.slice.call(arguments).forEach(function (b) { b instanceof ERNO.Group && (b = b.cubelets); b instanceof Array ? a.add.apply(a, b) : a.cubelets.push(b) }); return this }, remove: function (a) { a instanceof ERNO.Group && (a = a.cubelets); if (a instanceof Array) { var b = this; a.forEach(function (a) { b.remove(a) }) } for (var c = this.cubelets.length; 0 < c--;)this.cubelets[c] === a && this.cubelets.splice(c, 1); return this }, isFlagged: function (a) {
			var b = 0; this.cubelets.forEach(function (c) {
				b +=
					c[a] ? 1 : 0
			}); return b
		}, isTweening: function () { return this.isFlagged("isTweening") }, isEngagedX: function () { return this.isFlagged("isEngagedX") }, isEngagedY: function () { return this.isFlagged("isEngagedY") }, isEngagedZ: function () { return this.isFlagged("isEngagedZ") }, isEngaged: function () { return this.isEngagedX() + this.isEngagedY() + this.isEngagedZ() }, hasProperty: function (a, b) { var c = new ERNO.Group; this.cubelets.forEach(function (d) { d[a] === b && c.add(d) }); return c }, hasId: function (a) { return this.hasProperty("id", a) },
		hasAddress: function (a) { return this.hasProperty("address", a) }, hasType: function (a) { return this.hasProperty("type", a) }, hasColor: function (a) { var b = new ERNO.Group; this.cubelets.forEach(function (c) { c.hasColor(a) && b.add(c) }); return b }, hasColors: function () { var a = new ERNO.Group, b = Array.prototype.slice.call(arguments); this.cubelets.forEach(function (c) { c.hasColors.apply(c, b) && a.add(c) }); return a }, isSolved: function (a) {
			if (a) {
				var b = {}, c = 0; a instanceof ERNO.Direction && (a = a.name); this.cubelets.forEach(function (d) {
					d =
						d[a].color.name; void 0 === b[d] ? (b[d] = 1, c++) : b[d]++
				}); return 1 === c ? !0 : !1
			} console.warn("A face [String or ERNO.Controls] argument must be specified when using ERNO.Group.isSolved()."); return !1
		}, show: function () { this.cubelets.forEach(function (a) { a.show() }); return this }, hide: function () { this.cubelets.forEach(function (a) { a.hide() }); return this }, showPlastics: function () { this.cubelets.forEach(function (a) { a.showPlastics() }); return this }, hidePlastics: function () {
			this.cubelets.forEach(function (a) { a.hidePlastics() });
			return this
		}, showExtroverts: function () { this.cubelets.forEach(function (a) { a.showExtroverts() }); return this }, hideExtroverts: function () { this.cubelets.forEach(function (a) { a.hideExtroverts() }); return this }, showIntroverts: function (a, b) { this.cubelets.forEach(function (c) { c.showIntroverts(a, b) }); return this }, hideIntroverts: function (a, b) { this.cubelets.forEach(function (c) { c.hideIntroverts(a, b) }); return this }, showStickers: function () { this.cubelets.forEach(function (a) { a.showStickers() }); return this }, hideStickers: function () {
			this.cubelets.forEach(function (a) { a.hideStickers() });
			return this
		}, showWireframes: function () { this.cubelets.forEach(function (a) { a.showWireframes() }); return this }, hideWireframes: function () { this.cubelets.forEach(function (a) { a.hideWireframes() }); return this }, showIds: function () { this.cubelets.forEach(function (a) { a.showIds() }); return this }, hideIds: function () { this.cubelets.forEach(function (a) { a.hideIds() }); return this }, showTexts: function () { this.cubelets.forEach(function (a) { a.showTexts() }); return this }, hideTexts: function () {
			this.cubelets.forEach(function (a) { a.hideTexts() });
			return this
		}, getOpacity: function () { var a = 0; this.cubelets.forEach(function (b) { a += b.getOpacity() }); return a / this.cubelets.length }, setOpacity: function (a, b) { this.cubelets.forEach(function (c) { c.setOpacity(a, b) }); return this }, getRadius: function () { var a = 0; this.cubelets.forEach(function (b) { a += b.getRadius() }); return a / this.cubelets.length }, setRadius: function (a, b) { this.cubelets.forEach(function (c) { c.setRadius(a, b) }); return this }
	}); ERNO.Slice = function (a, b) {
		this.axis = new THREE.Vector3; this.invertedAxis = new THREE.Vector3; this.matrix = new THREE.Matrix4; this.axis.rotation = 0; this.indices = a; this.neighbour = null; this.ableToHideInternalFaces = !0; this.cube = b; this.getCubelet = function (c) { return b.cubelets[a[c]] }; this.rotateGroupMappingOnAxis = function () {
			var c = new THREE.Vector3, d = new THREE.Vector3(1, 1, 1), e = new THREE.Vector3, f = new THREE.Vector3, g = new THREE.Matrix4, h; return function (k) {
				k = Math.round(k / (0.25 * Math.PI)) * Math.PI * 0.25; c.copy(d); c.sub(this.axis);
				var l = b.cubelets.slice(); g.makeRotationAxis(this.axis, -1 * k); for (var n = a.length, m; 0 < n--;)m = b.cubelets[a[n]], e.set(m.addressX, m.addressY, m.addressZ), f.copy(e), e.multiply(c).applyMatrix4(g), e.x = Math.round(e.x), e.y = Math.round(e.y), e.z = Math.round(e.z), e.add(f.multiply(this.axis)), e.add(d), e.y = 2 - e.y, e.z = 2 - e.z, b.cubelets[m.address] = l[9 * e.z + 3 * e.y + e.x]; for (n = 0; n < b.cubelets.length; n++)b.cubelets[n].setAddress(n); g.makeRotationAxis(this.axis, k); this.cubelets.forEach(function (a) {
					h = []; a.faces.forEach(function (a,
						b) { e.copy(ERNO.Direction.getDirectionByName(a.normal).normal); e.applyMatrix4(g); h[ERNO.Direction.getDirectionByNormal(e).id] = a; a.normal = ERNO.Direction.getDirectionByNormal(e).name }); a.faces = h.slice(); a.front = a.faces[0]; a.up = a.faces[1]; a.right = a.faces[2]; a.down = a.faces[3]; a.left = a.faces[4]; a.back = a.faces[5]
				})
			}
		}(); this.map()
	}; ERNO.Slice.prototype = Object.create(ERNO.Group.prototype);
	ERNO.extend(ERNO.Slice.prototype, {
		get origin() { return this.cube.cubelets[this.indices[4]] }, get north() { return this.cube.cubelets[this.indices[1]] }, get northEast() { return this.cube.cubelets[this.indices[2]] }, get east() { return this.cube.cubelets[this.indices[5]] }, get southEast() { return this.cube.cubelets[this.indices[8]] }, get south() { return this.cube.cubelets[this.indices[7]] }, get southWest() { return this.cube.cubelets[this.indices[6]] }, get west() { return this.cube.cubelets[this.indices[3]] }, get northWest() { return this.cube.cubelets[this.indices[0]] },
		get cubelets() { for (var a = [], b = this.indices.length; 0 < b--;)a.push(this.getCubelet(b)); return a }, map: function (a, b) {
			for (var c = 0; 6 > c; c++)if (this.origin.faces[c].color && this.origin.faces[c].color !== ERNO.COLORLESS) { this.color = this.origin.faces[c].color; this.face = ERNO.Direction.getNameById(c); break } if (void 0 === this.axis || 0 === this.axis.lengthSq()) {
				var c = this.northEast.position.clone(), d = this.southWest.position.clone(), e = this.northWest.position.clone(); this.axis = (new THREE.Vector3).crossVectors(d.sub(c), e.sub(c)).normalize();
				this.axis.rotation = 0
			} this.up = new ERNO.Group(this.northWest, this.north, this.northEast); this.equator = new ERNO.Group(this.west, this.origin, this.east); this.down = new ERNO.Group(this.southWest, this.south, this.southEast); this.left = new ERNO.Group(this.northWest, this.west, this.southWest); this.middle = new ERNO.Group(this.north, this.origin, this.south); this.right = new ERNO.Group(this.northEast, this.east, this.southEast); (c = this.hasType("center")) && 1 === c.cubelets.length ? (this.center = this.hasType("center"), this.corners =
				new ERNO.Group(this.hasType("corner")), this.cross = new ERNO.Group(this.center, this.hasType("edge")), this.ex = new ERNO.Group(this.center, this.hasType("corner"))) : this.centers = new ERNO.Group(this.hasType("center")); this.edges = new ERNO.Group(this.hasType("edge")); this.ring = new ERNO.Group(this.northWest, this.north, this.northEast, this.west, this.east, this.southWest, this.south, this.southEast); this.dexter = new ERNO.Group(this.northWest, this.origin, this.southEast); this.sinister = new ERNO.Group(this.northEast,
					this.origin, this.southWest); return this
		}, set rotation(a) {
			if (this.ableToHideInternalFaces && 0 !== this.cube.isFlagged("showingIntroverts") && this.cube.hideInvisibleFaces) {
				var b = 0 !== a % (0.5 * Math.PI); this.invertedAxis.copy(this.axis).negate(); b ? this.neighbour ? (this.showIntroverts(this.axis, !0), this.neighbour.showIntroverts(this.invertedAxis, !0)) : (this.cube.showIntroverts(this.axis, !0), this.cube.showIntroverts(this.invertedAxis, !0)) : this.neighbour ? (this.hideIntroverts(null, !0), this.neighbour.hideIntroverts(null,
					!0)) : this.cube.hideIntroverts(null, !0)
			} this.matrix.makeRotationAxis(this.axis, a); this.axis.rotation = a; a = this.indices.length; for (var c = new THREE.Matrix4; a--;)b = this.getCubelet(a), b.matrix.multiplyMatrices(this.matrix, b.matrixSlice), b.position.setFromMatrixPosition(b.matrix), b.scale.setFromMatrixScale(b.matrix), c.extractRotation(b.matrix), b.quaternion.setFromRotationMatrix(c)
		}, get rotation() { return this.axis.rotation }, getLocation: function (a) {
			return a === this.origin ? "origin" : a === this.north ? "north" : a ===
				this.northEast ? "northEast" : a === this.east ? "east" : a === this.southEast ? "southEast" : a === this.south ? "south" : a === this.southWest ? "southWest" : a === this.west ? "west" : a === this.northWest ? "northWest" : !1
		}, isSolved: function (a) {
			if (a) { var b = {}, c, d = this.indices.length, e = 0; a instanceof ERNO.Direction && (a = a.name); for (; 0 < d--;)c = this.getCubelet(d), c = c[a].color.name, void 0 === b[c] ? (b[c] = 1, e++) : b[c]++; return 1 === e ? !0 : !1 } console.warn("A face [String or ERNO.Controls] argument must be specified when using ERNO.Group.isSolved().");
			return !1
		}
	}); ERNO.Fold = function (a, b) { this.map = [a.northWest[a.face].text, a.north[a.face].text, a.northEast[a.face].text, b.northWest[b.face].text, b.north[b.face].text, b.northEast[b.face].text, a.west[a.face].text, a.origin[a.face].text, a.east[a.face].text, b.west[b.face].text, b.origin[b.face].text, b.east[b.face].text, a.southWest[a.face].text, a.south[a.face].text, a.southEast[a.face].text, b.southWest[b.face].text, b.south[b.face].text, b.southEast[b.face].text] };
	ERNO.Fold.prototype.getText = function () { var a = ""; this.map.forEach(function (b) { a += b.innerHTML }); return a }; ERNO.Fold.prototype.setText = function (a) { var b; a = a.justifyLeft(18); for (b = 0; 18 > b; b++)this.map[b].innerHTML = a.substr(b, 1) }; ERNO.Projector = function () {
		return function (a, b) {
			function c(a, b) { q.getInverse(b.projectionMatrix); f.multiplyMatrices(b.matrixWorld, q); return a.applyProjection(f) } function d(d, f, l) {
				var m = b, q = m !== document ? m.getBoundingClientRect() : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight }; m !== document && (m = m.ownerDocument.documentElement, q.left += window.pageXOffset - m.clientLeft, q.top += window.pageYOffset - m.clientTop); e = q; h.x = (f - e.left) / e.width * 2 - 1; h.y = (l - e.top) / e.height * -2 + 1; h.z = -1; k.set(h.x, h.y, 1);
				c(h, d); c(k, d); k.sub(h).normalize(); n.set(h, k); g.getInverse(a.matrixWorld); n.applyMatrix4(g); return n
			} var e, f = new THREE.Matrix4, g = new THREE.Matrix4, h = new THREE.Vector3, k = new THREE.Vector3(1, 1, 1), l = new THREE.Vector3, n = new THREE.Ray, m = new THREE.Box3, r = new THREE.Sphere, q = new THREE.Matrix4, t = h.distanceTo(k); m.min.set(0.5 * -a.size, 0.5 * -a.size, 0.5 * -a.size); m.max.set(0.5 * a.size, 0.5 * a.size, 0.5 * a.size); r.radius = t * a.size * 0.5; return {
				getIntersection: function (b, c, e, f, g) {
					f = f || new THREE.Vector3; if (null === c || null ===
						e) return null; d(b, c, e); return n.isIntersectionSphere(r) && null !== n.intersectBox(m, f) ? (g && (b = l || new THREE.Vector3, b.copy(f).set(Math.round(b.x), Math.round(b.y), Math.round(b.z)).multiplyScalar(2 / a.size).set(b.x | 0, b.y | 0, b.z | 0), g.setFromNormalAndCoplanarPoint(l, f)), f) : null
				}, getIntersectionOnPlane: function (a, b, c, e, f) { if (null === b || null === c) return null; d(a, b, c); return n.intersectPlane(e, f) }, getCubeletAtIntersection: function () {
					var b = new THREE.Vector3; return function (c) {
						b.copy(c).add(m.max).multiplyScalar(3 /
							a.size).set(Math.min(b.x | 0, 2), Math.min(3 - b.y | 0, 2), Math.min(3 - b.z | 0, 2)); return a.cubelets[9 * b.z + 3 * b.y + b.x]
					}
				}()
			}
		}
	}(); ERNO.Interaction = function () {
		return function (a, b, c, d, e) {
			function f(d) {
				y.enabled && 2 !== d.button && (q = (d.touches && d.touches[0] || d).clientX, t = (d.touches && d.touches[0] || d).clientY, k.getIntersection(b, q, t, l, s) && (null !== d.touches && d.preventDefault(), 0 === a.isTweening() && (z = "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(), y.active = !0, n = k.getCubeletAtIntersection(l), m = [a.slices[n.addressX + 1], a.slices[n.addressY + 4], a.slices[n.addressZ +
					7]], c.addEventListener("mousemove", g), c.addEventListener("touchmove", g), c.addEventListener("mouseup", h), c.addEventListener("touchcancel", h), c.addEventListener("touchend", h), c.removeEventListener("mousedown", f), c.removeEventListener("touchstart", f))))
			} function g(a) { y.active && (A.x = (a.touches && a.touches[0] || a).clientX, A.y = (a.touches && a.touches[0] || a).clientY); y.enabled && (a.preventDefault(), a.stopImmediatePropagation()) } function h(b) {
				var d = (b.touches && b.touches[0] || b).clientX, e = (b.touches && b.touches[0] ||
					b).clientY; y.active = !1; y.enabled && (d !== t || e !== t) && p && (null !== b.touches && b.preventDefault(), b = r.name[0].toUpperCase(), d = Math.round(C / Math.PI * 2) * Math.PI * 0.5, 0.3 < v.length() / (("undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now()) - z) && (d = Math.floor(C / Math.PI * 2) * Math.PI * 0.5, d += 0 < w.dot(v.normalize()) ? 0.5 * Math.PI : 0), a.twist(new ERNO.Twist(b, d.radiansToDegrees()))); z = 0; A.x = void 0; A.y = void 0; p = !1; r = null; c.removeEventListener("mousemove",
						g); c.removeEventListener("touchmove", g); c.removeEventListener("mouseup", h); c.removeEventListener("touchend", h); c.removeEventListener("touchcancel", h); c.addEventListener("mousedown", f); c.addEventListener("touchstart", f)
			} var k = new ERNO.Projector(a, c), l = new THREE.Vector3, n, m, r, q, t, u = new THREE.Vector3, p = !1, s = new THREE.Plane, v = new THREE.Vector3, w = new THREE.Vector3, A = new THREE.Vector2; new THREE.Vector3; var x = new THREE.Vector3, C = 0, z = 0; A.x = void 0; A.y = void 0; var y = {
				active: !1, enabled: !0, multiDrag: e || !1, multiDragSnapArea: 100,
				dragSpeed: d || 1.3
			}; THREE.EventDispatcher.prototype.apply(y); y.getIntersectionAt = function () { var a = new THREE.Vector3, c = new THREE.Plane; return function (d, e) { return null === k.getIntersection(b, d, e, a, c) ? null : { cubelet: k.getCubeletAtIntersection(a), face: 1 === c.normal.x ? "RIGHT" : -1 === c.normal.x ? "LEFT" : 1 === c.normal.y ? "UP" : -1 === c.normal.y ? "DOWN" : 1 === c.normal.z ? "FRONT" : "BACK" } } }(); y.update = function () {
				var c = A.x, d = A.y; y.enabled && y.active && void 0 !== c && void 0 != d && (q !== c || t !== d) && (k.getIntersectionOnPlane(b, c, d, s, u),
					v.subVectors(u, l), !p && 5 < v.length() && (r && (r.rotation = 0), p = !0, x.crossVectors(s.normal, v), c = Math.max(Math.abs(x.x), Math.abs(x.y), Math.abs(x.z)), x.x = x.x / c | 0, x.y = 1 === x.x ? 0 : x.y / c | 0, x.z = 1 === x.x || 1 === x.y ? 0 : x.z / c | 0, r = m[Math.abs(3 * x.z + 2 * x.y + x.x) - 1], w.crossVectors(r.axis, s.normal).normalize()), p && (v.subVectors(u, l), C = w.dot(v) / a.size * y.dragSpeed), r && (r.rotation = C))
			}; c.addEventListener("mousedown", f); c.addEventListener("touchstart", f); var F = function (a, b) {
				var c = this.getIntersectionAt(a, b); return c ? (this.dispatchEvent(new CustomEvent("click",
					{ detail: c })), !0) : !1
			}.bind(y), D, E; c.addEventListener("mousedown", function (a) { D = a.clientX; E = a.clientY }); c.addEventListener("mouseup", function (a) { var b = a.clientX; a = a.clientY; !p && Math.abs(Math.sqrt((b - D) * (b - D) + (a - E) * (a - E))) < 10 * (window.devicePixelratio || 1) && F(D, E) }); c.addEventListener("touchstart", function (a) { D = a.touches[0].clientX; E = a.touches[0].clientY }); c.addEventListener("touchend", function (a) {
				var b = a.changedTouches[0].clientX, c = a.changedTouches[0].clientY; !p && Math.abs(Math.sqrt((b - D) * (b - D) + (c - E) *
					(c - E))) < 10 * (window.devicePixelratio || 1) && F(D, E) && a.preventDefault()
			}); return y
		}
	}(); ERNO.Controls = function () {
		var a, b; a = 0; b = 1; return function (c, d, e) {
			function f(b) { p.enabled && 1 === b.which && null === u.getIntersection(d, b.pageX, b.pageY) && (m = a, r.multiplyScalar(0), s(b.pageX, b.pageY, q), t.copy(q), p.domElement.removeEventListener("mousedown", f), document.addEventListener("mousemove", g), document.addEventListener("mouseup", h)) } function g(b) { p.enabled && (b.preventDefault(), m = a, s(b.pageX, b.pageY, q), r.subVectors(q, t), t.copy(q)) } function h(a) {
				document.removeEventListener("mousemove", g); document.removeEventListener("mouseup",
					h); p.domElement.addEventListener("mousedown", f); p.enabled && (m = b)
			} function k(b) { p.enabled && null === u.getIntersection(d, b.touches[0].pageX, b.touches[0].pageY) && (m = a, r.multiplyScalar(0), s(b.touches[0].pageX, b.touches[0].pageY, q), t.copy(q), p.domElement.removeEventListener("touchstart", k), document.addEventListener("touchend", n), document.addEventListener("touchmove", l)) } function l(b) { p.enabled && (m = a, s(b.changedTouches[0].pageX, b.changedTouches[0].pageY, q), r.subVectors(q, t), t.copy(q)) } function n(a) {
				document.removeEventListener("touchend",
					n); document.removeEventListener("touchmove", l); p.domElement.addEventListener("touchstart", k); p.enabled && (m = b)
			} var m = -1, r = new THREE.Vector2, q = new THREE.Vector2; new THREE.Vector2; var t = new THREE.Vector2, u = new ERNO.Projector(c, e), p = { enabled: !0, domElement: e, rotationSpeed: 4, damping: 0.25 }, s = function (a, b, c) {
				var d; d = p.domElement; d = d !== document ? d.getBoundingClientRect() : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight }; var e = window.devicePixelRatio || 1; return c.set(0.001 * (a * e - d.width - d.left),
					0.001 * (d.height + d.top - b * e))
			}; p.update = function () { var e = new THREE.Vector3, f = 0, g = new THREE.Matrix4; return function () { !1 !== p.enabled && -1 !== m && (e.set(r.y, -1 * r.x, 0).normalize(), g.getInverse(c.matrixWorld), g.multiply(d.matrixWorld), e.transformDirection(g), r.multiplyScalar(1 - Math.max(0, Math.min(1, p.damping))), f = r.length(), c.object3D.rotateOnAxis(e, -f * p.rotationSpeed), m === a ? m = -1 : m === b && 1E-4 <= f ? q.add(r) : m = -1) } }(); p.domElement.addEventListener("mousedown", f); p.domElement.addEventListener("touchstart", k); return p
		}
	}(); var SceneType = THREE.Scene; THREE.Scene = SceneType || function () { }; ERNO.renderers = ERNO.renderers || {};
	ERNO.renderers.CSS3D = function (a, b) {
		function c(a) { a.style.display = "block" } function d(a) { a.style.display = "none" } function e() { return Array.prototype.slice.call(g.domElement.querySelectorAll(".faceLabel")) } function f() { if (b.domElement.parentNode) { var a = b.domElement.parentNode.clientWidth, c = b.domElement.parentNode.clientHeight; !b.domElement.parentNode || b.domElement.clientWidth === a && b.domElement.clientHeight === c || b.setSize(a, c); g.render(h, b.camera) } requestAnimationFrame(f) } var g = new THREE.CSS3DRenderer,
			h = new THREE.Object3D; g.scene = h; h.add(b.autoRotateObj3D); h.add(b.camera); var k; new THREE.Vector3; b.faces.forEach(function (a, c) { k = b[a.face].label = new THREE.CSS3DObject(document.createElement("div")); k.element.classList.add("faceLabel"); k.position.copy(a.axis).multiplyScalar(b.size); k.position.negate(); k.element.innerHTML = a.face.toUpperCase(); b.object3D.add(k) }); b.right.label.rotation.y = 0.5 * Math.PI; b.left.label.rotation.y = -0.5 * Math.PI; b.back.label.rotation.y = Math.PI; b.up.label.rotation.x = -0.5 * Math.PI;
		b.down.label.rotation.x = 0.5 * Math.PI; b.showFaceLabels = function () { e().forEach(c); this.showingFaceLabels = !0; return this }; b.hideFaceLabels = function () { e().forEach(d); this.showingFaceLabels = !1; return this }; ERNO.extend(ERNO.Cubelet.prototype, ERNO.renderers.CSS3DCubelet.methods); a.forEach(ERNO.renderers.CSS3DCubelet); requestAnimationFrame(f); SceneType && (THREE.Scene = SceneType); return g
	};
	ERNO.renderers.CSS3DCubelet = function () {
		return function (a) {
			var b = document.createElement("div"); b.classList.add("cubelet"); b.classList.add("cubeletId-" + a.id); a.css3DObject = new THREE.CSS3DObject(b); a.css3DObject.name = "css3DObject-" + a.id; a.add(a.css3DObject); var b = a.size / 2, c = ["rotateX(   0deg ) translateZ( " + b + "px ) rotateZ(   0deg )", "rotateX(  90deg ) translateZ( " + b + "px ) rotateZ(   0deg )", "rotateY(  90deg ) translateZ( " + b + "px ) rotateZ(   0deg )", "rotateX( -90deg ) translateZ( " + b + "px ) rotateZ(  90deg )",
			"rotateY( -90deg ) translateZ( " + b + "px ) rotateZ( -90deg )", "rotateY( 180deg ) translateZ( " + b + "px ) rotateZ( -90deg )"], d = "axisZ axisY axisX axisY axisX axisZ".split(" "); a.faces.forEach(function (b) {
				b.element = document.createElement("div"); b.element.classList.add("face"); b.element.classList.add(d[b.id]); b.element.classList.add("face" + ERNO.Direction.getNameById(b.id).capitalize()); a.css3DObject.element.appendChild(b.element); var f = document.createElement("div"); f.classList.add("wireframe"); b.element.appendChild(f);
				f = document.createElement("div"); f.classList.add("id"); b.element.appendChild(f); var g = document.createElement("span"); g.classList.add("underline"); g.innerText = a.id; f.appendChild(g); f = b.element.style; f.OTransform = f.MozTransform = f.WebkitTransform = f.transform = c[b.id]; b.isIntrovert ? (b.element.classList.add("faceIntroverted"), b.element.appendChild(document.createElement("div"))) : (b.element.classList.add("faceExtroverted"), f = document.createElement("div"), f.classList.add("sticker"), f.classList.add(b.color.name),
					b.element.appendChild(f), a.isStickerCubelet && f.classList.add("stickerLogo"), f = document.createElement("div"), f.classList.add("text"), f.innerText = b.id, b.text = f, b.element.appendChild(f))
			}); a.show(); a.showIntroverts(); a.showPlastics(); a.showStickers(); a.hideIds(); a.hideTexts(); a.hideWireframes()
		}
	}();
	ERNO.renderers.CSS3DCubelet.methods = function () {
		function a(a) { a.style.display = "block" } function b(a) { a.style.display = "none" } return {
			getFaceElements: function (a) { return Array.prototype.slice.call(this.css3DObject.element.querySelectorAll(".face" + (a || ""))) }, show: function () { a(this.css3DObject.element); this.showing = !0 }, hide: function () { b(this.css3DObject.element); this.showing = !1 }, showExtroverts: function () { this.getFaceElements(".faceExtroverted").forEach(a); this.showingExtroverts = !0 }, hideExtroverts: function () {
				this.getFaceElements(".faceExtroverted").forEach(b);
				this.showingExtroverts = !1
			}, showIntroverts: function () { var b = new THREE.Vector3, d = new THREE.Matrix4, e; return function (f, g) { e = ""; f && (d.getInverse(this.matrix), b.copy(f).transformDirection(d), e = 1 === Math.abs(Math.round(b.x)) ? ".axisX" : 1 === Math.round(Math.abs(b.y)) ? ".axisY" : ".axisZ"); this.getFaceElements(".faceIntroverted" + (void 0 !== f ? e : "")).forEach(a); g || (this.showingIntroverts = !0) } }(), hideIntroverts: function () {
				var a = new THREE.Vector3, d = new THREE.Matrix4, e; return function (f, g) {
					e = ""; f && (d.getInverse(this.matrix),
						a.copy(f).transformDirection(d), e = 1 === Math.abs(Math.round(a.x)) ? ".axisX" : 1 === Math.round(Math.abs(a.y)) ? ".axisY" : ".axisZ"); this.getFaceElements(".faceIntroverted" + (void 0 !== f ? e : "")).forEach(b); g || (this.showingIntroverts = !1)
				}
			}(), showPlastics: function () { this.getFaceElements().forEach(function (a) { a.classList.remove("faceTransparent") }); this.showingPlastics = !0 }, hidePlastics: function () { this.getFaceElements().forEach(function (a) { a.classList.add("faceTransparent") }); this.showingPlastics = !1 }, hideStickers: function () {
				this.getFaceElements(" .sticker").forEach(b);
				this.showingStickers = !1
			}, showStickers: function () { this.getFaceElements(" .sticker").forEach(a); this.showingStickers = !0 }, showWireframes: function () { this.getFaceElements(" .wireframe").forEach(a); this.showingWireframes = !0 }, hideWireframes: function () { this.getFaceElements(" .wireframe").forEach(b); this.showingWireframes = !1 }, showIds: function () { this.getFaceElements(" .id").forEach(a); this.showingIds = !0 }, hideIds: function () { this.getFaceElements(" .id").forEach(b); this.showingIds = !1 }, showTexts: function () {
				this.getFaceElements(" .text").forEach(a);
				this.showingTexts = !0
			}, hideTexts: function () { this.getFaceElements(" .text").forEach(b); this.showingTexts = !1 }, getOpacity: function () { return this.opacity }, setOpacity: function (a, b) {
				this.opacityTween && this.opacityTween.stop(); void 0 === a && (a = 1); if (a !== this.opacity) {
					var e = this, f = (a - this.opacity).absolute().scale(0, 1, 0, 200); this.opacityTween = (new TWEEN.Tween({ opacity: this.opacity })).to({ opacity: a }, f).easing(TWEEN.Easing.Quadratic.InOut).onUpdate(function () {
						e.css3DObject.element.style.opacity = this.opacity; e.opacity =
							this.opacity
					}).onComplete(function () { b instanceof Function && b() }).start()
				}
			}, getStickersOpacity: function (a) { return parseFloat(this.getFaceElements(" .sticker")[0].style.opacity) }, setStickersOpacity: function (a) { void 0 === a && (a = 0.2); var b = a; this.getFaceElements(" .sticker").forEach(function (a) { a.style.opacity = b.toString() }) }
		}
	}(); ERNO.Cube = function (a) {
		ERNO.Group.call(this); a = a || {}; this.paused = void 0 === a.paused ? !1 : a.paused; this.autoRotate = void 0 === a.autoRotate ? !1 : a.autoRotate; this.keyboardControlsEnabled = void 0 === a.keyboardControlsEnabled ? !0 : a.keyboardControlsEnabled; this.mouseControlsEnabled = void 0 === a.mouseControlsEnabled ? !0 : a.mouseControlsEnabled; var b = a.renderer || ERNO.renderers.CSS3D; a.textureSize = void 0 === a.textureSize ? 120 : a.textureSize; this.isShuffling = !1; this.isReady = !0; this.undoing = this.isSolving = !1; this.render = !0;
		this.finalShuffle = null; this.hideInvisibleFaces = void 0 === a.hideInvisibleFaces ? !1 : a.hideInvisibleFaces; this.moveCounter = this.time = 0; this.taskQueue = new ERNO.Queue; this.twistQueue = new ERNO.Queue(ERNO.Twist.validate); this.historyQueue = new ERNO.Queue(ERNO.Twist.validate); this.twistDuration = void 0 !== a.twistDuration ? a.twistDuration : 500; this.shuffleMethod = this.PRESERVE_LOGO; this.size = 3 * a.textureSize; this.cubeletSize = this.size / 3; this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight,
			1, 6E3); this.camera.position.z = 4 * this.size; this.object3D = new THREE.Object3D; this.autoRotateObj3D = new THREE.Object3D; this.rotation = this.object3D.rotation; this.quaternion = this.object3D.quaternion; this.position = this.object3D.position; this.matrix = this.object3D.matrix; this.matrixWorld = this.object3D.matrixWorld; this.rotation.set(25 * Math.PI / 180, -30 * Math.PI / 180, 0); this.rotationDelta = new THREE.Euler(0.1 * Math.PI / 180, 0.15 * Math.PI / 180, 0); this.cubelets = [];[[W, O, , , G], [W, O, , , ,], [W, O, B, , ,], [W, , , , G], [W, , , , ,], [W, , B,
				, ,], [W, , , R, G], [W, , , R, ,], [W, , B, R, ,], [, O, , , G], [, O, , , ,], [, O, B, , ,], [, , , , G], [, , , , ,], [, , B, , ,], [, , , R, G], [, , , R, ,], [, , B, R, ,], [, O, , , G, Y], [, O, , , , Y], [, O, B, , , Y], [, , , , G, Y], [, , , , , Y], [, , B, , , Y], [, , , R, G, Y], [, , , R, , Y], [, , B, R, , Y]].forEach(function (a, b) { this.cubelets.push(new ERNO.Cubelet(this, b, a)) }.bind(this)); this.core = new ERNO.Group; this.centers = new ERNO.Group; this.edges = new ERNO.Group; this.corners = new ERNO.Group; this.crosses = new ERNO.Group; this.cubelets.forEach(function (a, b) {
					"core" === a.type && this.core.add(a); "center" ===
						a.type && this.centers.add(a); "edge" === a.type && this.edges.add(a); "corner" === a.type && this.corners.add(a); "center" !== a.type && "edge" !== a.type || this.crosses.add(a)
				}.bind(this)); this.left = new ERNO.Slice([24, 21, 18, 15, 12, 9, 6, 3, 0], this); this.left.name = "left"; this.middle = new ERNO.Slice([25, 22, 19, 16, 13, 10, 7, 4, 1], this); this.middle.name = "middle"; this.right = new ERNO.Slice([2, 11, 20, 5, 14, 23, 8, 17, 26], this); this.right.name = "right"; this.right.neighbour = this.middle; this.left.neighbour = this.middle; this.up = new ERNO.Slice([18,
					19, 20, 9, 10, 11, 0, 1, 2], this); this.up.name = "up"; this.equator = new ERNO.Slice([21, 22, 23, 12, 13, 14, 3, 4, 5], this); this.equator.name = "equator"; this.down = new ERNO.Slice([8, 17, 26, 7, 16, 25, 6, 15, 24], this); this.down.name = "down"; this.down.neighbour = this.equator; this.up.neighbour = this.equator; this.front = new ERNO.Slice([0, 1, 2, 3, 4, 5, 6, 7, 8], this); this.front.name = "front"; this.standing = new ERNO.Slice([9, 10, 11, 12, 13, 14, 15, 16, 17], this); this.standing.name = "standing"; this.back = new ERNO.Slice([26, 23, 20, 25, 22, 19, 24, 21, 18], this);
		this.back.name = "back"; this.back.neighbour = this.standing; this.front.neighbour = this.standing; this.faces = [this.front, this.up, this.right, this.down, this.left, this.back]; this.slices = [this.left, this.middle, this.right, this.down, this.equator, this.up, this.back, this.standing, this.front]; var c = function (a) { this.dispatchEvent(new CustomEvent("onTwistComplete", { detail: { slice: a.target } })) }.bind(this); this.slices.forEach(function (a) { a.addEventListener("change", c) }); var d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
			17, 18, 19, 20, 21, 22, 23, 24, 25, 26]; this.slicesDictionary = { f: this.front, s: this.standing, b: this.back, u: this.up, e: this.equator, d: this.down, r: this.right, m: this.middle, l: this.left, x: new ERNO.Slice(d, this), y: new ERNO.Slice(d, this), z: new ERNO.Slice(d, this) }; this.slicesDictionary.x.ableToHideInternalFaces = !1; this.slicesDictionary.y.ableToHideInternalFaces = !1; this.slicesDictionary.z.ableToHideInternalFaces = !1; this.slicesDictionary.x.axis.set(-1, 0, 0); this.slicesDictionary.y.axis.set(0, -1, 0); this.slicesDictionary.z.axis.set(0,
				0, -1); this.cubelets.forEach(function (a, b) { a.setAddress(b) }); this.renderer = b(this.cubelets, this); this.domElement = this.renderer.domElement; this.domElement.classList.add("cube"); this.domElement.style.fontSize = this.cubeletSize + "px"; this.autoRotateObj3D.add(this.object3D); this.hideInvisibleFaces && this.hideIntroverts(null, !0); this.mouseInteraction = new ERNO.Interaction(this, this.camera, this.domElement); this.mouseInteraction.addEventListener("click", function (a) {
					this.dispatchEvent(new CustomEvent("click",
						{ detail: a.detail }))
				}.bind(this)); this.controls = new (a.controls || ERNO.Controls)(this, this.camera, this.domElement); this.folds = [new ERNO.Fold(this.front, this.right), new ERNO.Fold(this.left, this.up), new ERNO.Fold(this.down, this.back)]; this.setSize(400, 200); this.loop = this.loop.bind(this); requestAnimationFrame(this.loop); document.addEventListener("keypress", function (a) {
					"input" !== a.target.tagName.toLowerCase() && "textarea" !== a.target.tagName.toLowerCase() && !this.mouseInteraction.active && this.keyboardControlsEnabled &&
						(a = String.fromCharCode(a.which), 0 <= "XxRrMmLlYyUuEeDdZzFfSsBb".indexOf(a) && this.twist(a))
				}.bind(this))
	}; ERNO.Cube.prototype = Object.create(ERNO.Group.prototype); ERNO.Cube.prototype.constructor = ERNO.Cube;
	ERNO.extend(ERNO.Cube.prototype, {
		shuffle: function (a, b) { a = a || 30; b = b || ""; var c = this.shuffleMethod.slice(), d, e = new ERNO.Twist, f, g = b.length, h = 0; this.twistQueue.empty(!0); for (this.historyQueue.empty(!0); 0 < a--;) { if (b) d.set(b[h]), h = (h + 1) % g; else for (f = c.split(""), d = (new ERNO.Twist).copy(e); d.equals(e);)d.set(f.splice(Math.floor(Math.random() * f.length), 1)[0]); d.isShuffle = !0; this.twist(d); e = d.getInverse() } this.finalShuffle = d }, solve: function () { this.isSolving = !0 }, isSolved: function () {
			return this.front.isSolved(ERNO.Direction.FRONT) &&
				this.up.isSolved(ERNO.Direction.UP) && this.right.isSolved(ERNO.Direction.RIGHT) && this.down.isSolved(ERNO.Direction.DOWN) && this.left.isSolved(ERNO.Direction.LEFT) && this.back.isSolved(ERNO.Direction.BACK)
		}, undo: function () { 0 < this.twistQueue.history.length && (this.historyQueue.add(this.twistQueue.undo().getInverse()), this.undoing = !0) }, redo: function () { 0 < this.twistQueue.future.length && (this.undoing = !0, this.historyQueue.empty(), this.historyQueue.add(this.twistQueue.redo())) }, twist: function (a) {
			this.undoing &&
				this.twistQueue.empty(); this.historyQueue.empty(); this.undoing = !1; this.twistQueue.add(a)
		}, immediateTwist: function (a) {
			0.8 <= this.verbosity && console.log("Executing a twist command to rotate the " + a.group + " " + a.wise + " by", a.degrees, "degrees."); for (var b = this.slicesDictionary[a.command.toLowerCase()], c = (void 0 === a.degrees ? 90 : a.degrees) * a.vector, d = c.degreesToRadians(), e = Math.abs(d - b.rotation) / (0.5 * Math.PI) * this.twistDuration, f = b.indices.length, g; 0 < f--;)b.getCubelet(f).isTweening = !0; (new TWEEN.Tween(b)).to({ rotation: d },
				e).easing(TWEEN.Easing.Quartic.Out).onComplete(function () { b.rotation = d; b.axis.rotation = 0; for (f = b.indices.length; 0 < f--;)g = b.getCubelet(f), g.isTweening = !1, g.updateMatrix(), g.matrixSlice.copy(g.matrix); 0 !== c && (b.rotateGroupMappingOnAxis(d), this.dispatchEvent(new CustomEvent("onTwistComplete", { detail: { slice: b, twist: a } }))); a === this.finalShuffle && (this.finalShuffle = null, this.dispatchEvent(new CustomEvent("onShuffleComplete", { detail: { slice: b, twist: a } }))) }.bind(this)).start(this.time)
		}, getText: function (a) {
			if (void 0 ===
				a) return [this.folds[0].getText(), this.folds[1].getText(), this.folds[2].getText()]; if (_.isNumeric(a) && 0 <= a && 2 >= a) return this.folds[a].getText()
		}, setText: function (a, b) { void 0 === b ? (this.folds[0].setText(a), this.folds[1].setText(a), this.folds[2].setText(a)) : _.isNumeric(b) && 0 <= b && 2 >= b && this.folds[b].setText(a) }, setSize: function (a, b) { this.camera.aspect = a / b; this.camera.updateProjectionMatrix(); this.renderer.setSize(a, b) }, PRESERVE_LOGO: "RrLlUuDdSsBb", ALL_SLICES: "RrMmLlUuEeDdFfSsBb", EVERYTHING: "XxRrMmLlYyUuEeDdZzFfSsBb",
		loop: function () {
			var a = 0; return function () {
				requestAnimationFrame(this.loop); var b = "undefined" !== typeof window && void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : Date.now(), c = b - (a || b); a = b; this.paused || (this.time += c, TWEEN.update(this.time), this.autoRotate && (this.rotation.x += this.rotationDelta.x, this.rotation.y += this.rotationDelta.y, this.rotation.z += this.rotationDelta.z), this.isReady && 0 === this.isTweening() && (b = this.undoing ? this.historyQueue : this.twistQueue, 0 === b.future.length ?
					this.isSolving && window.solver ? this.isSolving = window.solver.consider(this) : !0 === this.taskQueue.isReady && (b = this.taskQueue.do(), b instanceof Function && b()) : (c = b.do(), "x" !== c.command.toLowerCase() && "y" !== c.command.toLowerCase() && "z" !== c.command.toLowerCase() && 0 !== c.degrees && (this.moveCounter += this.undoing ? -1 : 1), (0 === c.degrees || c.isShuffle) && b.purge(c), this.immediateTwist(c))), this.mouseInteraction.enabled = this.mouseControlsEnabled && !this.finalShuffle, this.mouseInteraction.update(), this.controls.enabled =
					this.mouseControlsEnabled && !this.mouseInteraction.active, this.controls.update())
			}
		}()
	}); ERNO.Solver = function () { this.logic = function (a) { return !1 } }; ERNO.Solver.prototype.consider = function (a) { if (void 0 === a) return console.warn("A cube [Cube] argument must be specified for Solver.consider()."), !1; if (!1 === a instanceof ERNO.Cube) return console.warn("The cube argument provided is not a valid Cube."), !1; a.isShuffling = !1; return a.isSolved() ? (ERNO.Solver.prototype.explain("I\u2019ve found that the cube is already solved."), !1) : this.logic(a) };
	ERNO.Solver.prototype.hint = function (a) { console.log("%c" + a + "%c\n", "background-color: #EEE; color: #333", "") }; ERNO.Solver.prototype.explain = function (a) { console.log("Solver says: %c " + a + " %c\n", "color: #080", "") };

	window.ERNO = ERNO;
	window._ = _;
	window.TWEEN = window.TWEEN || TWEEN;
	window.THREE = window.THREE || THREE;
}())