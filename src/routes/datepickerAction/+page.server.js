/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		//! Form Data
		const data = await request.formData();
		console.log(data);

		//! Date Picker 1
		if (data.get('datepicker1')) {
			console.log('datepicker1 selected Date Z value: ', data.get('datepicker1'));
			const date = Intl.DateTimeFormat(
				'en-GB'
				//,{
				// dateStyle: "full",
				// timeStyle: "long",
				// calendar: "buddhist",
				//}
			).format(new Date(data.get('datepicker1')));
			console.log('datepicker1 selected Date: ', date);
		}

		//! Date Picker 2
		if (data.get('datepicker2')) {
			console.log('datepicker2 selected Date Z value: ', data.get('datepicker2'));
			const date = Intl.DateTimeFormat(
				'en-GB'
			).format(new Date(data.get('datepicker2')));
			console.log('datepicker2 selected Date: ', date);
		}

		//! Date Picker 3
		if (data.get('datepicker3')) {
			console.log('datepicker3 selected Date Z value: ', data.get('datepicker3'));
			const date = Intl.DateTimeFormat(
				'en-GB'
			).format(new Date(data.get('datepicker3')));
			console.log('datepicker3 selected Date: ', date);
		}

		//! Date Picker 4
		if (data.get('datepicker4')) {
			console.log('datepicker4 selected Date Z value: ', data.get('datepicker4'));
			const date = Intl.DateTimeFormat(
				'en-GB'
			).format(new Date(data.get('datepicker4')));
			console.log('datepicker4 selected Date: ', date);
		}


		return true;
	}
};
