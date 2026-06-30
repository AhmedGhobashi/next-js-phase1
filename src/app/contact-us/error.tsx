'use client'


type TErrorContactUsPage ={
    error: Error;
    reset: ()=> void;
}

const error = ({error, reset}: TErrorContactUsPage) => {
  return (
    <div>
      <h1 className="  text-red-600 font-bold">{error?.message}</h1>

    </div>
  )
}

export default error;
