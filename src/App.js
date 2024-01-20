import './App.css';
import MainView from './components/mainView/MainView';
import NavbarView from './components/navigation/navigationBar/NavbarView';
import ProfileBarView from './components/profile/profileBar/ProfilebarView';





function App() {
  return (
    <div className="App">
      <div>
      <ProfileBarView />
      <NavbarView />
      <MainView />
     </div>
    </div>
  );
}

export default App;
