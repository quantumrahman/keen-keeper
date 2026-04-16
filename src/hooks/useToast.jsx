import { useContext } from 'react';
import { ToastContext } from '../context/ToastContext/ToastContext.jsx';

const useToast = () => {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('useFriends must be used within FriendsProvider');
    };

    return context;
};

export default useToast;