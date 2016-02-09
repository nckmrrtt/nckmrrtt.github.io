/* start module: hello */
$pyjs['loaded_modules']['hello'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['hello']['__was_initialized__']) return $pyjs['loaded_modules']['hello'];
	var $m = $pyjs['loaded_modules']['hello'];
	$m['__repr__'] = function() { return '<module: hello>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'hello';
	$m['__name__'] = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['pyjd']['setup']('public/hello.html');
	$m['l'] = $m['Label']('Hello pyjs');
	$m['RootPanel']()['add']($m['l']);
	$m['pyjd']['run']();
	return this;
}; /* end hello */


/* end module: hello */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label']
*/
