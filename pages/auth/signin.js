import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

function signin({providers}) {
    return (
       <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen -mt-56 px-14">
                <img className="w-80" src="https://links.papareact.com/ocw" alt="" />

                <div className="mt-20">
                {
                    Object.values(providers).map((provider, index)=>(
                        <div key={index} className="">
                            <button className="p-3 bg-blue-500 text-white rounded-md" 
                            onClick={()=> signIn(provider.id, { callbackUrl:'/'}) }> 
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))
                }
                </div>
            </div>
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