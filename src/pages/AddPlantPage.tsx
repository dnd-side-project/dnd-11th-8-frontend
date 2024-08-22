import Screen from '@/layouts/Screen.tsx';
import IconXMono from '@/assets/icon/icon-x-mono.tsx';
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
import { PlantLocation } from '@/types/plantLocation';
import { isFalsy } from '@/utils/validation/isFalsy.ts';
import { usePlantTypeSearchParams } from '@/hooks/usePlantTypeSearchParams.ts';
import { useCreateMyPlant } from '@/queries/useCreateMyPlant.ts';
import useToast from '@/hooks/useToast.tsx';
import RoundedGreenChecked from '@/assets/icon/RoundedGreenChecked.tsx';
import 마지막으로비료준날 from '@/components/addPlant/마지막으로비료준날';
import { CreateMyPlantProps } from '@/apis/myPlant/createMyPlant.ts';
import HeightBox from '@/components/common/HeightBox';
import { useGetRecommendedPeriod } from '@/queries/useGetRecommendedPeriod.ts';

export type ToggleFormState = {
  title: string;
  period: number | null;
  checked: boolean;
};

const initialForm = {
  '식물 종류': {
    value: '',
    required: true,
  },
  식물위치: {
    value: undefined as PlantLocation | undefined,
    required: true,
  },
  '반려식물 애칭': {
    value: '',
    required: false,
  },
  '함께하기 시작한 날': {
    value: '' as `${number}-${number}-${number}`,
    required: false,
  },
  '마지막으로 물 준 날': {
    value: 0,
    required: true,
  },
  '마지막으로 비료 준 날': {
    value: 0,
    required: true,
  },
};

const initialNotificationForm = {
  water: {
    title: '물주기',
    period: 0,
    checked: false,
  } as ToggleFormState,
  fertilizer: {
    title: '비료주기',
    period: 0,
    checked: false,
  } as ToggleFormState,
  healthCheck: {
    title: '건강체크',
    period: null,
    checked: false,
  } as ToggleFormState,
};

export type FormKey = keyof typeof initialForm;
export type FormValue = (typeof initialForm)[FormKey];

const AddPlantPage = () => {
  const router = useInternalRouter();
  const [form, setForm] = useState(initialForm);
  const [water, setWater] = useState(initialNotificationForm.water);
  const [fertilizer, setFertilizer] = useState(initialNotificationForm.fertilizer);
  const [healthCheck, setHealthCheck] = useState(initialNotificationForm.healthCheck);
  const { plantId, plantType } = usePlantTypeSearchParams();
  const { mutate: submitPlant } = useCreateMyPlant();
  const { openToast } = useToast();

  const { data: recommendedPeriod } = useGetRecommendedPeriod(plantId === null ? null : +plantId);

  const handleChange = useCallback((key: FormKey, value: FormValue) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const isFormValid = Object.entries(form)
    .filter(([, value]) => value.required)
    .every(([, value]) => !isFalsy(value.value));

  const handleSubmit = () => {
    const data: CreateMyPlantProps = {
      plantId: plantId ?? undefined,
      nickname: form['반려식물 애칭'].value,
      scientificName: plantType ?? '',
      locationId: form.식물위치.value?.id,
      startDate: form['함께하기 시작한 날'].value,
      lastWateredDate: form['마지막으로 물 준 날'].value,
      lastFertilizerDate: form['마지막으로 비료 준 날'].value,
      waterAlarm: water.checked,
      waterPeriod: water.period ?? undefined,
      fertilizerAlarm: fertilizer.checked,
      fertilizerPeriod: fertilizer.period ?? undefined,
      healthCheckAlarm: healthCheck.checked,
    };
    submitPlant(data, {
      onSuccess: () => {
        router.push('/');
        setTimeout(() => {
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

  return (
    <Screen>
      <Header
        title={'반려식물 등록'}
        right={
          <button
            onClick={() => {
              router.goBack();
            }}
            className={'absolute right-0 top-1/2 -translate-y-1/2'}
          >
            <IconXMono />
          </button>
        }
      />
      <form className={'w-full flex flex-col gap-[25px] mt-[41px]'}>
        <PlantTypeTextField handleChange={handleChange} />
        <Suspense fallback={<div>로딩중...</div>}>
          <PlantLocationBadgeList
            selectedLocation={form.식물위치.value}
            handleChange={handleChange}
          />
        </Suspense>
        <마지막으로물준날
          value={form['마지막으로 물 준 날'].value}
          onClick={(value) =>
            handleChange('마지막으로 물 준 날', {
              value,
              required: true,
            })
          }
        />
        <마지막으로비료준날
          value={form['마지막으로 비료 준 날'].value}
          onClick={(value) =>
            handleChange('마지막으로 비료 준 날', {
              value,
              required: true,
            })
          }
        />
        <함께하기시작한날
          value={form['함께하기 시작한 날'].value}
          onClick={(value) =>
            handleChange('함께하기 시작한 날', {
              value,
              required: true,
            })
          }
        />
        <TextField
          title={'반려식물 애칭'}
          placeholder={form['식물 종류'].value}
          essential={false}
        />

        <NotificationToggleList
          water={water}
          setWater={(value) => setWater((prev) => ({ ...prev, ...value }))}
          fertilizer={fertilizer}
          setFertilizer={(value) => setFertilizer((prev) => ({ ...prev, ...value }))}
          healthCheck={healthCheck}
          setHealthCheck={(value) => setHealthCheck((prev) => ({ ...prev, ...value }))}
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

export default AddPlantPage;
