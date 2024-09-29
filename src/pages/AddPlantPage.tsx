import Screen from '@/layouts/Screen.tsx';
import IconXMono from '@/assets/icon/x-gray.svg?react';
import TextField from '@/components/common/TextField';
import { cn } from '@/utils.ts';
import CTAButton from '@/components/common/CTAButton';
import Header from '@/components/common/Header';
import useInternalRouter from '@/hooks/useInternalRouter.ts';
import PlantTypeTextField from '@/components/addPlant/PlantTypeTextField.tsx';
import PlantLocationBadgeList from '@/components/addPlant/PlantLocationBadgeList.tsx';
import 함께하기시작한날 from '@/components/addPlant/함께하기시작한날';
import 마지막으로물준날 from '@/components/addPlant/마지막으로물준날.tsx';
import NotificationToggleList from '@/components/addPlant/NotificationToggleList.tsx';
import { Suspense, useCallback, useState } from 'react';
import { isFalsy } from '@/utils/validation/isFalsy.ts';
import { useCreateMyPlant } from '@/queries/useCreateMyPlant.ts';
import useToast from '@/hooks/useToast.tsx';
import RoundedGreenChecked from '@/assets/icon/green-bg-circular-checkbox-checked.svg?react';
import 마지막으로비료준날 from '@/components/addPlant/마지막으로비료준날';
import { CreateMyPlantRequestBody } from '@/apis/myPlant/createMyPlant.ts';
import HeightBox from '@/components/common/HeightBox';
import { useGetRecommendedPeriod } from '@/queries/useGetRecommendedPeriod.ts';
import { FormType } from '@/types/form.ts';
import { setForm } from '@/utils/form/setForm.ts';
import { useSyncPlantType } from '@/hooks/useSyncPlantType.ts';
import { usePlantTypeSearchParams } from '@/hooks/usePlantTypeSearchParams.ts';
import { withDefaultAsyncBoundary } from '@/utils/asyncBoundary/withDefaultAsyncBoundary';

export type ToggleFormState = {
  title: '물주기' | '비료주기' | '건강체크';
  period: number | null;
  checked: boolean;
};

export type CreateMyPlantFormType = FormType<CreateMyPlantRequestBody>;

const initialForm: CreateMyPlantFormType = {
  plantId: {
    value: null,
    required: false,
  },
  scientificName: {
    value: '',
    required: true,
  },
  locationId: {
    value: null,
    required: false,
  },
  nickname: {
    value: '',
    required: false,
  },
  startDate: {
    value: '' as `${number}-${number}-${number}`,
    required: false,
  },
  lastWateredDate: {
    value: 6,
    required: true,
  },
  lastFertilizerDate: {
    value: 6,
    required: true,
  },
  waterAlarm: {
    value: false,
    required: true,
  },
  waterPeriod: {
    value: null,
    required: false,
  },
  fertilizerAlarm: {
    value: false,
    required: true,
  },
  fertilizerPeriod: {
    value: null,
    required: false,
  },
  healthCheckAlarm: {
    value: false,
    required: true,
  },
};

export type AddPlantFormKey = keyof typeof initialForm;
export type AddPlantFormValue = (typeof initialForm)[AddPlantFormKey];

