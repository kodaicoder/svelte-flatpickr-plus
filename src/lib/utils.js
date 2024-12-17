
export function formDataToJson(formData) {
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    return JSON.stringify(object);
}


export function getFirstDaysOfMonth(offset) {
    const date = new Date();
    date.setDate(1);
    date.setMonth(date.getMonth() + offset);
    date.setHours(0, 0, 0, 0, 0);
    return date.toISOString();
}
