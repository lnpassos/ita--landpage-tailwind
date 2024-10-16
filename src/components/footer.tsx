// components/Footer.js
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 

export function Footer() {
    return (
        <footer className="flex items-center justify-center w-full bg-gray-800 py-4 h-[120px]">
            <div className="flex items-center justify-center w-full max-w-screen-xl mx-auto relative">
                <div className="border-l border-gray-600 h-20 absolute left-0"></div>

                <div className="flex flex-col items-start justify-center space-y-2 px-4">
                    <span className="inline-flex items-center text-white text-sm">
                        <MdEmail className="text-white mr-1" /> 
                        leo.nardo.360@hotmail.com
                    </span>
                    <span className="inline-flex items-center text-white text-sm">
                        <FaWhatsapp className="text-green-500 mr-1" />
                        (15) 99621-2806
                    </span>
                    <span className="text-white text-sm"> 2024 &copy; lnpassos</span>
                </div>
                <div className="border-l border-gray-600 h-20 absolute right-0"></div>
            </div>
        </footer>
    );
}
