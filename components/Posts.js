import Post from "./Post";
import {useState, useEffect} from 'react';
import { collection, onSnapshot,query, orderBy} from '@firebase/firestore';
import { db } from '../firebase'
function Posts() {

    // const posts = [
    //     {
    //         id: '123',
    //         username: 'Felix',
    //         userImg: ' https://digitalgermancar.com/wp-content/uploads/2021/07/Felix.jpeg',
    //         img: 'https://digitalgermancar.com/wp-content/uploads/2021/07/Felix.jpeg',
    //         caption: 'Subscribe and like'
    //     },
    //     {
    //         id: '123',
    //         username: 'Felix',
    //         userImg: ' https://links.papareact.com/3ke',
    //         img: 'https://links.papareact.com/3ke',
    //         caption: 'Subscribe and like'
    //     },
    //     {
    //         id: '123',
    //         username: 'Felix',
    //         userImg: ' https://links.papareact.com/3ke',
    //         img: 'https://links.papareact.com/3ke',
    //         caption: 'Subscribe and like'
    //     }
    // ];
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
       const unsubscribe= onSnapshot(
            query(
                collection(db, 'insta_posts'), orderBy('timestamp', 'desc')
                ), snapshot=>{
                    setPosts(snapshot.docs);
                }
               )
        return () => {
            unsubscribe;
        }
    }, [db])

    console.log(posts);
    
    return (
        <div>
            {
                posts.map((post, index)=>(
                    <Post key={index} id={post.data().id} username={post.data().username} userImg={post.data().profileImg} 
                    img={post.data().image} caption={post.data().caption}/>
                ))
            }
        </div>
    )
}

export default Posts
