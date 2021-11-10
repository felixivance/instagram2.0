import { useState, useEffect } from 'react';
import faker from 'faker';

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);
    
    useEffect(() => {
        
        const suggestions = [...Array(5)].map((_,index)=>(
            {
                ...faker.helpers.contextualCard(),
                id:index
            }
        ));

        setSuggestions(suggestions);

        return () => {
            setSuggestions([]);
        }
    }, [])


    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3>
                    Suggestions for you
                </h3>

                <button className="text-gray-600 font-semibold">See All</button>
            </div>
            {
                suggestions.map((profile, idx)=>(
                    <div key={idx} className="flex items-center justify-between mt-3">
                        <img src={profile.avatar} alt="" className="w-10 h-10 rounded-full p-[2px] border"/>

                        <div className="flex-1 ml-4">
                            <h2>{profile.username}</h2>
                            <h3 className="text-gray-400">Works at {profile.company.name}</h3>

                        </div>
                        <div className="">
                            <button className="text-blue-400">Follow</button>
                         </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Suggestions
