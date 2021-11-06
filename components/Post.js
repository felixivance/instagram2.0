import { DotsCircleHorizontalIcon, DotsHorizontalIcon } from "@heroicons/react/outline"

function Post({id, username, img, userImg, caption}) {
    return (
        <div className="">
            {/* header */}
            <div className="flex items-center justify-between">
                <img src={userImg} className="rounded-full h-12 w-12 object-contain border p-1 mr-2"  />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5" />
            </div>

            {/* img */}

            {/* buttons */}

            {/* caption */}

            {/* comments */}


            {/* input box */}
            
        </div>
    )
}

export default Post
