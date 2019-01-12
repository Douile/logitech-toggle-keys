// sorry about this messy ass code

const OUTPUT_TEMPLATE = atob('LS0gY2hvb3NlIHlvdXIga2V5cyBoZXJlCmtleXNldHVwID0gJXNldHVwJTsKLS0gaWYgdXNpbmcgbW91c2Ugc2V0IHRvIHRydWUKbW91c2UgPSAlbW91c2UlOwotLSBzZXQgdG8gdHJ1ZSB0byBsb2cgYWxsIGJ1dHRvbiBwcmVzc2VzICh1c2VmdWwgd2hlbiB5b3UgZG9uJ3Qga25vdyB3aGF0IG51bWJlciBhIGtleSBpcykKbG9nYWxsID0gJWxvZyU7Ci0tIGNoYW5nZSB0aGUgZGVsYXkgYmV0d2VlbiB0YXBzCnRhcF9kZWxheSA9ICVkZWxheSU7CnRhcF9ob2xkX2RlbGF5ID0gJWhvbGRfZGVsYXklOwoKLS0gZG8gbm90IGNoYW5nZSB0aGUgY29kZSBiZWxvdwpPdXRwdXRMb2dNZXNzYWdlKCJTY3JpcHQgaW5pdGlhbGl6ZWQKV3JpdHRlbiBieTogRG91aWxlCiIpOwppZiAobW91c2UgPT0gdHJ1ZSkgdGhlbgogIGV2ZW50bGlzdGVuID0gIk1PVVNFX0JVVFRPTl9QUkVTU0VEIjsKCU91dHB1dExvZ01lc3NhZ2UoIkNvbmZpZ3VyZWQgZm9yIG1vdXNlIGJ1dHRvbnMKIik7CmVsc2UKCWV2ZW50bGlzdGVuID0gIkdfUFJFU1NFRCI7CglPdXRwdXRMb2dNZXNzYWdlKCJDb25maWd1cmVkIGZvciBrZXlib2FyZCBidXR0b25zCiIpOwplbmQKZm9yIGssdiBpbiBwYWlycyhrZXlzZXR1cCkgZG8KCU91dHB1dExvZ01lc3NhZ2UoIkJ1dHRvbiAlZCB3aWxsIHRvZ2dsZSAlcyAoJWQgcHJlc3NlcykKIix2WzFdLGssdlsyXSk7CmVuZApPdXRwdXRMb2dNZXNzYWdlKCIKLSBzdGFydCBydW50aW1lIGxvZyAtCiIpOwoKa2V5c3ByZXNzZWQgPSB7fTsKCmZ1bmN0aW9uIE9uRXZlbnQoZXZlbnQsIGFyZykKICBpZiAoZXZlbnQgPT0gZXZlbnRsaXN0ZW4pIHRoZW4KICAgIGlmIChsb2dhbGwgPT0gdHJ1ZSkgdGhlbgogICAgICBPdXRwdXRMb2dNZXNzYWdlKCJLZXkgJWQgcHJlc3NlZAoiLGFyZyk7CiAgICBlbmQKICAgIGZvciBrLHYgaW4gcGFpcnMoa2V5c2V0dXApIGRvCiAgICAgIGlmIChhcmcgPT0gdlsxXSBhbmQgayB+PSBudWxsKSB0aGVuCiAgICAgICAgICBpZiAoa2V5c3ByZXNzZWRba10gPT0gdHJ1ZSkgdGhlbgogICAgICAgICAgICBSZWxlYXNlS2V5KGspOwogICAgICAgICAgICBrZXlzcHJlc3NlZFtrXSA9IGZhbHNlOwogICAgICAgICAgICBPdXRwdXRMb2dNZXNzYWdlKCJSZWNpZXZlZCAlcyAlZCByZWxlYXNlZCAlcwoiLGV2ZW50LHZbMV0sayk7CiAgICAgICAgICAgIE91dHB1dExDRE1lc3NhZ2Uoc3RyaW5nLmZvcm1hdCgiUHJlc3NpbmcgJXMiLGspKTsKICAgICAgICAgIGVsc2UKICAgICAgICAgICAgZm9yIGk9MCx2WzJdIGRvCiAgICAgICAgICAgICAgUHJlc3NLZXkoayk7CiAgICAgICAgICAgICAgU2xlZXAodGFwX2hvbGRfZGVsYXkpOwogICAgICAgICAgICAgIFJlbGVhc2VLZXkoayk7CiAgICAgICAgICAgICAgU2xlZXAodGFwX2RlbGF5KTsKICAgICAgICAgICAgZW5kCiAgICAgICAgICAgIFByZXNzS2V5KGspOwogICAgICAgICAgICBrZXlzcHJlc3NlZFtrXSA9IHRydWU7CiAgICAgICAgICAgIE91dHB1dExvZ01lc3NhZ2UoIlJlY2lldmVkICVzICVkIHByZXNzZWQgJXMKIixldmVudCx2WzFdLGspOwogICAgICAgICAgICBPdXRwdXRMQ0RNZXNzYWdlKHN0cmluZy5mb3JtYXQoIlJlbGVhc2luZyAlcyIsaykpOwogICAgICAgICAgZW5kCiAgICAgICAgZW5kCiAgICAgIGVuZAogICAgZW5kCiAgZW5kCmVuZAo=');


