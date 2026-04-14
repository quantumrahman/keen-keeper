import StatsCard from '../StatsCard/StatsCard.jsx'

const StatsSection = () => {

    return (
        <>
            <div className="w-full grid grid-cols-1 gap-3 mt-[30px] md:grid-cols-2 md:gap-[24px] lg:grid-cols-4 lg:mt-10">
                <StatsCard count={8} text={'Total Friends'}></StatsCard>
                <StatsCard count={3} text={'On Track'}></StatsCard>
                <StatsCard count={6} text={'Need Attention'}></StatsCard>
                <StatsCard count={12} text={'Interactions This Month'}></StatsCard>
            </div>
        </>
    );
};

export default StatsSection;