const removeLineBreaks = (text) => {
    return text.replace(/(\r\n|\n|\r)/gm, " ");
}

export default removeLineBreaks;