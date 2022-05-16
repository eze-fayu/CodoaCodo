const getNombreAsync = async(idPost) => {
    try {
        const resPost = await fetch(`http://jsonplaceholder.typicode.com/posts/${idPost}`)
        const post = await resPost.json()//guarda una promesa
        console.log(post.userId);

        // const resUser = await fetch(`http://sonplaceholder.typicode.com/users/${post.userId}`)
        const resUser = await fetch(`http://jsonplaceholder.typicode.com/users/${post.userId}`)
        const user = await resUser.json()//lee la respuesta

        console.log(user.name);
    } catch (error) {
        console.log(error);
    }

}

getNombreAsync(1);
// getNombreAsync(80);