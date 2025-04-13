
import { Suspense } from 'react';
import './App.css';
// import DaisyNan from './components/DaisyNabe/DaisyNan';
import NabBar from './components/NavBar/NabBar';
import PrisingOption from './components/PrisingOption/PrisingOption';

const pricingPromise = fetch('pricingData.json')
.then(res => res.json())


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
        </main>
        {/* <DaisyNan></DaisyNan> */}
    
    </>
  )
}

export default App
