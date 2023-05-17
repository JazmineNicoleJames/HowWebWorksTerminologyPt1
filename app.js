//## **Part One: Solidify Terminology**

//In your own terms, define the following terms:

//- What is HTTP?
    // Hypertext Transfer Protocol-- the way a browser and a server communicates

//- What is a URL?
    // An address directing you to a webpage. Consists of a protocol HTTP, hostname, sometimes a resource and a query string

    //- What is DNS?
    // Domain Name System- Takes the hostname and turns it into an IP address. Like a phonebook or operator for the web

//- What is a query string?
    // Extra info on a URL. key/val pairs

//- What are two HTTP verbs and how are they different?
    // GET -- a request that doesnt change anything, we are requesting information that doesnt have side effects(Like searching a form)
    // POST -- a request that has side effects. Altering the data on a server. (Like posting on instagram, making a CC charge)

//- What is an HTTP request?
    //   The web browser requesting info from a server. Contains HTTP headers, resource URL you want.

//- What is an HTTP response?
    // The server responding to the web browser. Contains a response status code that let us know the status of the page(Like if theres a problem, if the page has moved to somewhere else, if everything is OK)

//- What is an HTTP header? Give a couple examples of request and response headers you have seen.
    //A header consists of a hostname, language, the date the browser thinks it is, any cookies, date modified, content-type, etc.
        //REQUEST header  wikipedia.com   accept-language: en-US
        // RESPONSE header  date: Wed, May 17 2023   200 OK

//- What are the processes that happen when you type “[http://somesite.com/some/page.html] into a browser?
    // The browser takes hostname, sends request to server. It first checks computer cache, then on to the router, then ISP, then DNS servers
    // if none along the way respond with the IP address, we get and ERROR not found response.
    // the browser makes requests, the server sends response with files that are needed