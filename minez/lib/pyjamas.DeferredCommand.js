/* start module: pyjamas.DeferredCommand */
$pyjs['loaded_modules']['pyjamas.DeferredCommand'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjamas.DeferredCommand']['__was_initialized__']) return $pyjs['loaded_modules']['pyjamas.DeferredCommand'];
	if(typeof $pyjs['loaded_modules']['pyjamas'] == 'undefined' || !$pyjs['loaded_modules']['pyjamas']['__was_initialized__']) $p['___import___']('pyjamas', null);
	var $m = $pyjs['loaded_modules']['pyjamas.DeferredCommand'];
	$m['__repr__'] = function() { return '<module: pyjamas.DeferredCommand>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.DeferredCommand';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['pyjamas']['DeferredCommand'] = $pyjs['loaded_modules']['pyjamas.DeferredCommand'];


	$m['Timer'] = $p['___import___']('pyjamas.Timer.Timer', 'pyjamas', null, false);
	$m['deferredCommands'] = $p['list']([]);
	$m['timerIsActive'] = false;
	$m['add'] = function(cmd) {

		$m['deferredCommands']['append'](cmd);
		(typeof maybeSetDeferredCommandTimer == "undefined"?$m['maybeSetDeferredCommandTimer']:maybeSetDeferredCommandTimer)();
		return null;
	};
	$m['add']['__name__'] = 'add';

	$m['add']['__bind_type__'] = 0;
	$m['add']['__args__'] = [null,null,['cmd']];
	$m['flushDeferredCommands'] = function() {
		var $iter1_nextval,$iter1_type,i,$iter1_iter,current,$iter1_array,$iter1_idx;
		$iter1_iter = $p['range']($p['len']($m['deferredCommands']));
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			i = $iter1_nextval['$nextval'];
			current = $m['deferredCommands']['__getitem__'](0);
			$m['deferredCommands']['__delitem__'](0);
			if ($p['bool'](current)) {
				if ($p['bool']($p['hasattr'](current, 'execute'))) {
					current['execute']();
				}
				else {
					current();
				}
			}
		}
		return null;
	};
	$m['flushDeferredCommands']['__name__'] = 'flushDeferredCommands';

	$m['flushDeferredCommands']['__bind_type__'] = 0;
	$m['flushDeferredCommands']['__args__'] = [null,null];
	$m['maybeSetDeferredCommandTimer'] = function() {
		var $and1,$and2;
		if ($p['bool'](($p['bool']($and1=!$p['bool']($m['timerIsActive']))?!$p['bool']($p['op_eq']($p['len']($m['deferredCommands']), 0)):$and1))) {
			$m['Timer'](1, (typeof onTimer == "undefined"?$m['onTimer']:onTimer));
			$m['timerIsActive'] = true;
		}
		return null;
	};
	$m['maybeSetDeferredCommandTimer']['__name__'] = 'maybeSetDeferredCommandTimer';

	$m['maybeSetDeferredCommandTimer']['__bind_type__'] = 0;
	$m['maybeSetDeferredCommandTimer']['__args__'] = [null,null];
	$m['onTimer'] = function(t) {

		$m['flushDeferredCommands']();
		$m['timerIsActive'] = false;
		$m['maybeSetDeferredCommandTimer']();
		return null;
	};
	$m['onTimer']['__name__'] = 'onTimer';

	$m['onTimer']['__bind_type__'] = 0;
	$m['onTimer']['__args__'] = [null,null,['t']];
	return this;
}; /* end pyjamas.DeferredCommand */


/* end module: pyjamas.DeferredCommand */


/*
PYJS_DEPS: ['pyjamas.Timer.Timer', 'pyjamas', 'pyjamas.Timer']
*/
