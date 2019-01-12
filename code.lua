-- choose your keys here
-- e.g. if I wanted button 1 to toggle e I would put {e=1};
-- e.g. if I wanted button 3 to toggle e I would put {e=3,f=3,g=2};
keysetup = {f={5,2},a={4,0}};
-- if using mouse set to true
mouse = false;
-- set to true to log all button presses (useful when you don't know what number a key is)
logall = true;
-- change the delay between taps
tap_delay = 30;
tap_hold_delay = 5;

-- do not change the code below
OutputLogMessage("Script initialized\nWritten by: Douile\n");
if (mouse == true) then
	eventlisten = "MOUSE_BUTTON_PRESSED";
	OutputLogMessage("Configured for mouse buttons\n");
else
	eventlisten = "G_PRESSED";
	OutputLogMessage("Configured for keyboard buttons\n");
end
for k,v in pairs(keysetup) do
	OutputLogMessage("Button %d will toggle %s (%d presses)\n",v[1],k,v[2]);
end
OutputLogMessage("\n- start runtime log -\n");

keyspressed = {};

function OnEvent(event, arg)
	if (event == eventlisten) then
		if (logall == true) then
			OutputLogMessage("Key %d pressed\n",arg);
		end
		for k,v in pairs(keysetup) do
			if (arg == v[1] and k ~= null) then
				if (keyspressed[k] == true) then
					ReleaseKey(k);
					keyspressed[k] = false;
					OutputLogMessage("Recieved %s %d released %s\n",event,v[1],k);
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
					OutputLogMessage("Recieved %s %d pressed %s\n",event,v[1],k);
					OutputLCDMessage(string.format("Releasing %s",k));
				end
			end
		end
	end
end
