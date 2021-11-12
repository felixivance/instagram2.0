import {  collection,addDoc, serverTimestamp, onSnapshot, orderBy } from "@firebase/firestore"
import { BookmarkIcon, ChatIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline"

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { db } from "../firebase"
function Post({id, username, img, userImg, caption}) {

    const { data: session} = useSession();
    const [ comments, setComments] = useState([]);
    const [ comment, setComment] = useState("");

    useEffect(()=>onSnapshot(query(collection(db, "posts", id, "comments"),
        orderBy("timestamp","desc"),
        (snapshot)=>setComments(snapshot.docs)),
    [db]));

    const sendComment = async (e) => {
        e.preventDefault();
        const commentToSend = comment;

        setComment("");

        console.log(id)
        await addDoc(collection(db, "insta_posts",id, "comments"),{
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp()
        }).then((res)=>{
            console.log("saving data");
            console.log(res)
        }).catch(e=>{
            console.log("error")
            console.log(e)
        })
        
    }
    const likePost = ()=>{
        console.log("clicked")
    }
    return (
        <div className="bg-white my-7 border rounded-md">
            {/* header */}
            <div className="flex items-center justify-between p-5">
                <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-2"  onDoubleClick={likePost} />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/* img */}
            <img src={img} className="object-cover w-full" alt="" />
            
            {/* buttons */}
            {
                session && (
               
                <div className="flex justify-between px-4 pt-4 ">
                    <div className="flex space-x-4 ">
                        <HeartIcon className="btn" />
                        <ChatIcon className="btn"/>
                        <PaperAirplaneIcon className="btn rotate-45"/>
                    </div>
                <BookmarkIcon className="btn"/>
                </div>
                )
            }
           

            {/* caption */}
            <div className="pt-3 pb-3">
                <p className="pl-5">201,120 Likes</p>
                <p className="pl-5 truncate">
                    <span className="font-bold mr-1">{username}</span>
                    {caption} 
                </p>
            </div>
            {/* comments */}

            {
                comments.length >0  && (
                    <div key={comment.id} className="ml-10 h-20 overflow-y-scroll 
                    scrollbar-thumb-black scrollbar-thin">
                        {
                            comments.map((comment)=>(
                                <div key={commment.id}>
                                    <img src={comment.data().image} alt="" />
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
