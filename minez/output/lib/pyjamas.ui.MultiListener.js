/* start module: pyjamas.ui.MultiListener */
$pyjs['loaded_modules']['pyjamas.ui.MultiListener'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.MultiListener']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.MultiListener'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.MultiListener'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.MultiListener>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.MultiListener';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['MultiListener'] = $pyjs['loaded_modules']['pyjamas.ui.MultiListener'];


	$m['MultiListener'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.MultiListener';
		$cls_definition['combinations'] = $pyjs_kwargs_call(null, $p['dict'], null, null, [{'onFocus':$p['list'](['onLostFocus']), 'onLostFocus':$p['list'](['onFocus']), 'onKeyDown':$p['list'](['onKeyUp', 'onKeyPress']), 'onKeyUp':$p['list'](['onKeyPress', 'onKeyDown']), 'onKeyPress':$p['list'](['onKeyDown', 'onKeyUp']), 'onMouseMove':$p['list'](['onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseLeave']), 'onMouseDown':$p['list'](['onMouseUp', 'onMouseEnter', 'onMouseLeave', 'onMouseMove']), 'onMouseUp':$p['list'](['onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseDown']), 'onMouseEnter':$p['list'](['onMouseLeave', 'onMouseMove', 'onMouseDown', 'onMouseUp']), 'onMouseLeave':$p['list'](['onMouseMove', 'onMouseDown', 'onMouseUp', 'onMouseEnter']), 'onTabSelected':$p['list'](['onBeforeTabSelected']), 'onBeforeTabSelected':$p['list'](['onTabSelected'])}]);
		$method = $pyjs__bind_method2('__init__', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				obj = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof obj != 'undefined') {
					if (obj !== null && typeof obj['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = obj;
						obj = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs_kwargs_call(self, 'set', null, kwargs, [{}, obj]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['obj']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('set', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				obj = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof obj != 'undefined') {
					if (obj !== null && typeof obj['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = obj;
						obj = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter2_type,v,k1,$iter1_iter,ignore,$iter2_idx,$iter1_array,k,$iter2_array,$iter1_idx;
			ignore = $p['getattr'](self, 'ignore');
			$iter1_iter = kwargs['iteritems']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				k = $tupleassign1[0];
				v = $tupleassign1[1];
				$p['setattr'](self, k, $p['getattr'](obj, v));
				if ($p['bool']($p['getattr'](self, 'combinations')['__contains__'](k))) {
					$iter2_iter = $p['getattr'](self, 'combinations')['__getitem__'](k);
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						k1 = $iter2_nextval['$nextval'];
						if ($p['bool'](!$p['bool']($p['hasattr'](self, k1)))) {
							$p['setattr'](self, k1, ignore);
						}
					}
				}
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['obj']]);
		$cls_definition['set'] = $method;
		$method = $pyjs__bind_method2('ignore', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			return true;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['ignore'] = $method;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MultiListener', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end pyjamas.ui.MultiListener */


/* end module: pyjamas.ui.MultiListener */


