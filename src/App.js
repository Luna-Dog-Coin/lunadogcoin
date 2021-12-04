import './App.scss';
import Header from './components/Header';
import Tokenomics from './components/Tokenomics';
import Community from './components/Community';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <>
      <Header></Header>
      <Tokenomics></Tokenomics>
      <Roadmap></Roadmap>
      <Community></Community>
    </>
  );
}

export default App;
