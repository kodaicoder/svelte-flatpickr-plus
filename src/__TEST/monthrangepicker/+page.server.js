/** @type {import('./$types.js').Actions} */
export const actions = {
	default: async ({ request }) => {
		//! Form Data
		const data = await request.formData();
		console.log("Month Range Form Data: ", data);

		//! Month Range Picker 1
		if (data.get('monthRangePicker1')) {
			const range = data.get('monthRangePicker1').split(' ');
			console.log('monthRangePicker1 Start Month Z Value: ', range[0]);
			console.log('monthRangePicker1 End Month Z Value: ', range[2]);
			const start = Intl.DateTimeFormat('en-GB').format(new Date(range[0]));
			const end = Intl.DateTimeFormat('en-GB').format(new Date(range[2]));
			console.log('monthRangePicker1 Start Month:', start);
			console.log('monthRangePicker1 End Month:', end);
		}

		//! Month Range Picker 2
		if (data.get('monthRangePicker2')) {
			const range = data.get('monthRangePicker2').split(' ');
			console.log('monthRangePicker2 Start Month Z Value: ', range[0]);
			console.log('monthRangePicker2 End Month Z Value: ', range[2]);
			const start = Intl.DateTimeFormat('en-GB').format(new Date(range[0]));
			const end = Intl.DateTimeFormat('en-GB').format(new Date(range[2]));
			console.log('monthRangePicker2 Start Month:', start);
			console.log('monthRangePicker2 End Month:', end);
		}

		//! Month Range Picker 3
		if (data.get('monthRangePicker3')) {
			const range = data.get('monthRangePicker3').split(' ');
			console.log('monthRangePicker3 Start Month Z Value: ', range[0]);
			console.log('monthRangePicker3 End Month Z Value: ', range[2]);
			const start = Intl.DateTimeFormat('en-GB').format(new Date(range[0]));
			const end = Intl.DateTimeFormat('en-GB').format(new Date(range[2]));
			console.log('monthRangePicker3 Start Month:', start);
			console.log('monthRangePicker3 End Month:', end);
		}

		//! Month Range Picker 4
		if (data.get('monthRangePicker4')) {
			const range = data.get('monthRangePicker4').split(' ');
			console.log('monthRangePicker4 Start Month Z Value: ', range[0]);
			console.log('monthRangePicker4 End Month Z Value: ', range[2]);
			const start = Intl.DateTimeFormat('en-GB').format(new Date(range[0]));
			const end = Intl.DateTimeFormat('en-GB').format(new Date(range[2]));
			console.log('monthRangePicker4 Start Month:', start);
			console.log('monthRangePicker4 End Month:', end);
		}

		return true;
	}
};
