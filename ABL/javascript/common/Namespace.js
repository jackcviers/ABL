/**
 * 
 * MIT License
 * Copyright (c) 2011 Jack Viers
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in 
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */

(function(proto){
	//two most useful shims: Object.create and Object.getPrototypeOf()
	if (typeof Object.create !== 'function') {
		Object.create = function(o, props) {
			function F() {}
			F.prototype = o;
			if (typeof(props) === "object") {
				for (prop in props) {
					if (props.hasOwnProperty((prop))) {
						F[prop] = props[prop];
					}
				}
			}
			return new F();
		};
	}
	if ( typeof Object.getPrototypeOf !== "function" ) {
		if ( typeof "test".__proto__ === "object" ) {
			Object.getPrototypeOf = function(object){
				return object.__proto__;
			};
		} else {
			Object.getPrototypeOf = function(object){
				// May break if the constructor has been tampered with
				return object.constructor.prototype;
			};
		}
	}

	if(!javascript){
		javascript = Object.create(proto);
	}
	if(!javascript.hasOwnProperty('common')){
		javascript.common = Object.create(proto);
	}
	if(!javascript.common.hasOwnProperty('Namespace')){
		javascript.common.Namespace = Object.create(proto, {
			_uri:""
			, _alias:""
			, getUri:function(){return this._uri;}
			, setUri:function(value){this._uri = value;}
			, getAlias:function(){return this._alias;}
			, setAlias:function(value){this._alias = value;}
		});
	}
})(Object);