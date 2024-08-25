import Header from '@/components/common/Header';
import IconXMono from '@/assets/icon/icon-x-mono.tsx';
import Screen from '@/layouts/Screen.tsx';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import MostRecentImage from '@/components/myPlantEdit/MostRecentImage';
import HeightBox from '@/components/common/HeightBox';
import ImageInputWithList from '@/components/myPlantEdit/ImageInputWithList.tsx';
import TextField from '@/components/common/TextField';
import PlantLocationBadgeList from '@/components/addPlant/PlantLocationBadgeList.tsx';
import { Suspense, useState } from 'react';
import 마지막으로물준날 from '@/components/addPlant/마지막으로물준날.tsx';
import CTAButton from '@/components/common/CTAButton';
import Trash2 from '@/assets/icon/Trash-2.tsx';
import { useParams } from 'react-router-dom';
import { useGetMyPlantDetail } from '@/queries/useGetMyPlantDetail.ts';
import { parseOrUndefined } from '@/utils/int/parseOrUndefined.ts';
import { withAsyncBoundary } from '@toss/async-boundary';
import { MyPlantDetailType } from '@/mocks/mockDatas/myPlantDetail.ts';
import 마지막으로비료준날 from '@/components/addPlant/마지막으로비료준날.tsx';
import { useUpdateMyPlant } from '@/queries/useUpdateMyPlant.ts';
import LoadingScreen from '@/components/common/LoadingScreen';
import { useQueryClient } from '@tanstack/react-query';
import { keyStore } from '@/queries/keyStore.ts';

interface MyPlantEditFormState {
  nickname: string;
  location: MyPlantDetailType['location'];
  lastWateredDate: string;
  lastFertilizedDate: string;
  images: MyPlantDetailType['images'];
}

const MyPlantEdit = () => {
  const params = useParams<{
    myPlantId: string;
  }>();

  const queryClient = useQueryClient();

  const router = useInternalRouter();

  const { data: myPlantDetail } = useGetMyPlantDetail(parseOrUndefined(params.myPlantId));
  const { mutate: updateMyPlant, isPending } = useUpdateMyPlant();

  const [form, setForm] = useState<MyPlantEditFormState>({
    nickname: myPlantDetail.nickname,
    location: myPlantDetail.location,
    lastWateredDate: myPlantDetail.lastWateredDate,
    lastFertilizedDate: myPlantDetail.lastFertilizerDate,
    images: myPlantDetail.images,
  });

  const onComplete = () => {
    if (!params.myPlantId) {
      throw new Error('myPlantId가 없습니다.');
    }
    updateMyPlant(
      {
        myPlantId: +params.myPlantId,
        ...form,
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: keyStore.myPlant.getDetail(+(params.myPlantId as string)).queryKey,
          });
          router.goBack();
        },
      },
    );
  };

  if (isPending) {
    return <LoadingScreen />;
  }

  return (
    <Screen>
      <Header
        title="식물 정보 수정"
        right={
          <button onClick={router.goBack}>
            <IconXMono />
          </button>
        }
      />
      <HeightBox height={23.5} />
      <MostRecentImage image={form.images[0]} />
      <HeightBox height={16} />
      <ImageInputWithList images={form.images.slice(1)} />
      <HeightBox height={32} />
      <TextField
        title={'식물 애칭'}
        placeholder={'내 식물 애칭입니다.'}
        value={form.nickname}
        essential={false}
        onChange={(e) =>
          setForm((prev) => ({
            ...prev,
            nickname: e.target.value,
          }))
        }
      />
      <HeightBox height={25.5} />
      <Suspense fallback={<div>로딩중...</div>}>
        <PlantLocationBadgeList
          selectedLocation={form.location}
          handleChange={(location) => setForm((prev) => ({ ...prev, location }))}
          essential={false}
        />
      </Suspense>
      <HeightBox height={25.5} />
      <마지막으로물준날
        type={'exact'}
        value={form.lastWateredDate}
        onClick={(value) =>
          setForm((prev) => ({
            ...prev,
            lastWateredDate: value as string,
          }))
        }
      />
      <마지막으로비료준날
        value={form.lastFertilizedDate}
        type={'exact'}
        onClick={(value) =>
          setForm((prev) => ({
            ...prev,
            lastFertilizedDate: value as string,
          }))
        }
      />
      <HeightBox height={25.5} />
      <button className={'w-full flex flex-row items-center justify-center gap-1.5'}>
        <span className={'text-regular-body text-Gray600 font-medium'}>내 식물 삭제</span>
        <Trash2 />
      </button>
      <HeightBox height={17.25} />
      <CTAButton text={'저장'} onClick={onComplete} className={'bg-BloomingGreen500'} />
      <HeightBox height={13.75} />
    </Screen>
  );
};

export default withAsyncBoundary(MyPlantEdit, {
  rejectedFallback: ({ error }) => <div>에러가 발생했습니다.: {error.message}</div>,
  pendingFallback: <div>로딩중...</div>,
});
