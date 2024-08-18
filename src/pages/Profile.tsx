import MyProfile from '@/components/profile/MyProfile';
import SetNotifications from '@/components/profile/SetNotifications';
import TopButton from '@/components/profile/TopButton';
import UseInformation from '@/components/profile/UseInformation';
import Screen from '@/layouts/Screen';

const Profile = () => {
  const myProfile = {
    nickname: '블루밍',
    myPlantCount: 2,
    alarmCount: 1,
    alarmStatus: true,
    alarmTime: 8,
  };

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

export default Profile;
