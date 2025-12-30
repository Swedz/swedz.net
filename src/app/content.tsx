import React from "react";
import Image from "next/image";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconProp, library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {Tile, TileAlt, TileGrid} from "@/app/tile";
import {Divider, Link} from "@/app/utils";
import ModDownloadCount from "@/app/curseforge";
import TypingProgrammingLanguages from "@/app/typing";

library.add(fas, far, fab)

function age()
{
	const birthday = new Date("2001-07-25T00:00:00-05:00");
	const today = new Date();
	let age = today.getFullYear() - birthday.getFullYear();
	const thisYearsBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
	if(today < thisYearsBirthday)
	{
		age--;
	}
	return age;
}

function Social({icon, link, external = true}: {
	icon: IconProp,
	link: string,
	external?: boolean
})
{
	return (
		<a className={"social-button"} href={link} target={external ? "swedz_external_tab" : undefined}>
			<div className={"social-button-background"}></div>
			<div className={"social-button-icon"}>
				<FontAwesomeIcon icon={icon} size={"xl"}/>
			</div>
		</a>
	);
}

function Socials({paddingTop = 5, centered = false}: {
	paddingTop?: number,
	centered?: boolean
})
{
	return (
		<div className={`flex flex-row flex-wrap gap-5 pt-${paddingTop} ${centered ? "justify-center" : ""}`}>
			<Social icon={["fab", "discord"]} link={"https://discord.gg/vNaqDzSNaB"}/>
			<Social icon={["fab", "github"]} link={"https://github.com/Swedz"}/>
			<Social icon={"fire-flame-curved"} link={"https://www.curseforge.com/members/swedzish/projects"}/>
			<Social icon={"wrench"} link={"https://modrinth.com/user/Swedz"}/>
			<Social icon={"hand-holding-dollar"} link={"https://support.swedz.net"} external={false}/>
		</div>
	);
}

function Profile()
{
	return (
		<TileGrid columns={"grid-cols-1 lg:grid-cols-3"}>
			<Tile
				span={"col-span-1 lg:col-span-2"}
				image={<Image unoptimized={true} src={"/swedz.png"} alt={"Swedz"} width={64} height={64}/>}
				color={"red"}
				title={"Hi, I'm Swedz!"}
				subtitle={"Software Developer"}
				centered={false}
			>
				<p>I am {age()} and I have been writing code since I was 12.</p>
				
				<p className={"pt-5"}>
					&gt;&nbsp;<TypingProgrammingLanguages/>
				</p>
				
				<Socials/>
			</Tile>
			<TileAlt alignTitle={"right"} title={"Support me"}>
				<p>
					If you enjoy my work and want to support me, you can do so on my <Link url={"https://support.swedz.net"} external={false}>Fourthwall</Link>!
					Sponsors are granted access to an exclusive channel on my <Link url={"https://discord.gg/vNaqDzSNaB"}>Discord</Link>.
					Ocassionally, I post sneak peeks at what I am working on!
				</p>
			</TileAlt>
		</TileGrid>
	);
}

function Projects()
{
	return (
		<TileGrid>
			<TileAlt title={"My Projects"}>
				<p>
					This is the list of my released projects that I develop and maintain.
					If you have any questions regarding any of them, don&apos;t hesitate to ask in my <Link url={"https://discord.gg/vNaqDzSNaB"}>Discord</Link> server!
				</p>
			</TileAlt>
			<Tile
				icon={"gear"}
				color={"red"}
				title={"Extended Industrialization"}
				link={"https://www.curseforge.com/minecraft/mc-mods/extended-industrialization"}
				subtitle={
					<span>
						NeoForge Mod
						<br/>
						<ModDownloadCount modId={1068418}/> downloads
					</span>
				}
			>
				<p>Extended Industrialization is a NeoForge addon mod for Modern Industrialization that adds a ton of new machines and tools.</p>
			</Tile>
			<Tile
				icon={"screwdriver-wrench"}
				color={"green"}
				title={"MI Tweaks"}
				link={"https://www.curseforge.com/minecraft/mc-mods/mi-tweaks"}
				subtitle={
					<span>
						NeoForge Mod
						<br/>
						<ModDownloadCount modId={1068413}/> downloads
					</span>
				}
			>
				<p>MI Tweaks is a NeoForge addon mod for Modern Industrialization that comes with a bunch of configurable tweaks to the mod.</p>
			</Tile>
			<Tile
				icon={"microchip"}
				color={"red"}
				title={"Little Big Redstone"}
				link={"https://www.curseforge.com/minecraft/mc-mods/little-big-redstone"}
				subtitle={
					<span>
						NeoForge Mod
						<br/>
						<ModDownloadCount modId={1180560}/> downloads
					</span>
				}
			>
				<p>Little Big Redstone is a NeoForge mod that adds a Microchip block that allows you to build redstone circuits within a gui.</p>
			</Tile>
			<Tile
				icon={"hexagon-nodes"}
				color={"orange"}
				title={"Velocity Support"}
				link={"https://www.curseforge.com/minecraft/mc-mods/neoforged-velocity-support"}
				subtitle={
					<span>
						NeoForge Mod
						<br/>
						<ModDownloadCount modId={1416157}/> downloads
					</span>
				}
			>
				<p>Velocity Support adds support for Velocity&apos;s Modern Forwarding protocol on NeoForge.</p>
			</Tile>
			<Tile
				icon={"code"}
				color={"white"}
				title={"Tesseract API"}
				link={"https://www.curseforge.com/minecraft/mc-mods/tesseract-api-neoforge"}
				subtitle={
					<span>
						NeoForge Mod
						<br/>
						<ModDownloadCount modId={1067672}/> downloads
					</span>
				}
			>
				<p>Tesseract API is my NeoForge mod that adds a few tools for mod developers manage configs, translation keys, rendering, MI integration, and more!</p>
			</Tile>
			<Tile
				icon={"cubes"}
				color={"orange"}
				title={"MC³"}
				link={"https://mc-cubed.org"}
				subtitle={"Minecraft Server"}
			>
				<p>MC³ is a Minecraft server that has been around since 2015 with entirely custom and carefully crafted content.</p>
			</Tile>
			<Tile
				icon={"tags"}
				color={"blue"}
				title={"Condition Manager"}
				link={"https://github.com/Swedz/TTS-Condition-Manager"}
				subtitle={"Tabletop Simulator Script"}
			>
				<p>Condition Manager is a script for TTS that allows you to add conditions from D&D 5e above figurines.</p>
			</Tile>
			<Tile
				icon={"skull-crossbones"}
				color={"orange"}
				title={"Villain Incrementer"}
				link={"https://github.com/Swedz/TTS-Villain-Incrementer"}
				subtitle={"Tabletop Simulator Script"}
			>
				<p>Villain Incrementer is a script for TTS that lets you place miniatures with automatically incrementing identifiers.</p>
			</Tile>
			<Tile
				icon={"tree"}
				color={"green"}
				title={"Into the Twilight"}
				subtitle={"NeoForge Modpack"}
			>
				<p>Into the Twilight is a WIP difficult progression-based modpack for Minecraft that is built around the Twilight Forest mod.</p>
			</Tile>
		</TileGrid>
	);
}

function Footer()
{
	return (
		<div>
			<Divider/>
			<Socials paddingTop={0} centered={true}/>
			<div className={"text-alt pt-5"}>&copy; Swedz {new Date().getFullYear()}</div>
		</div>
	);
}

export function Content()
{
	return (
		<div className={"w-3/4 p-5"}>
			<Profile/>
			<Divider/>
			<Projects/>
			<Footer/>
		</div>
	);
}
