-- keysetup format for each key:
-- {event_register,event_number,{args...},{actions...}}
-- args -> hash map
-- actions -> array -> hash-map (key "action" always set to action name and key "key" always set to the name of the key to press)
-- remember arrays are 1 based not 0 based in lua

keysetup = {{"G_PRESSED",4,{},{{action="toggle_key",key="f"},{action="tap_key",key="x",count=3,duration=30,delay=20}}},{"TIMED",5,{time=1500,event_prefix="G"},{{{action="toggle_key",key="a"}},{{action="toggle_key",key="b"}}}}};

logging = true;

-- do not change the code below
OutputLogMessage("Script initialized\nWritten by: Douile\nhttps://github.com/Douile/logitech-toggle-keys/\n");
for i,v in pairs(keysetup) do
	OutputLogMessage("%s:%d registered...\n",v[1],v[2]);
end
OutputLogMessage("\n- start runtime log -\n");

keyspressed = {};
keytimes = {};

function update_key(key,state)
  if (state == true) then
    PressKey(key);
    keyspressed[key] = true;
    word = "Pressed";
  else
    ReleaseKey(key);
    keyspressed[key] = nil;
    word = "Released"
  end
  if (logging == true) then
    OutputLogMessage("+%d - %s %s\n",GetRunningTime(),word,key);
  end
end

function handle_custom_events(setup_info,event,arg)
  -- handle custom listeners such as G keys held
  if (setup_info[1] == "TIMED") then
    prefix = setup_info[3]["event_prefix"];
    if (event == prefix.."_PRESSED" and setup_info[2] == arg) then
      id = string.format("%s_%d",prefix,arg);
      keytimes[id] = GetRunningTime();
			if (logging == true) then
				OutputLogMessage("+%d - Starting holding %s\n",GetRunningTime(),id);
			end
    elseif (event == prefix.."_RELEASED" and setup_info[2] == arg) then
      id = string.format("%s_%d",prefix,arg);
      time_held = GetRunningTime()-keytimes[id];
      keytimes[id] = nil;
      -- possibly add support for multiple time ranges of time held
      if (time_held < setup_info[3]["time"]) then
        dispatch_actions(setup_info[3],setup_info[4][1]);
      else
        dispatch_actions(setup_info[3],setup_info[4][2]);
      end
    end
    return true;
  end
  return false;
end

function dispatch_actions(args,actions)
  for i,action in pairs(actions) do
    v = action["action"];
    key = action["key"];
    if (v == "toggle_key") then
      if (keyspressed[key] == true) then
        update_key(key,false);
      else
        update_key(key,true);
      end
    elseif (v == "press_key") then
      update_key(key,true);
    elseif (v == "release_key") then
      update_key(key,false);
    elseif (v == "tap_key") then
      for n=0,action["count"],1 do
        PressKey(key);
        Sleep(action["duration"]);
        ReleaseKey(key);
        Sleep(action["delay"]);
      end
    end
  end
end

function OnEvent(event, arg)
  for i,v in pairs(keysetup) do
    did_custom = handle_custom_events(v,event,arg);
    if (did_custom == false) then -- (not did_custom)
      if (event == v[1] and arg == v[2]) then
        dispatch_actions(v[3],v[4]);
      end
    end
  end
end
