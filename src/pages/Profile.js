import React from "react";

import Topbar from "../components/Topbar";
import ProfileIdentification from "../components/ProfileIdentification";
import Feed from "../components/Feed";
import ChatSidebar from "../components/ChatSidebar";
const Profile = () => {
	return (
		<div>
			<Topbar search={null} />
			<ProfileIdentification />
			<div className="flex gap-4 mt-2">
				<div className="grow min-h-screen md:w-3/4">
					<Feed />
				</div>
				<div className="w-2/4 min-h-screen p-2 md:w-2/4">
					<ChatSidebar profilePage />
				</div>
			</div>
		</div>
	);
};

export default Profile;
