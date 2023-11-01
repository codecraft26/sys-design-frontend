import React from 'react'
import { forwardRef } from 'react'
import withDimension from '../hoc/WithDimension'

const Comp1 = (props,ref) => {
  return (
    <div ref={ref}>{

        
    }</div>
  )
}

export default withDimension(forwardRef(Comp1))