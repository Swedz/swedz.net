import React from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Heading} from "@/app/utils";

export function TileGrid({columns = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children}: {
	columns?: string,
	children: React.ReactNode
})
{
	return (
		<div className={`grid gap-6 ${columns} items-center pb-6`}>
			{children}
		</div>
	);
}

export function TileAlt({span = "col-span-1", alignTitle = "left", title, children}: {
	span?: string,
	alignTitle?: "left" | "center" | "right",
	title: string,
	children: React.ReactNode
})
{
	return (
		<div className={span}>
			<Heading align={alignTitle}>{title}</Heading>
			<div className={"mb-6"}>
				{children}
			</div>
		</div>
	);
}

export function Tile({span = "col-span-1", icon, image, color, title, link, subtitle, centered = true, children}: {
	span?: string,
	icon?: IconProp,
	image?: React.ReactNode,
	color?: string,
	title: string,
	link?: string,
	subtitle?: React.ReactNode,
	centered?: boolean,
	children: React.ReactNode
})
{
	if(icon && image)
	{
		throw "Tile cannot have both icon and image.";
	}
	const transitionTags = "transition-colors duration-250";
	const coloredTextTags = color ? `${transitionTags} tile-title-color-${color}` : "";
	return (
		<div className={`tile ${span} ${color ? `${transitionTags} tile-border-color-${color}` : ""}`}>
			<div className={centered ? "" : "flex flex-row justify-left items-center"}>
				{icon ? <div className={`tile-icon ${centered ? "pb-2" : ""} ${coloredTextTags}`}><FontAwesomeIcon icon={icon}/></div> : ""}
				{image ? <div className={`${centered ? "pb-2" : ""}`}>{image}</div> : ""}
				<div className={centered ? "" : "pl-6"}>
					<div className={`tile-title ${coloredTextTags}`}>
						{link ? <a href={link} target={"swedz_external_tab"} className="no-underline">{title}</a> : title}
					</div>
					{
						subtitle ? <div className={"tile-subtitle pt-1"}>{subtitle}</div> : ""
					}
				</div>
			</div>
			<div className={"tile-body pt-5"}>
				{children}
			</div>
		</div>
	);
}