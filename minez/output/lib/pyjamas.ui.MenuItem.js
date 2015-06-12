/* start module: pyjamas.ui.MenuItem */
$pyjs['loaded_modules']['pyjamas.ui.MenuItem'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.MenuItem']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.MenuItem'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.MenuItem'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.MenuItem>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.MenuItem';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['MenuItem'] = $pyjs['loaded_modules']['pyjamas.ui.MenuItem'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['UIObject'] = $p['___import___']('pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['InnerHTML'] = $p['___import___']('pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui', null, false);
	$m['InnerText'] = $p['___import___']('pyjamas.ui.InnerText.InnerText', 'pyjamas.ui', null, false);
	$m['MenuItem'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.MenuItem';
		$method = $pyjs__bind_method2('__init__', function(text, asHTML, subMenu) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				text = arguments[1];
				asHTML = arguments[2];
				subMenu = arguments[3];
				var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof subMenu != 'undefined') {
					if (subMenu !== null && typeof subMenu['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = subMenu;
						subMenu = arguments[4];
					}
				} else 				if (typeof asHTML != 'undefined') {
					if (asHTML !== null && typeof asHTML['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = asHTML;
						asHTML = arguments[4];
					}
				} else 				if (typeof text != 'undefined') {
					if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = text;
						text = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof subMenu == 'undefined') subMenu=arguments['callee']['__args__'][5][1];
			var cmd,element;
			cmd = null;
			if ($p['bool']((subMenu === null))) {
				if ($p['bool']($p['hasattr'](asHTML, 'execute'))) {
					cmd = asHTML;
					asHTML = false;
				}
				else if ($p['bool']($p['hasattr'](asHTML, 'onShow'))) {
					subMenu = asHTML;
					asHTML = false;
				}
			}
			else if ($p['bool']($p['hasattr'](subMenu, 'execute'))) {
				cmd = subMenu;
				subMenu = null;
			}
			self['command'] = null;
			self['parentMenu'] = null;
			self['subMenu'] = null;
			if ($p['bool'](kwargs['has_key']('Element'))) {
				element = kwargs['pop']('Element');
			}
			else {
				element = $m['DOM']['createTD']();
			}
			self['setElement'](element);
			kwargs['__setitem__']('SelectionStyle', false);
			if ($p['bool'](asHTML)) {
				kwargs['__setitem__']('HTML', text);
			}
			else {
				kwargs['__setitem__']('Text', text);
			}
			if ($p['bool'](cmd)) {
				kwargs['__setitem__']('Command', cmd);
			}
			if ($p['bool'](subMenu)) {
				kwargs['__setitem__']('SubMenu', subMenu);
			}
			if ($p['bool'](!$p['bool'](kwargs['has_key']('StyleName')))) {
				kwargs['__setitem__']('StyleName', 'gwt-MenuItem');
			}
			$pyjs_kwargs_call($m['UIObject'], '__init__', null, kwargs, [{}, self]);
			self['sinkEvents'](($p['getattr']($m['Event'], 'ONCLICK'))|($p['getattr']($m['Event'], 'ONMOUSEOVER'))|($p['getattr']($m['Event'], 'ONMOUSEOUT')));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['text'],['asHTML'],['subMenu', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getCommand', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'command');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCommand'] = $method;
		$method = $pyjs__bind_method2('getParentMenu', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'parentMenu');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getParentMenu'] = $method;
		$method = $pyjs__bind_method2('getSubMenu', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'subMenu');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSubMenu'] = $method;
		$method = $pyjs__bind_method2('setCommand', function(cmd) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cmd = arguments[1];
			}

			self['command'] = cmd;
			return null;
		}
	, 1, [null,null,['self'],['cmd']]);
		$cls_definition['setCommand'] = $method;
		$method = $pyjs__bind_method2('setSubMenu', function(subMenu) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				subMenu = arguments[1];
			}

			self['subMenu'] = subMenu;
			return null;
		}
	, 1, [null,null,['self'],['subMenu']]);
		$cls_definition['setSubMenu'] = $method;
		$method = $pyjs__bind_method2('setParentMenu', function(parentMenu) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parentMenu = arguments[1];
			}

			self['parentMenu'] = parentMenu;
			return null;
		}
	, 1, [null,null,['self'],['parentMenu']]);
		$cls_definition['setParentMenu'] = $method;
		$method = $pyjs__bind_method2('setSelectionStyle', function(selected) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				selected = arguments[1];
			}

			if ($p['bool'](selected)) {
				self['addStyleName']('gwt-MenuItem-selected');
			}
			else {
				self['removeStyleName']('gwt-MenuItem-selected');
			}
			return null;
		}
	, 1, [null,null,['self'],['selected']]);
		$cls_definition['setSelectionStyle'] = $method;
		var $bases = new Array($m['UIObject'],$m['InnerHTML'],$m['InnerText']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MenuItem', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.MenuItem', 'MenuItem', $m['MenuItem']);
	return this;
}; /* end pyjamas.ui.MenuItem */


/* end module: pyjamas.ui.MenuItem */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.UIObject.UIObject', 'pyjamas.ui', 'pyjamas.ui.UIObject', 'pyjamas.ui.Event', 'pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui.InnerHTML', 'pyjamas.ui.InnerText.InnerText', 'pyjamas.ui.InnerText']
*/
