/* start module: pyjamas.ui.MenuBar */
$pyjs['loaded_modules']['pyjamas.ui.MenuBar'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.MenuBar']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.MenuBar'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.MenuBar'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.MenuBar>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.MenuBar';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['MenuBar'] = $pyjs['loaded_modules']['pyjamas.ui.MenuBar'];


	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['DeferredCommand'] = $p['___import___']('pyjamas.DeferredCommand', 'pyjamas.ui', null, false);
	$m['Widget'] = $p['___import___']('pyjamas.ui.Widget.Widget', 'pyjamas.ui', null, false);
	$m['MenuItem'] = $p['___import___']('pyjamas.ui.MenuItem.MenuItem', 'pyjamas.ui', null, false);
	$m['MenuBarPopupPanel'] = $p['___import___']('pyjamas.ui.MenuBarPopupPanel.MenuBarPopupPanel', 'pyjamas.ui', null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	$m['MultiListener'] = $p['___import___']('pyjamas.ui.MultiListener.MultiListener', 'pyjamas.ui', null, false);
	$m['MenuBar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.MenuBar';
		$cls_definition['_props'] = $p['list']([$p['tuple'](['vertical', 'Vertical', 'Vertical', null])]);
		$method = $pyjs__bind_method2('__init__', function(vertical) {
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
				vertical = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof vertical != 'undefined') {
					if (vertical !== null && typeof vertical['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = vertical;
						vertical = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof vertical == 'undefined') vertical=arguments['callee']['__args__'][3][1];
			var $or1,$or2,outer,fc,table;
			self['setVertical'](kwargs['pop']('Vertical', vertical));
			if ($p['bool'](($p['bool']($or1=!kwargs['__contains__']('StyleName'))?$or1:$p['op_eq'](kwargs['__getitem__']('StyleName'), 'gwt-MenuBar')))) {
				kwargs['__setitem__']('StyleName', self['getDefaultStyleName']());
			}
			self['body'] = null;
			self['items'] = $p['list']([]);
			self['parentMenu'] = null;
			self['popup'] = null;
			self['selectedItem'] = null;
			self['shownChildMenu'] = null;
			self['autoOpen'] = false;
			if ($p['bool'](kwargs['has_key']('Element'))) {
				table = kwargs['pop']('Element');
				fc = $m['DOM']['getFirstChild'](table);
				if ($p['bool'](fc)) {
					self['body'] = fc;
				}
				else {
					self['body'] = $m['DOM']['createTBody']();
					$m['DOM']['appendChild'](table, $p['getattr'](self, 'body'));
				}
			}
			else {
				table = $m['DOM']['createTable']();
			}
			self['body'] = $m['DOM']['createTBody']();
			$m['DOM']['appendChild'](table, $p['getattr'](self, 'body'));
			outer = $m['DOM']['createDiv']();
			$m['DOM']['appendChild'](outer, table);
			self['setElement'](outer);
			$pyjs_kwargs_call($m['Widget'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['vertical', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('_getProps', function() {
    var self = this['prototype'];
			var $add2,$add1;
			return $p['__op_add']($add1=$m['Widget']['_getProps'](),$add2=$p['getattr'](self, '_props'));
		}
	, 2, [null,null,['self']]);
		$cls_definition['_getProps'] = $method;
		$method = $pyjs__bind_method2('_setWeirdProps', function(props, builderstate) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				props = arguments[1];
				builderstate = arguments[2];
			}
			var last_level,$iter1_iter,$iter2_type,$$label,$iter2_iter,item,menu,prop,menus,handler,$iter1_array,$iter1_nextval,$and1,$and2,$and3,$iter2_idx,lastitem,name,$iter2_nextval,$iter1_type,level,items,k,$add3,$iter1_idx,$add4,v,menuItemListener,$iter2_array;
			self['clearItems']();
			items = $p['dict']([]);
			$iter1_iter = props['items']();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
				k = $tupleassign1[0];
				v = $tupleassign1[1];
				if ($p['bool'](!$p['bool']($p['isinstance'](k, $p['float_int'])))) {
					continue;
				}
				items['__setitem__']($p['float_int'](k), v);
			}
			items = items['items']();
			items['sort']();
			last_level = 0;
			menu = self;
			menus = $p['list']([menu]);
			$iter2_iter = items;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				prop = $iter2_nextval['$nextval'];
				$p['printFunc']([prop], 1);
				var $tupleassign2 = $p['__ass_unpack'](prop['__getitem__'](1), 4, null);
				level = $tupleassign2[0];
				name = $tupleassign2[1];
				$$label = $tupleassign2[2];
				handler = $tupleassign2[3];
				if ($p['bool'](($p['cmp'](level, last_level) == -1))) {
					menus = $p['__getslice'](menus, 0, $p['__op_add']($add3=level,$add4=1));
					menu = menus['__getitem__'](level);
				}
				else if ($p['bool'](($p['cmp'](level, last_level) == 1))) {
					menu = $pyjs_kwargs_call(null, $m['MenuBar'], null, null, [{'vertical':true}]);
					lastitem = $p['getattr'](menus['__getitem__']((typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1))), 'items')['__getitem__']((typeof ($usub2=1)=='number'?
						-$usub2:
						$p['op_usub']($usub2)));
					lastitem['setSubMenu'](menu);
					$p['setattr'](lastitem, name, menu);
					menus['append'](menu);
				}
				item = menu['addItem']($$label);
				if ($p['bool'](($p['bool']($and1=handler)?($p['bool']($and2=(builderstate !== null))?($p['getattr'](builderstate, 'eventTarget') !== null):$and2):$and1))) {
					menuItemListener = $pyjs_kwargs_call(null, $m['MultiListener'], null, null, [{'execute':handler}, $p['getattr'](builderstate, 'eventTarget')]);
					item['setCommand'](menuItemListener);
				}
				last_level = level;
			}
			return null;
		}
	, 1, [null,null,['self'],['props'],['builderstate']]);
		$cls_definition['_setWeirdProps'] = $method;
		$method = $pyjs__bind_method2('setVertical', function(vertical) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				vertical = arguments[1];
			}

			self['vertical'] = vertical;
			return null;
		}
	, 1, [null,null,['self'],['vertical']]);
		$cls_definition['setVertical'] = $method;
		$method = $pyjs__bind_method2('getVertical', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'vertical');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getVertical'] = $method;
		$method = $pyjs__bind_method2('_checkVerticalContainer', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['op_eq']($m['DOM']['getChildCount']($p['getattr'](self, 'body')), 0))) {
				$m['DOM']['appendChild']($p['getattr'](self, 'body'), $m['DOM']['createTR']());
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_checkVerticalContainer'] = $method;
		$method = $pyjs__bind_method2('getDefaultStyleName', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add6,$add5;
			if ($p['bool']($p['getattr'](self, 'vertical'))) {
				return $p['__op_add']($add5='gwt-MenuBar ',$add6='gwt-MenuBar-vertical');
			}
			return 'gwt-MenuBar-horizontal';
		}
	, 1, [null,null,['self']]);
		$cls_definition['getDefaultStyleName'] = $method;
		$method = $pyjs__bind_method2('setStyleName', function(StyleName) {
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
				StyleName = arguments[1];
				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof StyleName != 'undefined') {
					if (StyleName !== null && typeof StyleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = StyleName;
						StyleName = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $or4,$or3;
			if ($p['bool'](($p['bool']($or3=!$p['bool'](StyleName))?$or3:$p['op_eq'](StyleName, 'gwt-MenuBar')))) {
				StyleName = self['getDefaultStyleName']();
			}
			$pyjs_kwargs_call($p['$$super']($m['MenuBar'], self), 'setStyleName', null, kwargs, [{}, StyleName]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['StyleName']]);
		$cls_definition['setStyleName'] = $method;
		$method = $pyjs__bind_method2('insertItem', function(item, index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				index = arguments[2];
			}
			var tr;
			if ($p['bool']($p['getattr'](self, 'vertical'))) {
				tr = $m['DOM']['createTR']();
				$m['DOM']['insertChild']($p['getattr'](self, 'body'), tr, index);
			}
			else {
				self['_checkVerticalContainer']();
				tr = $m['DOM']['getChild']($p['getattr'](self, 'body'), 0);
			}
			$m['DOM']['insertChild'](tr, item['getElement'](), index);
			item['setParentMenu'](self);
			item['setSelectionStyle'](false);
			self['items']['insert'](index, item);
			return null;
		}
	, 1, [null,null,['self'],['item'],['index']]);
		$cls_definition['insertItem'] = $method;
		$method = $pyjs__bind_method2('addItem', function(item, asHTML, popup) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				asHTML = arguments[2];
				popup = arguments[3];
			}
			if (typeof asHTML == 'undefined') asHTML=arguments['callee']['__args__'][4][1];
			if (typeof popup == 'undefined') popup=arguments['callee']['__args__'][5][1];
			var tr;
			if ($p['bool'](!$p['bool']($p['hasattr'](item, 'setSubMenu')))) {
				item = $m['MenuItem'](item, asHTML, popup);
			}
			if ($p['bool']($p['getattr'](self, 'vertical'))) {
				tr = $m['DOM']['createTR']();
				$m['DOM']['appendChild']($p['getattr'](self, 'body'), tr);
			}
			else {
				self['_checkVerticalContainer']();
				tr = $m['DOM']['getChild']($p['getattr'](self, 'body'), 0);
			}
			$m['DOM']['appendChild'](tr, item['getElement']());
			item['setParentMenu'](self);
			item['setSelectionStyle'](false);
			self['items']['append'](item);
			return item;
		}
	, 1, [null,null,['self'],['item'],['asHTML', null],['popup', null]]);
		$cls_definition['addItem'] = $method;
		$method = $pyjs__bind_method2('clearItems', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var container;
			container = self['getItemContainerElement']();
			while ($p['bool'](($p['cmp']($m['DOM']['getChildCount'](container), 0) == 1))) {
				$m['DOM']['removeChild'](container, $m['DOM']['getChild'](container, 0));
			}
			self['items'] = $p['list']([]);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clearItems'] = $method;
		$method = $pyjs__bind_method2('getAutoOpen', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return $p['getattr'](self, 'autoOpen');
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAutoOpen'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var item,type;
			$m['Widget']['onBrowserEvent'](self, event);
			item = self['findItem']($m['DOM']['eventGetTarget'](event));
			if ($p['bool']((item === null))) {
				return false;
			}
			type = $m['DOM']['eventGetType'](event);
			if ($p['bool']($p['op_eq'](type, 'click'))) {
				self['doItemAction'](item, true);
				return true;
			}
			else if ($p['bool']($p['op_eq'](type, 'mouseover'))) {
				self['itemOver'](item);
			}
			else if ($p['bool']($p['op_eq'](type, 'mouseout'))) {
				self['itemOver'](null);
			}
			return false;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('onPopupClosed', function(sender, autoClosed) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				autoClosed = arguments[2];
			}

			if ($p['bool'](autoClosed)) {
				self['closeAllParents']();
			}
			self['onHide']();
			self['shownChildMenu'] = null;
			self['popup'] = null;
			return null;
		}
	, 1, [null,null,['self'],['sender'],['autoClosed']]);
		$cls_definition['onPopupClosed'] = $method;
		$method = $pyjs__bind_method2('removeItem', function(item) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $pyjs_try_err,container,idx;
			try {
				idx = self['items']['index'](item);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
					return null;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			container = self['getItemContainerElement']();
			$m['DOM']['removeChild'](container, $m['DOM']['getChild'](container, idx));
			$p['getattr'](self, 'items')['__delitem__'](idx);
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['removeItem'] = $method;
		$method = $pyjs__bind_method2('setAutoOpen', function(autoOpen) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				autoOpen = arguments[1];
			}

			self['autoOpen'] = autoOpen;
			return null;
		}
	, 1, [null,null,['self'],['autoOpen']]);
		$cls_definition['setAutoOpen'] = $method;
		$method = $pyjs__bind_method2('closeAllParents', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var curMenu,$and4,$and5;
			curMenu = self;
			while ($p['bool']((curMenu !== null))) {
				curMenu['close']();
				if ($p['bool'](($p['bool']($and4=($p['getattr'](curMenu, 'parentMenu') === null))?($p['getattr'](curMenu, 'selectedItem') !== null):$and4))) {
					curMenu['selectedItem']['setSelectionStyle'](false);
					curMenu['selectedItem'] = null;
				}
				curMenu = $p['getattr'](curMenu, 'parentMenu');
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['closeAllParents'] = $method;
		$method = $pyjs__bind_method2('doItemAction', function(item, fireCommand) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				fireCommand = arguments[2];
			}
			var sub_menu,cmd,$and6,$and7,$add7,$sub3,$sub2,$add8,$add9,$add10,$sub1,$sub4;
			if ($p['bool'](($p['bool']($and6=($p['getattr'](self, 'shownChildMenu') !== null))?$p['op_eq'](item['getSubMenu'](), $p['getattr'](self, 'shownChildMenu')):$and6))) {
				return null;
			}
			if ($p['bool'](($p['getattr'](self, 'shownChildMenu') !== null))) {
				self['shownChildMenu']['onHide']();
				self['popup']['hide']();
			}
			if ($p['bool']((item['getSubMenu']() === null))) {
				if ($p['bool'](fireCommand)) {
					self['closeAllParents']();
					cmd = item['getCommand']();
					if ($p['bool']((cmd !== null))) {
						$m['DeferredCommand']['add'](cmd);
					}
				}
				return null;
			}
			self['selectItem'](item);
			self['popup'] = $m['MenuBarPopupPanel'](item);
			self['popup']['addPopupListener'](self);
			if ($p['bool']($p['getattr'](self, 'vertical'))) {
				self['popup']['setPopupPosition']($p['__op_sub']($sub1=$p['__op_add']($add7=self['getAbsoluteLeft'](),$add8=self['getOffsetWidth']()),$sub2=1), item['getAbsoluteTop']());
			}
			else {
				self['popup']['setPopupPosition'](item['getAbsoluteLeft'](), $p['__op_sub']($sub3=$p['__op_add']($add9=self['getAbsoluteTop'](),$add10=self['getOffsetHeight']()),$sub4=1));
			}
			self['shownChildMenu'] = item['getSubMenu']();
			sub_menu = item['getSubMenu']();
			sub_menu['parentMenu'] = self;
			self['popup']['show']();
			return null;
		}
	, 1, [null,null,['self'],['item'],['fireCommand']]);
		$cls_definition['doItemAction'] = $method;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['getattr'](self, 'popup') !== null))) {
				self['popup']['hide']();
			}
			$m['Widget']['onDetach'](self);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$method = $pyjs__bind_method2('itemOver', function(item) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $or5,$or6,$or7;
			if ($p['bool']((item === null))) {
				if ($p['bool'](($p['getattr'](self, 'selectedItem') !== null))) {
					if ($p['bool'](!$p['op_eq'](self['selectedItem']['getSubMenu'](), null))) {
						if ($p['bool']($p['op_eq']($p['getattr'](self, 'shownChildMenu'), self['selectedItem']['getSubMenu']()))) {
							return null;
						}
					}
					else {
						self['selectItem'](item);
						return null;
					}
				}
			}
			self['selectItem'](item);
			if ($p['bool']((item !== null))) {
				if ($p['bool'](($p['bool']($or5=($p['getattr'](self, 'shownChildMenu') !== null))?$or5:($p['bool']($or6=($p['getattr'](self, 'parentMenu') !== null))?$or6:$p['getattr'](self, 'autoOpen'))))) {
					self['doItemAction'](item, false);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['itemOver'] = $method;
		$method = $pyjs__bind_method2('close', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['getattr'](self, 'parentMenu') !== null))) {
				self['parentMenu']['popup']['hide']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['close'] = $method;
		$method = $pyjs__bind_method2('findItem', function(hItem) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hItem = arguments[1];
			}
			var $iter3_idx,$iter3_type,item,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = $p['getattr'](self, 'items');
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				item = $iter3_nextval['$nextval'];
				if ($p['bool']($m['DOM']['isOrHasChild'](item['getElement'](), hItem))) {
					return item;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['hItem']]);
		$cls_definition['findItem'] = $method;
		$method = $pyjs__bind_method2('getItemContainerElement', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool']($p['getattr'](self, 'vertical'))) {
				return $p['getattr'](self, 'body');
			}
			else {
				self['_checkVerticalContainer']();
				return $m['DOM']['getChild']($p['getattr'](self, 'body'), 0);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getItemContainerElement'] = $method;
		$method = $pyjs__bind_method2('onHide', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['getattr'](self, 'shownChildMenu') !== null))) {
				self['shownChildMenu']['onHide']();
				self['popup']['hide']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onHide'] = $method;
		$method = $pyjs__bind_method2('onShow', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if ($p['bool'](($p['cmp']($p['len']($p['getattr'](self, 'items')), 0) == 1))) {
				self['selectItem']($p['getattr'](self, 'items')['__getitem__'](0));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onShow'] = $method;
		$method = $pyjs__bind_method2('selectItem', function(item) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

			if ($p['bool']($p['op_eq'](item, $p['getattr'](self, 'selectedItem')))) {
				return null;
			}
			if ($p['bool'](($p['getattr'](self, 'selectedItem') !== null))) {
				self['selectedItem']['setSelectionStyle'](false);
			}
			if ($p['bool']((item !== null))) {
				item['setSelectionStyle'](true);
			}
			self['selectedItem'] = item;
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['selectItem'] = $method;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MenuBar', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.MenuBar', 'MenuBar', $m['MenuBar']);
	return this;
}; /* end pyjamas.ui.MenuBar */


/* end module: pyjamas.ui.MenuBar */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.DeferredCommand', 'pyjamas.ui.Widget.Widget', 'pyjamas.ui', 'pyjamas.ui.Widget', 'pyjamas.ui.MenuItem.MenuItem', 'pyjamas.ui.MenuItem', 'pyjamas.ui.MenuBarPopupPanel.MenuBarPopupPanel', 'pyjamas.ui.MenuBarPopupPanel', 'pyjamas.ui.Event', 'pyjamas.ui.MultiListener.MultiListener', 'pyjamas.ui.MultiListener']
*/
