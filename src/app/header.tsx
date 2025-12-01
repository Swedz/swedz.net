import Image from "next/image";

export function Header()
{
	return (
		<header>
			<div className={"flex flex-row justify-center"}>
				<div>
					<a href={"/"}>
						<Image unoptimized={true} src={"/logo.png"} alt={"Swedz's Logo"} width={100} height={100}/>
					</a>
				</div>
			</div>
		</header>
	);
}