import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import MacContainer from './MacContainer'

const App = () => {
  return (
    <div className='h-screen text-white w-full bg-black flex justify-center'>
      <div className="absolute top-20 flex-col flex items-center">
        <h1 className='highlight font-bold text-7xl tracking-tighter'>macbook pro.</h1>
        <h5 className=' font-semibold mt-5 text-xl mb-1 '>Oh Yeah Devraj !</h5>
        <p className='text-center font-medium w-3/4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At enim perferendis nesciunt vel.</p>
      </div>
      <Canvas camera={{fov:20 , position:[1,-10,100]}} >
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_08_4k.exr']} />
        <ScrollControls pages={3}>
        <MacContainer/>
        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App