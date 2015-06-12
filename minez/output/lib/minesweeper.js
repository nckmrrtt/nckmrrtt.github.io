/* start module: minesweeper */
$pyjs['loaded_modules']['minesweeper'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['minesweeper']['__was_initialized__']) return $pyjs['loaded_modules']['minesweeper'];
	var $m = $pyjs['loaded_modules']['minesweeper'];
	$m['__repr__'] = function() { return '<module: minesweeper>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'minesweeper';
	$m['__name__'] = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['FocusPanel'] = $p['___import___']('pyjamas.ui.FocusPanel.FocusPanel', null, null, false);
	$m['VerticalPanel'] = $p['___import___']('pyjamas.ui.VerticalPanel.VerticalPanel', null, null, false);
	$m['HorizontalPanel'] = $p['___import___']('pyjamas.ui.HorizontalPanel.HorizontalPanel', null, null, false);
	$m['SimplePanel'] = $p['___import___']('pyjamas.ui.SimplePanel.SimplePanel', null, null, false);
	$m['MenuBar'] = $p['___import___']('pyjamas.ui.MenuBar.MenuBar', null, null, false);
	$m['MenuItem'] = $p['___import___']('pyjamas.ui.MenuItem.MenuItem', null, null, false);
	$m['Grid'] = $p['___import___']('pyjamas.ui.Grid.Grid', null, null, false);
	$m['DialogBox'] = $p['___import___']('pyjamas.ui.DialogBox.DialogBox', null, null, false);
	$m['PopupPanel'] = $p['___import___']('pyjamas.ui.PopupPanel.PopupPanel', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['HTMLPanel'] = $p['___import___']('pyjamas.ui.HTMLPanel.HTMLPanel', null, null, false);
	$m['Event'] = $p['___import___']('pyjamas.ui.Event', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['DOM'] = $p['___import___']('pyjamas.DOM', null, null, false);
	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', null, null, false);
	$m['JSONProxy'] = $p['___import___']('pyjamas.JSONService.JSONProxy', null, null, false);
	$m['random'] = $p['___import___']('random', null);
	$m['DataService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'minesweeper';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$p['$$super']($m['DataService'], self)['__init__']('/minesweeper/default/call/jsonrpc', $p['list'](['add_score', 'get_scores']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['JSONProxy']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DataService', $p['tuple']($bases), $data);
	})();
	$m['setColorfulHTML'] = function(element, count) {
		var colors,html,$sub2,$sub1;
		colors = $p['list'](['#0000fe', '#007a00', '#fe0000', '#00007a', '#7a0000', '#007a7a', '#000000', '#7a7a7a']);
		html = $p['sprintf']('<span class="number" style="color:%s;">%d</span>', $p['tuple']([colors['__getitem__']($p['__op_sub']($sub1=count,$sub2=1)), count]));
		$m['DOM']['setInnerHTML'](element, html);
		return null;
	};
	$m['setColorfulHTML']['__name__'] = 'setColorfulHTML';

	$m['setColorfulHTML']['__bind_type__'] = 0;
	$m['setColorfulHTML']['__args__'] = [null,null,['element'],['count']];
	$m['MineMenuBar'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'minesweeper';
		$method = $pyjs__bind_method2('__init__', function(game) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				game = arguments[1];
			}
			var body,menu_help,menu_game;
			self['game'] = game;
			$p['$$super']($m['MineMenuBar'], self)['__init__']();
			body = $doc['getElementsByTagName']('body')['item'](0);
			body['setAttribute']('id', 'Beginner');
			menu_game = $m['MenuBar'](true);
			menu_game['addItem']('New', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)(self, 'New'));
			menu_game['addItem'](self['span_text']('Beginner'), true, (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)(self, 'Beginner'));
			menu_game['addItem'](self['span_text']('Intermediate'), true, (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)(self, 'Intermediate'));
			menu_game['addItem'](self['span_text']('Expert'), true, (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)(self, 'Expert'));
			menu_game['addItem'](self['span_text']('Custom'), true, (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)(self, 'Custom'));
			menu_help = $m['MenuBar'](true);
			menu_help['addItem']('About', (typeof MenuCmd == "undefined"?$m['MenuCmd']:MenuCmd)(self, 'About'));
			self['addItem']($m['MenuItem']('Game', menu_game));
			self['addItem']($m['MenuItem']('Help', menu_help));
			return null;
		}
	, 1, [null,null,['self'],['game']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('span_text', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			return $p['sprintf']('<span class="%s"></span>%s', $p['tuple']([text, text]));
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['span_text'] = $method;
		var $bases = new Array($m['MenuBar']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MineMenuBar', $p['tuple']($bases), $data);
	})();
	$m['MenuCmd'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'minesweeper';
		$method = $pyjs__bind_method2('__init__', function(menu, command) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				menu = arguments[1];
				command = arguments[2];
			}

			self['menu'] = menu;
			self['command'] = command;
			return null;
		}
	, 1, [null,null,['self'],['menu'],['command']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('execute', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var body,modes,level;
			if ($p['bool']($p['tuple'](['Beginner', 'Intermediate', 'Expert', 'Custom'])['__contains__']($p['getattr'](self, 'command')))) {
				body = $doc['getElementsByTagName']('body')['item'](0);
				body['setAttribute']('id', $p['getattr'](self, 'command'));
			}
			modes = $p['dict']([['New', $p['list']([$p['tuple']([0, 0]), 0])], ['Beginner', $p['list']([$p['tuple']([8, 8]), 1])], ['Intermediate', $p['list']([$p['tuple']([16, 16]), 2])], ['Expert', $p['list']([$p['tuple']([16, 32]), 3])]]);
			level = modes['get']($p['getattr'](self, 'command'));
			if ($p['bool'](level)) {
				if ($p['bool'](level['__getitem__'](1))) {
					$p['getattr']($p['getattr'](self, 'menu'), 'game')['level'] = level['__getitem__'](1);
				}
				self['menu']['game']['next_game'](level['__getitem__'](0));
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](self, 'command'), 'Custom'))) {
				$p['getattr']($p['getattr'](self, 'menu'), 'game')['level'] = 4;
				self['show_custom']();
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](self, 'command'), 'Instructions'))) {
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](self, 'command'), 'About'))) {
				self['show_about']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['execute'] = $method;
		$method = $pyjs__bind_method2('show_custom', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_iter,contents,rows,buttons,$iter1_array,$sub3,$sub6,$sub5,$sub4,$iter1_nextval,$div2,$div3,$div1,$div4,$iter1_type,columns,$iter1_idx,bombs,each,top,left;
			self['dialog'] = $pyjs_kwargs_call(null, $m['DialogBox'], null, null, [{'StyleName':'custom-dialog'}]);
			self['dialog']['setHTML']('Custom Settings');
			contents = $pyjs_kwargs_call(null, $m['VerticalPanel'], null, null, [{'StyleName':'contents'}]);
			self['dialog']['setWidget'](contents);
			rows = $m['HorizontalPanel']();
			columns = $m['HorizontalPanel']();
			bombs = $m['HorizontalPanel']();
			buttons = $m['HorizontalPanel']();
			$iter1_iter = $p['tuple']([rows, columns, bombs, buttons]);
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				each = $iter1_nextval['$nextval'];
				contents['add'](each);
			}
			rows['add']($m['Label']('Rows:'));
			self['row'] = $m['TextBox']();
			rows['add']($p['getattr'](self, 'row'));
			columns['add']($m['Label']('Columns:'));
			self['column'] = $m['TextBox']();
			columns['add']($p['getattr'](self, 'column'));
			bombs['add']($m['Label']('Bombs:'));
			self['bomb'] = $m['TextBox']();
			bombs['add']($p['getattr'](self, 'bomb'));
			buttons['add']($m['Button']('OK', $p['getattr'](self, 'new_game')));
			buttons['add']($m['Button']('Cancel', $p['getattr'](self, 'close_dialog')));
			left = (typeof ($div1=$p['__op_sub']($sub3=$m['Window']['getClientWidth'](),$sub4=201))==typeof ($div2=2) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2));
			top = (typeof ($div3=$p['__op_sub']($sub5=$m['Window']['getClientHeight'](),$sub6=190))==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4));
			self['dialog']['setPopupPosition'](left, top);
			self['dialog']['show']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show_custom'] = $method;
		$method = $pyjs__bind_method2('new_game', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var bomb,column,$mul2,$pyjs_try_err,$mul1,row;
			try {
				row = $p['float_int'](self['row']['getText']());
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					$m['Window']['alert']('Invalid number in rows');
					return null;
				}
			}
			try {
				column = $p['float_int'](self['column']['getText']());
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					$m['Window']['alert']('Invalid number in columns');
					return null;
				}
			}
			try {
				bomb = $p['float_int'](self['bomb']['getText']());
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
				$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
				if (true) {
					bomb = 0;
				}
			}
			if ($p['bool'](((($p['cmp'](bomb, (typeof ($mul1=row)==typeof ($mul2=column) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))))|1) == 1))) {
				$m['Window']['alert']('Number of bombs should not be greater than rows x columns.');
			}
			else {
				self['menu']['game']['next_game']($p['tuple']([row, column]), bomb);
				self['close_dialog']();
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['new_game'] = $method;
		$method = $pyjs__bind_method2('close_dialog', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			self['dialog']['hide']();
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['close_dialog'] = $method;
		$method = $pyjs__bind_method2('show_about', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div6,$sub10,$div8,$div7,top,$sub9,html,left,$sub7,$sub8,contents,$div5;
			self['dialog'] = $pyjs_kwargs_call(null, $m['PopupPanel'], null, null, [{'StyleName':'about', 'autoHide':true}]);
			contents = $pyjs_kwargs_call(null, $m['HTMLPanel'], null, null, [{'StyleName':'contents'}, '']);
			self['dialog']['setWidget'](contents);
			html = '<p class="pyjamas">MineSweeper written in Python with <a href="http://pyjs.org" target="_blank">Pyjamas</a><p><p class="comments">Send comments to <a href="mailto:suzan.shakya@gmail.com">suzan.shakya@gmail.com</a>.<p>';
			contents['setHTML'](html);
			left = (typeof ($div5=$p['__op_sub']($sub7=$m['Window']['getClientWidth'](),$sub8=294))==typeof ($div6=2) && typeof $div5=='number' && $div6 !== 0?
				$div5/$div6:
				$p['op_div']($div5,$div6));
			top = (typeof ($div7=$p['__op_sub']($sub9=$m['Window']['getClientHeight'](),$sub10=112))==typeof ($div8=2) && typeof $div7=='number' && $div8 !== 0?
				$div7/$div8:
				$p['op_div']($div7,$div8));
			self['dialog']['setPopupPosition'](left, top);
			self['dialog']['show']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show_about'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('MenuCmd', $p['tuple']($bases), $data);
	})();
	$m['Smiley'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'minesweeper';
		$method = $pyjs__bind_method2('__init__', function(game) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				game = arguments[1];
			}

			self['game'] = game;
			$pyjs_kwargs_call($p['$$super']($m['Smiley'], self), '__init__', null, null, [{'StyleName':'facesmile'}]);
			self['sinkEvents']($p['getattr']($m['Event'], 'ONCONTEXTMENU'));
			self['addClickListener'](self);
			self['addMouseListener'](self);
			self['pressed'] = false;
			return null;
		}
	, 1, [null,null,['self'],['game']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['game']['restart']();
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			self['pressed'] = true;
			self['previousStyleName'] = self['getStyleName']();
			self['setStyleName']('faceooh');
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(sender, x, y) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

			if ($p['bool']($p['getattr'](self, 'pressed'))) {
				self['pressed'] = false;
				self['setStyleName']($p['getattr'](self, 'previousStyleName'));
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

			self['onMouseUp'](sender, 0, 0);
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		var $bases = new Array($m['FocusPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Smiley', $p['tuple']($bases), $data);
	})();
	$m['RemoteHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'minesweeper';
		$method = $pyjs__bind_method2('__init__', function(game) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				game = arguments[1];
			}

			self['game'] = game;
			return null;
		}
	, 1, [null,null,['self'],['game']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onRemoteResponse', function(response, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
				request_info = arguments[2];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](request_info, 'method'), 'get_scores'))) {
				$p['getattr'](self, 'game')['toppers'] = response;
				self['load_top_scores']();
			}
			return null;
		}
	, 1, [null,null,['self'],['response'],['request_info']]);
		$cls_definition['onRemoteResponse'] = $method;
		$method = $pyjs__bind_method2('load_top_scores', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter3_type,player,$iter3_idx,$iter2_iter,score,$iter3_iter,$iter2_type,time,$add13,$add15,$iter2_idx,$add10,$add11,$add12,$iter3_array,$add16,$add14,$iter2_nextval,html,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,$iter3_nextval,$iter2_array;
			html = '<p>These are the top MineSweepers.<p>';
			html = $p['__op_add']($add1=html,$add2="<table class='scores_table'>");
			html = $p['__op_add']($add3=html,$add4=$p['sprintf']('<tr><th> %s </th><th> %s </th><th> %s </th></tr>', $p['tuple'](['Beginner', 'Intermediate', 'Expert'])));
			html = $p['__op_add']($add5=html,$add6='<tr>');
			$iter2_iter = $p['getattr']($p['getattr'](self, 'game'), 'toppers');
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				score = $iter2_nextval['$nextval'];
				html = $p['__op_add']($add7=html,$add8="<td><table class='individual_table'>");
				html = $p['__op_add']($add9=html,$add10="<tr><th class='name'> MineSweepers </th><th class='time'> Time </th></tr>");
				$iter3_iter = score;
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
					player = $tupleassign1[0];
					time = $tupleassign1[1];
					html = $p['__op_add']($add11=html,$add12=$p['sprintf']("<tr><td class='name'> %s </td><td class='time'> %s </td></tr>", $p['tuple']([player, time])));
				}
				html = $p['__op_add']($add13=html,$add14='</table></td>');
			}
			html = $p['__op_add']($add15=html,$add16='</tr></table>');
			$m['SCORES']['setHTML'](html);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['load_top_scores'] = $method;
		$method = $pyjs__bind_method2('onRemoteError', function(code, message, request_info) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				code = arguments[1];
				message = arguments[2];
				request_info = arguments[3];
			}
			var $lambda1;
			$m['LOG']['setHTML']($p['str'](message));
			var 			$lambda1 = function() {

				return $m['LOG']['setHTML']('');
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null];
			$m['Timer'](5000, $lambda1);
			return null;
		}
	, 1, [null,null,['self'],['code'],['message'],['request_info']]);
		$cls_definition['onRemoteError'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RemoteHandler', $p['tuple']($bases), $data);
	})();
	$m['RemainingMineHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'minesweeper';
		$method = $pyjs__bind_method2('__init__', function(game) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				game = arguments[1];
			}

			self['game'] = game;
			return null;
		}
	, 1, [null,null,['self'],['game']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			var $iter5_nextval,$iter5_array,bomb_explodes_on,one,$iter5_iter,$and1,$iter5_idx,$iter5_type,$and2;
			self['game']['counter']['setStyleName']('digit counter');
			bomb_explodes_on = function(){
				var $iter4_nextval,$collcomp1,one,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter;
	$collcomp1 = $p['list']();
			$iter4_iter = $p['getattr']($p['getattr'](self, 'game'), 'bombed_cells');
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				one = $iter4_nextval['$nextval'];
				if ($p['bool'](!$p['op_eq']($p['getattr'](one, 'state'), 1))) {
					$collcomp1['append'](one);
				}
			}

	return $collcomp1;}();
			if ($p['bool'](bomb_explodes_on)) {
				self['game']['show_all_bombs'](bomb_explodes_on);
				$p['getattr'](self, 'game')['started'] = true;
			}
			$iter5_iter = self['game']['get_all_cells']();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				one = $iter5_nextval['$nextval'];
				if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'game'), 'started')))) {
					break;
				}
				else if ($p['bool'](($p['bool']($and1=$p['tuple']([0, 2])['__contains__']($p['getattr'](one, 'state')))?!$p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))):$and1))) {
					self['game']['grid']['onClick'](one);
				}
			}
			$p['getattr'](self, 'game')['started'] = false;
			if ($p['bool'](bomb_explodes_on)) {
				self['game']['face']['setStyleName']('facedead');
			}
			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onClick'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RemainingMineHandler', $p['tuple']($bases), $data);
	})();
	$m['Cell'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'minesweeper';
		$method = $pyjs__bind_method2('__init__', function(x, y, grid) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				x = arguments[1];
				y = arguments[2];
				grid = arguments[3];
			}

			$p['$$super']($m['Cell'], self)['__init__']();
			self['x'] = x;
			self['y'] = y;
			self['grid'] = grid;
			self['count'] = 0;
			self['state'] = 0;
			self['element'] = grid['cellFormatter']['getElement'](x, y);
			self['setStyleName']('blank');
			return null;
		}
	, 1, [null,null,['self'],['x'],['y'],['grid']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array($m['SimplePanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Cell', $p['tuple']($bases), $data);
	})();
	$m['CustomGrid'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'minesweeper';
		$method = $pyjs__bind_method2('__init__', function(game, row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				game = arguments[1];
				row = arguments[2];
				column = arguments[3];
			}
			var $iter7_type,i,$iter6_idx,$iter7_iter,$iter7_array,$iter6_array,j,$iter6_type,$iter7_idx,$iter6_iter,$iter7_nextval,$iter6_nextval;
			$pyjs_kwargs_call($p['$$super']($m['CustomGrid'], self), '__init__', null, null, [{'StyleName':'grid'}, row, column]);
			self['sinkEvents']($p['getattr']($m['Event'], 'ONCONTEXTMENU'));
			self['sinkEvents'](($p['getattr']($m['Event'], 'ONMOUSEDOWN'))|($p['getattr']($m['Event'], 'ONMOUSEUP'))|($p['getattr']($m['Event'], 'ONMOUSEOUT')));
			self['game'] = game;
			self['cells'] = $p['list']([]);
			$iter6_iter = $p['xrange'](row);
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				i = $iter6_nextval['$nextval'];
				self['cells']['append']($p['list']([]));
				$iter7_iter = $p['xrange'](column);
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					j = $iter7_nextval['$nextval'];
					$p['getattr'](self, 'cells')['__getitem__']((typeof ($usub2=1)=='number'?
						-$usub2:
						$p['op_usub']($usub2)))['append']($m['Cell'](i, j, self));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['game'],['row'],['column']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('getCell', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}

			return $p['getattr'](self, 'cells')['__getitem__'](row)['__getitem__'](column);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['getCell'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var column,event_mapper,tr,target_cell,event_handler,table,td,type,row;
			$m['DOM']['eventPreventDefault'](event);
			if ($p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'game'), 'started')))) {
				return null;
			}
			td = self['getEventTargetCell'](event);
			if ($p['bool'](!$p['bool'](td))) {
				return null;
			}
			tr = $m['DOM']['getParent'](td);
			table = $m['DOM']['getParent'](tr);
			row = $m['DOM']['getChildIndex'](table, tr);
			column = $m['DOM']['getChildIndex'](tr, td);
			target_cell = self['getCell'](row, column);
			type = $m['DOM']['eventGetType'](event);
			event_mapper = $p['dict']([['click', 'onClick'], ['contextmenu', 'onRightClick'], ['mousedown', 'onMouseDown'], ['mouseup', 'onMouseUp'], ['mouseout', 'onMouseLeave']]);
			event_handler = event_mapper['get'](type);
			if ($p['bool'](event_handler)) {
				$p['getattr'](self, event_handler)(target_cell);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('onClick', function(target) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}
			var $and3,$and4,$add17,$add18;
			if ($p['bool']($p['op_eq']($p['getattr'](target, 'state'), 1))) {
				return null;
			}
			if ($p['bool'](($p['bool']($and3=$p['op_eq']($p['getattr'](target, 'state'), 3))?$p['getattr'](target, 'count'):$and3))) {
				self['game']['open_if_satisfies'](target);
				return null;
			}
			target['setStyleName']('opened');
			target['state'] = 3;
			$p['getattr'](self, 'game')['count_opened_cells'] = $p['__op_add']($add17=$p['getattr']($p['getattr'](self, 'game'), 'count_opened_cells'),$add18=1);
			if ($p['bool']($p['getattr']($p['getattr'](self, 'game'), 'first_click'))) {
				$p['getattr'](self, 'game')['first_click'] = false;
				self['game']['onTimer'](target);
				if ($p['bool']($p['op_eq']($p['getattr'](target, 'count'), (typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3))))) {
					self['game']['move_to_extra_mine'](target);
				}
			}
			if ($p['bool']($p['op_eq']($p['getattr'](target, 'count'), (typeof ($usub4=1)=='number'?
				-$usub4:
				$p['op_usub']($usub4))))) {
				self['game']['show_all_bombs']($p['list']([target]));
				return null;
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](target, 'count'), 0))) {
				self['game']['open_neighboring_cells'](target);
			}
			else {
				$m['setColorfulHTML'](target['getElement'](), $p['getattr'](target, 'count'));
			}
			self['game']['check_win']();
			return null;
		}
	, 1, [null,null,['self'],['target']]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method2('onRightClick', function(target) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](target, 'state'), 3))) {
				return null;
			}
			if ($p['bool']($p['getattr']($p['getattr'](self, 'game'), 'first_click'))) {
				$p['getattr'](self, 'game')['first_click'] = false;
				self['game']['onTimer'](target);
			}
			if ($p['bool']($p['op_eq']($p['getattr'](target, 'state'), 0))) {
				target['setStyleName']('bombflagged');
				target['state'] = 1;
				self['game']['flagged_cells']['append'](target);
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](target, 'state'), 1))) {
				target['setStyleName']('bombquestion');
				target['state'] = 2;
				self['game']['flagged_cells']['remove'](target);
			}
			else if ($p['bool']($p['op_eq']($p['getattr'](target, 'state'), 2))) {
				target['setStyleName']('blank');
				target['state'] = 0;
			}
			self['game']['set_counter']();
			self['game']['check_win']();
			return null;
		}
	, 1, [null,null,['self'],['target']]);
		$cls_definition['onRightClick'] = $method;
		$method = $pyjs__bind_method2('onMouseDown', function(target) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}
			var $add20,$and5,$and6,$add19;
			if ($p['bool']($p['op_eq']($p['getattr'](target, 'state'), 0))) {
				target['addStyleName']('pressed');
				$p['getattr'](self, 'game')['to_be_released'] = $p['list']([target]);
			}
			if ($p['bool'](($p['bool']($and5=$p['op_eq']($p['getattr'](target, 'state'), 3))?$p['getattr'](target, 'count'):$and5))) {
				self['game']['press_neighbor_cells'](target);
			}
			self['game']['face']['setStyleName']('faceooh');
			$p['getattr'](self, 'game')['no_of_click'] = $p['__op_add']($add19=$p['getattr']($p['getattr'](self, 'game'), 'no_of_click'),$add20=1);
			return null;
		}
	, 1, [null,null,['self'],['target']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method2('onMouseUp', function(target) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}
			var $iter8_idx,$iter8_array,one,$iter8_iter,$iter8_nextval,$iter8_type;
			$iter8_iter = $p['getattr']($p['getattr'](self, 'game'), 'to_be_released');
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				one = $iter8_nextval['$nextval'];
				one['removeStyleName']('pressed');
			}
			$p['getattr'](self, 'game')['to_be_released'] = $p['list']([]);
			self['game']['face']['setStyleName']('facesmile');
			return null;
		}
	, 1, [null,null,['self'],['target']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method2('onMouseLeave', function(target) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}

			self['onMouseUp'](target);
			return null;
		}
	, 1, [null,null,['self'],['target']]);
		$cls_definition['onMouseLeave'] = $method;
		var $bases = new Array($m['Grid']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CustomGrid', $p['tuple']($bases), $data);
	})();
	$m['Game'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'minesweeper';
		$method = $pyjs__bind_method2('__init__', function(row, column) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			if (typeof column == 'undefined') column=arguments['callee']['__args__'][4][1];
			var one,$or1,$or2,$iter9_nextval,$iter9_iter,score_board,$iter9_idx,$iter9_array,$iter9_type,menubar;
			$pyjs_kwargs_call($p['$$super']($m['Game'], self), '__init__', null, null, [{'StyleName':'game'}]);
			self['sinkEvents']($p['getattr']($m['Event'], 'ONCONTEXTMENU'));
			self['row'] = row;
			self['column'] = ($p['bool']($or1=column)?$or1:row);
			self['level'] = 1;
			self['toppers'] = $p['list']([$p['list']([]), $p['list']([]), $p['list']([])]);
			self['remote'] = $m['DataService']();
			self['remote_handler'] = $m['RemoteHandler'](self);
			self['remote']['get_scores']($p['getattr'](self, 'remote_handler'));
			menubar = $m['MineMenuBar'](self);
			score_board = $pyjs_kwargs_call(null, $m['HorizontalPanel'], null, null, [{'StyleName':'score-board'}]);
			self['grid_panel'] = $pyjs_kwargs_call(null, $m['SimplePanel'], null, null, [{'StyleName':'grid-panel'}]);
			self['add'](menubar);
			self['add'](score_board);
			self['add']($p['getattr'](self, 'grid_panel'));
			self['counter'] = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'digit counter'}, '000']);
			self['face'] = $m['Smiley'](self);
			self['timer'] = $pyjs_kwargs_call(null, $m['Label'], null, null, [{'StyleName':'digit timer'}, '000']);
			$iter9_iter = $p['tuple']([$p['getattr'](self, 'counter'), $p['getattr'](self, 'face'), $p['getattr'](self, 'timer')]);
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				one = $iter9_nextval['$nextval'];
				score_board['add'](one);
			}
			score_board['setCellWidth']($p['getattr'](self, 'face'), '100%');
			self['create_grid']();
			self['start']();
			return null;
		}
	, 1, [null,null,['self'],['row'],['column', 0]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onBrowserEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$m['DOM']['eventPreventDefault'](event);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method2('create_grid', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['grid'] = $m['CustomGrid'](self, $p['getattr'](self, 'row'), $p['getattr'](self, 'column'));
			self['grid_panel']['add']($p['getattr'](self, 'grid'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['create_grid'] = $method;
		$method = $pyjs__bind_method2('start', function(no_of_bomb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				no_of_bomb = arguments[1];
			}
			if (typeof no_of_bomb == 'undefined') no_of_bomb=arguments['callee']['__args__'][3][1];
			var $or4,$or3,$sub12,$div10,$div9,$mul6,$mul5,$mul4,$mul3,$sub11;
			self['time'] = (typeof ($usub5=1)=='number'?
				-$usub5:
				$p['op_usub']($usub5));
			self['started'] = true;
			self['first_click'] = true;
			self['bombed_cells'] = $p['list']([]);
			self['flagged_cells'] = $p['list']([]);
			self['to_be_released'] = $p['list']([]);
			self['count_opened_cells'] = 0;
			self['no_of_click'] = 0;
			self['squares'] = (typeof ($mul3=$p['getattr'](self, 'row'))==typeof ($mul4=$p['getattr'](self, 'column')) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4));
			self['no_of_bomb'] = ($p['bool']($or3=no_of_bomb)?$or3:$p['float_int']((typeof ($div9=(typeof ($mul5=$p['getattr'](self, 'squares'))==typeof ($mul6=10) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6)))==typeof ($div10=64) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10))));
			self['no_of_safe_zones'] = $p['__op_sub']($sub11=$p['getattr'](self, 'squares'),$sub12=$p['getattr'](self, 'no_of_bomb'));
			self['set_counter']();
			self['timer']['setText']('000');
			self['generate_bombs']();
			self['face']['setStyleName']('facesmile');
			return null;
		}
	, 1, [null,null,['self'],['no_of_bomb', 0]]);
		$cls_definition['start'] = $method;
		$method = $pyjs__bind_method2('get_all_cells', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter10_nextval,j,one,$iter13_idx,$iter10_iter,$iter11_idx,$iter13_type,$iter11_iter,$iter10_idx,$iter12_array,$iter11_array,$iter11_nextval,$iter13_nextval,$iter13_iter,i,$iter12_type,$iter11_type,$iter10_array,$iter13_array,$iter12_iter,$iter10_type,$iter12_idx,$iter12_nextval;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					$iter12_iter = $p['xrange']($p['getattr'](self, 'row'));
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							i = $iter12_nextval['$nextval'];
							$iter13_iter = $p['xrange']($p['getattr'](self, 'column'));
							$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							$generator_state[2] = 0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
							for (;($generator_state[2] > 0 || typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined');$generator_state[2] = 0) {
								if (typeof $generator_state[2] == 'undefined' || $generator_state[2] === 0) {
									for (var $i = 2 ; $i < ($generator_state['length']<4?4:$generator_state['length']); $i++) $generator_state[$i]=0;
									j = $iter13_nextval['$nextval'];
									one = self['grid']['getCell'](i, j);
									$yield_value = one;
									$yielding = true;
									$generator_state[2] = 1;
									return $yield_value;
									$generator_state[2]=1;
								}
								if ($generator_state[2] == 1) {
									if (typeof $exc != 'undefined' && $exc !== null) {
										$yielding = null;
										$generator_state[2] = -1;
										throw $exc;
									}
									$generator_state[2]=2;
								}
								if ($generator_state[2] == 2) {
								}
							}
							$generator_state[1]=3;
						}
						if ($generator_state[1] == 3) {
							$generator_state[1]=4;
						}
						if ($generator_state[1] == 4) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self']]);
		$cls_definition['get_all_cells'] = $method;
		$method = $pyjs__bind_method2('get_neighbors', function(cell) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cell = arguments[1];
			}
			var $sub20,$sub19,one,$iter16_idx,$iter17_type,$iter16_iter,row,$add28,$iter17_iter,$iter15_iter,$iter16_type,$add21,$add22,$add25,$add24,$add27,$add26,$iter16_nextval,$iter17_nextval,$iter14_array,$sub18,$iter14_type,$sub13,$iter15_array,$sub17,$sub16,$sub15,$sub14,$iter17_array,$iter14_iter,$iter17_idx,$iter14_idx,$iter14_nextval,$iter16_array,column,j,$iter15_idx,i,$iter15_nextval,$iter15_type,y,x,$add23;
var $generator_state = [0], $generator_exc = [null], $yield_value = null, $exc = null, $is_executing=false;
			var $generator = function () {};
			$generator['next'] = function (noStop) {
			
				var $res;
				$yield_value = $exc = null;
				try {
					$res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res == 'undefined') {
						if (noStop === true) {
							$generator_state[0] = -1;
							return;
						}
						throw $p['StopIteration']();
					}
				} catch (e) {
			
					$is_executing=false;
					$generator_state[0] = -1;
					if (noStop === true && $p['isinstance'](e, $p['StopIteration'])) {
						return;
					}
					throw e;
				}
				return $res;
			};
			$generator['__iter__'] = function () {return $generator;};
			$generator['send'] = function ($val) {
			
				$yield_value = $val;
				$exc = null;
				try {
					var $res = $generator['$genfunc']();
					if (typeof $res == 'undefined') throw $p['StopIteration']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw e;
				}
				$is_executing=false;
				return $res;
			};
			$generator['$$throw'] = function ($exc_type, $exc_value) {
			
				$yield_value = null;
				$exc=(typeof $exc_value == 'undefined' ? $exc_type() :
														($p['isinstance']($exc_value, $exc_type)
														 ? $exc_value : $exc_type($exc_value)));
				try {
					var $res = $generator['$genfunc']();
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					throw (e);
				}
				$is_executing=false;
				return $res;
			};
			$generator['close'] = function () {
			
				$yield_value = null;
				$exc=$p['GeneratorExit']();
				try {
					var $res = $generator['$genfunc']();
					$is_executing=false;
					if (typeof $res != 'undefined') throw $p['RuntimeError']('generator ignored GeneratorExit');
				} catch (e) {
			
					$generator_state[0] = -1;
					$is_executing=false;
					if ($p['isinstance'](e, $p['StopIteration']) || $p['isinstance'](e, $p['GeneratorExit'])) return null;
					throw (e);
				}
				return null;
			};
			$generator['$genfunc'] = function () {
				var $yielding = false;
				if ($is_executing) throw $p['ValueError']('generator already executing');
				$is_executing = true;
			
				if (typeof $generator_state[0] == 'undefined' || $generator_state[0] === 0) {
					for (var $i = 0 ; $i < ($generator_state['length']<2?2:$generator_state['length']); $i++) $generator_state[$i]=0;
					if (typeof $exc != 'undefined' && $exc !== null) {
						$yielding = null;
						$generator_state[0] = -1;
						throw $exc;
					}
					x = $p['getattr'](cell, 'x');
					y = $p['getattr'](cell, 'y');
					var $tupleassign3 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'row'), $p['getattr'](self, 'column')]), 2, null);
					row = $tupleassign3[0];
					column = $tupleassign3[1];
					$iter16_iter = $p['xrange']($p['__op_sub']($sub17=x,$sub18=1), $p['__op_add']($add25=x,$add26=2));
					$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
					$generator_state[0]=1;
				}
				if ($generator_state[0] == 1) {
					$generator_state[1] = 0;
					$generator_state[0]=2;
				}
				if ($generator_state[0] == 2) {
					for (;($generator_state[1] > 0 || typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined');$generator_state[1] = 0) {
						if (typeof $generator_state[1] == 'undefined' || $generator_state[1] === 0) {
							for (var $i = 1 ; $i < ($generator_state['length']<3?3:$generator_state['length']); $i++) $generator_state[$i]=0;
							i = $iter16_nextval['$nextval'];
							$generator_state[3] = 0;
							$generator_state[1]=1;
						}
						if ($generator_state[1] == 1) {
							if(($generator_state[2]==1)||($generator_state[2]<1&&($p['bool']((($p['cmp'](0, ($compare5 = i)) < 1)&&($p['cmp']($compare5, ($compare6 = row)) == -1)))))) {
								$generator_state[2]=1;
								if (typeof $generator_state[3] == 'undefined' || $generator_state[3] === 0) {
									for (var $i = 3 ; $i < ($generator_state['length']<5?5:$generator_state['length']); $i++) $generator_state[$i]=0;
									$iter17_iter = $p['xrange']($p['__op_sub']($sub19=y,$sub20=1), $p['__op_add']($add27=y,$add28=2));
									$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
									$generator_state[3]=1;
								}
								if ($generator_state[3] == 1) {
									$generator_state[4] = 0;
									$generator_state[3]=2;
								}
								if ($generator_state[3] == 2) {
									for (;($generator_state[4] > 0 || typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined');$generator_state[4] = 0) {
										if (typeof $generator_state[4] == 'undefined' || $generator_state[4] === 0) {
											for (var $i = 4 ; $i < ($generator_state['length']<6?6:$generator_state['length']); $i++) $generator_state[$i]=0;
											j = $iter17_nextval['$nextval'];
											$generator_state[6] = 0;
											$generator_state[4]=1;
										}
										if ($generator_state[4] == 1) {
											if(($generator_state[5]==1)||($generator_state[5]<1&&($p['bool']((($p['cmp'](0, ($compare7 = j)) < 1)&&($p['cmp']($compare7, ($compare8 = column)) == -1)))))) {
												$generator_state[5]=1;
												if (typeof $generator_state[6] == 'undefined' || $generator_state[6] === 0) {
													for (var $i = 6 ; $i < ($generator_state['length']<8?8:$generator_state['length']); $i++) $generator_state[$i]=0;
													$generator_state[8] = 0;
													$generator_state[6]=1;
												}
												if ($generator_state[6] == 1) {
													if(($generator_state[7]==1)||($generator_state[7]<1&&($p['bool'](!$p['op_eq']($p['tuple']([i, j]), $p['tuple']([x, y])))))) {
														$generator_state[7]=1;
														if (typeof $generator_state[8] == 'undefined' || $generator_state[8] === 0) {
															for (var $i = 8 ; $i < ($generator_state['length']<10?10:$generator_state['length']); $i++) $generator_state[$i]=0;
															one = self['grid']['getCell'](i, j);
															$yield_value = one;
															$yielding = true;
															$generator_state[8] = 1;
															return $yield_value;
															$generator_state[8]=1;
														}
														if ($generator_state[8] == 1) {
															if (typeof $exc != 'undefined' && $exc !== null) {
																$yielding = null;
																$generator_state[8] = -1;
																throw $exc;
															}
															$generator_state[8]=2;
														}
														if ($generator_state[8] == 2) {
														}
													}
													$generator_state[7]=0;
													$generator_state[6]=2;
												}
												if ($generator_state[6] == 2) {
												}
											}
											$generator_state[5]=0;
											$generator_state[4]=2;
										}
										if ($generator_state[4] == 2) {
										}
									}
									$generator_state[3]=3;
								}
								if ($generator_state[3] == 3) {
									$generator_state[3]=4;
								}
								if ($generator_state[3] == 4) {
								}
							}
							$generator_state[2]=0;
							$generator_state[1]=2;
						}
						if ($generator_state[1] == 2) {
						}
					}
					$generator_state[0]=3;
				}
				if ($generator_state[0] == 3) {
					$generator_state[0]=4;
				}
				if ($generator_state[0] == 4) {
				}

				return;
			};
			return $generator;
		}
	, 1, [null,null,['self'],['cell']]);
		$cls_definition['get_neighbors'] = $method;
		$method = $pyjs__bind_method2('set_counter', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $sub22,$and8,$sub21,value,$and7,$add29,template,next_value,$add30;
			next_value = $p['__op_sub']($sub21=$p['getattr'](self, 'no_of_bomb'),$sub22=$p['len']($p['getattr'](self, 'flagged_cells')));
			if ($p['bool'](($p['bool']($and7=$p['op_eq'](next_value, 0))?$p['getattr'](self, 'started'):$and7))) {
				self['counter']['setStyleName']('digit counter-blue');
				self['counter']['addClickListener']($m['RemainingMineHandler'](self));
			}
			else {
				self['counter']['setStyleName']('digit counter');
				$p['getattr'](self, 'counter')['_clickListeners'] = $p['list']([]);
			}
			if ($p['bool'](($p['cmp'](next_value, 0) == -1))) {
				template = '-00';
				next_value = $p['abs'](next_value);
			}
			else {
				template = '000';
			}
			value = $p['str'](next_value);
			value = $p['__op_add']($add29=$p['__getslice'](template, 0, (typeof ($usub6=$p['len'](value))=='number'?
				-$usub6:
				$p['op_usub']($usub6))),$add30=value);
			self['counter']['setText'](value);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['set_counter'] = $method;
		$method = $pyjs__bind_method2('onTimer', function(target) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				target = arguments[1];
			}
			var $or5,$or6,$add32,$add33,$add31,$add34,str_time;
			if ($p['bool'](($p['bool']($or5=!$p['bool']($p['getattr'](self, 'started')))?$or5:$p['getattr'](self, 'first_click')))) {
				return null;
			}
			$m['Timer'](1000, self);
			self['time'] = $p['__op_add']($add31=$p['getattr'](self, 'time'),$add32=1);
			if ($p['bool'](($p['cmp']($p['getattr'](self, 'time'), 999) < 1))) {
				str_time = $p['str']($p['getattr'](self, 'time'));
				str_time = $p['__op_add']($add33=$p['__getslice']('000', 0, (typeof ($usub7=$p['len'](str_time))=='number'?
					-$usub7:
					$p['op_usub']($usub7))),$add34=str_time);
				self['timer']['setText'](str_time);
			}
			else {
				self['started'] = false;
				self['face']['setStyleName']('faceclock');
			}
			return null;
		}
	, 1, [null,null,['self'],['target']]);
		$cls_definition['onTimer'] = $method;
		$method = $pyjs__bind_method2('sample', function(population, k) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				population = arguments[1];
				k = arguments[2];
			}
			var $iter18_type,$iter18_iter,$iter18_array,seq,i,$iter18_idx,s,pick,$iter18_nextval;
			seq = $p['list'](population);
			s = $p['list']([]);
			$iter18_iter = $p['xrange'](k);
			$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
			while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
				i = $iter18_nextval['$nextval'];
				pick = $m['random']['choice'](seq);
				seq['remove'](pick);
				s['append'](pick);
			}
			return s;
		}
	, 1, [null,null,['self'],['population'],['k']]);
		$cls_definition['sample'] = $method;
		$method = $pyjs__bind_method2('generate_bombs', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter20_nextval,bomb,mine,one,$mod1,$mod2,row,$iter19_iter,$iter19_nextval,$iter20_idx,$iter20_array,$iter20_iter,bombs,$iter19_array,$iter20_type,$add38,$iter19_idx,i,$add36,$add37,$add35,column,$iter19_type,$floordiv2,$floordiv1,y,x;
			bombs = self['sample']($p['xrange']($p['getattr'](self, 'squares')), $p['__op_add']($add35=$p['getattr'](self, 'no_of_bomb'),$add36=1));
			var $tupleassign4 = $p['__ass_unpack']($p['tuple']([$p['getattr'](self, 'row'), $p['getattr'](self, 'column')]), 2, null);
			row = $tupleassign4[0];
			column = $tupleassign4[1];
			$iter19_iter = $p['enumerate'](bombs);
			$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
			while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
				var $tupleassign5 = $p['__ass_unpack']($iter19_nextval['$nextval'], 2, null);
				i = $tupleassign5[0];
				bomb = $tupleassign5[1];
				x = (typeof ($floordiv1=bomb)==typeof ($floordiv2=column) && typeof $floordiv1=='number' && $floordiv2 !== 0?
					Math['floor']($floordiv1/$floordiv2):
					$p['op_floordiv']($floordiv1,$floordiv2));
				y = (typeof ($mod1=bomb)==typeof ($mod2=column) && typeof $mod1=='number'?
					(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
					$p['op_mod']($mod1,$mod2));
				mine = self['grid']['getCell'](x, y);
				if ($p['bool']($p['op_eq'](i, 0))) {
					self['extra_mine'] = mine;
					continue;
				}
				self['bombed_cells']['append'](mine);
				mine['count'] = (typeof ($usub8=1)=='number'?
					-$usub8:
					$p['op_usub']($usub8));
				$iter20_iter = self['get_neighbors'](mine);
				$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
				while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
					one = $iter20_nextval['$nextval'];
					if ($p['bool'](!$p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub9=1)=='number'?
						-$usub9:
						$p['op_usub']($usub9))))) {
						one['count'] = $p['__op_add']($add37=$p['getattr'](one, 'count'),$add38=1);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['generate_bombs'] = $method;
		$method = $pyjs__bind_method2('move_to_extra_mine', function(to_be_moved) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				to_be_moved = arguments[1];
			}
			var $sub23,$add39,$iter22_array,$sub24,$iter21_nextval,$iter22_nextval,$iter21_idx,$add41,one,$iter21_type,$iter21_iter,$iter22_idx,$iter22_type,$iter21_array,$add42,$add40,$iter22_iter;
			to_be_moved['count'] = 0;
			self['bombed_cells']['remove'](to_be_moved);
			$iter21_iter = self['get_neighbors'](to_be_moved);
			$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
			while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
				one = $iter21_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub10=1)=='number'?
					-$usub10:
					$p['op_usub']($usub10))))) {
					to_be_moved['count'] = $p['__op_add']($add39=$p['getattr'](to_be_moved, 'count'),$add40=1);
				}
				else {
					one['count'] = $p['__op_sub']($sub23=$p['getattr'](one, 'count'),$sub24=1);
				}
			}
			$p['getattr'](self, 'extra_mine')['count'] = (typeof ($usub11=1)=='number'?
				-$usub11:
				$p['op_usub']($usub11));
			self['bombed_cells']['append']($p['getattr'](self, 'extra_mine'));
			$iter22_iter = self['get_neighbors']($p['getattr'](self, 'extra_mine'));
			$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
			while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
				one = $iter22_nextval['$nextval'];
				if ($p['bool'](!$p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub12=1)=='number'?
					-$usub12:
					$p['op_usub']($usub12))))) {
					one['count'] = $p['__op_add']($add41=$p['getattr'](one, 'count'),$add42=1);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['to_be_moved']]);
		$cls_definition['move_to_extra_mine'] = $method;
		$method = $pyjs__bind_method2('press_neighbor_cells', function(cell) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cell = arguments[1];
			}
			var $iter23_type,$iter23_nextval,$iter23_iter,$add44,$add43,one,$iter23_array,$iter23_idx;
			self['count_flags'] = 0;
			self['bomb_explodes_on'] = $p['list']([]);
			self['to_be_released'] = $p['list']([]);
			$iter23_iter = self['get_neighbors'](cell);
			$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
			while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
				one = $iter23_nextval['$nextval'];
				if ($p['bool']($p['op_eq']($p['getattr'](one, 'state'), 3))) {
					continue;
				}
				one['addStyleName']('pressed');
				self['to_be_released']['append'](one);
				if ($p['bool']($p['op_eq']($p['getattr'](one, 'state'), 1))) {
					self['count_flags'] = $p['__op_add']($add43=$p['getattr'](self, 'count_flags'),$add44=1);
				}
				else {
					if ($p['bool']($p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub13=1)=='number'?
						-$usub13:
						$p['op_usub']($usub13))))) {
						self['bomb_explodes_on']['append'](one);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['cell']]);
		$cls_definition['press_neighbor_cells'] = $method;
		$method = $pyjs__bind_method2('open_if_satisfies', function(cell) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cell = arguments[1];
			}

			if ($p['bool']($p['op_eq']($p['getattr'](self, 'count_flags'), $p['getattr'](cell, 'count')))) {
				if ($p['bool']($p['getattr'](self, 'bomb_explodes_on'))) {
					self['show_all_bombs']($p['getattr'](self, 'bomb_explodes_on'));
				}
				else {
					self['open_neighboring_cells'](cell);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['cell']]);
		$cls_definition['open_if_satisfies'] = $method;
		$method = $pyjs__bind_method2('open_neighboring_cells', function(cell) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cell = arguments[1];
			}
			var $and9,$iter24_idx,$add46,$iter24_type,$and10,$iter24_array,$add45,one,$iter24_iter,$iter24_nextval;
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'started')))) {
				return null;
			}
			$iter24_iter = self['get_neighbors'](cell);
			$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
			while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
				one = $iter24_nextval['$nextval'];
				if ($p['bool'](($p['bool']($and9=$p['tuple']([0, 2])['__contains__']($p['getattr'](one, 'state')))?!$p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub14=1)=='number'?
					-$usub14:
					$p['op_usub']($usub14))):$and9))) {
					one['setStyleName']('opened');
					one['state'] = 3;
					self['count_opened_cells'] = $p['__op_add']($add45=$p['getattr'](self, 'count_opened_cells'),$add46=1);
					if ($p['bool']($p['op_eq']($p['getattr'](one, 'count'), 0))) {
						self['open_neighboring_cells'](one);
					}
					else {
						$m['setColorfulHTML'](one['getElement'](), $p['getattr'](one, 'count'));
					}
				}
			}
			self['check_win']();
			return null;
		}
	, 1, [null,null,['self'],['cell']]);
		$cls_definition['open_neighboring_cells'] = $method;
		$method = $pyjs__bind_method2('check_win', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var name,$iter25_nextval,$iter25_iter,one,$and12,$and11,$iter25_idx,$iter25_type,$iter25_array;
			if ($p['bool'](!$p['bool']($p['getattr'](self, 'started')))) {
				return null;
			}
			if ($p['bool']($p['op_eq']($p['getattr'](self, 'count_opened_cells'), $p['getattr'](self, 'no_of_safe_zones')))) {
				$iter25_iter = $p['getattr'](self, 'bombed_cells');
				$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
				while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
					one = $iter25_nextval['$nextval'];
					if ($p['bool'](!$p['op_eq']($p['getattr'](one, 'state'), 1))) {
						one['setStyleName']('cell bombflagged');
						self['flagged_cells']['append'](one);
					}
				}
				self['started'] = false;
				self['set_counter']();
				self['face']['setStyleName']('facewin');
				name = $m['Window']['prompt']($p['sprintf']("You've done it !\n                                Game Time: %s seconds\n                                Number of Clicks: %s\nWhat's ur name ?", $p['tuple']([$p['getattr'](self, 'time'), $p['getattr'](self, 'no_of_click')])));
				if ($p['bool'](($p['bool']($and11=name)?$p['tuple']([1, 2, 3])['__contains__']($p['getattr'](self, 'level')):$and11))) {
					self['remote']['add_score'](name, $p['getattr'](self, 'level'), $p['getattr'](self, 'time'), $p['getattr'](self, 'no_of_click'), $p['getattr'](self, 'remote_handler'));
					self['add_player_to_toppers'](name);
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['check_win'] = $method;
		$method = $pyjs__bind_method2('add_player_to_toppers', function(name) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}
			var $sub26,$sub25,current_level,toppers_in_this_level,$lambda2;
			current_level = $p['__op_sub']($sub25=$p['getattr'](self, 'level'),$sub26=1);
			toppers_in_this_level = $p['getattr'](self, 'toppers')['__getitem__'](current_level);
			toppers_in_this_level['append']($p['tuple']([$p['sprintf']('<b>%s</b>', name), $p['getattr'](self, 'time')]));
			var 			$lambda2 = function(score) {

				return score['__getitem__'](1);
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null,['score']];
			$p['getattr'](self, 'toppers')['__setitem__'](current_level, $pyjs_kwargs_call(null, $p['sorted'], null, null, [{'key':$lambda2}, toppers_in_this_level]));
			self['remote_handler']['load_top_scores']();
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['add_player_to_toppers'] = $method;
		$method = $pyjs__bind_method2('show_all_bombs', function(bomb_explodes_on) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				bomb_explodes_on = arguments[1];
			}
			if (typeof bomb_explodes_on == 'undefined') bomb_explodes_on=arguments['callee']['__args__'][3][1];
			var $iter27_nextval,$iter28_type,$iter26_idx,$iter26_nextval,$iter28_array,one,$iter26_type,$iter27_array,$iter27_iter,$iter27_idx,$iter28_iter,$iter26_array,$iter26_iter,$iter28_idx,$iter28_nextval,$iter27_type;
			self['started'] = false;
			self['face']['setStyleName']('facedead');
			$iter26_iter = $p['getattr'](self, 'bombed_cells');
			$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
			while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
				one = $iter26_nextval['$nextval'];
				if ($p['bool'](!$p['op_eq']($p['getattr'](one, 'state'), 1))) {
					one['setStyleName']('cell bombrevealed');
				}
			}
			$iter27_iter = $p['getattr'](self, 'flagged_cells');
			$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
			while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
				one = $iter27_nextval['$nextval'];
				if ($p['bool'](!$p['op_eq']($p['getattr'](one, 'count'), (typeof ($usub15=1)=='number'?
					-$usub15:
					$p['op_usub']($usub15))))) {
					one['setStyleName']('cell bombmisflagged');
				}
			}
			$iter28_iter = bomb_explodes_on;
			$iter28_nextval=$p['__iter_prepare']($iter28_iter,false);
			while (typeof($p['__wrapped_next']($iter28_nextval)['$nextval']) != 'undefined') {
				one = $iter28_nextval['$nextval'];
				one['setStyleName']('cell bombdeath');
			}
			return null;
		}
	, 1, [null,null,['self'],['bomb_explodes_on', $p['list']([])]]);
		$cls_definition['show_all_bombs'] = $method;
		$method = $pyjs__bind_method2('next_game', function(level, no_of_bomb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				level = arguments[1];
				no_of_bomb = arguments[2];
			}
			if (typeof level == 'undefined') level=arguments['callee']['__args__'][3][1];
			if (typeof no_of_bomb == 'undefined') no_of_bomb=arguments['callee']['__args__'][4][1];
			var $or7,current_level,$or9,$or8,$and13,$and14;
			current_level = $p['tuple']([$p['getattr'](self, 'row'), $p['getattr'](self, 'column')]);
			if ($p['bool'](($p['bool']($or7=!$p['bool'](level))?$or7:($p['bool']($or8=$p['op_eq'](level, $p['tuple']([0, 0])))?$or8:$p['op_eq'](level, current_level))))) {
				self['restart'](no_of_bomb);
			}
			else {
				var $tupleassign6 = $p['__ass_unpack'](level, 2, null);
				self['row'] = $tupleassign6[0];
				self['column'] = $tupleassign6[1];
				if ($p['bool'](($p['bool']($and13=($p['cmp'](level['__getitem__'](0), current_level['__getitem__'](0)) < 1))?($p['cmp'](level['__getitem__'](1), current_level['__getitem__'](1)) < 1):$and13))) {
					$pyjs_kwargs_call(self['grid'], 'resize', level, null, [{}]);
					self['restart'](no_of_bomb);
				}
				else {
					self['grid_panel']['remove']($p['getattr'](self, 'grid'));
					self['create_grid']();
					self['start'](no_of_bomb);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['level', null],['no_of_bomb', 0]]);
		$cls_definition['next_game'] = $method;
		$method = $pyjs__bind_method2('restart', function(no_of_bomb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				no_of_bomb = arguments[1];
			}
			if (typeof no_of_bomb == 'undefined') no_of_bomb=arguments['callee']['__args__'][3][1];
			var $iter29_type,one,$iter29_nextval,$iter29_idx,$iter29_iter,$iter29_array;
			$iter29_iter = self['get_all_cells']();
			$iter29_nextval=$p['__iter_prepare']($iter29_iter,false);
			while (typeof($p['__wrapped_next']($iter29_nextval)['$nextval']) != 'undefined') {
				one = $iter29_nextval['$nextval'];
				one['count'] = 0;
				one['state'] = 0;
				one['setStyleName']('blank');
				$m['DOM']['setInnerHTML'](one['getElement'](), '');
			}
			self['start'](no_of_bomb);
			return null;
		}
	, 1, [null,null,['self'],['no_of_bomb', 0]]);
		$cls_definition['restart'] = $method;
		var $bases = new Array($m['VerticalPanel']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Game', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('./public/minesweeper.html');
		$m['LOG'] = $pyjs_kwargs_call(null, $m['HTMLPanel'], null, null, [{'StyleName':'log'}, '']);
		$m['SCORES'] = $pyjs_kwargs_call(null, $m['HTMLPanel'], null, null, [{'StyleName':'scores'}, '']);
		$m['game'] = $m['Game'](8, 8);
		$m['RootPanel']('content')['add']($m['game']);
		$m['RootPanel']('content')['add']($m['SCORES']);
		$m['RootPanel']('content')['add']($m['LOG']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end minesweeper */


/* end module: minesweeper */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.FocusPanel.FocusPanel', 'pyjamas.ui.FocusPanel', 'pyjamas.ui.VerticalPanel.VerticalPanel', 'pyjamas.ui.VerticalPanel', 'pyjamas.ui.HorizontalPanel.HorizontalPanel', 'pyjamas.ui.HorizontalPanel', 'pyjamas.ui.SimplePanel.SimplePanel', 'pyjamas.ui.SimplePanel', 'pyjamas.ui.MenuBar.MenuBar', 'pyjamas.ui.MenuBar', 'pyjamas.ui.MenuItem.MenuItem', 'pyjamas.ui.MenuItem', 'pyjamas.ui.Grid.Grid', 'pyjamas.ui.Grid', 'pyjamas.ui.DialogBox.DialogBox', 'pyjamas.ui.DialogBox', 'pyjamas.ui.PopupPanel.PopupPanel', 'pyjamas.ui.PopupPanel', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pyjamas.ui.HTMLPanel.HTMLPanel', 'pyjamas.ui.HTMLPanel', 'pyjamas.ui.Event', 'pyjamas.Window', 'pyjamas.DOM', 'pyjamas.Timer.Timer', 'pyjamas.Timer', 'pyjamas.JSONService.JSONProxy', 'pyjamas.JSONService', 'random']
*/
