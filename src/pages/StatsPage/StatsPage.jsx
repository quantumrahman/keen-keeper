import ContainerLayout from '../../layouts/ContainerLayout.jsx'
import PageHeading from '../../components/PageHeading/PageHeading.jsx'
import StatsChart from '../../components/StatsChart/StatsChart.jsx'
import useTimeline from '../../hooks/useTimeline.jsx'

const StatsPage = () => {
    const { timeline } = useTimeline();

    return (
        <>
            <div className="w-full min-h-[550px] bg-[#F8FAFC] py-10 md:py-16 lg:py-[80px]">
                <ContainerLayout>
                    <PageHeading>Friendship Analytics</PageHeading>
                    <div className='w-full min-h-[410px] bg-white border border-[#E9E9E9] rounded-lg flex items-center justify-center flex-col gap-2 py-5 px-5 lg:px-8 lg:py-8'>
                        {
                            timeline.length === 0
                            ? <h3 className='font-geist text-lg font-medium text-[#244D3F] md:text-xl'>No Timeline Add Yet!</h3>
                            : 
                            <>
                                <div className='w-full text-left mb-3 md:mb-6'>
                                    <h3 className="font-geist text-lg font-medium text-[#244D3F] md:text-xl">By Interaction Type</h3>
                                </div>
                                <StatsChart></StatsChart>
                                <div className='w-full flex items-center justify-center gap-3 mt-3 md:gap-6 md:mt-6'>
                                    <div className='space-x-1'>
                                        <div className='w-[8px] h-[8px] bg-[#7E35E1] rounded-full inline-block'></div>
                                        <span className='font-geist text-xs font-normal text-[#64748B] md:text-sm'>Text</span>
                                    </div>
                                    <div className='space-x-1'>
                                        <div className='w-[8px] h-[8px] bg-[#244D3F] rounded-full inline-block'></div>
                                        <span className='font-geist text-xs font-normal text-[#64748B] md:text-sm'>Call</span>
                                    </div>
                                    <div className='space-x-1'>
                                        <div className='w-[8px] h-[8px] bg-[#37A163] rounded-full inline-block'></div>
                                        <span className='font-geist text-xs font-normal text-[#64748B] md:text-sm'>Call</span>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                </ContainerLayout>
            </div>
        </>
    );
};

export default StatsPage;