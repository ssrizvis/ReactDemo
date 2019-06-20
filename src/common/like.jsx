import React from "react";
const Like = ({ liked, onClick }) => {
	let likeClass = "fa fa-heart";
	if (!liked) likeClass += "-o";
	return (
		<i className={likeClass} style={{ cursor: "pointer" }} onClick={onClick} />
	);
};

export default Like;
