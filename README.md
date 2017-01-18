# Image Search Abstraction Layer

### Fourth Backend API project for freeCodeCamp

### __[The App](https://img-searchabs.herokuapp.com/)__

This project is a micro service that abstracts google image searching through a custom API and logs searchs for query through its API.

### __Installation__

* Requires node js
* ```npm install``` to install dependencies
* Must set ```process.env.API_KEY ``` to your google API key
* Optionally set ```process.env.MONGOLAB_URI``` to the URI of your mongodb database if not using a local db

#### __To set environment variables__

For Mac/Linux users:

```export API_KEY="Your google API key"```

For Windows users:

```SET API_KEY="Your google API key"```

### __API Reference__

Perform image searches as follows: ```[appUrl]/imagesearch/[searchTerms]?offset=[offset]```

* ```[appUrl]``` is the url of the application
* ```[searchTerms]``` is the term / terms you are searching for
* ```[offset]``` is the page of results you wish to view. If ```?offset=[offset]``` is ommited the first page of results is returned.

View the latest 10 searches as follows: ```[appUrl]/latestsearches```

All results are in JSON, error results are as follows ```{error: "error message"}```
