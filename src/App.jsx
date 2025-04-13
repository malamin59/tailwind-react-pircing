
import { Suspense } from 'react';
import './App.css';
// import DaisyNan from './components/DaisyNabe/DaisyNan';
import NabBar from './components/NavBar/NabBar';
import PrisingOption from './components/PrisingOption/PrisingOption';
import ResultChat from './components/ResultChat/ResultChat';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';


const pricingPromise = fetch('pricingData.json')
.then(res => res.json());

const marksPromise = axios.get('marksData.json');

function App() {

  return (
    <>
 <header>
 <NabBar></NabBar>
 </header>
        <main>
   <Suspense fallback={<span className="loading loading-dots loading-sm"></span>}>
        <PrisingOption pricingPromise={pricingPromise}></PrisingOption>
   </Suspense>
   <Suspense fallback={<span className="loading loading-dots loading-sm"></span>}>
    <MarksChart marksPromise={marksPromise}></MarksChart>
   </Suspense>
        </main>
   <ResultChat></ResultChat>
        {/* <DaisyNan></DaisyNan> */}
    
    </>
  )
}

export default App
