import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { BiNetworkChart } from "react-icons/bi";
import { FcSearch } from "react-icons/fc";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { HiUserAdd } from "react-icons/hi";

const Topbar = () => {
	return (
		<div className="border-b-2 pb-2 ">
			{/* //TODO=> UPPER PART */}
			<div className="grid grid-cols-3 items-center">
				{/* //! Left part of the header */}
				<div>
					<div className="flex gap-2 items-center">
						<BiNetworkChart />
						<h1>Socialaize</h1>
					</div>
				</div>
				{/* //! End of left part of the header */}
				<div className="text-center items-center">
					<div className="flex gap-4 sm:hidden">
						<h1>Home</h1>
						<h1>Profile</h1>
					</div>
				</div>
				{/* //! Right part of the header */}
				<div>
					<div className="flex text-center sm:justify-between justify-end">
						<div className="sm:flex sm:gap-4 hidden">
							<div>Home</div>
							<div>Profile</div>
						</div>
						<div className="flex gap-2 items-center">
							<div>
								<HiUserAdd />
							</div>
							<div>
								<BsFillChatSquareDotsFill />
							</div>
							<div>
								<IoIosNotifications />
							</div>
						</div>
					</div>
				</div>
				{/* //! End of Right part of the header */}
			</div>

			{/* //TODO=> LOWER PART */}
			{/* //! Center part of the header */}
			<div className="mx-16 mt-5">
				<div className="flex gap-2 items-center ring-2 ring-gray-500 rounded-lg p-2">
					<FcSearch />
					<input
						type="text"
						placeholder="Search"
						className="border-none focus:border-none focus:outline-none font-semibold w-full"
					/>
				</div>
			</div>
			{/* //! End of Center part of the header */}
		</div>
	);
};

export default Topbar;
