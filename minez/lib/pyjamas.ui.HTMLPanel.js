/* start module: pyjamas.ui.HTMLPanel */
$pyjs['loaded_modules']['pyjamas.ui.HTMLPanel'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.HTMLPanel']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.HTMLPanel'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.HTMLPanel'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.HTMLPanel>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HTMLPanel';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['HTMLPanel'] = $pyjs['loaded_modules']['pyjamas.ui.HTMLPanel'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['InnerHTML'] = $p['___import___']('pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui', null, false);
	$m['ComplexPanel'] = $p['___import___']('pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui', null, false);
	$m['HTMLPanel_sUid'] = 0;
	$m['_check_tagname'] = function(element, tagname) {
		var $and1,$and2,$pyjs_try_err,element_tagname;
		try {
			element_tagname = $p['getattr'](element, 'nodeName');
			element_tagname = $p['str'](element_tagname)['lower']();
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				element_tagname = null;
			}
		}
		if ($p['bool'](($p['bool']($and1=(element_tagname !== null))?$p['op_eq'](element_tagname, tagname):$and1))) {
			return element;
		}
		return null;
	};
	$m['_check_tagname']['__name__'] = '_check_tagname';

	$m['_check_tagname']['__bind_type__'] = 0;
	$m['_check_tagname']['__args__'] = [null,null,['element'],['tagname']];
	$m['getElementsByTagName'] = function(element, tagname) {
		var el,res,it,$pyjs_try_err,child;
		res = $p['list']([]);
		el = $m['_check_tagname'](element, tagname);
		if ($p['bool'](el)) {
			res['append'](el);
		}
		it = $m['DOM']['walkChildren'](element);
		while ($p['bool'](true)) {
			try {
				child = it['next']();
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['StopIteration']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['StopIteration'])) {
					break;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			el = $m['_check_tagname'](child, tagname);
			if ($p['bool'](el)) {
				res['append'](el);
			}
		}
		return res;
	};
	$m['getElementsByTagName']['__name__'] = 'getElementsByTagName';

	$m['getElementsByTagName']['__bind_type__'] = 0;
	$m['getElementsByTagName']['__args__'] = [null,null,['element'],['tagname']];
	$m['getElementById'] = function(element, id) {
		var $and3,$and4,ret,$pyjs_try_err,child,element_id;
		try {
			element_id = $m['DOM']['getAttribute'](element, 'id');
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (true) {
				element_id = null;
			}
		}
		if ($p['bool'](($p['bool']($and3=(element_id !== null))?$p['op_eq'](element_id, id):$and3))) {
			return element;
		}
		child = $m['DOM']['getFirstChild'](element);
		while ($p['bool']((child !== null))) {
			ret = $m['getElementById'](child, id);
			if ($p['bool']((ret !== null))) {
				return ret;
			}
			child = $m['DOM']['getNextSibling'](child);
		}
		return null;
	};
	$m['getElementById']['__name__'] = 'getElementById';

	$m['getElementById']['__bind_type__'] = 0;
	$m['getElementById']['__args__'] = [null,null,['element'],['id']];
	$m['HTMLPanel'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.HTMLPanel';
		$method = $pyjs__bind_method2('__init__', function(html) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var ka = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
					var ka = arguments[arguments['length']+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				html = arguments[1];
				var ka = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (ka === null || typeof ka != 'object' || ka['__name__'] != 'dict' || typeof ka['$pyjs_is_kwarg'] == 'undefined') {
					ka = arguments[arguments['length']+1];
				} else {
					delete ka['$pyjs_is_kwarg'];
				}
			}
			if (typeof ka == 'undefined') {
				ka = $p['__empty_dict']();
				if (typeof html != 'undefined') {
					if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
						ka = html;
						html = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						ka = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $or1,$or2,element;
			if ($p['bool'](html)) {
				ka['__setitem__']('HTML', html);
			}
			element = ($p['bool']($or1=ka['pop']('Element', null))?$or1:$m['DOM']['createDiv']());
			self['setElement'](element);
			$pyjs_kwargs_call($m['ComplexPanel'], '__init__', null, ka, [{}, self]);
			return null;
		}
	, 1, [null,['ka'],['self'],['html']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('add', function(widget, id) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				id = arguments[2];
			}
			var element;
			element = $m['getElementById'](self['getElement'](), id);
			if ($p['bool']((element === null))) {
				throw ($p['Exception']($p['sprintf']("HTMLPanel.add: no element with id '%s'", $p['str'](id))));
			}
			$m['ComplexPanel']['add'](self, widget, element);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['id']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method2('findTags', function(tagname) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tagname = arguments[1];
			}

			return $m['getElementsByTagName'](self['getElement'](), tagname);
		}
	, 1, [null,null,['self'],['tagname']]);
		$cls_definition['findTags'] = $method;
		$method = $pyjs__bind_method2('createUniqueId', function() {
			var $add2,$add1;
			$m['HTMLPanel_sUid'] = $p['__op_add']($add1=$m['HTMLPanel_sUid'],$add2=1);
			return $p['sprintf']('HTMLPanel_%d', $m['HTMLPanel_sUid']);
		}
	, 3, [null,null]);
		$cls_definition['createUniqueId'] = $method;
		var $bases = new Array($m['ComplexPanel'],$m['InnerHTML']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HTMLPanel', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.HTMLPanel', 'HTMLPanel', $m['HTMLPanel']);
	return this;
}; /* end pyjamas.ui.HTMLPanel */


/* end module: pyjamas.ui.HTMLPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.InnerHTML.InnerHTML', 'pyjamas.ui', 'pyjamas.ui.InnerHTML', 'pyjamas.ui.ComplexPanel.ComplexPanel', 'pyjamas.ui.ComplexPanel']
*/
