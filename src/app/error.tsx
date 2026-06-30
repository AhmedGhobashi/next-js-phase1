'use client'
interface IErrorMessageProps{
  error: Error;
  reset: ()=> void
}
 
import Link from "next/link"
const error = ({error, reset}: IErrorMessageProps) => {
  return (
  <>
  <h1>Error</h1>
  <p>Details: {error?.message} </p>
  <button className="bg-cyan-800 text-white rounded-md p-2" onClick={()=>reset()}>try Again</button>
  <Link href={"/"}>Return to home</Link>
  </>
)}

export default error
