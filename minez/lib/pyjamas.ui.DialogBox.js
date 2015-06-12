/* start module: pyjamas.ui.DialogBox */
$pyjs['loaded_modules']['pyjamas.ui.DialogBox'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.DialogBox']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.DialogBox'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.DialogBox'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.DialogBox>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.DialogBox';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['DialogBox'] = $pyjs['loaded_modules']['pyjamas.ui.DialogBox'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', null, false);
	$m['HTML'] = $p['___import___']('pyjamas.ui.HTML.HTML', 'pyjamas.ui', null, false);
	$m['FlexTable'] = $p['___import___']('pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui', null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui', null, false);
	$m['HasHorizontalAlignment'] = $p['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
	$m['HasVerticalAlignment'] = $p['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
	$m['GlassWidget'] = $p['___import___']('pyjamas.ui.GlassWidget', 'pyjamas.ui', null, false);
	$m['DialogBox'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.DialogBox';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['caption', 'Caption', 'HTML', null])]);
		$method = $pyjs__bind_method2('__init__', function(autoHide, modal, centered) {
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
				autoHide = arguments[1];
				modal = arguments[2];
				centered = arguments[3];
				var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof centered != 'undefined') {
					if (centered !== null && typeof centered['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = centered;
						centered = arguments[4];
					}
				} else 				if (typeof modal != 'undefined') {
					if (modal !== null && typeof modal['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modal;
						modal = arguments[4];
					}
				} else 				if (typeof autoHide != 'undefined') {
					if (autoHide !== null && typeof autoHide['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = autoHide;
						autoHide = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			if (typeof autoHide == 'undefined') autoHide=arguments['callee']['__args__'][3][1];
			if (typeof modal == 'undefined') modal=arguments['callee']['__args__'][4][1];
			if (typeof centered == 'undefined') centered=arguments['callee']['__args__'][5][1];
			var cf,$iter1_iter,col_labels,$iter2_type,row_labels,$iter2_iter,rf,$iter1_array,$iter1_nextval,$and1,$and2,$iter2_idx,c,$iter2_nextval,$iter1_type,sp,r,$iter1_idx,$iter2_array;
			self['dragging'] = false;
			self['dragStartX'] = 0;
			self['dragStartY'] = 0;
			self['child'] = null;
			self['panel'] = $pyjs_kwargs_call(null, $m['FlexTable'], null, null, [{'Height':'100%', 'BorderWidth':'0', 'CellPadding':'0', 'CellSpacing':'0'}]);
			cf = self['panel']['getCellFormatter']();
			rf = self['panel']['getRowFormatter']();
			self['modal'] = modal;
			self['caption'] = $m['HTML']();
			self['caption']['setStyleName']('Caption');
			self['caption']['addMouseListener'](self);
			self['generate_gwt15'] = ($p['bool']($and1=kwargs['pop']('gwt15', false))?true:$and1);
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'generate_gwt15')))) {
				cf['setHeight'](1, 0, '100%');
				cf['setWidth'](1, 0, '100%');
				cf['setAlignment'](1, 0, $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_CENTER'), $p['getattr']($m['HasVerticalAlignment'], 'ALIGN_MIDDLE'));
				self['panel']['setWidget'](0, 0, $p['getattr'](self, 'caption'));
			}
			else {
				row_labels = $p['list'](['Top', 'Middle', 'Bottom']);
				col_labels = $p['list'](['Left', 'Center', 'Right']);
				$iter1_iter = $p['range'](3);
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					r = $iter1_nextval['$nextval'];
					rf['setStyleName'](r, $p['sprintf']('dialog%s', row_labels['__getitem__'](r)));
					$iter2_iter = $p['range'](3);
					$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
					while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
						c = $iter2_nextval['$nextval'];
						cf['setStyleName'](r, c, $p['sprintf']('dialog%s%s', $p['tuple']([row_labels['__getitem__'](r), col_labels['__getitem__'](c)])));
						sp = $m['SimplePanel']();
						sp['setStyleName']($p['sprintf']('dialog%s%sInner', $p['tuple']([row_labels['__getitem__'](r), col_labels['__getitem__'](c)])));
						self['panel']['setWidget'](r, c, sp);
					}
				}
				cf['setAlignment'](1, 1, $p['getattr']($m['HasHorizontalAlignment'], 'ALIGN_CENTER'), $p['getattr']($m['HasVerticalAlignment'], 'ALIGN_MIDDLE'));
				self['dialog_content'] = $m['SimplePanel']();
				self['dialog_content']['setStyleName']('dialogContent');
				self['panel']['getWidget'](0, 1)['add']($p['getattr'](self, 'caption'));
				self['panel']['getWidget'](1, 1)['add']($p['getattr'](self, 'dialog_content'));
			}
			kwargs['__setitem__']('StyleName', kwargs['get']('StyleName', 'gwt-DialogBox'));
			$pyjs_kwargs_call($m['PopupPanel'], '__init__', null, kwargs, [{}, self, autoHide, modal]);
			$m['PopupPanel']['setWidget'](self, $p['getattr'](self, 'panel'));
			self['centered'] = centered;
			return null;
		}
	, 1, [null,['kwargs'],['self'],['autoHide', null],['modal', true],['centered', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onWindowResized', function(width, height) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			$p['$$super']($m['DialogBox'], self)['onWindowResized'](width, height);
			if ($p['bool']($p['getattr'](self, 'centered'))) {
				self['centerBox']();
			}
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

			$p['$$super']($m['DialogBox'], self)['show']();
			if ($p['bool']($p['getattr'](self, 'centered'))) {
				self['centerBox']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $add2,$add1;
			return $p['__op_add']($add1=$m['PopupPanel']['_getProps'](),$add2=$p['getattr'](self, '_props'));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('onEventPreview', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var target,event_targets_popup,$and3,$and4,elem,type;
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](type, 'mousedown'))) {
				target = $m['DOM']['eventGetTarget'](event);
				elem = self['caption']['getElement']();
				event_targets_popup = ($p['bool']($and3=target)?$m['DOM']['isOrHasChild'](elem, target):$and3);
				if ($p['bool'](event_targets_popup)) {
					$m['DOM']['eventPreventDefault'](event);
				}
			}
			return $m['PopupPanel']['onEventPreview'](self, event);
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onEventPreview'] = $method;
		$method = $pyjs__bind_method2('getHTML', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['caption']['getHTML']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method2('getText', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['caption']['getText']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method2('setHTML', function(html) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			self['caption']['setHTML'](html);
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method2('setText', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			self['caption']['setText'](text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self['dragging'] = true;
			$m['GlassWidget']['show']($p['getattr'](self, 'caption'));
			self['dragStartX'] = x;
			self['dragStartY'] = y;
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
			var absX,absY,$sub2,$add3,$sub3,$add6,$add4,$add5,$sub1,$sub4;
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'dragging')))) {
				return null;
			}
			absX = $p['__op_add']($add3=x,$add4=self['getAbsoluteLeft']());
			absY = $p['__op_add']($add5=y,$add6=self['getAbsoluteTop']());
			self['setPopupPosition']($p['__op_sub']($sub1=absX,$sub2=$p['getattr'](self, 'dragStartX')), $p['__op_sub']($sub3=absY,$sub4=$p['getattr'](self, 'dragStartY')));
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

			self['endDragging']();
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('onMouseGlassEnter', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseGlassEnter'] = $method;
		$method = $pyjs__bind_method2('onMouseGlassLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['endDragging']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseGlassLeave'] = $method;
		$method = $pyjs__bind_method2('endDragging', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](!$p['bool']($p['getattr'](self, 'dragging')))) {
				return null;
			}
			self['dragging'] = false;
			$m['GlassWidget']['hide']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['endDragging'] = $method;
		$method = $pyjs__bind_method2('remove', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool'](!$p['op_eq']($p['getattr'](self, 'child'), widget))) {
				return false;
			}
			self['panel']['remove'](widget);
			self['child'] = null;
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method2('doAttachChildren', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['PopupPanel']['doAttachChildren'](self);
			self['caption']['onAttach']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doAttachChildren'] = $method;
		$method = $pyjs__bind_method2('doDetachChildren', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$m['PopupPanel']['doDetachChildren'](self);
			self['caption']['onDetach']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doDetachChildren'] = $method;
		$method = $pyjs__bind_method2('setWidget', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if ($p['bool'](($p['getattr'](self, 'child') !== null))) {
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'generate_gwt15')))) {
					self['panel']['remove']($p['getattr'](self, 'child'));
				}
				else {
					self['dialog_content']['remove']($p['getattr'](self, 'child'));
				}
			}
			if ($p['bool']((widget !== null))) {
				if ($p['bool'](!$p['bool']($p['getattr'](self, 'generate_gwt15')))) {
					self['panel']['setWidget'](1, 0, widget);
				}
				else {
					self['dialog_content']['setWidget'](widget);
				}
			}
			self['child'] = widget;
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['setWidget'] = $method;
		var $bases = new Array($m['PopupPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DialogBox', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.DialogBox', 'DialogBox', $m['DialogBox']);
	return this;
}; /* end pyjamas.ui.DialogBox */


/* end module: pyjamas.ui.DialogBox */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.HTML.HTML', 'pyjamas.ui.HTML', 'pyjamas.ui.FlexTable.FlexTable', 'pyjamas.ui.FlexTable', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui.GlassWidget']
*/
