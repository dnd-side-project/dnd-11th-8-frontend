import useInternalRouter from '@/hooks/useInternalRouter';
import Card from '../common/Card';
import AddIcon from '@/assets/icon/plus-green-filled-circle.svg?react';

const MyPlantRegistration = () => {
  const { push } = useInternalRouter();
  return (
    <div className="flex justify-center items-center mx-auto mt-[19px] mb-[27px]">
      <div className="w-full" onClick={() => push('/my-plant/add')}>
        <Card.Container verticalPaddingSize={'small'}>
          <div className="py-[18px]">
            <Card.Content className={'text-center pb-5'}>
              <button>
                <AddIcon />
              </button>
            </Card.Content>

            <Card.Content className={'text-center pb-0 text-Gray900 text-small-body'}>
              반려식물을 등록해보세요!
            </Card.Content>
          </div>
        </Card.Container>
      </div>
    </div>
  );
};

export default MyPlantRegistration;
