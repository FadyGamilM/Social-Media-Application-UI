import React from "react";
import { GiRapidshareArrow } from "react-icons/gi";
const SharePost = () => {
	return (
		<div className="md:mx-8 lg:mx-32">
			{/* post text part */}
			<div className="rounded-lg border-2 p-2 shadow-lg">
				<input
					type="text"
					placeholder="what is in your mind .. "
					className="
                  p-2 font-semibold h-16 w-full
                  outline-none border-b-2

                  "
				/>
				<div className="gap-2 mt-2 flex justify-between">
					<button className="  flex items-center gap-1 font-semibold hover:bg-indigo-300 transition  bg-indigo-400 p-1 rounded-lg ">
						<GiRapidshareArrow />
						<p>Photos / Videos</p>
					</button>
					<button className="flex items-center gap-1 font-semibold hover:bg-indigo-300 transition  bg-indigo-400 p-1 rounded-lg ">
						<GiRapidshareArrow />
						<p>Tag Someone</p>
					</button>
					<button className="flex items-center gap-1 font-semibold hover:bg-indigo-300 transition  bg-indigo-400 p-1 rounded-lg ">
						<GiRapidshareArrow />
						<p>share</p>
					</button>
				</div>
			</div>
			{/* some buttons and share button part */}
			<div></div>
		</div>
	);
};

export default SharePost;
