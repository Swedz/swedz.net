import {Header} from "@/app/header";
import {Content} from "@/app/content";

export const dynamic = "force-dynamic";

export default async function Page()
{
	return (
		<div className="flex flex-col min-h-screen">
			<Header/>
			<main className="flex grow items-center justify-center">
				<Content/>
			</main>
		</div>
	);
}
