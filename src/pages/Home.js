import React from "react";
import ChatSidebar from "../components/ChatSidebar";
import Feed from "../components/Feed";
import Topbar from "../components/Topbar";
const Home = () => {
	return (
		<div className="p-4">
			<Topbar />
			<div className="flex gap-4 mt-2">
				<div className="grow min-h-screen">
					<Feed />
				</div>
				<div className="w-1/3 min-h-screen p-2">
					<ChatSidebar />
				</div>
			</div>
		</div>
	);
};

export default Home;
