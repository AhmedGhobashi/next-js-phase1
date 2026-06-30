'use client'


type TErrorSearchPage ={
    error: Error;
    reset: ()=> void;
}

const error = ({error, reset}: TErrorSearchPage) => {
  return (
    <div>
      <h1 className="  text-red-600 font-bold">{error?.message}</h1>

    </div>
  )
}

export default error
