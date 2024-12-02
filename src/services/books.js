export function getAllBook(month) {
  const data = [
    {
      id: 1,
      name: '1984',
      author: 'George Orwell',
      price: 15.0,
      numberPage: 328,
      month: 4
    },
    {
      id: 2,
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 10.5,
      numberPage: 180,
      month: 9
    },
    {
      id: 3,
      name: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 14.99,
      numberPage: 310,
      month: 5
    },
    {
      id: 4,
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 11.99,
      numberPage: 281,
      month: 2
    },
    {
      id: 5,
      name: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: 9.99,
      numberPage: 214,
      month: 12
    },
    {
      id: 6,
      name: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 8.49,
      numberPage: 279,
      month: 3
    },
    {
      id: 7,
      name: 'Moby Dick',
      author: 'Herman Melville',
      price: 13.99,
      numberPage: 635,
      month: 10
    },
    {
      id: 8,
      name: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      price: 12.49,
      numberPage: 671,
      month: 6
    },
    {
      id: 9,
      name: 'The Silent Sea',
      author: 'Clive Cussler',
      price: 12.99,
      numberPage: 400,
      month: 7
    },
    {
      id: 10,
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 10.5,
      numberPage: 180,
      month: 4
    },
    {
      id: 11,
      name: '1984',
      author: 'George Orwell',
      price: 15.0,
      numberPage: 328,
      month: 11
    },
    {
      id: 12,
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 11.99,
      numberPage: 281,
      month: 6
    },
    {
      id: 13,
      name: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 14.99,
      numberPage: 310,
      month: 2
    },
    {
      id: 14,
      name: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 8.49,
      numberPage: 279,
      month: 8
    },
    {
      id: 15,
      name: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: 9.99,
      numberPage: 214,
      month: 1
    },
    {
      id: 16,
      name: 'Moby Dick',
      author: 'Herman Melville',
      price: 13.99,
      numberPage: 635,
      month: 3
    },
    {
      id: 17,
      name: 'The Silent Sea',
      author: 'Clive Cussler',
      price: 12.99,
      numberPage: 400,
      month: 10
    },
    {
      id: 18,
      name: 'War and Peace',
      author: 'Leo Tolstoy',
      price: 18.99,
      numberPage: 1225,
      month: 5
    },
    {
      id: 19,
      name: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      price: 12.49,
      numberPage: 671,
      month: 7
    },
    {
      id: 20,
      name: 'War and Peace',
      author: 'Leo Tolstoy',
      price: 18.99,
      numberPage: 1225,
      month: 12
    },
    {
      id: 21,
      name: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      price: 12.49,
      numberPage: 671,
      month: 8
    },
    {
      id: 22,
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 10.5,
      numberPage: 180,
      month: 2
    },
    {
      id: 23,
      name: '1984',
      author: 'George Orwell',
      price: 15.0,
      numberPage: 328,
      month: 9
    },
    {
      id: 24,
      name: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 14.99,
      numberPage: 310,
      month: 6
    },
    {
      id: 25,
      name: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 8.49,
      numberPage: 279,
      month: 5
    },
    {
      id: 26,
      name: 'Moby Dick',
      author: 'Herman Melville',
      price: 13.99,
      numberPage: 635,
      month: 11
    },
    {
      id: 27,
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 11.99,
      numberPage: 281,
      month: 3
    },
    {
      id: 28,
      name: 'War and Peace',
      author: 'Leo Tolstoy',
      price: 18.99,
      numberPage: 1225,
      month: 7
    },
    {
      id: 29,
      name: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      price: 12.49,
      numberPage: 671,
      month: 4
    },
    {
      id: 30,
      name: 'The Silent Sea',
      author: 'Clive Cussler',
      price: 12.99,
      numberPage: 400,
      month: 6
    },
    {
      id: 31,
      name: '1984',
      author: 'George Orwell',
      price: 15.0,
      numberPage: 328,
      month: 10
    },
    {
      id: 32,
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 10.5,
      numberPage: 180,
      month: 9
    },
    {
      id: 33,
      name: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 14.99,
      numberPage: 310,
      month: 8
    },
    {
      id: 34,
      name: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 8.49,
      numberPage: 279,
      month: 7
    },
    {
      id: 35,
      name: 'Moby Dick',
      author: 'Herman Melville',
      price: 13.99,
      numberPage: 635,
      month: 1
    },
    {
      id: 36,
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 11.99,
      numberPage: 281,
      month: 3
    },
    {
      id: 37,
      name: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: 9.99,
      numberPage: 214,
      month: 5
    },
    {
      id: 38,
      name: 'The Silent Sea',
      author: 'Clive Cussler',
      price: 12.99,
      numberPage: 400,
      month: 4
    },
    {
      id: 39,
      name: 'War and Peace',
      author: 'Leo Tolstoy',
      price: 18.99,
      numberPage: 1225,
      month: 11
    },
    {
      id: 40,
      name: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      price: 12.49,
      numberPage: 671,
      month: 8
    },
    {
      id: 41,
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 10.5,
      numberPage: 180,
      month: 3
    },
    {
      id: 42,
      name: '1984',
      author: 'George Orwell',
      price: 15.0,
      numberPage: 328,
      month: 2
    },
    {
      id: 43,
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 11.99,
      numberPage: 281,
      month: 12
    },
    {
      id: 44,
      name: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: 9.99,
      numberPage: 214,
      month: 6
    },
    {
      id: 45,
      name: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 8.49,
      numberPage: 279,
      month: 5
    },
    {
      id: 46,
      name: 'The Silent Sea',
      author: 'Clive Cussler',
      price: 12.99,
      numberPage: 400,
      month: 7
    },
    {
      id: 47,
      name: '1984',
      author: 'George Orwell',
      price: 15.0,
      numberPage: 328,
      month: 8
    },
    {
      id: 48,
      name: 'War and Peace',
      author: 'Leo Tolstoy',
      price: 18.99,
      numberPage: 1225,
      month: 11
    },
    {
      id: 49,
      name: 'Moby Dick',
      author: 'Herman Melville',
      price: 13.99,
      numberPage: 635,
      month: 12
    },
    {
      id: 50,
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 10.5,
      numberPage: 180,
      month: 1
    }
  ];

  if (month) return data.filter((item) => item.month === month);
  else return data;
}

