import { useRecoilState } from "recoil"
import { modalState } from "../atoms/modalAtom"
import { Transition, Dialog } from '@headlessui/react';
import { Fragment, useRef, useState } from "react";
import { CameraIcon } from "@heroicons/react/outline";

function Modal() {
    const [open, setOpen]  = useRecoilState(modalState);
    
    const filePickerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const captionRef = useRef('');
    const [loading, setLoading] = useState(false);

    const addImageToPost = (e)=>{
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent)=>{
            setSelectedFile(readerEvent.target.result);
        }
    }

    const uploadPost= async ()=>{
        setLoading(true);
        // create a post andadd to firestore 'insta_posts' collection
        //get post id for newley created post
        // upload image to direbase storage with post id
        //get download url from fb storage and update original post with image
    }

    return (
        // <!-- This example requires Tailwind CSS v2.0+ -->
<div  className={`${open ? '': 'hidden'} fixed z-10 inset-0 overflow-y-auto `} aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    {/* <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    {/* <!-- This element is to trick the browser into centering the modal contents. --> */}
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

    {/* <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    --> */}
    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
            <h3 className="text-lg leading-6 font-medium text-gray-900 " id="modal-title">
              Upload Post
            </h3>

            {
                selectedFile ? (
                    <img src={selectedFile} alt="" 
                    className="w-full object-contain cursor-pointer"
                     onClick={()=>setSelectedFile(null)}/>
                ):(
                    <div className="mt-5 flex space-x-2 " onClick={ ()=> filePickerRef.current.click() }>
                    <CameraIcon className="h-6 w-6 text-red-600"/>
                     <p className="underline text-blue-400 cursor-pointer">Upload Image</p>
                 </div>
                       
                )
            }
             <div className="mt-2   bg-red-500">
                    <input type="file"  hidden ref={filePickerRef}  onChange={addImageToPost}/>

                <input type="text" ref={captionRef} className="border-none focus:ring-2 ring-blue-400 w-full text-center rounded-lg" placeholder="Please enter caption" />
            </div>
            
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
          Upload
        </button>
        <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        onClick={()=>setOpen(false)}>
          Cancel
        </button>
      </div>
    </div>
  </div>
</div>
        // <Transition.Root classNameName="" show={open} as={Fragment}>
            
        //     <Dialog open={open} onClose={() => setOpen(false)} as="div" 
        //     classNameName="fixed z-10 inset-0 overflow-y-auto" onClose={()=>setOpen(false)}>
        //         <div classNameName="flex items-end justify-center min-h-[800px] sm:min-h-screen 
        //         pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        //             <Transition.Child classNameName="" 
        //             as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0"
        //             enterTo="opacity-100" 
        //             leave="ease-in duration-200" 
        //             leaveFrom="opacity-100"
        //             leaveTo="opacity-0">
                        
        //                 <Dialog.Overlay classNameName="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>

        //                     {/* trick browser to center modal items */}
                        
        //             </Transition.Child>
        //             <span classNameName="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
        //                      &#8203;
        //                 </span>  
        //             <Transition.Child as={Fragment} 
        //                 enter="ease-out duration-300" 
        //                 enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        //                 enterTo="opacity-100 translate-y-0 sm:scale-100" 
        //                 leave="ease-in duration-200" 
        //                 leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        //                 leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">

        //                     <div classNameName="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left 
        //                     overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle
        //                     sm:max-w-sm sm:w-full sm:p-6">
        //                         <p>Hello</p>
        //                     </div>

        //             </Transition.Child>
        //         </div>
        //     </Dialog>
        // </Transition.Root>
    )
}

export default Modal
