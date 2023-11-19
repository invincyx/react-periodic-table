import Label from './Label';
import { ThemeContext } from '../App';
import { useContext } from 'react';

export default function Modal({ open, toggleModal, modalData }){

    

    const modalOpen = open ? " " : "hidden";

            const { name, symbol, appearance, summary, bohr_model_3d: spectral_img, atomic_mass, source, category, group  } = modalData

            const isDark = useContext(ThemeContext)
            let bgColor = isDark ? "bg-slate-700" :"bg-white" 
            let fontColor = isDark  ? "text-white": "text-gray-900"

    return (
        <>         

<div id="defaultModal" tabindex="-1" aria-hidden="true" className={`fixed flex items-center justify-center ${modalOpen}  z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full`} style={{ backdropFilter: 'brightness(0.7)', top: 0, bottom: 0, left: 0, right: 0, height: '100vh' }}>
    <div className="relative w-full max-w-2xl max-h-full">
     
        <div className={`relative ${bgColor} rounded-lg shadow `}>
          
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className={`"text-xl font-semibold pl-4 ${fontColor} "`}>
                    {name} ({symbol})
                </h3>
                <button onClick={toggleModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

            <div className="p-6 space-y-6">
 
                <p className={`text-base leading-relaxed ${fontColor}`}>
                    {summary}
                </p>

                <div className='flex'>
                    <Label >Atomic Mass: {atomic_mass}</Label>
                    <Label >Appearance: {appearance}</Label>
                </div>
                <div className='flex'>
                    <Label >Category: {category}</Label>
                    <Label >Group: {group}</Label>
                </div>
            
            </div>
          
            <div className={`flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600 ${fontColor} `}>
                 
               Source:  <a href={source} className='pl-2 underline' target='_blank'>{source}</a>
            </div>
        </div>
    </div>
</div>

        </>
    )
}