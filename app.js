/* const xhr = new XMLHttpRequest(); // Create a new XMLHttpRequest object

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts'); // Configure it: GET-request for the URL

xhr.onreadystatechange = function () {
  // This will be called after the response is received
  if (xhr.readyState === 4 && xhr.status === 200) {
    const ul = document.querySelector('ul');
    const posts = JSON.parse(xhr.responseText);
    posts.forEach(post => {
      const li = document.createElement('li');
      li.innerText = post.title;
      ul.appendChild(li);
    });
  }
};

xhr.onerror = function () {
  console.log('Request failed'); // error during the call
};

xhr.send(); // Send the request over the network */

// Step by step
const promiseFromFetch = fetch('https://jsonplaceholder.typicode.com/posts');
console.log(promiseFromFetch);

const promiseFromJSON = promiseFromFetch.then(
  response => response.json(),
  error => console.log(error)
);

console.log(promiseFromJSON);

promiseFromJSON.then(posts => console.log(posts)).catch(error => console.log(error));

// Chaining
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // Transform the text from the server into JSON
  .then(posts => {
    const ul = document.querySelector('ul');
    posts.forEach(post => {
      const li = document.createElement('li');
      li.innerText = post.title;
      ul.appendChild(li);
    });
  })
  .catch(() => console.log('Request failed')); // error during the call

// Promises

/* const myPromise = new Promise((resolve, reject) => {
  const result = 'Everything went wrong';
  setTimeout(() => reject(result), 3000);
});

myPromise.then(promisedValue => console.log(promisedValue)).catch(rejectedValue => console.log(rejectedValue));
 */
