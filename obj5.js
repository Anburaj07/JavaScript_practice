//Implement a function to convert all the keys in an object to a camel case.
function convertKeysToCamelCase(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj; // Return non-objects as is
    }

    if (Array.isArray(obj)) {
        // If the input is an array, recursively convert each element
        return obj.map(item => convertKeysToCamelCase(item));
    }

    const camelCaseObject = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
            camelCaseObject[camelCaseKey] = convertKeysToCamelCase(obj[key]);
        }
    }

    return camelCaseObject;
}

// Example usage:
const snakeCaseObject = {
    first_name: 'John',
    last_name: 'Doe',
    age_group: {
        min_age: 25,
        max_age: 35
    },
    hobbies_list: ['reading', 'coding', 'traveling']
};

const camelCaseObject = convertKeysToCamelCase(snakeCaseObject);
console.log(camelCaseObject);
