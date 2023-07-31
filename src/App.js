
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import AddMember from './components/AddMember';
import NavBar from './components/NavBar';
import MemberList from './components/MemberList';
import EditMember from './components/EditMember';
import ProfilePage from './components/ProfilePage';

function App() {
  
  return <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route index element={<MemberList />} />
      <Route path="/" element={<MemberList />} />
        <Route path="/add" element={<AddMember />} />
        <Route path="/edit/:id" element={<EditMember />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
