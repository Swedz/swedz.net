import React from "react";

export function Divider()
{
	return (
		<div className={"divider"}></div>
	);
}

export function Heading({align = "left", children}: {
	align?: "left" | "center" | "right",
	children: string
})
{
	return (
		<div className={"text-heading"} style={{textAlign: align}}>{children}</div>
	);
}

export function Link({url, external = true, children}: {
	url: string,
	external?: boolean,
	children: string
})
{
	return (
		<a className={"link"} target={external ? "swedz_external_tab" : undefined} href={url}>{children}</a>
	);
}