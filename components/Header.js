import Image from 'next/image';
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon,  } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function Header() {
    return (
       <div className="">
            <div className="flex justify-between max-w-6xl items-center mx-5 xl:mx-auto">
                {/* left */}
                <div className="relative  h-14 w-24 cursor-pointer">
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
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-7 md:hidden cursor-pointer" />
                    
                    <div className="relative navBtn">

                        <PaperAirplaneIcon className="navBtn rotate-45" />
                        <div className="absolute -top-2 -right-1 text-xs bg-red-500 text-white rounded-full pl-1 pr-1 animate-pulse flex items-center">
                            3
                        </div>
                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />

                    <img src="https://links.papareact.com/3ke" alt=""  className="h-10 rounded-full cursor-pointer"/>
                </div>
            </div>
       </div>
    )
}

export default Header
