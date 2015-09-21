from browser import document as doc
from browser import alert

def echo(*args):
    alert("Hello %s !" %doc["zone"].value)

doc["test"].bind("click", echo)