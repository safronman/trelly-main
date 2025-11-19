import {useEffect, useState} from "react";
import {getTask, type TaskDetailsData} from "../dal/api.ts";

export function useTaskDetails(selectedTaskId: string | null, boardId: string | null) {
	const [taskDetails, setTaskDetails] = useState<TaskDetailsData | null>(null);
	
	useEffect(() => {
		if (!selectedTaskId) {
			setTaskDetails(null);
			return
		}
		
		if (!boardId) return;
		
		getTask(boardId, selectedTaskId)
			.then(json => {
				setTaskDetails(json.data)
			})
	}, [selectedTaskId]);
	
	
	return {taskDetails}
	
}