const AddPlantPage = () => {
  const router = useInternalRouter();

  const [addPlantForm, setAddPlantForm] = useState<CreateMyPlantFormType>(initialForm);
  const { plantId } = usePlantTypeSearchParams();

  const { data: recommendedPeriod } = useGetRecommendedPeriod(plantId === null ? null : +plantId);
  const { mutate: submitPlant } = useCreateMyPlant();

  const { openToast } = useToast();

  const handleChange = useCallback((key: AddPlantFormKey, value: AddPlantFormValue['value']) => {
    setAddPlantForm((prev) => ({
      ...prev,
      [key]: {
        value,
        required: prev[key].required,
      },
    }));
  }, []);

  useSyncPlantType({ handler: handleChange });

  const isFormValid = Object.entries(addPlantForm)
    .filter(([, value]) => value.required)
    .every(([, value]) => !isFalsy(value.value));

  const handleSubmit = () => {
    const data = Object.entries(addPlantForm).reduce(
      (acc, [key, value]) => setForm(acc, key as AddPlantFormKey, value.value),
      {} as CreateMyPlantRequestBody,
    );

    submitPlant(data, {
      onSuccess: () => {
        router.push('/');
        requestAnimationFrame(() => {
          openToast({
            message: (
              <div
                className={
                  'flex flex-row items-center justify-center w-full gap-2 text-small-body font-medium text-white'
                }
              >
                <RoundedGreenChecked />
                <span className={''}>내 식물로 추가 되었습니다.</span>
              </div>
            ),
          });
        });
      },
    });
  };

  const onNotificationEnabledChange = (enabled: boolean) => {
    if (!enabled) {
      handleChange('waterAlarm', false);
      handleChange('fertilizerAlarm', false);
      handleChange('healthCheckAlarm', false);
      handleChange('waterPeriod', null);
      handleChange('fertilizerPeriod', null);
    }
  };

  return (
    <Screen>
      <Header
        title={'반려식물 등록'}
        right={
          <button
            onClick={() => {
              router.replace('/');
            }}
          >
            <IconXMono />
          </button>
        }
      />
      <form className={'w-full flex flex-col gap-[25px] mt-[41px]'}>
        <PlantTypeTextField />
        <Suspense fallback={<div>로딩중...</div>}>
          <PlantLocationBadgeList
            essential={false}
            selectedLocation={addPlantForm.locationId.value}
            handleChange={(location) => handleChange('locationId', location.id)}
          />
        </Suspense>
        <마지막으로물준날
          value={addPlantForm.lastWateredDate.value}
          onClick={(value) => handleChange('lastWateredDate', value)}
        />
        <마지막으로비료준날
          value={addPlantForm.lastFertilizerDate.value}
          onClick={(value) => handleChange('lastFertilizerDate', value)}
        />
        <함께하기시작한날
          value={addPlantForm.startDate.value}
          onClick={(value) => handleChange('startDate', value)}
        />
        <TextField
          title={'반려식물 애칭'}
          placeholder={addPlantForm.scientificName.value}
          essential={false}
        />

        <NotificationToggleList
          onNotificationEnabledChange={onNotificationEnabledChange}
          water={{
            checked: addPlantForm.waterAlarm.value,
            period: addPlantForm.waterPeriod.value,
            title: '물주기',
          }}
          setWaterAlarm={(value) => {
            handleChange('waterAlarm', value);
            if (!value) {
              handleChange('waterPeriod', null);
            }
          }}
          setWaterPeriod={(value) => handleChange('waterPeriod', value)}
          fertilizer={{
            checked: addPlantForm.fertilizerAlarm.value,
            period: addPlantForm.fertilizerPeriod.value,
            title: '비료주기',
          }}
          setFertilizerAlarm={(value) => {
            handleChange('fertilizerAlarm', value);
            if (!value) {
              handleChange('fertilizerPeriod', null);
            }
          }}
          setFertilizerPeriod={(value) => handleChange('fertilizerPeriod', value)}
          healthCheck={{
            checked: addPlantForm.healthCheckAlarm.value,
            period: null,
            title: '건강체크',
          }}
          setHealthCheckAlarm={(value) => handleChange('healthCheckAlarm', value)}
          recommendedFertilizerPeriod={recommendedPeriod?.recommendedFertilizerWeek}
          recommendedWaterPeriod={recommendedPeriod?.recommendedWaterDay}
        />
      </form>
      <CTAButton
        text={'등록하기'}
        className={cn('mt-[19px]', isFormValid ? 'bg-BloomingGreen500' : 'bg-Gray300')}
        disabled={!isFormValid}
        onClick={handleSubmit}
      />
      <HeightBox height={30} />
    </Screen>
  );
};

export default withDefaultAsyncBoundary(AddPlantPage);
