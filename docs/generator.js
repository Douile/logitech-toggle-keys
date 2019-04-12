// sorry about this messy ass code

const OUTPUT_TEMPLATE = atob('LS0gY2hvb3NlIHlvdXIga2V5cyBoZXJlCmtleXNldHVwID0gJXNldHVwJTsKLS0gaWYgdXNpbmcgbW91c2Ugc2V0IHRvIHRydWUKbW91c2UgPSAlbW91c2UlOwotLSBzZXQgdG8gdHJ1ZSB0byBsb2cgYWxsIGJ1dHRvbiBwcmVzc2VzICh1c2VmdWwgd2hlbiB5b3UgZG9uJ3Qga25vdyB3aGF0IG51bWJlciBhIGtleSBpcykKbG9nYWxsID0gJWxvZyU7Ci0tIGNoYW5nZSB0aGUgZGVsYXkgYmV0d2VlbiB0YXBzCnRhcF9kZWxheSA9ICVkZWxheSU7CnRhcF9ob2xkX2RlbGF5ID0gJWhvbGRfZGVsYXklOwoKLS0gZG8gbm90IGNoYW5nZSB0aGUgY29kZSBiZWxvdwpPdXRwdXRMb2dNZXNzYWdlKCJTY3JpcHQgaW5pdGlhbGl6ZWQKV3JpdHRlbiBieTogRG91aWxlCiIpOwppZiAobW91c2UgPT0gdHJ1ZSkgdGhlbgogIGV2ZW50bGlzdGVuID0gIk1PVVNFX0JVVFRPTl9QUkVTU0VEIjsKICBPdXRwdXRMb2dNZXNzYWdlKCJDb25maWd1cmVkIGZvciBtb3VzZSBidXR0b25zCiIpOwplbHNlCiAgZXZlbnRsaXN0ZW4gPSAiR19QUkVTU0VEIjsKICBPdXRwdXRMb2dNZXNzYWdlKCJDb25maWd1cmVkIGZvciBrZXlib2FyZCBidXR0b25zCiIpOwplbmQKZm9yIGssdiBpbiBwYWlycyhrZXlzZXR1cCkgZG8KICBPdXRwdXRMb2dNZXNzYWdlKCJCdXR0b24gJWQgd2lsbCB0b2dnbGUgJXMgKCVkIHByZXNzZXMpCiIsdlsxXSxrLHZbMl0pOwplbmQKT3V0cHV0TG9nTWVzc2FnZSgiCi0gc3RhcnQgcnVudGltZSBsb2cgLQoiKTsKCmtleXNwcmVzc2VkID0ge307CgpmdW5jdGlvbiBPbkV2ZW50KGV2ZW50LCBhcmcpCiAgaWYgKGV2ZW50ID09IGV2ZW50bGlzdGVuKSB0aGVuCiAgICBpZiAobG9nYWxsID09IHRydWUpIHRoZW4KICAgICAgT3V0cHV0TG9nTWVzc2FnZSgiS2V5ICVkIHByZXNzZWQKIixhcmcpOwogICAgZW5kCiAgICBmb3Igayx2IGluIHBhaXJzKGtleXNldHVwKSBkbwogICAgICBpZiAoYXJnID09IHZbMV0gYW5kIGsgfj0gbnVsbCkgdGhlbgogICAgICAgIGlmIChrZXlzcHJlc3NlZFtrXSA9PSB0cnVlKSB0aGVuCiAgICAgICAgICBSZWxlYXNlS2V5KGspOwogICAgICAgICAga2V5c3ByZXNzZWRba10gPSBmYWxzZTsKICAgICAgICAgIE91dHB1dExvZ01lc3NhZ2UoIlJlY2lldmVkICVzICVkIHJlbGVhc2VkICVzCiIsZXZlbnQsdlsxXSxrKTsKICAgICAgICAgIE91dHB1dExDRE1lc3NhZ2Uoc3RyaW5nLmZvcm1hdCgiUHJlc3NpbmcgJXMiLGspKTsKICAgICAgICBlbHNlCiAgICAgICAgICBmb3IgaT0wLHZbMl0gZG8KICAgICAgICAgICAgUHJlc3NLZXkoayk7CiAgICAgICAgICAgIFNsZWVwKHRhcF9ob2xkX2RlbGF5KTsKICAgICAgICAgICAgUmVsZWFzZUtleShrKTsKICAgICAgICAgICAgU2xlZXAodGFwX2RlbGF5KTsKICAgICAgICAgIGVuZAogICAgICAgICAgUHJlc3NLZXkoayk7CiAgICAgICAgICBrZXlzcHJlc3NlZFtrXSA9IHRydWU7CiAgICAgICAgICBPdXRwdXRMb2dNZXNzYWdlKCJSZWNpZXZlZCAlcyAlZCBwcmVzc2VkICVzCiIsZXZlbnQsdlsxXSxrKTsKICAgICAgICAgIE91dHB1dExDRE1lc3NhZ2Uoc3RyaW5nLmZvcm1hdCgiUmVsZWFzaW5nICVzIixrKSk7CiAgICAgICAgZW5kCiAgICAgIGVuZAogICAgZW5kCiAgZW5kCmVuZA==');


