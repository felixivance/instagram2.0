import {  collection,addDoc, serverTimestamp, onSnapshot, orderBy, query, setDoc, doc, deleteDoc } from "@firebase/firestore"
import { BookmarkIcon, ChatIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon, TrashIcon } from "@heroicons/react/outline"

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { db } from "../firebase";
import Moment from 'react-moment';

function Post({id, username, img, userImg, caption, userId}) {

    const { data: session} = useSession();
    const [ comments, setComments] = useState([]);
    const [ comment, setComment] = useState("");
    const [ likes, setLikes ] = useState([]);
    const [ hasLiked, setHasLiked] = useState(false);

    useEffect(()=> onSnapshot(
        query(
            collection(db, "insta_posts", id, "comments"), orderBy('timestamp','desc')),
            (snapshot)=>{
                setComments(snapshot.docs)
            }
        
        ),[db, id]
    );

    useEffect(()=> onSnapshot(collection(db, 'insta_posts', id, 'likes'), 
        snapshot=> setLikes(snapshot.docs) 
    ), [db, id]);

    useEffect(()=>{
        setHasLiked( likes.findIndex((like) =>  like.id === session?.user.id) !== -1 )
    },[likes])

    const sendComment = async (e) => {
        e.preventDefault();
        const commentToSend = comment;

        setComment("");

        await addDoc(collection(db, "insta_posts",id, "comments"),{
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        
        }).then((res)=>{
           
        }).catch(e=>{
            
        })
        
    }

    const likePost = async () => {
        if(hasLiked){
            await deleteDoc(doc(db, 'insta_posts', id , 'likes', session.user.id))
        }else{
                await setDoc(doc(db, 'insta_posts', id , 'likes', session.user.id),{
                username: session.user.username
            })
        }
       
    }

    const deletePost = async () =>{
        if(confirm("are you sure you want to delete this post ? ")){
                await deleteDoc(doc(db, 'insta_posts',id))
                alert("deleted post!")
        }
    }

    return (
        <div className="bg-white my-7 border rounded-md">
            {/* header */}
            <div className="flex items-center justify-between p-5">
                <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-2"  onDoubleClick={likePost} />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className={` ${session.user.id == userId ? 'hidden' : '' } h-5`}  />
                <TrashIcon className={` ${session.user.id == userId ? '' : 'hidden' } h-5 text-red-600`} onClick={deletePost} />
            </div>

            {/* img */}
            <img src={img} className="object-cover w-full" alt="" />
            
            {/* buttons */}
            {
                session && (
               
                <div className="flex justify-between px-4 pt-4 ">
                    <div className="flex space-x-4 ">
                        {
                            hasLiked ? <HeartIconFilled onClick={likePost} className={`btn text-red-500 animate-pulse`} />
                            : 
                            <HeartIcon onClick={likePost} className={`btn `} />
                        }
                        
                        <ChatIcon className="btn"/>
                        <PaperAirplaneIcon className="btn rotate-45"/>
                    </div>
                <BookmarkIcon className="btn"/>
                </div>
                )
            }
           

            {/* caption */}
            <div className="pt-3 pb-3">
                {
                    likes.length >0 && (<p className="pl-5"> {likes.length} Likes</p>)
                }
                <p className="pl-5 truncate">
                    <span className="font-bold mr-1">{username}</span>
                    {caption} 
                </p>
            </div>
            {/* comments */}
            <p className="text-gray-400 pl-5 pb-2">Comments ({comments.length})</p>
            {
                comments.length >0  && (
                    <div key={comment.id} className="ml-10 h-30 overflow-y-scroll 
                    scrollbar-thumb-black scrollbar-thin">
                        {
                            comments.map((comment)=>(
                                <div key={comment.id} className="flex items-center space-x-2 mb-3">
                                    <img src={comment.data().userImage} alt="" className="h-7 rounded-full" />
                                    <p className="text-sm flex-1"> <span className="font-bold">{comment.data().username}</span> {comment.data().comment}</p>
                                    <Moment fromNow className="text-xs pr-2">
                                        { comment.data().timestamp?.toDate()}
                                    </Moment>
                                </div>
                            ))
                        }
                    </div>
                )
            }

            {/* input box */}
            {
                session && (
                    <form className="flex items-center p-4">
                        <EmojiHappyIcon className="h-7 "/>
                        <input type="text" className="border-none flex-1 focus:ring-0 outline-none" placeholder="Post your comment here"  
                        value={comment} onChange={(e)=>setComment(e.target.value)}/>
                        <button type="submit" disabled={!comment.trim()} onClick={sendComment} className="font-semibold text-blue-400">Post</button>
                    </form>
                )
            }
           
            
        </div>
    )
}

export default Post
