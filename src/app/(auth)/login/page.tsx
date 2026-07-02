import LoginForm from "./LoginForm"

function LoginPage() {
  return (
    <section className="mt-6 flex items-center justify-center">
      <div className="p-5 w-full md:w-2/3 rounded-lg  bg-white m-auto">
        <h1 className="text-3xl  font-bold text-gray-800 mb-5">
          Login
        </h1>
        <LoginForm />
      </div>

    </section>
  )
}

export default LoginPage
