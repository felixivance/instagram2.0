import Post from "./Post";

function Posts() {

    const posts = [
        {
            id: '123',
            username: 'Felix',
            userImg: ' https://digitalgermancar.com/wp-content/uploads/2021/07/Felix.jpeg',
            img: 'https://digitalgermancar.com/wp-content/uploads/2021/07/Felix.jpeg',
            caption: 'Subscribe and like'
        },
        {
            id: '123',
            username: 'Felix',
            userImg: ' https://links.papareact.com/3ke',
            img: 'https://links.papareact.com/3ke',
            caption: 'Subscribe and like'
        },
        {
            id: '123',
            username: 'Felix',
            userImg: ' https://links.papareact.com/3ke',
            img: 'https://links.papareact.com/3ke',
            caption: 'Subscribe and like'
        }
    ];

    return (
        <div>
            {
                posts.map((post, index)=>(
                    <Post key={index} id={post.id} username={post.username} userImg={post.userImg} 
                    img={post.img} caption={post.caption}/>
                ))
            }
        </div>
    )
}

export default Posts
