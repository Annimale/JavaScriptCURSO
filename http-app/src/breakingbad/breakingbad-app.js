

/**
 * @returns {Promise<Object>} quote info
 */
const fetchQuote = async () => {


    const res = await fetch(' https://api.themotivate365.com/stoic-quote')
    const data = await res.json();

    console.log(data);
    return data;

}
/**
 * 
 * @param {HTMLDivElement} element 
 */


export const BreakingBadApp = async (element) => {
    document.querySelector('#app-title').innerHTML = 'Quote Stoicism App';
    element.innerHTML = 'Filosofeando...'
    // await fetchQuote();


    const quoteLabel = document.createElement('blockquote');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {

        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);

    }
    nextQuoteButton.addEventListener('click',async ()=>{
        element.innerHTML = 'Filosofeando...'
        const quote = await fetchQuote();
        renderQuote(quote);



    })



    fetchQuote().then(renderQuote);

    
}