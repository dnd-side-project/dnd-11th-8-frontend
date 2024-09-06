import MyProfile from '@/components/profile/MyProfile';
import SetNotifications from '@/components/profile/SetNotifications';
import TopButton from '@/components/profile/TopButton';
import UseInformation from '@/components/profile/UseInformation';
import Screen from '@/layouts/Screen';
import { useGetMyPageData } from '@/queries/useGetMyPageData.ts';
import { withAsyncBoundary } from '@toss/async-boundary';
import ErrorPage from '@/pages/ErrorPage.tsx';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';

const Profile = () => {
  const { data: myProfile } = useGetMyPageData();

  return (
    <div className="bg-Gray50">
      <Screen className="p-0">
        <TopButton />
        <MyProfile justImg={false} myProfile={myProfile} />
        <SetNotifications myProfile={myProfile} />
        <UseInformation />
      </Screen>
    </div>
  );
};

export default withAsyncBoundary(Profile, {
  rejectedFallback: ({ error, reset }) => <ErrorPage error={error} reset={reset} />,
  pendingFallback: <LoadingSpinner />,
});
