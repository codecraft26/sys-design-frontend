import React from 'react'
import useApiData from './useApiData'

const Comp3 = () => {

    const {data,loading,error}=useApiData('http://localhost:3000/alluser')
    if(loading){
        return <div>
            laoding
        </div>
    }
    if(error){
        return <div>
            Error:{error.message}
        </div>
    }


  return (
    <div>
        {
            data.user
        }


    </div>
  )
}


export default Comp3