import React from "react";
import Post from "./Post";
import SharePost from "./SharePost";

import { Posts } from "../../src/dummyData";

const Feed = () => {
	return (
		<div>
			<div className="m-4 gap">
				<div className="gap-y-8 flex flex-col">
					<SharePost />
					{Posts.map((post) => (
						<Post key={post.id} post={post} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Feed;
