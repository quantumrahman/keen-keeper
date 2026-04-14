import ContainerLayout from '../../layouts/ContainerLayout.jsx'
import HeroSection from '../../components/HeroSection/HeroSection.jsx'
import StatsSection from '../../components/StatsSection/StatsSection.jsx'

const HomePage = () => {

    return (
        <>
            <div className="w-full min-h-[800px] bg-[#F8FAFC] py-10 md:py-16 lg:py-[80px]">
                <ContainerLayout>
                    <HeroSection></HeroSection>
                    <StatsSection></StatsSection>
                    <div className='w-full border-t border-[#E9E9E9] my-6 md:my-8 lg:my-10'></div>
                </ContainerLayout>
            </div>
        </>
    );
};

export default HomePage;