$( document ).ready(function() {
	
	//Converts it from GMT to Eastern Timezone
	var magnaballDate = new Date(2015, 7, 21, 18, 15, 0, 0)
	var dateInEastern = magnaballDate.toLocaleString("en-US", {timeZone: "America/New_York"});
	$( "#lblStart" ).text(dateInEastern);
	
	$( "#btnWeeks" ).click(function() {
		calculateAndDisplay('weeks');
	});
	
	$( "#btnDays" ).click(function() {
		calculateAndDisplay('days');
	});
	
	$( "#btnHours" ).click(function() {
		calculateAndDisplay('hours');
	});
	
	$( "#btnMinutes" ).click(function() {
		calculateAndDisplay('minutes');
	});
	
	$( "#btnSeconds" ).click(function() {
		calculateAndDisplay('seconds');
	});
	
	$( "#btnNYE95YEMs" ).click(function() {
		
	});
	
	// $( "#btn" ).click(function() {
		// calculateAndDisplay('');
	// });
	
	function calculateAndDisplay(interval){
		$( "#errorMessage" ).text("");
		$( "#lblCountdown" ).text("");
		
		try
		{
			var finalText = getDateDiff(magnaballDate, 'now', interval);
			$( "#lblCountdown" ).text(finalText);
		}
		catch(e){
			$( "#errorMessage" ).text("An error occurred, please try again later.");
		}
	}
	
	function getDateDiff(date1, date2, interval) {
		var second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24,
		week = day * 7;
		date1 = new Date(date1).getTime();
		date2 = (date2 == 'now') ? new Date().getTime() : new Date(date2).getTime();
		
		var timediff = date1 - date2;
		if (isNaN(timediff)) return NaN;
		
		switch (interval) {
			case "years":
				return date2.getFullYear() - date1.getFullYear();
			case "months":
				return ((date2.getFullYear() * 12 + date2.getMonth()) - (date1.getFullYear() * 12 + date1.getMonth()));
			case "weeks":
				return (timediff / week).toFixed(3);
			case "days":
				return (timediff / day).toFixed(3);
			case "hours":
				return (timediff / hour).toFixed(3);
			case "minutes":
				return (timediff / minute).toFixed(3);
			case "seconds":
				return (timediff / second).toFixed(3);
			default:
				return undefined;
		}
	}
});