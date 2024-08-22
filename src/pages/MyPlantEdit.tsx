import Header from '@/components/common/Header';
import IconXMono from '@/assets/icon/icon-x-mono.tsx';
import Screen from '@/layouts/Screen.tsx';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import MostRecentImage from '@/components/myPlantEdit/MostRecentImage';
import HeightBox from '@/components/common/HeightBox';
import ImageInputWithList from '@/components/myPlantEdit/ImageInputWithList.tsx';
import TextField from '@/components/common/TextField';
import PlantLocationBadgeList from '@/components/addPlant/PlantLocationBadgeList.tsx';
import { Suspense } from 'react';
import 마지막으로물준날 from '@/components/addPlant/마지막으로물준날.tsx';
import CTAButton from '@/components/common/CTAButton';
import Trash2 from '@/assets/icon/Trash-2.tsx';

const images = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    favorite: true,
    createdDate: '2024-05-20',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    favorite: false,
    createdDate: '2024-05-22',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    favorite: false,
    createdDate: '2024-05-22',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    favorite: false,
    createdDate: '2024-05-22',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    favorite: false,
    createdDate: '2024-05-22',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    favorite: false,
    createdDate: '2024-05-22',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    favorite: false,
    createdDate: '2024-05-22',
  },
];

const MyPlantEdit = () => {
  // const params = useParams<{
  //   myPlantId: string;
  // }>();
  const router = useInternalRouter();
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
      <MostRecentImage image={images[0]} />
      <HeightBox height={16} />
      <ImageInputWithList images={images.slice(1)} />
      <HeightBox height={32} />
      <TextField title={'식물 애칭'} placeholder={'내 식물 애칭입니다.'} essential={false} />
      <HeightBox height={25.5} />
      <Suspense fallback={<div>로딩중...</div>}>
        <PlantLocationBadgeList handleChange={() => {}} essential={false} />
      </Suspense>
      <HeightBox height={25.5} />
      <마지막으로물준날 value={0} onClick={() => {}} />
      <HeightBox height={25.5} />
      <button className={'w-full flex flex-row items-center justify-center gap-1.5'}>
        <span className={'text-regular-body text-Gray600 font-medium'}>내 식물 삭제</span>
        <Trash2 />
      </button>
      <HeightBox height={17.25} />
      <CTAButton text={'저장'} onClick={() => {}} className={'bg-BloomingGreen500'} />
      <HeightBox height={13.75} />
    </Screen>
  );
};

export default MyPlantEdit;
