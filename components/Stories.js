import faker from "faker";
import { useEffect, useState } from 'react';
import Story from "./Story";


function Stories() {

    const [ suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const suggestions = [...Array(20)].map((_,index)=>(
           {
               ...faker.helpers.contextualCard(),
               id: index
           } 
        ))
        console.log(suggestions);

        setSuggestions(suggestions);

        return () => {
            console.log("cleaning up")
            setSuggestions([]);
        }
    }, [])

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-scroll">
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
