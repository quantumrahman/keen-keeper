import ContainerLayout from '../../layouts/ContainerLayout.jsx';
import PageHeading from '../../components/PageHeading/PageHeading.jsx'
import DetailUserCard from '../../components/DetailUserCard/DetailUserCard.jsx'
import DetailButton from '../../components/DetailsButton/DetailButton.jsx'
import DetailStatsCard from '../../components/DetailStatsCard/DetailStatsCard.jsx'
import DetailRelationCard from '../../components/DetailRelationCard/DetailRelationCard.jsx'
import DetailQuickCheckCard from '../../components/DetailQuickCheckCard/DetailQuickCheckCard.jsx'
import DetailsRecentCard from '../../components/DetailsRecentCard/DetailRecentCard.jsx'

const DetailsPage = () => {

    return (
        <>
            <div className='w-full min-h-[800px] bg-[#F8FAFC] py-10 md:py-16 lg:py-[80px]'>
                <ContainerLayout>
                    <PageHeading>Friend Details</PageHeading>
                    <div className='w-full flex justify-center gap-3 flex-col md:gap-6 sm:flex-row'>
                        <div className='w-full h-fit space-y-[14px] sm:w-[40%] md:w-[30%] md:sticky md:top-[24px] md:space-y-4'>
                            <DetailUserCard></DetailUserCard>
                            <div className='w-full space-y-2'>
                                <DetailButton buttonType='primary' text='Snooze 2 Weeks' iconType={'snooze'}></DetailButton>
                                <DetailButton buttonType='primary' text='Archive' iconType={'archive'}></DetailButton>
                                <DetailButton buttonType='secondary' text='Delete' iconType={'delete'}></DetailButton>
                            </div>
                        </div>
                        <div className='w-full sm:w-[60%] md:w-[70%] space-y-3 md:space-y-6'>
                            <div className='w-full grid grid-cols-1 gap-3 lg:gap-6 lg:grid-cols-3'>
                                <DetailStatsCard value={62} text='Days Since Contact'></DetailStatsCard>
                                <DetailStatsCard value={62} text='Goal (Days)'></DetailStatsCard>
                                <DetailStatsCard value={62} text='Next Due'></DetailStatsCard>
                            </div>
                            <DetailRelationCard days={30}></DetailRelationCard>
                            <DetailQuickCheckCard></DetailQuickCheckCard>
                            <DetailsRecentCard></DetailsRecentCard>
                        </div>
                    </div>
                </ContainerLayout>
            </div>
        </>
    );
};

export default DetailsPage;