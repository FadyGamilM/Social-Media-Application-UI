import React from "react";
import { FcLike } from "react-icons/fc";
import { BiShare } from "react-icons/bi";
import { Users } from "../dummyData";
const Post = ({ post }) => {
	console.log(post);
	return (
		<div className="justify-center flex">
			<div className="flex flex-col gap-2 shadow-lg md:w-1/2">
				{/* //! image and username */}
				<div className="flex items-center gap-2 p-1">
					<img
						src={
							Users.filter((user) => user.id === post.userId)[0].profilePicture
						}
						alt="p.p"
						className="inline object-cover w-16 h-16 rounded-full "
					/>
					<div>
						<p className="font-semibold">
							{Users.filter((user) => user.id === post.userId)[0].username}
						</p>
						<p className="font-extralight text-sm">{post?.date}</p>
					</div>
				</div>
				{/* //! image  */}
				<div className="mt-2">
					<p className="p-2">{post?.desc}</p>
					<img src={post?.photo} alt="" />
				</div>
				{/* //! Like, share, comment */}
				<div className="flex justify-between mx-4 py-2">
					<div className="flex gap-2">
						<div className="hover:-translate-y-1 transform transition">
							<button>
								<FcLike />
							</button>
						</div>
						<div className="hover:-translate-y-1 transform transition">
							<button>
								<BiShare />
							</button>
						</div>
					</div>
					<div>{post?.like} people like it</div>
				</div>
			</div>
		</div>
	);
};
export default Post;
