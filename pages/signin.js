export default function Signin() {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-start-2 col-span-1 m-20 justify-items-center p-5 bg-red-300 shadow-lg hover:text-pink-100">
          <h1 className="font-bold text-lg">Login To Your Account</h1>
          <div>
            <div>Your Email:</div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>
            <div>Your Password:</div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div>
            <div>Forgot Your Password?</div>
          </div>
          <div className="justify-items-center">
            <button className="primary">Login</button>
            <button className="primary ml-5">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
