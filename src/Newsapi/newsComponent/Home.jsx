import React, { useState } from 'react'
import NewHeader from './NewHeader'
import NewsBanner from './NewsBanner'
import LoadingBar from 'react-top-loading-bar'


const Home = (props) => {
  const [progress, setProgress] = useState(0)

  let page = 1
  let pageSize = 7



  return (
    <>
<LoadingBar
progress={progress}
color='#6f3bcb'
onLoaderFinished={() => setProgress(0)}
/>


<div className='flex justify-between max-w-[1500px] mx-auto space-x-5'>


        <div className=''>
         <NewHeader/>
        </div>

        <div className=' flex-1 justify-center '>
        <NewsBanner catr={props.catr} page={page} pageSize={pageSize} setProgress={setProgress} />       
        </div>
    </div>

    </>
  )
}

export default Home
