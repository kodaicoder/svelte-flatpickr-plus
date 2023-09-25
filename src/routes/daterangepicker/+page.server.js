/** @type {import('./$types.js').Actions} */
export const actions = {
	default: async ({ request }) => {
		//! Form Data
		const data = await request.formData();
		console.log("Form Data: ", data);

		//! Date Range Picker 1
		if (data.get('dateRangePicker1')) {
			const range = data.get('dateRangePicker1').split(' ');
			console.log('dateRangePicker1 Start Date Z Value: ', range[0]);
			console.log('dateRangePicker1 End Date Z Value: ', range[2]);
			const start = Intl.DateTimeFormat('en-GB').format(new Date(range[0]));
			const end = Intl.DateTimeFormat('en-GB').format(new Date(range[2]));
			console.log('dateRangePicker1 Start Date:', start);
			console.log('dateRangePicker1 End Date:', end);
		}

		//! Date Range Picker 2
		if (data.get('dateRangePicker2')) {
			const range = data.get('dateRangePicker2').split(' ');
			console.log('dateRangePicker2 Start Date Z Value: ', range[0]);
			console.log('dateRangePicker2 End Date Z Value: ', range[2]);
			const start = Intl.DateTimeFormat('en-GB').format(new Date(range[0]));
			const end = Intl.DateTimeFormat('en-GB').format(new Date(range[2]));
			console.log('dateRangePicker2 Start Date:', start);
			console.log('dateRangePicker2 End Date:', end);
		}

		//! Date Range Picker 3
		if (data.get('dateRangePicker3')) {
			const range = data.get('dateRangePicker3').split(' ');
			console.log('dateRangePicker3 Start Date Z Value: ', range[0]);
			console.log('dateRangePicker3 End Date Z Value: ', range[2]);
			const start = Intl.DateTimeFormat('en-GB').format(new Date(range[0]));
			const end = Intl.DateTimeFormat('en-GB').format(new Date(range[2]));
			console.log('dateRangePicker3 Start Date:', start);
			console.log('dateRangePicker3 End Date:', end);
		}

		//! Date Range Picker 4
		if (data.get('dateRangePicker4')) {
			const range = data.get('dateRangePicker4').split(' ');
			console.log('dateRangePicker4 Start Date Z Value: ', range[0]);
			console.log('dateRangePicker4 End Date Z Value: ', range[2]);
			const start = Intl.DateTimeFormat('en-GB').format(new Date(range[0]));
			const end = Intl.DateTimeFormat('en-GB').format(new Date(range[2]));
			console.log('dateRangePicker4 Start Date:', start);
			console.log('dateRangePicker4 End Date:', end);
		}

		return true;
	}
};
