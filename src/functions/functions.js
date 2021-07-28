const addConditionedStyle = (condition, actualClass, newClass) => {
    const classes = [actualClass]
    if (condition) {
        classes.push(newClass);
    }
    return classes.join(' ');
}

export { addConditionedStyle };