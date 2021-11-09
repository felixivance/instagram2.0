import { useSession } from "next-auth/react"
import MiniProfile from "./MiniProfile"
import Posts from "./Posts"
import Stories from "./Stories"
import Suggestions from "./Suggestions"

function Feed() {
    const { data: session} = useSession();
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto w-11/12">
            <section className="col-span-2 ">
             {/* stories */}
                <Stories />
            {/* posts */}
             <Posts />
            </section>
          

            <section className="hidden xl:inline-grid md:col-span-1">

            {
                session && (
                    <div className="fixed top-14">
                        {/* miniprofile */}
                        <MiniProfile />
                                    {/* suggestions */}
                        <Suggestions />
                    </div>
                )
            }
            </section>

        </main>
    )
}

export default Feed
