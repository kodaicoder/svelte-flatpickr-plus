/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		//! Form Data
		const data = await request.formData();
		console.log(data);

		//! Date Picker
		if (data.get('myDatepicker1')) {
			console.log('Selected Date Z value: ', data.get('myDatepicker1'));
			const date = Intl.DateTimeFormat(
				'en-GB'
				//,{
				// dateStyle: "full",
				// timeStyle: "long",
				// calendar: "buddhist",
				//}
			).format(new Date(data.get('myDatepicker1')));
			console.log('Selected Date: ', date);
		}

		//! Month Picker
		if (data.get('myMonthpicker1')) {
			console.log('Selected Month Z value: ', data.get('myMonthpicker1'));
			const month = Intl.DateTimeFormat('en-GB').format(new Date(data.get('myMonthpicker1')));
			console.log('Selected Month: ', month);
		}

		//! Range Date Picker
		if (data.get('myRangepicker1')) {
			const range = data.get('myRangepicker1').split(' ');
			console.log('Start Date Z Value: ', range[0]);
			console.log('End Date Z Value: ', range[2]);
			const start = Intl.DateTimeFormat('en-GB').format(new Date(range[0]));
			const end = Intl.DateTimeFormat('en-GB').format(new Date(range[2]));
			console.log('Start Date:', start);
			console.log('End Date:', end);
		}

		//! Range Month Picker
		if (data.get('myRangeMonthpicker1')) {
			const range = data.get('myRangeMonthpicker1').split(' ');
			console.log('Start Month Z Value: ', range[0]);
			console.log('End Month Z Value: ', range[2]);
			const start = Intl.DateTimeFormat('en-GB').format(new Date(range[0]));
			const end = Intl.DateTimeFormat('en-GB').format(new Date(range[2]));
			console.log('Start Month:', start);
			console.log('End Month:', end);
		}

		return true;
	}
};