const VALUES = {
  get deviceType() {
    return document.querySelector('select[name=device-type]').value;
  },
  get logging() {
    return document.querySelector('input[name=logging]').checked;
  },
  set active(value) {
    let dom = document.querySelector('#toggle-no');
    dom.innerText = value;
  },
  get toggleCount() {
    return document.querySelectorAll('.toggle').length;
  },
  get toggleContainer() {
    return document.querySelector('.inputs');
  },
  get toggles() {
    var output = [],
    nodes = document.querySelectorAll('.toggle');
    for (var i=0;i<nodes.length;i++) {
      let node = nodes[i];
      let nodeData = {
        'key': node.querySelector('.toggle-key').value,
        'button': node.querySelector('.toggle-button > select').value,
        'taps': node.querySelector('.number-input > input').value
      };
      output.push(nodeData);
    }
    return output;
  },
  get tapDelay() {
    return document.querySelector('input[name=tap-delay]').value;
  },
  get tapHoldDelay() {
    return document.querySelector('input[name=tap-hold-delay]').value;
  },
  addToggle: function() {
    let dom = VALUES.newToggle();
    VALUES.toggleContainer.appendChild(dom);
    VALUES.active = VALUES.toggleCount;
    Actions.update();
  },
  newToggle: function() {
    let dom = document.createElement('div');
    dom.setAttribute('class','toggle row');
    let key = VALUES.elements.newKey();
    dom.appendChild(key);
    let button = VALUES.elements.newButton();
    dom.appendChild(button);
    let number = VALUES.elements.newNumber();
    dom.appendChild(number);
    let spacer = VALUES.elements.newSpacer();
    dom.appendChild(spacer);
    let remove = VALUES.elements.newRemove();
    dom.appendChild(remove);
    return dom;
  },
  'elements': {
    newKey: function() {
      var dom = document.createElement('div');
      dom.setAttribute('class','col-sm-2');
      let span = document.createElement('span');
      span.setAttribute('class','tooltip');
      span.setAttribute('aria-label','Right click me for manual input');
      dom.appendChild(span);
      let input = document.createElement('input');
      input.setAttribute('type','text');
      input.setAttribute('placeholder','Key');
      input.setAttribute('class','toggle-key');
      input.addEventListener('click',Actions.keyHandler);
      input.addEventListener('contextmenu',Actions.keyContHandler);
      span.appendChild(input);
      return dom;
    },
    newButton: function() {
      var dom = document.createElement('div');
      dom.setAttribute('class','col-sm-2 toggle-button');
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
      var dom = document.createElement('div');
      dom.setAttribute('class','col-sm-1');
      let input = document.createElement('input');
      input.setAttribute('type','submit');
      input.setAttribute('value','Remove');
      input.addEventListener('click',Actions.closeInput);
      dom.appendChild(input);
      return dom;
    },
    newNumber: function() {
      var dom = document.createElement('div');
      dom.setAttribute('class','col-sm-2 number-input');
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
    },
    newSpacer: function() {
      var dom = document.createElement('div');
      dom.setAttribute('class','col-sm-5');
      return dom;
    }
  }
}

const Actions = {
  closeInput: function(e) {
    e.target.parentNode.parentNode.remove();
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
    document.querySelector('#key-modal').checked = true;
  },
  captureKey: function(e) {
    let keyCapture = document.querySelector('#key-modal');
    if (keyCapture.checked === true) {
      e.preventDefault();
      let key = parseKey(e.code);
      let node = document.querySelector('.toggle-key[active-key]');
      node.value = key;
      node.removeAttribute('active-key');
      node.blur();
      keyCapture.checked = false;
      Actions.update();
    }
  },
  update: function() {
    output();
  },
  copy: function() {
    Actions.update();
    var text = document.querySelector('#output-area').innerText;
    copyTextToClipboard(text);
    toast('Copied...',1500,500);
  },
  save: function() {
    Actions.update();
    var text = document.querySelector('#output-area').innerText;
    var filename = document.querySelector('input[name=download_name]').value;
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
  document.querySelector('#output-area').innerText = script;
}

function toast(message,delay,fadeTime) {
  var opacity = 1,
  interval = fadeTime/100,
  node = document.createElement('span');
  node.setAttribute('class','toast');
  node.innerText = message;
  node.style.opacity = opacity;
  document.body.appendChild(node);
  function update() {
    opacity -= 0.01;
    node.style.opacity = opacity;
    if (opacity > 0) {
      setTimeout(update,interval);
    } else {
      node.remove();
    }
  }
  setTimeout(update,delay);
}

function init() {
  VALUES.addToggle();
  document.querySelector('#add-toggle').addEventListener('click',VALUES.addToggle);
  window.addEventListener('keydown',Actions.captureKey);
  document.querySelector('input[name=logging]').addEventListener('click',Actions.update);
  document.querySelector('select[name=device-type]').addEventListener('change',Actions.update);
  document.querySelector('#copy-output').addEventListener('click',Actions.copy);
  document.querySelector('#download-output').addEventListener('click',Actions.save);
  document.querySelector('label[for=download-modal]').addEventListener('click',() => {
    document.querySelector('input[name=download_name]').value = 'toggle_keys.lua';
  })
  // document.querySelector('#help').addEventListener('click',Actions.help);
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
