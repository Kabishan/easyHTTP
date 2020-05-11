const http = new easyHTTP();

const data = {
  userId: 36,
  title: 'Custom Post',
  body: 'This is a custom post',
};

// Get Single Post

// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
//   if (err) console.log(err);
//   else console.log(post);
// });

// Get Multiple Posts

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if (err) console.log(err);
//   else console.log(posts);
// });

// Post (Add New) Post

// http.post('https://jsonplaceholder.typicode.com/posts', data, function (
//   err,
//   post
// ) {
//   if (err) console.log(err);
//   else console.log(post);
// });

// Post (Update) Existing Post

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (
//   err,
//   post
// ) {
//   if (err) console.log(err);
//   else console.log(post);
// });

// Delete Post

// http.delete('https://jsonplaceholder.typicode.com/posts/1', function (
//   err,
//   post
// ) {
//   if (err) console.log(err);
//   else console.log(post);
// });
