import { useAppSelector } from "@/lib/hooks"
import { Badge } from "@/ui/base"

function SelectedFileTags() {
	const tags = useAppSelector(
		state => state.filesSliceReducer.selectedFile?.tags,
	)

	return (
		<div className="pt-4">
			<h4 className="flex mb-2 gap-1">
				Tags:
				{tags?.map((tag: string, index: number) => (
					<Badge key={index}>{tag}</Badge>
				))}
			</h4>
		</div>
	)
}

export default SelectedFileTags
