import AppleLogin from './components/auth/AppleLogin';
import KakaoLogin from './components/auth/KakaoLogin';

function App() {
  console.log('test2');
  return (
    <div>
      <KakaoLogin />
      <AppleLogin />
    </div>
  );
}

export default App;
