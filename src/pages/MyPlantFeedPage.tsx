import Screen from '@/layouts/Screen.tsx';
import Header from '@/components/common/Header';
import CloseIcon from '@/assets/icon/x-gray.svg?react';
import FilterButton from '@/components/common/FilterButton';
import { useState } from 'react';
import HeightBox from '@/components/common/HeightBox';
import MyPlantFeedImage from '@/components/myPlantDetail/MyPlantFeedImage.tsx';
import { useGetMyPlantDetail } from '@/queries/useGetMyPlantDetail.ts';
import { useParams } from 'react-router-dom';
import { parseIdParams } from '@/utils/params/parseIdParams.ts';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import { withAsyncBoundary } from '@toss/async-boundary';
import ErrorPage from '@/pages/ErrorPage.tsx';
import LoadingSpinner from '@/components/LoadingSpinner.tsx';
import FloatingButton from '@/components/common/FloatingButton';
import MyPlantFeedDeleteOrModifyTooltip from '@/components/myPlantFeed/MyPlantFeedDeleteOrModifyTooltip.tsx';
import CTAButton from '@/components/common/CTAButton';
import { useHandleImage } from '@/hooks/useHandleImage.ts';

// TODO: 즐겨찾기 버튼 클릭시 기능, Floating 버튼 UI 구현 및 식물 추가 삭제 기능 구현

const filterOptions = ['최근 등록 순', '오래된 날짜 순'];

const MyPlantFeedPage = () => {
  const [query, setQuery] = useState(filterOptions[0]);
  const [showDeleteOrModifyTooltip, setShowDeleteOrModifyTooltip] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [deleteIsPending, setDeleteIsPending] = useState(false);

  const params = useParams<{ plantId: string }>();
  const plantId = parseIdParams(params.plantId);
  const router = useInternalRouter();

  const { data: myPlantDetail } = useGetMyPlantDetail(parseIdParams(params.plantId));
  const { handleImagesDelete } = useHandleImage(parseIdParams(params.plantId));

  const filteredImages = [...(myPlantDetail?.images ?? [])];

  switch (query) {
    case '최근 등록 순':
      filteredImages.sort((a, b) => {
        return new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime();
      });
      break;
    case '오래된 날짜 순':
      filteredImages.sort((a, b) => {
        return new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime();
      });
      break;
  }

  if (!plantId) {
    throw Error('잘못된 접근입니다.');
  }

  const favoriteImages = filteredImages.filter((image) => image.favorite) ?? [];
  const notFavoriteImages = filteredImages.filter((image) => !image.favorite) ?? [];

  const sortedImages = [...favoriteImages, ...notFavoriteImages];

  const handleShowDeleteOrModifyTooltip = () => {
    setShowDeleteOrModifyTooltip((prev) => !prev);
  };

  const handleDeletePlantOptionSelect = () => {
    setIsDeleteMode(true);
  };

  const handleSelectForDelete = (imageId: number) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages((prev) => prev.filter((id) => id !== imageId));
    } else {
      setSelectedImages((prev) => [...prev, imageId]);
    }
  };

  const handleDeletePlantFeed = () => {
    setDeleteIsPending(true);
    void handleImagesDelete(selectedImages, () => {
      setDeleteIsPending(false);
      setIsDeleteMode(false);
      setSelectedImages([]);
    });
  };

  return (
    <Screen className="relative min-h-dvh">
      <Header
        title={'식물 피드'}
        right={
          <button onClick={router.goBack}>
            <CloseIcon />
          </button>
        }
      />
      {deleteIsPending && <LoadingSpinner transparent />}
      <HeightBox height={16} />
      <div className="w-full flex flex-row justify-end">
        <FilterButton filterOptions={filterOptions} onSelect={setQuery} selected={query} />
      </div>
      <HeightBox height={16} />
      <div className={'grid grid-cols-2 gap-x-[7px] gap-y-4'}>
        {sortedImages.map((image) => (
          <MyPlantFeedImage
            key={`MyPlantFeedDetailImage-${image.imageId}`}
            deleteMode={isDeleteMode}
            isSelectForDelete={selectedImages.includes(image.imageId)}
            onSelectForDelete={handleSelectForDelete}
            imageId={image.imageId}
            plantId={plantId}
            imageSrc={image.imageUrl}
            favorite={image.favorite}
            showCreatedDate
            createdAt={image.createdDate}
          />
        ))}
      </div>
      {isDeleteMode ? (
        <div className={'mt-4 flex flex-row gap-4'}>
          <CTAButton
            className="bg-BloomingGreen500"
            text="취소"
            onClick={() => {
              setIsDeleteMode(false);
              setSelectedImages([]);
            }}
          />
          <CTAButton
            disabled={selectedImages.length === 0}
            className={'bg-Red500 disabled:bg-Gray300'}
            onClick={handleDeletePlantFeed}
            text={`삭제(${selectedImages.length})`}
          />
        </div>
      ) : (
        <FloatingButton
          onClick={handleShowDeleteOrModifyTooltip}
          rotate={showDeleteOrModifyTooltip}
        />
      )}
      {showDeleteOrModifyTooltip && (
        <MyPlantFeedDeleteOrModifyTooltip
          plantId={plantId}
          onDeletePlantFeed={handleDeletePlantOptionSelect}
          onCompleted={() => setShowDeleteOrModifyTooltip(false)}
        />
      )}
    </Screen>
  );
};

export default withAsyncBoundary(MyPlantFeedPage, {
  rejectedFallback: ({ error, reset }) => <ErrorPage error={error} reset={reset} />,
  pendingFallback: <LoadingSpinner />,
});
