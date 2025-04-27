import { AddVersionField, SearchFieldState } from "@/lib/store/types"

export const searchFields: SearchFieldState[] = [
	{ name: "name", label: "File name: ", placeHolder: "Enter file name" },
	{ name: "mimeType", label: "File type", placeHolder: "Enter file type" },
	{ name: "owner", label: "Owner: ", placeHolder: "Enter owner" },
	{
		name: "tags",
		label: "Tags: ",
		placeHolder: "Enter tags, seperated by commas",
	},
]

export const versionFields: AddVersionField[] = [
	{ name: "size", label: "Size: ", placeholder: "Size in bytes" },
	{
		name: "modifiedBy",
		label: "Modified by: ",
		placeholder: "Enter your name",
	},
	{ name: "comment", label: "Comments: ", placeholder: "Enter comments" },
]
