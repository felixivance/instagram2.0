import { getProviders, signIn } from "next-auth/react";

function signin({providers}) {
    return (
       <>
            {
                Object.values(providers).map((provider, index)=>(
                    <div key={index} className="">
                        <button onClick={()=> signIn(provider.id) }> 
                            Sign in with {provider.name}
                         </button>
                    </div>
                ))
            }
       </>
    )
}

export default signin


export async function getServerSideProps(){
    const providers = await getProviders();

    return {
        props:{
            providers
        }
    }
}