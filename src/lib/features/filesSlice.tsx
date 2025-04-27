import { AddVersionProps, File, SearchFileProps, Version } from "../store/types"

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type filesState = {
	selectedFile: File | null
	searchResults: File[]
}

const initialState: filesState = {
	selectedFile: null,
	searchResults: [],
}

const filesSlice = createSlice({
	name: "files",
	initialState,
	reducers: {
		// addFile: (state, action: PayloadAction<File>) => {},
		// removeFile: (state, action: PayloadAction<File>) => {},
		selectFile: (state, action: PayloadAction<File>) => {
			state.selectedFile = action.payload
		},
		searchFile: (state, action: PayloadAction<SearchFileProps>) => {
			console.log(action.payload)
		},
		addVersion: (state, action: PayloadAction<AddVersionProps>) => {
			if (!state.selectedFile) return

			const versions: Version[] = [...(state.selectedFile?.versions || [])]
			const maxVersion: number = versions[versions.length - 1].versionNumber

			versions.push({
				versionNumber: maxVersion + 1,
				size: action.payload.size,
				modifiedAt: new Date().toLocaleString(),
				modifiedBy: action.payload.modifiedBy,
				comment: action.payload.comment,
			})
			state.selectedFile.versions = versions
		},
	},
})

export const {
	// addFile,
	//  removeFile,
	selectFile,
	searchFile,
	addVersion,
} = filesSlice.actions

export default filesSlice.reducer
