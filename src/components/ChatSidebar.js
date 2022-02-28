import React from "react";
import { Users } from "../dummyData";
const ChatSidebar = () => {
	return (
		<div>
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
		</div>
	);
};

export default ChatSidebar;
