import MyProfile from '@/components/profile/MyProfile';
import SetNotifications from '@/components/profile/SetNotifications';
import TopButton from '@/components/profile/TopButton';
import UseInformation from '@/components/profile/UseInformation';
import Screen from '@/layouts/Screen';
import { useGetMyPageData } from '@/queries/useGetMyPageData.ts';
import { withDefaultAsyncBoundary } from '@/utils/asyncBoundary/withDefaultAsyncBoundary.tsx';

const Profile = () => {
  const { data: myProfile } = useGetMyPageData();

  return (
    <Screen className="min-h-dvh bg-Gray50 p-0">
      <TopButton />
      <MyProfile justImg={false} myProfile={myProfile} />
      <SetNotifications myProfile={myProfile} />
      <UseInformation />
    </Screen>
  );
};

export default withDefaultAsyncBoundary(Profile);
