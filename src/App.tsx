import { Button } from '@mui/material';
import AppleLogin from './components/auth/AppleLogin';
import KakaoLogin from './components/auth/KakaoLogin';

function App() {
  console.log('test');
  return (
    <div>
      <Button variant="contained" color="secondary">
        hihi
      </Button>
      <KakaoLogin />
      <AppleLogin />
    </div>
  );
}

export default App;
