import pyjd # this is dummy in pyjs
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Label import Label

pyjd.setup('public/hello.html')
l = Label('Hello pyjs')
RootPanel().add(l)
pyjd.run()