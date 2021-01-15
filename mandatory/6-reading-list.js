/**

The Reading List
Keep track of which books you've read and which books you want to read!

=====
Exercise 1
=====

Loop through the array of books. For each book, log the book title and book author like so: 

"The Hobbit by J.R.R. Tolkien"

You should write and log at least 5 books

=====
Exercise 2
=====
Now use an if/else statement to change the output depending on whether you have read it yet or not. 

If you've read it, log a string like 'You've already read "The Hobbit" by J.R.R. Tolkien', 
and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

**/ 
// Exercise 1

let books = [

    {
        Title: "The Hobbit",
        author: "J.R.R. Tolkien",
        Reading: true,
      },
      {
        Title: "The Compound Effect",
        author: "Darren Hardy",
        Reading: true,
      },
      {
        Title: "Think and Grow Rich",
        author: "Napoleon Hill",
        Reading: true,
      },
      {
        Title: "How To Win Friends And Influence People",
        author: "Dale Carnegie",
        Reading: false,
      },
      {
        Title: "The Power Of Habit",
        author: "Charles Duhigg",
        reading: true,
      },

    ];

      let n = books.forEach((value) => {
        console.log(`${value.Title} ${value.author}`);
      });

      // Exercise 2

      let nn = books.forEach((value) => {
        if(value.reading === true){
          console.log(`you have already read ${value.Title} by ${value.author}`);
        } else {
          console.log(`you still need to read ${value.Title} by ${value.author}`);
        }
      })



