const VALUES = {
  get deviceType() {
    return document.querySelector('#device-type').value;
  },
  get logging() {
    return document.querySelector('#logging').checked;
  },
  set active(value) {
    let dom = document.querySelector('#toggle-no');
    dom.innerText = value;
  },
  get toggleCount() {
    return document.querySelectorAll('.toggle').length;
  },
  get toggleContainer() {
    return document.querySelector('.inputs-body');
  },
  get toggles() {
    var output = [],
    nodes = document.querySelectorAll('.toggle');
    for (var i=0;i<nodes.length;i++) {
      let node = nodes[i];
      let nodeData = {
        'key': node.querySelector('.toggle-key').value,
        'button': node.querySelector('.toggle-button > select').value,
        'taps': isNaN(parseInt(node.querySelector('.number-input > input').value)) ? node.querySelector('.number-input > input').value : '0'
      };
      output.push(nodeData);
    }
    return output;
  },
  get tapDelay() {
    return document.querySelector('#tap-delay').value;
  },
  get tapHoldDelay() {
    return document.querySelector('#tap-hold-delay').value;
  },
  addToggle: function() {
    let dom = VALUES.newToggle();
    VALUES.toggleContainer.appendChild(dom);
    VALUES.active = VALUES.toggleCount;
    Actions.update();
  },
  newToggle: function() {
    let dom = document.createElement('div');
    dom.setAttribute('class','toggle');
    let key = VALUES.elements.newKey();
    dom.appendChild(key);
    let button = VALUES.elements.newButton();
    dom.appendChild(button);
    let number = VALUES.elements.newNumber();
    dom.appendChild(number);
    let remove = VALUES.elements.newRemove();
    dom.appendChild(remove);
    return dom;
  },
  'elements': {
    newKey: function() {
      let dom = document.createElement('input');
      dom.setAttribute('type','text');
      dom.setAttribute('placeholder','Key');
      dom.setAttribute('class','toggle-key');
      dom.setAttribute('title','Right click me for manual input');
      dom.addEventListener('click',Actions.keyHandler);
      dom.addEventListener('contextmenu',Actions.keyContHandler);
      return dom;
    },
    newButton: function() {
      let dom = document.createElement('div');
      dom.setAttribute('class','inline-div toggle-button');
      let label = document.createElement('label');
      label.innerText = 'Button: ';
      dom.appendChild(label);
      let select = document.createElement('select');
      let optionKeyCount = 18;
      for (var x=1;x < optionKeyCount+1;x++) {
        let option = document.createElement('option');
        option.innerText = `G${x}`;
        option.setAttribute('value',x);
        select.appendChild(option);
      }
      dom.appendChild(select);
      dom.addEventListener('change',Actions.update);
      return dom;
    },
    newRemove: function() {
      let dom = document.createElement('input');
      dom.setAttribute('type','submit');
      dom.setAttribute('value','Remove');
      dom.addEventListener('click',Actions.closeInput);
      return dom;
    },
    newNumber: function() {
      let dom = document.createElement('div');
      dom.setAttribute('class','inline-div number-input');
      let label = document.createElement('label');
      label.innerText = 'Tap count: ';
      dom.appendChild(label);
      let input = document.createElement('input');
      input.setAttribute('type','text');
      input.setAttribute('value','0');
      input.setAttribute('class','number')
      // input.addEventListener('keydown',Actions.numberHandlerStart);
      // input.addEventListener('keyup',Actions.numberHandlerEnd);
      dom.appendChild(input);
      return dom;
    }
  }
}

