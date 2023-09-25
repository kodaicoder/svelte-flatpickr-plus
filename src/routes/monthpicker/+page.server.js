/** @type {import('./$types.js').Actions} */
export const actions = {
	default: async ({ request }) => {
		//! Form Data
		const data = await request.formData();
		console.log("Form Data: ", data);

		//! Month Picker 1
		if (data.get('monthPicker1')) {
			console.log('monthPicker1 selected Month Z value: ', data.get('monthPicker1'));
			const date = Intl.DateTimeFormat(
				'en-GB'
				//,{
				// dateStyle: "full",
				// timeStyle: "long",
				// calendar: "buddhist",
				//}
			).format(new Date(data.get('monthPicker1')));
			console.log('monthPicker1 selected Month: ', date);
		}

		//! Month Picker 2
		if (data.get('monthPicker2')) {
			console.log('monthPicker2 selected Month Z value: ', data.get('monthPicker2'));
			const date = Intl.DateTimeFormat(
				'en-GB'
			).format(new Date(data.get('monthPicker2')));
			console.log('monthPicker2 selected Month: ', date);
		}

		//! Month Picker 3
		if (data.get('monthPicker3')) {
			console.log('monthPicker3 selected Month Z value: ', data.get('monthPicker3'));
			const date = Intl.DateTimeFormat(
				'en-GB'
			).format(new Date(data.get('monthPicker3')));
			console.log('monthPicker3 selected Month: ', date);
		}

		//! Month Picker 4
		if (data.get('monthPicker4')) {
			console.log('monthPicker4 selected Month Z value: ', data.get('monthPicker4'));
			const date = Intl.DateTimeFormat(
				'en-GB'
			).format(new Date(data.get('monthPicker4')));
			console.log('monthPicker4 selected Month: ', date);
		}


		return true;
	}
};
