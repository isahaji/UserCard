import './index.css'
import Address from './comp/profile/Address';
import FullName from './comp/profile/FullName';
import ProfilePhoto from './comp/profile/ProfilePhoto';

function App() {
  return (
    <div className="grid grid-row-3 place-items-center gap-2 " >
      <ProfilePhoto />
      <FullName />
      <Address />

      
    </div>
  );
}

export default App;
