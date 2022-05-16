const getNombreAxios = async(idPost) => {
    try {
        const resPost = await axios(`http://jsonplaceholder.typicode.com/posts/${idPost}`)
        console.log(resPost.data.userId);

        const resUser = await axios(`http://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resUser.data.name);
    } catch (error) {
        console.log(error);
    }

}

getNombreAxios(1);
// getNombreAxios(80);