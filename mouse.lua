-- https://community.logitech.com/s/question/0D75A000004H5ihSAC/
-- this is a modified version of my original script designed to press a key when a button is pressed or released
keysetup = {b=1};

eventlisten = {"M_PRESSED","M_RELEASED"};
-- uncomment below to listen for regular mouse clicks
--eventlisten = {"MOUSE_BUTTON_PRESSED","MOUSE_BUTTON_RELEASED"};

-- do not change the code below
OutputLogMessage("Script initialized\nWritten by: Douile\n");
for k,v in pairs(keysetup) do
	OutputLogMessage("Mouse button %d will toggle %s\n",v,k);
  if (v == 1 and (contains(eventlisten,"MOUSE_BUTTON_PRESSED") or contains(eventlisten,"MOUSE_BUTTON_RELEASED"))) then
    EnablePrimaryMouseEvents(true);
  end
end
OutputLogMessage("\n- start runtime log -\n");

function OnEvent(event, arg)
	if (contains(eventlisten,event)) then
		for k,v in pairs(keysetup) do
			if (arg == v and k ~= null) then
				PressAndReleaseKey(k);
        OutputLogMessage("Received button %d event: pressed %s",v,k);
			end
		end
	end
end

function contains(arr, item)
  for key, value in pairs(arr) do
    if value == item then
      return true
    end
  end
  return false
end
