function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10 ">
            <div>
                <img src="https://digitalgermancar.com/wp-content/uploads/2021/07/Felix.jpeg" className="rounded-full w-16 h-16" alt="img" />
            </div>
            <div className="tracking-wide">
                <h2 className="font-bold">Felix</h2>
                <h2 className="text-sm text-gray-400">Welcome to instagram</h2>
            </div>
            <button className="text-sm text-blue-400 font-semibold">Sign out</button>
        </div>
    )
}

export default MiniProfile
