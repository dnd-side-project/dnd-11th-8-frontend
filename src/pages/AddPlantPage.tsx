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
    value: '',
    required: false,
  },
  '마지막으로 물 준 날': {
    value: '',
    required: false,
  },
};

export type FormKey = keyof typeof initialForm;
export type FormValue = (typeof initialForm)[FormKey];

const AddPlantPage = () => {
  const router = useInternalRouter();
  const [form, setForm] = useState(initialForm);

  const handleChange = useCallback((key: FormKey, value: FormValue) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const isFormValid = Object.entries(form)
    .filter(([, value]) => value.required)
    .every(([, value]) => !isFalsy(value.value));

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
        <TextField title={'반려식물 애칭'} placeholder={'몬스테라 델리시오사'} essential={false} />
        <함께하기시작한날 />
        <마지막으로물준날 />
        <NotificationToggleList />
      </form>
      <CTAButton
        text={'등록하기'}
        className={cn('mt-[19px]', isFormValid ? 'bg-BloomingGreen500' : 'bg-Gray300')}
        disabled={!isFormValid}
      />
    </Screen>
  );
};

export default AddPlantPage;
