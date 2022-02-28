function manipulateDom() {
    const quotes = document.querySelectorAll('.quote')
    quotes.forEach(quote => {
        quote.style = "border: 1px solid blue; background-color: lightblue; font-style: italic;"
    })
};

export { manipulateDom };