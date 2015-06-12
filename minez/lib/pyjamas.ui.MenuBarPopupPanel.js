/* start module: pyjamas.ui.MenuBarPopupPanel */
$pyjs['loaded_modules']['pyjamas.ui.MenuBarPopupPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.MenuBarPopupPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.MenuBarPopupPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.MenuBarPopupPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.MenuBarPopupPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.MenuBarPopupPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['MenuBarPopupPanel'] = $pyjs['loaded_modules']['pyjamas.ui.MenuBarPopupPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', null, false);
	$m['MenuBarPopupPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.MenuBarPopupPanel';
		$method = $pyjs__bind_method2('__init__', function(item) {
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
				item = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof item != 'undefined') {
					if (item !== null && typeof item['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = item;
						item = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self['item'] = item;
			kwargs['__setitem__']('Widget', item['getSubMenu']());
			$pyjs_kwargs_call($m['PopupPanel'], '__init__', null, kwargs, [{}, self, true, false]);
			item['getSubMenu']()['onShow']();
			return null;
		}
	, 1, [null,['kwargs'],['self'],['item']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onEventPreview', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var parentMenuElement,type,target;
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](type, 'click'))) {
				target = $m['DOM']['eventGetTarget'](event);
				parentMenuElement = self['item']['getParentMenu']()['getElement']();
				if ($p['bool']($m['DOM']['isOrHasChild'](parentMenuElement, target))) {
					return false;
				}
			}
			return $m['PopupPanel']['onEventPreview'](self, event);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onEventPreview'] = $method;
		var $bases = new Array($m['PopupPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MenuBarPopupPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.MenuBarPopupPanel', 'MenuBarPopupPanel', $m['MenuBarPopupPanel']);
	return this;
}; /* end pyjamas.ui.MenuBarPopupPanel */


/* end module: pyjamas.ui.MenuBarPopupPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', 'pyjamas.ui.PopupPanel']
*/
