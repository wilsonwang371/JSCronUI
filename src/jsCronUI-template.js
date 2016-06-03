(function ($) {
	$.fn.jsCronUI.template = function () {
		var value;

		return '<div class="c-schedule-type">' + //c-schedule-type
				'<ul>' +
					'<li>' +
						'<label>' +
							'<input type="radio" value="daily" name="ScheduleType" />' +
							'<span>Daily</span>' +
						'</label>' +
					'</li>' +
					'<li>' +
						'<label>' +
							'<input type="radio" value="weekly" name="ScheduleType" />' +
							'<span>Weekly</span>' +
						'</label>' +
					'</li>' +
					'<li>' +
						'<label>' +
							'<input type="radio" value="monthly" name="ScheduleType" />' +
							'<span>Monthly</span>' +
						'</label>' +
					'</li>' +
					'<li>' +
						'<label>' +
							'<input type="radio" value="yearly" name="ScheduleType" />' +
							'<span>Yearly</span>' +
						'</label>' +
					'</li>' +
				'</ul>' +
			'</div>' +
			'<div class="c-schedule-options" style="display: none;">' + //c-schedule-options
				'<div class="js-schedule-tod">' +
					'<label>' +
						'<div>Time<span>' +
								'<i/>' +
							'</span>' +
						'</div>' +
						'<input type="text" name="time" />' +
					'</label>' +
				'</div>' +
				'<div class="js-schedule-daily">Repeat every:<div>' + //js-schedule-daily
						'<label>' +
							'<input type="radio" value="daily" name="dailyPattern" />' +
							'<span>day</span>' +
						'</label>' +
					'</div>' +
					'<div>' +
						'<label>' +
							'<input type="radio" value="weekday" name="dailyPattern" />' +
							'<span>weekday</span>' +
						'</label>' +
					'</div>' +
				'</div>' +
				'<div class="js-schedule-weekly">Repeat every week on:<div name="weeklyDays">' + //js-schedule-weekly
						'<label>' +
							'<input type="checkbox" value="1" />' +
							'<span>Sunday</span>' +
						'</label>' +
						'<label>' +
							'<input type="checkbox" value="2" />' +
							'<span>Monday</span>' +
						'</label>' +
						'<label>' +
							'<input type="checkbox" value="3" />' +
							'<span>Tuesday</span>' +
						'</label>' +
						'<label>' +
							'<input type="checkbox" value="4" />' +
							'<span>Wednesday</span>' +
						'</label>' +
						'<label>' +
							'<input type="checkbox" value="5" />' +
							'<span>Thursday</span>' +
						'</label>' +
						'<label>' +
							'<input type="checkbox" value="6" />' +
							'<span>Friday</span>' +
						'</label>' +
						'<label>' +
							'<input type="checkbox" value="7" />' +
							'<span>Saturday</span>' +
						'</label>' +
					'</div>' +
				'</div>' +
				'<div class="js-schedule-monthly">Repeat every month:<div>' + //js-schedule-monthly
						'<label>' +
							'<input type="radio" value="last" name="monthlyPattern" />' +
							'<span>on last day of the month</span>' +
						'</label>' +
					'</div>' +
					'<div>' +
						'<label>' +
							'<input type="radio" value="week" name="monthlyPattern"/>' +
							'<span>on the</span>' +
							'<select name="weekOccurrence">' +
								'<option value="#1">First</option>' +
								'<option value="#2">Second</option>' +
								'<option value="#3">Third</option>' +
								'<option value="#4">Fourth</option>' +
								'<option value="#5">Fifth</option>' +
								'<option value="L">Last</option>' +
							'</select>' +
							'<select name="dayOfWeek">' +
								'<option value="1">Sunday</option>' +
								'<option value="2">Monday</option>' +
								'<option value="3">Tuesday</option>' +
								'<option value="4">Wednesday</option>' +
								'<option value="5">Thursday</option>' +
								'<option value="6">Friday</option>' +
								'<option value="7">Saturday</option>' +
							'</select>' +
							'<span>of every month</span>' +
						'</label>' +
					'</div>' +
					'<div>' +
						'<label>' +
							'<input type="radio" value="date" name="monthlyPattern" />' +
							'<span>on these days</span>' +
							'<input name="date"/>' +
						'</label>' +
					'</div>' +
				'</div>' +
				'<div class="js-schedule-yearly">Repeat every year:<div>' + //js-schedule-yearly
						'<label>' +
							'<input type="radio" name="yearPattern" value="specificDay"/>' +
							'<span>on </span>' +
							'<select multiple name="monthSpecificDay">' +
								'<option value="1">January</option>' +
								'<option value="2">February</option>' +
								'<option value="3">March</option>' +
								'<option value="4">April</option>' +
								'<option value="5">May</option>' +
								'<option value="6">June</option>' +
								'<option value="7">July</option>' +
								'<option value="8">August</option>' +
								'<option value="9">September</option>' +
								'<option value="10">October</option>' +
								'<option value="11">November</option>' +
								'<option value="12">December</option>' +
							'</select>' +
							'<span>dates </span>' +
							'<input name="dayOfMonth"/>' +
						'</label>' +
					'</div>' +
					'<div>' +
						'<label>' +
							'<input type="radio" name="yearPattern" value="weekOccurrence"/>' +
							'<span>on the </span>' +
							'<select name="weekOccurrence">' +
								'<option value="#1">First</option>' +
								'<option value="#2">Second</option>' +
								'<option value="#3">Third</option>' +
								'<option value="#4">Fourth</option>' +
								'<option value="#5">Fifth</option>' +
								'<option value="L">Last</option>' +
							'</select>' +
							'<select name="dayOfWeek">' +
								'<option value="1">Sunday</option>' +
								'<option value="2">Monday</option>' +
								'<option value="3">Tuesday</option>' +
								'<option value="4">Wednesday</option>' +
								'<option value="5">Thursday</option>' +
								'<option value="6">Friday</option>' +
								'<option value="7">Saturday</option>' +
							'</select>' +
							'<span>of </span>' +
							'<select multiple name="monthOccurrence">' +
								'<option value="1">January</option>' +
								'<option value="2">February</option>' +
								'<option value="3">March</option>' +
								'<option value="4">April</option>' +
								'<option value="5">May</option>' +
								'<option value="6">June</option>' +
								'<option value="7">July</option>' +
								'<option value="8">August</option>' +
								'<option value="9">September</option>' +
								'<option value="10">October</option>' +
								'<option value="11">November</option>' +
								'<option value="12">December</option>' +
							'</select>' +
						'</label>' +
					'</div>' +
				'</div>' +
			'</div>';
	};
}).call(this, jQuery);