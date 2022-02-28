import React from "react";
import { GiRapidshareArrow } from "react-icons/gi";
import { BsFillFileImageFill } from "react-icons/bs";
import { AiFillTags } from "react-icons/ai";
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
				<div className="gap-2 mt-2 flex justify-between mx-5">
					<button
						className="  flex items-center gap-1 font-semibold
													hover:-translate-y-1 transform 
															 text-slate-700 transition 
															p-1 rounded-lg "
					>
						<BsFillFileImageFill />
						<p>Photos / Videos</p>
					</button>
					<button
						className="flex items-center gap-1 font-semibold
													hover:-translate-y-1 transform 
															 text-slate-700 transition 
															p-1 rounded-lg"
					>
						<AiFillTags />
						<p>Tag Someone</p>
					</button>
					<button
						className="flex items-center gap-1 font-semibold
													hover:-translate-y-1 transform 
															 text-slate-700 transition 
															p-1 rounded-lg"
					>
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
