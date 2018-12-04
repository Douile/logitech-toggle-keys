// sorry about this messy ass code

const OUTPUT_TEMPLATE = atob('LS0gY2hvb3NlIHlvdXIga2V5cyBoZXJlCi0tIGUuZy4gaWYgSSB3YW50ZWQgYnV0dG9uIDEgdG8gdG9nZ2xlIGUgSSB3b3VsZCBwdXQge2U9MX07Ci0tIGUuZy4gaWYgSSB3YW50ZWQgYnV0dG9uIDMgdG8gdG9nZ2xlIGUgSSB3b3VsZCBwdXQge2U9MyxmPTMsZz0yfTsKa2V5c2V0dXAgPSAlc2V0dXAlOyAKLS0gaWYgdXNpbmcgbW91c2Ugc2V0IHRvIHRydWUKbW91c2UgPSAlbW91c2UlOwotLSBzZXQgdG8gdHJ1ZSB0byBsb2cgYWxsIGJ1dHRvbiBwcmVzc2VzICh1c2VmdWwgd2hlbiB5b3UgZG9uJ3Qga25vdyB3aGF0IG51bWJlciBhIGtleSBpcykKbG9nYWxsID0gJWxvZyU7CgotLSBkbyBub3QgY2hhbmdlIHRoZSBjb2RlIGJlbG93Ck91dHB1dExvZ01lc3NhZ2UoIlNjcmlwdCBpbml0aWFsaXplZFxuV3JpdHRlbiBieTogRG91aWxlXG4iKTsKaWYgKG1vdXNlID09IHRydWUpIHRoZW4KICBldmVudGxpc3RlbiA9ICJNT1VTRV9CVVRUT05fUFJFU1NFRCI7CiAgT3V0cHV0TG9nTWVzc2FnZSgiQ29uZmlndXJlZCBmb3IgbW91c2UgYnV0dG9uc1xuIik7CmVsc2UKICBldmVudGxpc3RlbiA9ICJHX1BSRVNTRUQiOwogIE91dHB1dExvZ01lc3NhZ2UoIkNvbmZpZ3VyZWQgZm9yIGtleWJvYXJkIGJ1dHRvbnNcbiIpOwplbmQKZm9yIGssdiBpbiBwYWlycyhrZXlzZXR1cCkgZG8KICBPdXRwdXRMb2dNZXNzYWdlKCJCdXR0b24gJWQgd2lsbCB0b2dnbGUgJXNcbiIsdixrKTsKZW5kCk91dHB1dExvZ01lc3NhZ2UoIlxuLSBzdGFydCBydW50aW1lIGxvZyAtXG4iKTsKCmtleXNwcmVzc2VkID0ge307CgpmdW5jdGlvbiBPbkV2ZW50KGV2ZW50LCBhcmcpCiAgaWYgKGV2ZW50ID09IGV2ZW50bGlzdGVuKSB0aGVuCiAgICBpZiAobG9nYWxsID09IHRydWUpIHRoZW4KICAgICAgT3V0cHV0TG9nTWVzc2FnZSgiS2V5ICVkIHByZXNzZWRcbiIsYXJnKTsKICAgIGVuZAogICAgZm9yIGssdiBpbiBwYWlycyhrZXlzZXR1cCkgZG8KICAgICAgaWYgKGFyZyA9PSB2IGFuZCBrIH49IG51bGwpIHRoZW4KICAgICAgICBpZiAoa2V5c3ByZXNzZWRba10gPT0gdHJ1ZSkgdGhlbgogICAgICAgICAgUmVsZWFzZUtleShrKTsKICAgICAgICAgIGtleXNwcmVzc2VkW2tdID0gZmFsc2U7CiAgICAgICAgICBPdXRwdXRMb2dNZXNzYWdlKCJSZWNpZXZlZCAlcyAlZCByZWxlYXNlZCAlc1xuIixldmVudCx2LGspOwogICAgICAgIGVsc2UKICAgICAgICAgIFByZXNzS2V5KGspOwogICAgICAgICAga2V5c3ByZXNzZWRba10gPSB0cnVlOwogICAgICAgICAgT3V0cHV0TG9nTWVzc2FnZSgiUmVjaWV2ZWQgJXMgJWQgcHJlc3NlZCAlc1xuIixldmVudCx2LGspOwogICAgICAgIGVuZAogICAgICBlbmQKICAgIGVuZAogIGVuZAplbmQ=');


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
        'button': node.querySelector('.toggle-button > select').value
      };
      output.push(nodeData);
    }
    return output;
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
      dom.setAttribute('class','toggle-button');
      let label = document.createElement('label');
      label.innerText = 'Button: ';
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
  var keySetup = '{';
  var keys = VALUES.toggles;
  for (var i=0;i<keys.length;i++) {
    if (keys[i].key !== '') {
      let key = `${keys[i].key}=${keys[i].button},`;
      keySetup += key;
    }
  }
  if (keySetup.endsWith(',')) {
    keySetup = keySetup.substr(0,keySetup.length-1);
  }
  keySetup += '}';
  var script = OUTPUT_TEMPLATE.replace('%setup%',keySetup).replace('%mouse%',mouse).replace('%log%',log);
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
}

init();
