import { PulseLoader } from 'react-spinners'

const LoadingSpinner = () => {
    
    return (
        <>
            <div className='w-full min-h-[540px] flex items-center justify-center'>
                <PulseLoader size={10} color='#244D3F'></PulseLoader>
            </div>
        </>
    );
};

export default LoadingSpinner;