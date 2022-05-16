const getNombre = (idPost) => {
    // fetch('http://jsonplaceholder.typicode.com/posts/1')
    fetch(`http://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then(res => {
            return res.json()
        })
        .then(post => {
            console.log(post.userId);
            // fetch('http://jsonplaceholder.typicode.com/users/1')
            fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(res => {
                    return res.json()
                })
                .then(user => {
                    console.log(user.name);
                })
        })
}

getNombre(1);
getNombre(80);