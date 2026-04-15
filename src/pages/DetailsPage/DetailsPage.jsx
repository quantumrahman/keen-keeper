import { useLoaderData } from 'react-router';

import ContainerLayout from '../../layouts/ContainerLayout.jsx';
import PageHeading from '../../components/PageHeading/PageHeading.jsx'
import DetailUserCard from '../../components/DetailUserCard/DetailUserCard.jsx'
import DetailButton from '../../components/DetailsButton/DetailButton.jsx'
import DetailStatsCard from '../../components/DetailStatsCard/DetailStatsCard.jsx'
import DetailRelationCard from '../../components/DetailRelationCard/DetailRelationCard.jsx'
import DetailQuickCheckCard from '../../components/DetailQuickCheckCard/DetailQuickCheckCard.jsx'
import DetailsRecentCard from '../../components/DetailsRecentCard/DetailRecentCard.jsx'
import dateFormatter from '../../utils/dateFormatter.js'

const DetailsPage = () => {
    const friend = useLoaderData();
    
    const {days_since_contact: days, next_due_date: date, goal} = friend;
    const formatedDate = dateFormatter(date);

    return (
        <>
            <div className='w-full min-h-[800px] bg-[#F8FAFC] py-10 md:py-16 lg:py-[80px]'>
                <ContainerLayout>
                    <PageHeading>Friend Details</PageHeading>
                    <div className='w-full flex justify-center gap-3 flex-col md:gap-6 sm:flex-row'>
                        <div className='w-full h-fit space-y-[14px] sm:w-[50%] md:w-[40%] md:sticky md:top-[24px] md:space-y-4 lg:w-[30%]'>
                            <DetailUserCard friend={friend}></DetailUserCard>
                            <div className='w-full space-y-2'>
                                <DetailButton buttonType='primary' text='Snooze 2 Weeks' iconType={'snooze'}></DetailButton>
                                <DetailButton buttonType='primary' text='Archive' iconType={'archive'}></DetailButton>
                                <DetailButton buttonType='secondary' text='Delete' iconType={'delete'}></DetailButton>
                            </div>
                        </div>
                        <div className='w-full sm:w-[50%] space-y-3 md:w-[60%]  md:space-y-6 lg:w-[70%]'>
                            <div className='w-full grid grid-cols-1 gap-3 lg:gap-6 lg:grid-cols-3'>
                                <DetailStatsCard value={`${days < 10 ? `0${days}` : days}`} text='Days Since Contact'></DetailStatsCard>
                                <DetailStatsCard value={goal} text='Goal (Days)'></DetailStatsCard>
                                <DetailStatsCard value={formatedDate} text='Next Due'></DetailStatsCard>
                            </div>
                            <DetailRelationCard days={`${days < 10 ? `0${days}` : days}`}></DetailRelationCard>
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