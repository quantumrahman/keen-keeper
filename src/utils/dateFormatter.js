const dateFormatter = (date) => {
    const format = new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });

    return format;
};

export default dateFormatter;