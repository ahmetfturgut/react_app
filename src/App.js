import logo from './logo.svg';
import './App.css';
import ButtonClass from './components/buttonClass'
import ButtonHook from './components/buttonHook'

function App() {
  console.log("App çalıştı")
  return (
    <div className="App">
      <ButtonClass params={{
        headerName: "Class Comnponent",
        bodyName: "Class Body Comnponent"
      }}></ButtonClass>
      <p>------------------</p> 
      <ButtonHook params={{
        headerName: "Hook Comnponent",
        bodyName: "Hook Body Comnponent",
      }}></ButtonHook>
    </div>
  );
}

export default App;
