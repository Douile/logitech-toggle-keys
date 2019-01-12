-- choose your keys here
keysetup = %setup%;
-- if using mouse set to true
mouse = %mouse%;
-- set to true to log all button presses (useful when you don't know what number a key is)
logall = %log%;
-- change the delay between taps
tap_delay = %delay%;
tap_hold_delay = %hold_delay%;

-- do not change the code below
OutputLogMessage("Script initialized\\nWritten by: Douile\\n");
if (mouse == true) then
  eventlisten = "MOUSE_BUTTON_PRESSED";
	OutputLogMessage("Configured for mouse buttons\\n");
else
	eventlisten = "G_PRESSED";
	OutputLogMessage("Configured for keyboard buttons\\n");
end
for k,v in pairs(keysetup) do
	OutputLogMessage("Button %d will toggle %s (%d presses)\\n",v[1],k,v[2]);
end
OutputLogMessage("\\n- start runtime log -\\n");

keyspressed = {};

function OnEvent(event, arg)
  if (event == eventlisten) then
    if (logall == true) then
      OutputLogMessage("Key %d pressed\\n",arg);
    end
    for k,v in pairs(keysetup) do
      if (arg == v[1] and k ~= null) then
          if (keyspressed[k] == true) then
            ReleaseKey(k);
            keyspressed[k] = false;
            OutputLogMessage("Recieved %s %d released %s\\n",event,v[1],k);
            OutputLCDMessage(string.format("Pressing %s",k));
          else
            for i=0,v[2] do
              PressKey(k);
              Sleep(tap_hold_delay);
              ReleaseKey(k);
              Sleep(tap_delay);
            end
            PressKey(k);
            keyspressed[k] = true;
            OutputLogMessage("Recieved %s %d pressed %s\\n",event,v[1],k);
            OutputLCDMessage(string.format("Releasing %s",k));
          end
        end
      end
    end
  end
end
