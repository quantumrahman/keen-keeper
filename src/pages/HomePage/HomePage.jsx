import ContainerLayout from '../../layouts/ContainerLayout.jsx'
import HeroSection from '../../components/HeroSection/HeroSection.jsx'

const HomePage = () => {

    return (
        <>
            <div className="w-full min-h-[800px] bg-[#F8FAFC] py-10 md:py-16 lg:py-[80px]">
                <ContainerLayout>
                    <HeroSection></HeroSection>
                </ContainerLayout>
            </div>
        </>
    );
};

export default HomePage;