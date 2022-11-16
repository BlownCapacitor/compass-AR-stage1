
window.addEventListener("deviceorientation", onHeadingChange);
var positionCurrent = null;
function onHeadingChange(event) {
   var orientation = event.alpha;
  if (typeof orientation !== "undefined" && orientation !== null) { 
      positionCurrent = orientation;

      var phase = positionCurrent < 0 ? 360 + positionCurrent : positionCurrent;
      var heading = 360 - phase | 0;
      get_heading(heading);
  } 
  else {
      alert("No Orientation");
  }
}
	

	
		

 


