import Image from 'next/image';
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon,  } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { modalState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';

function Header() {

    //destructur and rename data to session
    const {data:session} = useSession();
    const router = useRouter();

    const [open, setOpenState] = useRecoilState(modalState);

    return (
       <div className="shadow-sm border-b bg-white top-0 sticky z-50 ">
            <div className="flex justify-between max-w-6xl items-center  xl:mx-auto w-11/12 mx-auto">
                {/* left */}
                <div className="relative  h-14 w-24 cursor-pointer" onClick={()=>router.push('/')}>
                    <Image  src="https://links.papareact.com/ocw" layout="fill" className="" objectFit="contain"/>
                </div>
                {/* <div className="relative lg:hidden h-10 w-10 flex-shrink-0 cursor-pointer">
                    <Image  src="https://links.papareact.com/jjm" layout="fill" className="" objectFit="contain"/>
                </div> */}
                {/* middle */}
                <div className="max-w-xs  md:inline-flex">
                    <div className="flex items-center rounded-md space-x-1 p-3 mt-1  relative">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 text-gray-500"/>
                        </div>
                        <input type="text" placeholder="search" className="bg-gray-50 block w-full pl-10 focus:border-black focus:ring-black sm:text-sm
                        rounded-md border-gray-300" />
                    </div>
                </div>
                {/* right */}
                <div className="flex space-x-4 items-center justify-end">
                    <HomeIcon className="navBtn" onClick={()=>router.push('/')}/>
                    <MenuIcon className="h-7 md:hidden cursor-pointer" />
                    
                    {
                        session ? (
                            <>
                                <div className="relative navBtn">

                                    <PaperAirplaneIcon className="navBtn rotate-45" />
                                <div className="absolute -top-2 -right-1 text-xs bg-red-500 text-white rounded-full pl-1 pr-1 animate-pulse flex items-center">
                                    3
                                </div>
                                </div>
                                <PlusCircleIcon className="navBtn" onClick={()=>setOpenState(true)} />
                                <UserGroupIcon className="navBtn" />
                                <HeartIcon className="navBtn" />
                                <img src={session.user?.image} alt=""  className="h-10 w-10 rounded-full cursor-pointer" onClick={signOut}/>
                            </>
                        ) :(
                            <button onClick={signIn}>Sign In</button>
                        )
                    }
                </div>
            </div>
       </div>
    )
}

export default Header
