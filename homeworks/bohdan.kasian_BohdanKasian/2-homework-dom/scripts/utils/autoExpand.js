const autoExpand = (field) => {
    const fieldTextAreaNode = field;
    // Reset field height
    fieldTextAreaNode.style.height = 'inherit';

    // Get the computed styles for the element
    const computed = window.getComputedStyle(field);

    // Calculate the height
    const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
        + parseInt(computed.getPropertyValue('padding-top'), 10)
        + field.scrollHeight
        + parseInt(computed.getPropertyValue('padding-bottom'), 10)
        + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    fieldTextAreaNode.style.height = `${height}px`;
};

export default autoExpand;
