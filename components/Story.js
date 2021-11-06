function Story({username, img}) {
    return (
        <div className=" ">
            <img src={img} className="rounded-full h-14 w-14 p-[1.5px] border-2 border-red-500 object-contain cursor-pointer
            hover:scale-110 transition transform duration-200 ease-out" />
            <p className="text-xm w-14 truncate">{username}</p>
        </div>
    )
}

export default Story
