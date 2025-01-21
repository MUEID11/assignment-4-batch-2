import { useEffect, useRef } from "react";


const useDebounce = (callback,delay) => {
  const timeOutIdRef = useRef(null);
  
  useEffect(() => {

    return () => {
      if(timeOutIdRef.current){
        clearInterval();
      }
    }
  },[])

  const debouncedCallback = (...args) =>{
    if(timeOutIdRef.current){
      clearInterval(timeOutIdRef.current);
    }
    timeOutIdRef.current = setTimeout(() => {
      callback(...args)
    },delay)
  }
  return debouncedCallback;
};

export default useDebounce;