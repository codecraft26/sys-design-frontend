import { useEffect, useState } from "react"

const useApiData=(apiEndpoint)=>{
const [data,setData]=useState(null)
const [loading,setLoading]=usetstate(true);
const [error,setError]=useState(null)


useEffect(()=>{
    axios.get(apiEndpoint)
    .then(response=>{
        setData(response.data);
        setLoading(false)

    })
    .catch(error=>{
        setError(error)
        setLoading(false)

    });

},[apiEndpoint])
return {data,loading,error}
}

export default useApiData