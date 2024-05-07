"use client"
const { default: toast } = require("react-hot-toast")

const handleError = (message) => { 
  return  toast.error(`${message}`)
 }

 const hadnleSuccess = (message) => { 
    return toast.success(`${message}`)
  }

  export {handleError, hadnleSuccess}