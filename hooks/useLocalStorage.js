import {useState} from 'react'
const useLocalStorage = () => {
    const [ value, setValue ] = useState()
    
    return [value,setValue]
}

export default useLocalStorage