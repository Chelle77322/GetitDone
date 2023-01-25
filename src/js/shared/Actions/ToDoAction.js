export function AddItem(item) {
	return ({
		type: "ADD_ITEM",
		item: item
	})
}

export function DeleteItem(id) {
	return ({
		type: "DELETE_ITEM",
		itemId: id
	})
}

export function EditIconClicked(id) {
	return ({
		type: "EDIT_ICON_CLICKED",
		itemId: id,
		editItem: true
	})
}

export function EditItem(id, editedText) {
	return ({
		type: "EDIT_ITEM",
		itemId: id,
		editItem: false,
		item: editedText
	})
}

export function CompleteItem(id, completedFlag) {
	return ({
		type: "COMPLETED_ITEM",
		itemId: id,
		completed: completedFlag
	})
}
