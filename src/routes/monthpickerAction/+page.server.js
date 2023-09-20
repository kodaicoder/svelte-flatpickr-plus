/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		//! Form Data
		const data = await request.formData();
		console.log(data);

		//! Month Picker 1
		if (data.get('monthpicker1')) {
			console.log('monthpicker1 selected Date Z value: ', data.get('monthpicker1'));
			const date = Intl.DateTimeFormat(
				'en-GB'
				//,{
				// dateStyle: "full",
				// timeStyle: "long",
				// calendar: "buddhist",
				//}
			).format(new Date(data.get('monthpicker1')));
			console.log('monthpicker1 selected Date: ', date);
		}

		//! Month Picker 2
		if (data.get('monthpicker2')) {
			console.log('monthpicker2 selected Date Z value: ', data.get('monthpicker2'));
			const date = Intl.DateTimeFormat(
				'en-GB'
			).format(new Date(data.get('monthpicker2')));
			console.log('monthpicker2 selected Date: ', date);
		}

		//! Month Picker 3
		if (data.get('monthpicker3')) {
			console.log('monthpicker3 selected Date Z value: ', data.get('monthpicker3'));
			const date = Intl.DateTimeFormat(
				'en-GB'
			).format(new Date(data.get('monthpicker3')));
			console.log('monthpicker3 selected Date: ', date);
		}

		//! Month Picker 4
		if (data.get('monthpicker4')) {
			console.log('monthpicker4 selected Date Z value: ', data.get('monthpicker4'));
			const date = Intl.DateTimeFormat(
				'en-GB'
			).format(new Date(data.get('monthpicker4')));
			console.log('monthpicker4 selected Date: ', date);
		}

		return true;
	}
};
