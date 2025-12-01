export default async function ModDownloadCount({modId}: {
	modId: number
})
{
	const response = await fetch(`https://api.curseforge.com/v1/mods/${modId}`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"x-api-key": process.env.CURSEFORGE_API_KEY as string
		},
		cache: "force-cache",
		next: {revalidate: 3600}
	});
	const count = response.ok ? (await response.json())?.data?.downloadCount : 0;
	return Intl.NumberFormat("en-US", {notation: "compact", maximumFractionDigits: 1}).format(count);
}