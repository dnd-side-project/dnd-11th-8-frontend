import BloomingWeather from '@/components/main/BloomingWeather';
import MyPlant from '@/components/main/MyPlant';
import TabBar from '@/components/main/TabBar';
import Screen from '@/layouts/Screen';
import HeightBox from '@/components/common/HeightBox';
import { useEffect } from 'react';
import { useGetHomeData } from '@/queries/useGetHomeData.ts';
import { withAsyncBoundary } from '@toss/async-boundary';
import ErrorPage from '@/pages/ErrorPage.tsx';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';
import { useRefreshAccessToken } from '@/queries/useRefreshAccessToken.ts';
import { useToken } from '@/hooks/useToken.ts';
import { SECOND } from '@/constants/day.ts';
import { useNotification } from '@/hooks/useNotification.tsx';
import { useQueryClient } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';

const Main = () => {
  const { data: homeData } = useGetHomeData();
  const { mutate: refreshAccessToken } = useRefreshAccessToken();
  const { getRefreshToken, isValidToken, setRefreshToken, setAccessToken } = useToken();
  const { RequestPermissionModal, isPermissionChecked, openPermissionModal } = useNotification();

  const queryClient = useQueryClient();

  const register = homeData.myPlantInfo.length !== 0;

  useEffect(() => {
    const refreshToken = getRefreshToken();
    if (isValidToken(refreshToken)) {
      refreshAccessToken(refreshToken, {
        onSuccess: (response) => {
          const { accessToken, refreshToken, expiresIn, refreshTokenExpiresIn } = response.data;
          setAccessToken({
            token: accessToken,
            expiresIn: expiresIn * SECOND,
          });
          setRefreshToken({
            token: refreshToken,
            expiresIn: refreshTokenExpiresIn * SECOND,
          });
        },
      });
    }
  }, []);

  useEffect(() => {
    if (!isPermissionChecked) {
      console.log('isPermissionChecked', isPermissionChecked);
      openPermissionModal();
    }
  }, []);

  useEffect(() => {
    void queryClient.prefetchQuery({
      queryKey: keyStore.myPlant.getMyAllPlant.queryKey,
    });
  }, []);

  return (
    <Screen className="bg-Gray50 min-h-dvh">
      <MyPlant
        register={register}
        myPlantsInfo={homeData.myPlantInfo}
        greetingMessage={homeData.greetingMessage}
      />
      <BloomingWeather register={register} />
      <HeightBox height={100} />
      <TabBar />
      <RequestPermissionModal />
    </Screen>
  );
};

export default withAsyncBoundary(Main, {
  rejectedFallback: ({ error, reset }) => {
    return <ErrorPage reset={reset} error={error} />;
  },
  pendingFallback: <LoadingSpinner />,
});
