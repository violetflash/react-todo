const addConditionedStyle = (condition, actualClasses, newClass) => {
    const classes = [...actualClasses]

    if (condition) {
        classes.push(newClass);
    }

    return classes;
}

const capitalizer = (str) => str[0].toUpperCase() + str.slice(1);

export { addConditionedStyle, capitalizer };