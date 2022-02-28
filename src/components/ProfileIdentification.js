import React from "react";
import { Users } from "../dummyData";
import { FaUserFriends } from "react-icons/fa";
const ProfileIdentification = () => {
	return (
		<div>
			<div class="flex font-sans shadow-lg m-8 rounded-lg overflow-hidden">
				<div class="flex-none w-48 relative">
					<img
						src="/assets/person/1.jpeg"
						alt=""
						class="absolute inset-0 w-full h-full object-cover"
					/>
				</div>
				<form class="flex-auto p-6">
					<div class="flex flex-wrap">
						<h1 class="flex-auto text-2xl font-semibold text-slate-900">
							Fady Gamil
						</h1>
						<div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
							Backend engineer, Soul Music, learning is a passion, and i love my
							friends.
						</div>
					</div>
					<div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
						<div class="space-x-2 flex text-sm">
							<label>
								<input
									class="sr-only peer"
									name="size"
									type="radio"
									value="s"
								/>
								<div class="w-18 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
									50 Friends
								</div>
							</label>
							<label>
								<input
									class="sr-only peer"
									name="size"
									type="radio"
									value="xl"
								/>
								<div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
									|
								</div>
							</label>
							<label>
								<input
									class="sr-only peer"
									name="size"
									type="radio"
									value="m"
								/>
								<div class="w-18 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
									30 Followers
								</div>
							</label>
							<label>
								<input
									class="sr-only peer"
									name="size"
									type="radio"
									value="xl"
								/>
								<div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
									|
								</div>
							</label>
							<label>
								<input
									class="sr-only peer"
									name="size"
									type="radio"
									value="l"
								/>
								<div class="w-18 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
									20 Followings
								</div>
							</label>
						</div>
					</div>
					<div class="flex space-x-4 mb-6 text-sm font-medium">
						<div class="flex-auto flex space-x-4">
							<button
								class="flex items-center gap-2 h-10 px-6 font-semibold rounded-md bg-green-400 hover:bg-green-600 hover:text-slate-200 transform transition "
								type="submit"
							>
								<FaUserFriends />
								Add Friend
							</button>
							<button
								class="h-10 px-6 font-semibold rounded-md border border-slate-200 bg-blue-400 hover:bg-blue-600 hover:text-slate-200 transform transition"
								type="button"
							>
								Follow
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProfileIdentification;
