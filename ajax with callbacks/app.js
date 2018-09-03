// //Get Posts
const httpGetPosts = new easyHTTP;

httpGetPosts.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
    if (err) {
        console.log(err)
    } else {
        console.log(posts);
    } 
});

// //Get Single Post
const httpGetPost = new easyHTTP;
httpGetPost.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
    if (err) {
        console.log(err)
    } else {
        console.log(post);
    } 
});

//<----------POST---------->

//Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// //Create Post
const httpPost = new easyHTTP;

httpPost.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
    if (err) {
        console.log(err)
    } else {
        console.log(post);
    } 
});

//Update Post
const httpPut = new easyHTTP;

httpPut.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
    if (err) {
        console.log(err)
    } else {
        console.log(post);
    }
});

//<----------DELETE---------->

//Delete Post
const httpDeletePost = new easyHTTP;

httpDeletePost.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if (err) {
        console.log(err)
    } else {
        console.log(response);
    }
});