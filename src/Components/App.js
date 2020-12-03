import { DeviceBP } from './DeviceBP/DeviceBP';
import './App.css';
import { Stages } from './Stages/Stages';
import { DataProvider } from './Stages/DataGame/DataContext';

function App() {
  return (
    <DataProvider >
      <div>
        <Stages />
        <DeviceBP />
      </div>
    </DataProvider>
  );
}

export default App;
