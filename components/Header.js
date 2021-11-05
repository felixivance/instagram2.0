import Image from 'next/image';
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon } from '@heroicons/react/outline';

function Header() {
    return (
       <div className="">
            <div className="flex justify-between max-w-6xl">
                {/* left */}
                <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
                    <Image  src="https://links.papareact.com/ocw" layout="fill" className="" objectFit="contain"/>
                </div>
                <div className="relative lg:hidden h-10 w-10 flex-shrink-0 cursor-pointer">
                    <Image  src="https://links.papareact.com/jjm" layout="fill" className="" objectFit="contain"/>
                </div>
                {/* middle */}
                <div className="flex items-center rounded-md space-x-1 p-3 mt-1  relative">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 text-gray-500"/>
                    </div>
                    <input type="text" placeholder="search" className="bg-gray-50 block w-full pl-10 focus:border-black focus:ring-black sm:text-sm
                    rounded-md border-gray-300" />
                </div>
                {/* right */}
            </div>
       </div>
    )
}

export default Header
