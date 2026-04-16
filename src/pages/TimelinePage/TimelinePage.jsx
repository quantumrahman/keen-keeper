import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import ContainerLayout from '../../layouts/ContainerLayout.jsx'
import PageHeading from '../../components/PageHeading/PageHeading.jsx'
import TimelineCard from '../../components/TimelineCard/TimelineCard.jsx'
import useTimeline from '../../hooks/useTimeline.jsx'
import FilterDropdown from '../../components/FilterDropdown/FilterDropdown.jsx'

const TimelinePage = () => {
    const { timeline } = useTimeline();
    
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [filterText, setFilterText] = useState('Filter timeline');
    const [filterType, setFilterType] = useState('all');

    const handleDropdown = () => {
        setToggleDropdown(!toggleDropdown);
    };

    const handleFilterText = (text) => {
        setFilterText(text);
    };

    const filterTimeline = timeline.filter((item) => 
        filterType === 'all' 
        ? true 
        : item.status === filterType
    );

    return (
        <>
            <div className="w-full min-h-[550px] bg-[#F8FAFC] py-10 md:py-16 lg:py-[80px]">
                <ContainerLayout>
                    <PageHeading>Timeline</PageHeading>
                    <div className='w-full max-w-[350px] relative mb-3 lg:mb-6'>
                        <button onClick={handleDropdown} className="w-full bg-transparent border border-[#E9E9E9] rounded-sm py-4 px-4 flex items-center justify-between cursor-pointer md:py-4 md:px-4 lg:rounded-lg">
                            <span className="font-geist text-sm font-normal text-[#64748B] md:text-base">{filterText}</span>
                            <ChevronDown size={16} color='#64748B' className={`transition-all duration-300 ease-linear ${toggleDropdown ? 'rotate-180' : 'rotate-0'}`}></ChevronDown>
                        </button>
                        {
                            toggleDropdown && 
                            <div className='w-full max-w-[350px] absolute -bottom-59 left-0 py-4 px-4 bg-white rounded-sm flex flex-col lg:rounded-lg'>
                                <span onClick={() => {
                                        handleDropdown(), 
                                        handleFilterText('Filter timeline'),
                                        setFilterType('all');
                                    }} 
                                    className='font-geist text-sm font-normal text-[#64748B] pb-4 cursor-pointer transition-colors duration-300 hover:text-[#244D3F] border-b border-[#E9E9E9] md:text-base'>Filter timeline</span>
                                <span onClick={() => {
                                        handleDropdown(), 
                                        handleFilterText('Filter By Call'),
                                        setFilterType('call')
                                    }} 
                                    className='font-geist text-sm font-normal text-[#64748B] py-4 cursor-pointer transition-colors duration-300 hover:text-[#244D3F] md:text-base'>Filter By Call</span>
                                <span onClick={() => {
                                        handleDropdown(), 
                                        handleFilterText('Filter By Message'),
                                        setFilterType('message')
                                    }} 
                                    className='font-geist text-sm font-normal text-[#64748B] py-4 cursor-pointer transition-colors duration-300 hover:text-[#244D3F] border-y border-[#E9E9E9] md:text-base'>Filter By Message</span>
                                <span onClick={() => {
                                        handleDropdown(), 
                                        handleFilterText('Filter By Video'),
                                        setFilterType('video')
                                    }} 
                                    className='font-geist text-sm font-normal text-[#64748B] pt-4 cursor-pointer transition-colors duration-300 hover:text-[#244D3F] md:text-base'>Filter By Video</span>
                            </div>
                        }
                    </div>
                    {
                        filterTimeline.length === 0
                        ?
                        <div className='w-full min-h-[410px] bg-white rounded-sm py-4 px-4 border border-[#E9E9E9] flex items-center justify-center md:py-4 md:px-4 md:rounded-lg'>
                            <h3 className='font-geist text-lg font-medium text-[#244D3F] text-center md:text-xl'>No Timeline Yet!</h3>
                        </div>
                        :
                        <div className='w-full flex items-center justify-center flex-col gap-3 md:gap-4 lg:gap-6'>
                            {
                                filterTimeline.map((data, idx) => <TimelineCard key={idx} data={data}></TimelineCard>)
                            }
                        </div>
                    }
                </ContainerLayout>
            </div>
        </>
    );
};

export default TimelinePage;