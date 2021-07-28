const addConditionedStyle = (condition, actualClasses, newClass) => {
    const classes = [...actualClasses]

    if (condition) {
        classes.push(newClass);
    }

    return classes;
}

export { addConditionedStyle };