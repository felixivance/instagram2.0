import { BookmarkIcon, ChatIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline"

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"
import { useSession } from "next-auth/react"
function Post({id, username, img, userImg, caption}) {

    const { data: session} = useSession()

    return (
        <div className="bg-white my-7 border rounded-md">
            {/* header */}
            <div className="flex items-center justify-between p-5">
                <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-2"  />
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
            <div className="pt-3">
                <p className="pl-5">201,120 Likes</p>
                <p className="pl-5 truncate">
                    <span className="font-bold mr-1">{username}</span>
                    {caption}
                </p>
            </div>
            {/* comments */}


            {/* input box */}
            {
                session && (
                    <div className="flex items-center p-4">
                        <EmojiHappyIcon className="h-7 "/>
                        <input type="text" className="border-none flex-1 focus:ring-0 outline-none" placeholder="Post your comment here"  />
                        <button className="font-semibold text-blue-400">Post</button>
                    </div>
                )
            }
           
            
        </div>
    )
}

export default Post
