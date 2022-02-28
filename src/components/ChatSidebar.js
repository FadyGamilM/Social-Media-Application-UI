import React from "react";
import { Users } from "../dummyData";
const ChatSidebar = ({ profilePage }) => {
	const ProfilePage = () => {
		return (
			<div className="flex flex-col gap-y-3">
				<div>
					<h1 className="border-b-2 pb-1 font-semibold text-slate-700 text-center">
						Friends
					</h1>
					<div className=" md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
						{Users.map((user) => (
							<div className="flex items-center gap-2 my-2">
								<img
									src={user.profilePicture}
									alt="p.p"
									className="inline object-cover w-16 h-16 rounded-full"
								/>
								<div>
									<p className="font-semibold">{user.username}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<h1 className="border-b-2 pb-1 font-semibold text-slate-700 text-center">
						Followers
					</h1>
					<div className=" md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
						{Users.map((user) => (
							<div className="flex items-center gap-2 my-2">
								<img
									src={user.profilePicture}
									alt="p.p"
									className="inline object-cover w-16 h-16 rounded-full"
								/>
								<div>
									<p className="font-semibold">{user.username}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div>
					<h1 className="border-b-2 pb-1 font-semibold text-slate-700 text-center">
						Followings
					</h1>
					<div className=" md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3">
						{Users.map((user) => (
							<div className="flex items-center gap-2 my-2">
								<img
									src={user.profilePicture}
									alt="p.p"
									className="inline object-cover w-16 h-16 rounded-full"
								/>
								<div>
									<p className="font-semibold">{user.username}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	};
	const HomePage = () => {
		return (
			<>
				<div className="flex flex-col gap-y-2">
					<h1>Online Friends</h1>
					{Users.map((user) => (
						<div className="flex items-center gap-2">
							<img
								src={user.profilePicture}
								alt="p.p"
								className="inline object-cover w-16 h-16 rounded-full"
							/>
							<div>
								<p className="font-semibold">{user.username}</p>
							</div>
						</div>
					))}
				</div>
			</>
		);
	};
	return <div>{profilePage ? <ProfilePage /> : <HomePage />}</div>;
};

export default ChatSidebar;
