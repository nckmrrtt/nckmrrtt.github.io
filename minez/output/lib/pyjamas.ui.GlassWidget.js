/* start module: pyjamas.ui.GlassWidget */
$pyjs['loaded_modules']['pyjamas.ui.GlassWidget'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.GlassWidget']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.GlassWidget'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.GlassWidget'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.GlassWidget>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.GlassWidget';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['GlassWidget'] = $pyjs['loaded_modules']['pyjamas.ui.GlassWidget'];


	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas.ui');
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['MouseHandler'] = $p['___import___']('pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui', null, false);
	$m['mousecapturer'] = null;
	$m['getMouseCapturer'] = function() {
		var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
{
			}
		}

		if ($p['bool'](($m['mousecapturer'] === null))) {
			$m['mousecapturer'] = $pyjs_kwargs_call(null, (typeof GlassWidget == "undefined"?$m['GlassWidget']:GlassWidget), null, kwargs, [{}]);
		}
		else if ($p['bool'](!$p['bool']($p['isinstance']($m['mousecapturer'], (typeof GlassWidget == "undefined"?$m['GlassWidget']:GlassWidget))))) {
			return null;
		}
		return $m['mousecapturer'];
	};
	$m['getMouseCapturer']['__name__'] = 'getMouseCapturer';

	$m['getMouseCapturer']['__bind_type__'] = 0;
	$m['getMouseCapturer']['__args__'] = [null,['kwargs']];
	$m['show'] = function(mousetarget) {
		var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof mousetarget != 'undefined') {
				if (mousetarget !== null && typeof mousetarget['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = mousetarget;
					mousetarget = arguments[1];
				}
			} else {
			}
		}
		var mc;
		mc = $pyjs_kwargs_call(null, $m['getMouseCapturer'], null, kwargs, [{}]);
		mc['mousetarget'] = mousetarget;
		if ($p['bool']($p['isinstance'](mousetarget, $m['MouseHandler']))) {
			mc['mousehandler'] = true;
		}
		mc['show']();
		return null;
	};
	$m['show']['__name__'] = 'show';

	$m['show']['__bind_type__'] = 0;
	$m['show']['__args__'] = [null,['kwargs'],['mousetarget']];
	$m['hide'] = function() {

		$m['mousecapturer']['hide']();
		return null;
	};
	$m['hide']['__name__'] = 'hide';

	$m['hide']['__bind_type__'] = 0;
	$m['hide']['__args__'] = [null,null];
	$m['GlassWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.GlassWidget';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
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
			var element;
			self['glassListeners'] = $p['list']([]);
			self['showing'] = false;
			self['mousehandler'] = false;
			if ($p['bool'](!$p['bool'](kwargs['__contains__']('StyleName')))) {
				kwargs['__setitem__']('StyleName', 'gwt-GlassWidget');
			}
			if ($p['bool'](kwargs['__contains__']('Element'))) {
				element = kwargs['pop']('Element');
			}
			else {
				element = $m['DOM']['createDiv']();
			}
			self['setElement'](element);
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			$m['MouseHandler']['__init__'](self);
			self['setzIndex'](1000000);
			self['addMouseListener'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addGlassListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['glassListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addGlassListener'] = $method;
		$method = $pyjs__bind_method2('hide', function(autoClosed) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				autoClosed = arguments[1];
			}
			if (typeof autoClosed == 'undefined') autoClosed=arguments['callee']['__args__'][3][1];
			var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$iter1_idx;
			self['showing'] = false;
			self['hideGlass']();
			$m['DOM']['removeEventPreview'](self);
			$m['RootPanel']()['remove'](self);
			self['onHideImpl'](self['getElement']());
			$m['DOM']['releaseCapture'](self['getElement']());
			$iter1_iter = $p['getattr'](self, 'glassListeners');
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				listener = $iter1_nextval['$nextval'];
				if ($p['bool']($p['hasattr'](listener, 'onGlassHide'))) {
					listener['onGlassHide'](self, autoClosed);
				}
				else {
					listener(self, autoClosed);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['autoClosed', false]]);
		$cls_definition['hide'] = $method;
		$method = $pyjs__bind_method2('_event_targets_popup', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and1,$and2,target;
			target = $m['DOM']['eventGetTarget'](event);
			return ($p['bool']($and1=target)?$m['DOM']['isOrHasChild'](self['getElement'](), target):$and1);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_event_targets_popup'] = $method;
		$method = $pyjs__bind_method2('onEventPreview', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $or5,$or4,$or6,$or1,$or3,$or2,etype;
			etype = $m['DOM']['eventGetType'](event);
			if ($p['bool'](($p['bool']($or1=$p['op_eq'](etype, 'mousedown'))?$or1:$p['op_eq'](etype, 'blur')))) {
				if ($p['bool'](($m['DOM']['getCaptureElement']() !== null))) {
					return true;
				}
			}
			else if ($p['bool'](($p['bool']($or3=$p['op_eq'](etype, 'mouseup'))?$or3:($p['bool']($or4=$p['op_eq'](etype, 'click'))?$or4:($p['bool']($or5=$p['op_eq'](etype, 'mousemove'))?$or5:$p['op_eq'](etype, 'dblclick')))))) {
				if ($p['bool'](($m['DOM']['getCaptureElement']() !== null))) {
					return true;
				}
			}
			return self['_event_targets_popup'](event);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onEventPreview'] = $method;
		$method = $pyjs__bind_method2('onHideImpl', function(popup) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				popup = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['popup']]);
		$cls_definition['onHideImpl'] = $method;
		$method = $pyjs__bind_method2('onShowImpl', function(popup) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				popup = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['popup']]);
		$cls_definition['onShowImpl'] = $method;
		$method = $pyjs__bind_method2('removeGlassListener', function(listener) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['glassListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeGlassListener'] = $method;
		$method = $pyjs__bind_method2('setGlassPosition', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var el,$add3,height,$add2,width,$add1,$add4,top,left;
			top = $m['Window']['getScrollTop']();
			left = $m['Window']['getScrollLeft']();
			height = $m['Window']['getClientHeight']();
			width = $m['Window']['getClientWidth']();
			el = self['getElement']();
			$m['DOM']['setStyleAttribute'](el, 'position', 'absolute');
			$m['DOM']['setStyleAttribute'](el, 'left', ($p['bool']($p['op_eq'](left, 0))? ($p['sprintf']('%s', left)) : ($p['sprintf']('%spx', left))));
			$m['DOM']['setStyleAttribute'](el, 'top', ($p['bool']($p['op_eq'](top, 0))? ($p['sprintf']('%s', top)) : ($p['sprintf']('%spx', top))));
			$m['DOM']['setStyleAttribute'](el, 'height', $p['sprintf']('%spx', $p['__op_add']($add1=top,$add2=height)));
			$m['DOM']['setStyleAttribute'](el, 'width', $p['sprintf']('%spx', $p['__op_add']($add3=left,$add4=width)));
			if ($p['bool']($p['getattr']($m['pyjd'], 'is_desktop'))) {
				$m['DOM']['setStyleAttribute'](el, 'filter', 'alpha(opacity=1)');
				$m['DOM']['setStyleAttribute'](el, 'background', 'rgba(255,255,255,0.1)');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setGlassPosition'] = $method;
		$method = $pyjs__bind_method2('showGlass', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['setGlassPosition']();
			$doc['body']['appendChild'](self['getElement']());
			$m['Window']['addWindowResizeListener'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['showGlass'] = $method;
		$method = $pyjs__bind_method2('hideGlass', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['Window']['removeWindowResizeListener'](self);
			$doc['body']['removeChild'](self['getElement']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['hideGlass'] = $method;
		$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			self['setGlassPosition']();
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['onWindowResized'] = $method;
		$method = $pyjs__bind_method2('show', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, 'showing'))) {
				return null;
			}
			self['showing'] = true;
			self['showGlass']();
			$m['DOM']['addEventPreview'](self);
			$m['RootPanel']()['add'](self);
			self['onShowImpl'](self['getElement']());
			$m['DOM']['setCapture'](self['getElement']());
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show'] = $method;
		$method = $pyjs__bind_method2('adjustMousePos', function(x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
			}
			var $sub2,$sub3,$add6,$add7,$add5,$sub1,$add8,$sub4;
			x = $p['__op_add']($add5=x,$add6=$p['__op_sub']($sub1=self['getAbsoluteLeft'](),$sub2=self['mousetarget']['getAbsoluteLeft']()));
			y = $p['__op_add']($add7=y,$add8=$p['__op_sub']($sub3=self['getAbsoluteTop'](),$sub4=self['mousetarget']['getAbsoluteTop']()));
			return $p['tuple']([x, y]);
		}
	, 1, [null,null,['self'],['x'],['y']]);
		$cls_definition['adjustMousePos'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			var $tupleassign1 = $p['__ass_unpack'](self['adjustMousePos'](x, y), 2, null);
			x = $tupleassign1[0];
			y = $tupleassign1[1];
			if ($p['bool']($p['getattr'](self, 'mousehandler'))) {
				self['mousetarget']['onBrowserEvent']($m['DOM']['eventGetCurrentEvent']());
			}
			else {
				self['mousetarget']['onMouseDown'](sender, x, y);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseEnter', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['mousetarget']['onMouseGlassEnter'](sender);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['mousetarget']['onMouseGlassLeave'](sender);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		$method = $pyjs__bind_method2('onMouseMove', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			var $tupleassign2 = $p['__ass_unpack'](self['adjustMousePos'](x, y), 2, null);
			x = $tupleassign2[0];
			y = $tupleassign2[1];
			if ($p['bool']($p['getattr'](self, 'mousehandler'))) {
				self['mousetarget']['onBrowserEvent']($m['DOM']['eventGetCurrentEvent']());
			}
			else {
				self['mousetarget']['onMouseMove'](sender, x, y);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			var $tupleassign3 = $p['__ass_unpack'](self['adjustMousePos'](x, y), 2, null);
			x = $tupleassign3[0];
			y = $tupleassign3[1];
			if ($p['bool']($p['getattr'](self, 'mousehandler'))) {
				self['mousetarget']['onBrowserEvent']($m['DOM']['eventGetCurrentEvent']());
			}
			else {
				self['mousetarget']['onMouseUp'](sender, x, y);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		var $bases = new Array($m['Widget'],$m['MouseHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GlassWidget', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.GlassWidget', 'GlassWidget', $m['GlassWidget']);
	return this;
}; /* end pyjamas.ui.GlassWidget */


/* end module: pyjamas.ui.GlassWidget */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.DOM', 'pyjamas', 'pyjamas.Window', 'pyjamas.Factory', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui.Widget', 'pyjamas.ui.MouseListener.MouseHandler', 'pyjamas.ui.MouseListener', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas.ui.RootPanel']
*/
