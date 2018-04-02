# Casumo frontend


## Runing it

Node v8.9.4

Run App

```
yarn install
yarn start
```

Tests

```
yarn install
yarn test
```

## Chosing the framework

That was easy: **React & Redux** using `create-react-app`

## Experimenting with 1M items in FE
I must say I had some fun playing with **webworkers** and exploring memory limits with the 1 Million items only/frontend challenge.

It was difficult to find one million books/items data over the Internet. I got to get a file with 1000 of films, so I converted it to lowercase/searchable json file and based on it I generate through a web worker up to 100.000 films json/database each time the web is loaded.

I just wanted to play around the capacity of a browser (chrome in this case, which I think uses the whole capacity of the machine) to load/request a 1Million json file and to generate 1Million json object.

Conclusion is that generating it is way faster than loading/requesting it, and to generate/filter it in a web worker takes half of the time than doing it in the main thread.

As I wanted to keep it pure front end solution I decided to generate the film database on the fly every time, and only 100.000films, if more, I think backend/amazonelasticsearch would be the go to solution.

Filtering is designed so the previous results are reused in an incremental fashion.

#### Atomic UX Design

I thinks is the best approach when talking of scalability so I implemented it.

#### Flow
I used flow for the main models in the app:

- Film
- Delorean (history cache)
- Search
- Response
- etc

#### Functional Programming
Some fundamental logic is implemented as pure functions in helpers, very easy to escalate (kind of microservices) and test.

#### React CSS
I also experimented with inline react styles, altough experience has not been not the best.

#### Linked Lists for Sorting
The sorting is pending as I wanted to create a linked list (insert in ordered list) while filtering but I'm afraid I have no more time.

# Tasks performed and pending

Here are the tasks I created while developing the solution and the state of them.

## Clean code

- ✓ Create components
- ✓ Extract classes/styles for every component
- ✓ Eslint

Pending:

- Err handling
- Clean Code
- Create constants for css values and widths/heights


##Sarch Engine
- ✓ Use Web Workers!
- ✓ Search by genre, title and author
- ✓ Search in history
- ✓ Search over last results if added char
- ✓ Sort
- ✓ Cancel search when new character appears
- ✓ Create books combining words, authors, etc.
- ✓ Make genre with numeric Ids and compare this, not the whole word

Pending:

-  Order by insertion in ordered list (in the worker) or NodeList Node https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
- Limit history
- Search by inclusive fields
- Create json with search version
- Search by inclusive words
- Search by similar words

## Tests
- ✓ Test a search is previous of another
- ✓ Test isEmptySearch works

Pending:

- Create test data
- Test search no results
- Test space is trimmed in searches
- Test timing
- Test is searched in history
- Test a search is canceled when is not finished and new search is requested
- Test search works (try various searches)
- Test order works
- Test books generator creates limit stablished
- Test is in history
- Test has all values
- Test makeFieldsSearchable

## UX
- ✓ Show no results found
- ✓ Make selectable/clicable the order by
- ✓ Create a nice book list view
- ✓ Make Mobile flex version
- ✓ Show wait while search spining wheel
- ✓ Hover effect/style for list item
- ✓ Add genre icons
- ✓ Make 'genre' a selection and not text
- ✓ Highlight coincidental string
- ✓ Go to top button

Pending:

- focus on title
- Make fixed position search form
- Top fixed bar remembering which was the search
- Show bubble, saying timing of search, etc /extra
- Add number of results
- Show scroll completeness bar
