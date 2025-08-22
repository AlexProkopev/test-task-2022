import ASCIIText from '@/components/not-found/not-found-component'
import React from 'react'

function NotFound() {
  return (
   <div className='bg-black-87 h-screen'>
     <ASCIIText
       text='404 Page not found'
       enableWaves={true}
       asciiFontSize={2}
     />
   </div>
  )
}

export default NotFound