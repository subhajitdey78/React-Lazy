import React, { lazy, Suspense } from 'react'
import "./App.css";
//import OtherComponenets from "./OtherComponents";

// const OtherComponenets = React.lazy(() => import('./OtherComponents'))

const OtherComponenets = lazy(() => {
  return new Promise(resolve => {
    setTimeout(()=> resolve(import('./OtherComponents')), 2000);
  });
  });
  const AnotherComponenets = lazy(() => import ("./AnotherComponent"));
    

function App() {
  return (
    <div>
       <h1> Hi Everyone</h1>
      <Suspense 
      fallback={
        <div>
               <h1>Loading....</h1>
      </div>
      }
      >
        
        <OtherComponenets />
        <AnotherComponenets />
      
      </Suspense>
    
    </div>
  );
}

export default App