const Actions = {
  closeInput: function(e) {
    e.target.parentNode.remove();
    VALUES.active = VALUES.toggleCount;
    Actions.update();
  },
  keyHandler: function(e) {
    if (e.button === 0) {
      Actions.keyInput(e);
    } else if (e.button === 2) {
      Actions.keyManual(e);
    }
  },
  keyContHandler: function(e) {
    e.preventDefault();
    Actions.keyManual(e);
  },
  keyManual: function(e) {
    var key = prompt('Manually input key code','');
    e.target.value = key;
    e.target.blur();
    Actions.update();
  },
  keyInput: function(e) {
    //e.target.blur();
    e.target.setAttribute('active-key','');
    document.querySelector('.key-capture').setAttribute('capturing','');
  },
  captureKey: function(e) {
    let keyCapture = document.querySelector('.key-capture');
    if (keyCapture.getAttribute('capturing') !== null) {
      e.preventDefault();
      let key = parseKey(e.code);
      let node = document.querySelector('.toggle-key[active-key]');
      node.value = key;
      node.removeAttribute('active-key');
      node.blur();
      keyCapture.removeAttribute('capturing');
      Actions.update();
    }
  },
  update: function() {
    output();
  },
  copy: function() {
    Actions.update();
    var text = document.querySelector('#output-area').value;
    copyTextToClipboard(text);
  },
  save: function() {
    Actions.update();
    var text = document.querySelector('#output-area').value;
    var filename = prompt('Enter filename','toggle_keys.lua');
    if (filename !== null) {
      saveTextFile(filename,text);
    }
  },
  help: function() {
    alert('HELP\nClick key button to input a key (WARNING f keys still do normal function).\nIf unable to input key you can manually input the keyname by right clicking key button\n');
  },
  numberHandlerStart: function(e) {
    if (e.key.match(/[^0-9]/) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  },
  numberHandlerEnd: function(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g,'');
    let n = parseInt(e.target.value).toString();
    if (isNaN(n)) {
      n = 0;
    }
    e.target.value = n.toString();
    Actions.update();
  }
}

function parseKey(code) {
  console.log(code);
  var key = code;
  // too much regex. idc
  if (/^key[a-z]$/i.test(code)) {
    key = code.substr(3,1);
  } else if (/^digit[0-9]$/i.test(code)) {
    key = code.substr(5,1);
  } else if (/^f[0-9]{1,2}$/i.test(code)) {
    key = code;
  } else if (/^numpad[0-9]$/i.test(code)) {
    key = 'num'+code.substr(6,1);
  } else if (/^arrow(?:up|down|left|right)$/i.test(code)) {
    key = code.substr(5);
  } else if (/^bracket(?:left|right)$/i.test(code)) {
    key = code.substr(7,1)+'bracket';
  } else if (/^shift(?:left|right)$/i.test(code)) {
    key = code.substr(5,1)+'shift';
  } else if (/^control(?:left|right)$/i.test(code)) {
    key = code.substr(7,1)+'ctrl';
  } else if (/^alt(?:left|right)$/i.test(code)) {
    key = code.substr(3,1)+'alt';
  } else if (/^intlbackslash$/i.test(code)) {
    key = 'backslash';
  } else if (/^backquote$/i.test(code)) {
    key = 'tilde';
  } else if (/^numpaddivide$/i.test(code)) {
    key = 'numslash';
  } else if (/^numpadmultiply$/i.test(code)) {
    key = 'nummult'; // not sure about this one
  } else if (/^numpadadd$/i.test(code)) {
    key = 'numplus';
  } else if (/^numpadsubtract$/i.test(code)) {
    key = 'numminus';
  } else if (/^numpadenter$/i.test(code)) {
    key = 'numenter';
  } else if (/^numpaddecimal$/i.test(code)) {
    key = 'numperiod';
  }
  key = key.toLowerCase();
  return key;
}

function output() {
  var mouse = VALUES.deviceType === 'Mouse' ? 'true' : 'false';
  var log = VALUES.logging;
  var tapDelay = VALUES.tapDelay;
  var tapHoldDelay = VALUES.tapHoldDelay;
  var keySetup = '{';
  var keys = VALUES.toggles;
  for (var i=0;i<keys.length;i++) {
    if (keys[i].key !== '') {
      let key = `${keys[i].key}={${keys[i].button},${keys[i].taps}},`;
      keySetup += key;
    }
  }
  if (keySetup.endsWith(',')) {
    keySetup = keySetup.substr(0,keySetup.length-1);
  }
  keySetup += '}';
  var script = OUTPUT_TEMPLATE.replace('%setup%',keySetup).replace('%mouse%',mouse).replace('%log%',log).replace('%delay%',tapDelay).replace('%hold_delay%',tapHoldDelay);
  document.querySelector('#output-area').value = script;
}


function init() {
  VALUES.addToggle();
  document.querySelector('#add-toggle').addEventListener('click',VALUES.addToggle);
  window.addEventListener('keydown',Actions.captureKey);
  document.querySelector('#logging').addEventListener('click',Actions.update);
  document.querySelector('#device-type').addEventListener('change',Actions.update);
  document.querySelector('#copy-output').addEventListener('click',Actions.copy);
  document.querySelector('#download-output').addEventListener('click',Actions.save);
  document.querySelector('#help').addEventListener('click',Actions.help);
  window.addEventListener('keydown',(e) => {
    if (e.target.tagName === 'INPUT') {
      if (e.target.classList.contains('number')) {
        Actions.numberHandlerStart(e);
      }
    }
  });
  window.addEventListener('keyup',(e) => {
    if (e.target.tagName === 'INPUT') {
      if (e.target.classList.contains('number')) {
        Actions.numberHandlerEnd(e);
      }
    }
  });
}

init();
