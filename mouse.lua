-- https://community.logitech.com/s/question/0D75A000004H5ihSAC/
-- this is a modified version of my original script designed to press a key when a button is pressed or released
keysetup = {b=4};

eventlisten = {"MOUSE_BUTTON_PRESSED","MOUSE_BUTTON_RELEASED"};
-- uncomment below if buttons not working
--eventlisten = {"M_PRESSED","M_RELEASED"};

-- do not change the code below
local function contains(arr, item)
  for key, value in pairs(arr) do
    if value == item then
      return true
    end
  end
  return false
end

OutputLogMessage("Script initialized\nWritten by: Douile\n");
for k,v in pairs(keysetup) do
	OutputLogMessage("Mouse button %d will toggle %s\n",v,k);
  if (v == 1 and (contains(eventlisten,"MOUSE_BUTTON_PRESSED") or contains(eventlisten,"MOUSE_BUTTON_RELEASED"))) then
    EnablePrimaryMouseButtonEvents(true);
  end
end
OutputLogMessage("\n- start runtime log -\n");


function OnEvent(event, arg)
	if (contains(eventlisten,event)) then
		for k,v in pairs(keysetup) do
			if (arg == v and k ~= null) then
				PressAndReleaseKey(k);
        OutputLogMessage("Received button %d event: pressed %s\n",v,k);
			end
		end
	end
end
