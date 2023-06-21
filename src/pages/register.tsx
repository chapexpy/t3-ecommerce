import { type NextPage } from "next";
import Link from "next/link";

const Register: NextPage = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-slate-500 via-gray-600 to-slate-900">
        <div className="flex h-3/4 w-1/2 items-center justify-center rounded-xl bg-gray-800">
          <form action="#" className="mt-8 grid grid-cols-6 gap-6 w-2/3">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="FirstName"
                className="block text-sm font-medium text-white"
              >
                First Name
              </label>

              <input
                type="text"
                id="FirstName"
                name="first_name"
                className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-black p-2 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="LastName"
                className="block text-sm font-medium text-white"
              >
                Last Name
              </label>

              <input
                type="text"
                id="LastName"
                name="last_name"
                className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-black p-2 shadow-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>

              <input
                type="email"
                id="Email"
                name="email"
                className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-black p-2 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="Password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>

              <input
                type="password"
                id="Password"
                name="password"
                className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-black p-2 shadow-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="PasswordConfirmation"
                className="block text-sm font-medium text-white"
              >
                Password Confirmation
              </label>

              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-black p-2 shadow-sm"
              />
            </div>
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button className="inline-block shrink-0 rounded-md border border-white bg-white px-12 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white ">
                Create an account
              </button>

              <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                Hesabınız var mı?&nbsp;&nbsp;
                <Link href="/login" className="text-white underline">
                  Giriş Yapın
                </Link>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
