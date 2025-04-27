import { useAppSelector } from "@/lib/hooks"
import { Separator } from "@/ui/base"
import AddVersion from "./AddVersion"
import FileDetails from "./FileDetails"
import SelectedFileVersions from "./SelectedFileVersions"

function SelectedFile() {
	const selectedFile = useAppSelector(
		state => state.filesSliceReducer.selectedFile,
	)

	return (
		<>
			{selectedFile ? (
				<>
					<h2 className="text-lg font-bold mb-2">Details</h2>
					<FileDetails selectedFile={selectedFile} />
					<Separator className="mt-5 mb-3" />

					<h3 className="font-semibold mb-2">Version History</h3>
					<div className="h-60 overflow-auto">
						<SelectedFileVersions versions={selectedFile.versions} />
					</div>

					<Separator className="mt-3 mb-3" />
					<AddVersion />
				</>
			) : (
				<h2 className="text-lg font-bold mb-2">
					Select a file to view details
				</h2>
			)}
		</>
	)
}

export default SelectedFile
