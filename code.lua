-- choose your keys here
-- e.g. if I wanted button 1 to toggle e I would put {e=1};
-- e.g. if I wanted button 3 to toggle e I would put {e=3,f=3,g=2};
keysetup = {e=3}; 
-- if using mouse set to true
mouse = false;
-- set to true to log all button presses (useful when you don't know what number a key is)
logall = true;

-- do not change the code below
OutputLogMessage("Script initialized\nWritten by: Douile\n");
if (mouse == true) then
	eventlisten = "M_PRESSED";
	OutputLogMessage("Configured for mouse buttons\n");
else
	eventlisten = "G_PRESSED";
	OutputLogMessage("Configured for keyboard buttons\n");
end
for k,v in pairs(keysetup) do
	OutputLogMessage("Button %d will toggle %s\n",v,k);
end
OutputLogMessage("\n- start runtime log -\n");

keyspressed = {};

function OnEvent(event, arg)
	if (event == eventlisten) then
		if (logall == true) then
			OutputLogMessage("Key %d pressed\n",arg);
		end
		for k,v in pairs(keysetup) do
			if (arg == v and k ~= null) then
				if (keyspressed[k] == true) then
					ReleaseKey(k);
					keyspressed[k] = false;
					OutputLogMessage("Recieved %s %d released %s\n",event,v,k);
				else
					PressKey(k);
					keyspressed[k] = true;
					OutputLogMessage("Recieved %s %d pressed %s\n",event,v,k);
				end
			end
		end
	end
end
