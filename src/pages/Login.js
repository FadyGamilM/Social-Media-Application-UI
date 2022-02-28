import React from "react";
import { BiNetworkChart } from "react-icons/bi";

const Login = () => {
	return (
		<div>
			<dir className="justify-center border-b-2 mx-8 pb-5 font-semibold text-4xl">
				<h1>Login</h1>
			</dir>
			<div className="flex">
				<div className="w-1/3 px-8 grid place-items-center border-r-2 ">
					<div className="flex gap-2 items-center text-3xl">
						<BiNetworkChart />
						<h1 className="font-semibold text-slate-800 font-sans">
							Socialaize
						</h1>
					</div>
				</div>
				<div className="grid place-items-center h-full w-full">
					<div className="w-3/4">
						<form className="flex flex-col gap-4">
							<input
								type="email"
								placeholder="Email"
								className="text-slate-700 outline-none border-none focus:border-b-2 focus:border-slate-800  font-semibold rounded-lg p-3"
							/>

							<input
								type="password"
								placeholder="password"
								className="text-slate-700 outline-none border-none focus:border-b-2 focus:border-slate-800  font-semibold rounded-lg p-3"
							/>

							<button className="hover:bg-blue-600 hover:text-slate-50 bg-blue-400 p-3 rounded-full text-slate-800 font-bold">
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
