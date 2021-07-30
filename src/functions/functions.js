const addConditionedStyle = (condition, actualClasses, newClass) => {
    const classes = [...actualClasses]

    if (condition) {
        classes.push(newClass);
    }

    return classes;
}

const capitalizer = (str) => str[0].toUpperCase() + str.slice(1);

//data: localStorage.getItem('react-todo-data') ?
//             JSON.parse(localStorage.getItem('react-todo-data')).data :
//             [],

const checkLS = (key, field, initial) => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key))[field] : initial;
};

export { addConditionedStyle, capitalizer, checkLS };
