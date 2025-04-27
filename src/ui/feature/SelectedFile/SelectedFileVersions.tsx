import { Version } from "@/lib/store/types"
import { dateToLocaleString } from "@/lib/utils"
import { useRef } from "react"

function SelectedFileVersions({ versions }: { versions: Version[] }) {
	const bottomRef = useRef(null)

	// useEffect(() => {
	// 	return bottomRef.current?.scrollIntoView({ behavior: "smooth" })
	// }, [versions])

	return (
		<div className="space-y-2 p-2 ">
			{versions.map(version => (
				<div
					key={version.versionNumber}
					className="flex flex-col border rounded p-2"
				>
					<div className="flex gap-2 items-center">
						<span className="font-medium">Version: </span>
						<span className="text-sm text-gray-600">
							{version.versionNumber}
						</span>
					</div>
					<span className="text-sm text-gray-600">Size: {version.size}</span>
					<span className="text-sm text-gray-600">
						Modified at: {dateToLocaleString(version.modifiedAt)}
					</span>
					<span className="text-sm text-gray-600">
						Modified by: {dateToLocaleString(version.modifiedBy)}
					</span>
					<span className="text-sm italic mt-1">"{version.comment}"</span>
				</div>
			))}
			<div ref={bottomRef} />
		</div>
	)
}

export default SelectedFileVersions
