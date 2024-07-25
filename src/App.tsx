import AppleLogin from './components/auth/AppleLogin';
import KakaoLogin from './components/auth/KakaoLogin';

function App() {
  console.log('test');
  return (
    <div>
      <div className="bg-red-400">화이팅 ~</div>
      <KakaoLogin />
      <AppleLogin />
    </div>
  );
}

export default App;
