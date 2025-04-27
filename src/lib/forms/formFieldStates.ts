import {
	AddFileFieldState,
	AddVersionField,
	SearchFieldState,
} from "@/lib/store/types"

export const searchFields: SearchFieldState[] = [
	{ name: "name", label: "File name: ", placeholder: "Enter file name" },
	{ name: "mimeType", label: "File type", placeholder: "Enter file type" },
	{ name: "owner", label: "Owner: ", placeholder: "Enter owner" },
	{
		name: "tags",
		label: "Tags: ",
		placeholder: "Enter tags",
	},
]

export const versionFields: AddVersionField[] = [
	{ name: "size", label: "Size (in bytes): ", placeholder: "Enter file size" },
	{
		name: "modifiedBy",
		label: "Modified by: ",
		placeholder: "Enter your name",
	},
	{ name: "comment", label: "Comments: ", placeholder: "Enter comments" },
]

export const addFileFields: AddFileFieldState[] = [
	{ name: "name", label: "File name: ", placeholder: "Enter file name" },
	{ name: "mimeType", label: "File type: ", placeholder: "Enter file type" },
	{ name: "path", label: "Path: ", placeholder: "Location of file" },
	{ name: "size", label: "Size (in bytes): ", placeholder: "Enter file size" },
	{
		name: "owner",
		label: "Owner: ",
		placeholder: "Enter your name",
	},
	{ name: "comment", label: "Comments: ", placeholder: "Enter comments" },
	{ name: "tags", label: "Tags: ", placeholder: "Enter tags" },
]
