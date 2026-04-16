import { useState } from 'react'
import { Check } from 'lucide-react';
import { ToastContext } from '../ToastContext/ToastContext.jsx'

const ToastProvider = ({ children }) => {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('success');

    const triggerToast = (msg, type, duration) => {
        setToastMessage(msg);
        setToastType(type);
        setShowToast(true);

        setTimeout(() => setShowToast(false), duration);
    };

    return (
        <>
            <ToastContext.Provider value={{showToast, toastMessage, toastType, triggerToast}}>
                { children }
                {
                    showToast && (
                        <div className=' fixed bottom-5 left-5 bg-white border border-[#E9E9E9] rounded-lg p-3 transition-opacity duration-500 ease-linear flex items-center justify-center gap-2'>
                            <div className='p-1 bg-[#244D3F] rounded-full'>
                                <Check size={14} color='#ffffff'></Check>
                            </div>
                            <p className='font-geist text-base font-medium text-[#244D3F]'>{toastMessage}</p>
                        </div>
                    )
                }
            </ToastContext.Provider>
        </>
    );
};

export default ToastProvider;