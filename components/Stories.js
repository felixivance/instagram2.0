import faker from "faker";
import { useSession } from "next-auth/react";
import { useEffect, useState } from 'react';
import Story from "./Story";


function Stories() {

    const [ suggestions, setSuggestions] = useState([])
    const { data: session} = useSession();

    useEffect(() => {
        const suggestions = [...Array(20)].map((_,index)=>(
           {
               ...faker.helpers.contextualCard(),
               id: index
           } 
        ))


        setSuggestions(suggestions);

        return () => {
            console.log("cleaning up")
            setSuggestions([]);
        }
    }, [])

    return (
        <div className="flex space-x-1 p-3 bg-white mt-8 border-gray-200 border rounded-sm 
        overflow-x-scroll scrollbar-thin scrollbar-thumb-black ">
            {
                 session && (
                        <Story img={session.user.image} username={session.user.username}  /> 
                    ) 
            }
           {
              
               suggestions.map((profile,index) => (
                    <Story key={index} img={profile.avatar} username={profile.username}  /> 
                )
               )
           }
        </div>
    )
}

export default Stories
