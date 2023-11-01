import React from 'react'
import withDimension from '../hoc/WithDimension'
import { forwardRef } from 'react'
const Comp2 = (props,ref) => {
  return (
    <div ref={ref}>Comp1
    
    {ref.width}
    
    </div>
  )
}

export default withDimension(forwardRef(Comp2))
