/* start module: pyjamas.ui.FlexTable */
$pyjs['loaded_modules']['pyjamas.ui.FlexTable'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.ui.FlexTable']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.ui.FlexTable'];
	if(typeof $pyjs['loaded_modules']['pyjamas.ui'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas.ui']['__was_initialized__']) $p['___import___']('pyjamas.ui', null);
	var $m = $pyjs['loaded_modules']['pyjamas.ui.FlexTable'];
	$m['__repr__'] = function() { return '<module: pyjamas.ui.FlexTable>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FlexTable';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas.ui']['FlexTable'] = $pyjs['loaded_modules']['pyjamas.ui.FlexTable'];


	$m['pyjd'] = $p['___import___']('pyjd', 'pyjamas.ui');
	if ($p['bool']($p['getattr']($m['pyjd'], 'is_desktop'))) {
	}
	$m['Factory'] = $p['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	$m['HTMLTable'] = $p['___import___']('pyjamas.ui.HTMLTable.HTMLTable', 'pyjamas.ui', null, false);
	$m['RowFormatter'] = $p['___import___']('pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui', null, false);
	$m['FlexCellFormatter'] = $p['___import___']('pyjamas.ui.FlexCellFormatter.FlexCellFormatter', 'pyjamas.ui', null, false);
	$m['FlexTable'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'pyjamas.ui.FlexTable';
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

			if ($p['bool'](!$p['bool'](kwargs['has_key']('CellFormatter')))) {
				kwargs['__setitem__']('CellFormatter', $m['FlexCellFormatter'](self));
			}
			$pyjs_kwargs_call($m['HTMLTable'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('addCell', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			self['insertCell'](row, self['getCellCount'](row));
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['addCell'] = $method;
		$method = $pyjs__bind_method2('getCellCount', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			self['checkRowBounds'](row);
			return self['getDOMCellCount'](self['getBodyElement'](), row);
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['getCellCount'] = $method;
		$method = $pyjs__bind_method2('getFlexCellFormatter', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getCellFormatter']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFlexCellFormatter'] = $method;
		$method = $pyjs__bind_method2('getRowCount', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getDOMRowCount']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRowCount'] = $method;
		$method = $pyjs__bind_method2('removeCells', function(row, column, num) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				num = arguments[3];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,i,$iter1_array;
			$iter1_iter = $p['range'](num);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				i = $iter1_nextval['$nextval'];
				self['removeCell'](row, column);
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['num']]);
		$cls_definition['removeCells'] = $method;
		$method = $pyjs__bind_method2('prepareCell', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var required,$add2,cellCount,$add1,$sub2,$sub1;
			self['prepareRow'](row);
			cellCount = self['getCellCount'](row);
			required = $p['__op_sub']($sub1=$p['__op_add']($add1=column,$add2=1),$sub2=cellCount);
			if ($p['bool'](($p['cmp'](required, 0) == 1))) {
				self['addCells'](self['getBodyElement'](), row, required);
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['prepareCell'] = $method;
		$method = $pyjs__bind_method2('prepareRow', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$add3,i,rowCount,$iter2_idx,$add4,$iter2_array;
			rowCount = self['getRowCount']();
			$iter2_iter = $p['range'](rowCount, $p['__op_add']($add3=row,$add4=1));
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				i = $iter2_nextval['$nextval'];
				self['insertRow'](i);
			}
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['prepareRow'] = $method;
		$method = $pyjs__bind_method2('addCells', function(table, row, num) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				row = arguments[2];
				num = arguments[3];
			}
			var rowElem,$iter3_idx,i,$iter3_array,cell,$iter3_iter,$iter3_type,$iter3_nextval;
			rowElem = table['rows']['item'](row);
			$iter3_iter = $p['range'](num);
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				i = $iter3_nextval['$nextval'];
				cell = $doc['createElement']('td');
				rowElem['appendChild'](cell);
			}
			return null;
		}
	, 1, [null,null,['self'],['table'],['row'],['num']]);
		$cls_definition['addCells'] = $method;
		var $bases = new Array($m['HTMLTable']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FlexTable', $p['tuple']($bases), $data);
	})();
	$m['Factory']['registerClass']('pyjamas.ui.FlexTable', 'FlexTable', $m['FlexTable']);
	return this;
}; /* end pyjamas.ui.FlexTable */


/* end module: pyjamas.ui.FlexTable */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.ui.HTMLTable.HTMLTable', 'pyjamas.ui', 'pyjamas.ui.HTMLTable', 'pyjamas.ui.RowFormatter.RowFormatter', 'pyjamas.ui.RowFormatter', 'pyjamas.ui.FlexCellFormatter.FlexCellFormatter', 'pyjamas.ui.FlexCellFormatter']
*/
