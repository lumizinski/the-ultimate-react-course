# Review of Essential Javascript for React

17. Section Overview

18. Destructuring Objects and Arrays
Object:

```
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
```

Array:

```
  const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
```

19. Rest/Spread Operator

```
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
const newGenres = ["epic fantasy", ...genres];
```

20. Template literals

```
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;
```

21. Ternaries Instead of if/else Statements

```
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
```

22. Arrow functions
Instead of:

```
function getYear(str) {
	return str.split("-")[0];
}
```

An arrow function looks like this:

```
(str) => str.split("-")[0];

const getYear = (str) => str.split("-")[0];

const getYear = (str) => { 
  return str.split("-")[0] 
};
```

23. Short-Circuiting And Logical Operators: &&, ||, ??

```
&& - returns the first value if the first one is falsy
|| - returns the second value if the first one is truthy
?? - returns the second value if the first one is nil or undefined
```

24. Optional Chaining

```
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
```

25. The Array map Method

```
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

```

26. The Array filter Method

```
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
```

27. The Array reduce Method

```
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
```

28. The Array sort Method
Sort is a function that changes the original value. Slice is used to sort only the copy

```
const sorted = arr.slice().sort((a, b) => a - b);
```

29. Working With Immutable Arrays

```
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};
const booksAfterAdd = [...books, newBook];

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);

```

30. Asynchronous JavaScript: Promises

<https://jsonplaceholder.typicode.com/>

```
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

31. Asynchronous JavaScript: Async/Await

```
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  return data;
}

const todos = getTodos();
```