export function getStatsBookByMonth(month) {
  const data = [
    {
      month: 1,
      active: 10.36,
      idle: 0.2,
      inActive: 1.7
    },
    {
      month: 2,
      active: 70.36,
      idle: 10.2,
      inActive: 0.5
    },
    {
      month: 3,
      active: 20.36,
      idle: 3.2,
      inActive: 7.7
    },
    {
      month: 4,
      active: 70.36,
      idle: 10.2,
      inActive: 5.7
    },
    {
      month: 5,
      active: 20.36,
      idle: 30.2,
      inActive: 0.7
    },
    {
      month: 6,
      active: 70.36,
      idle: 10.2,
      inActive: 5.5
    },
    {
      month: 7,
      active: 50.36,
      idle: 10.2,
      inActive: 0.7
    },
    {
      month: 8,
      active: 52.25,
      idle: 1.2,
      inActive: 10.7
    },
    {
      month: 9,
      active: 40.36,
      idle: 15.2,
      inActive: 2.7
    },
    {
      month: 10,
      active: 59.36,
      idle: 12.2,
      inActive: 3.7
    },
    {
      month: 11,
      active: 80.36,
      idle: 5.2,
      inActive: 6.7
    },
    {
      month: 12,
      active: 10.36,
      idle: 3.2,
      inActive: 0.1
    }
  ];

  if (month) return data.find((item) => item.month === month);
  else return data;
}
