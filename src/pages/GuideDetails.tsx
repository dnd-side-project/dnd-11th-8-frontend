import TopButton from '@/components/guideDetail/TopButton';
import Header from '@/components/guideDetail/Header';
import SimpleView from '@/components/guideDetail/SimpleView';
import DetailView from '@/components/guideDetail/DetailView';

import Screen from '@/layouts/Screen';
import { useGetPlantGuideDetail } from '@/queries/useGetPlantGuideDetail.ts';
import { useParams } from 'react-router-dom';
import { withAsyncBoundary } from '@toss/async-boundary';
import ErrorPage from '@/pages/ErrorPage.tsx';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';

const GuideDetails: React.FC = () => {
  const plantId = useParams<{ id: string }>().id;

  const { data: plantGuide } = useGetPlantGuideDetail(plantId);

  return (
    <Screen className="px-0">
      <TopButton />
      <Header
        korName={plantGuide.korName}
        engName={plantGuide.engName}
        imageUrl={plantGuide.imageUrl}
        tags={plantGuide.tag}
      />
      <SimpleView items={plantGuide.simpleView} />
      <DetailView items={plantGuide.detailView} />
    </Screen>
  );
};

export default withAsyncBoundary(GuideDetails, {
  rejectedFallback: ({ error, reset }) => <ErrorPage error={error} reset={reset} />,
  pendingFallback: <LoadingSpinner />,
});
