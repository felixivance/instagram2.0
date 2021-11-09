import { signOut, useSession } from "next-auth/react"

function MiniProfile() {

    const {data:session} = useSession()

    return (
        <div className="flex items-center justify-between mt-14 ml-10 ">
            <div>
                <img src={session?.user.image} className="rounded-full w-16 h-16" alt="img" />
            </div>
            <div className="tracking-wide flex-1 mx-4">
                <h2 className="font-bold">{ session?.user.name  }</h2>
                <h2 className="text-sm text-gray-400">Karibu, How are you?</h2>
            </div>
            <button className="text-sm text-blue-400 font-semibold" onClick={signOut}>Sign out</button>
        </div>
    )
}

export default MiniProfile
