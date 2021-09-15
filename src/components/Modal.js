import React, { useEffect, useState, lazy, Suspense } from 'react'
// import BarChart from './BarChart'

const LazyBarChart = lazy(() => import('./BarChart'))

function Modal({ isModalOpen }) {

    const [showLoading, setShowLoading] = useState(false)
    const [showChart, setShowChart] = useState(false)

    

    useEffect(() => {
        let intervalId;
        console.log('yo');
        if(showLoading === true){
            intervalId = setTimeout(()=>{
                console.log('hi');
                setShowLoading(false);
            }, 7000)
        }
        return () => {
            clearInterval(intervalId)
        }
    }, [showLoading])

    return (
        <div className={isModalOpen ? "modal active" : "modal"}>
            <div className="container">

                <div className="img-container">
                    <img className="modal-img" src="https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt='img'/>
                </div>

                {showLoading 
                    && <img 
                        className="loading-img"
                        src="https://i.giphy.com/media/3o7bu3XilJ5BOiSGic/200w.webp" alt="gif" />}
                

                <div className="btn-container">
                    <button onClick={()=>{
                        setShowLoading(true);
                        setShowChart(false);
                    }}>Show Loading</button>

                    <button onClick={()=>{
                        setShowLoading(false);
                        setShowChart(prevState => !prevState)
                    }}>Show Chart</button>
                </div>
    
                <Suspense fallback="">
                    {showChart && <div className='chart'>
                        <LazyBarChart className="barchart" />
                    </div>}
                </Suspense>
                
            </div>
        </div>
    )
}

export default Modal