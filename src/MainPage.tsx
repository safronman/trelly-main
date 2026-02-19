import {useTaskSelection} from "./bll/useTaskSelection.ts";
import {TaskDetails} from "./ui/TaskDetails.tsx";
import {TasksList} from "./ui/TasksList.tsx";
import s from './MainPage.module.css'

export function MainPage() {
	
	const {selectedTaskId, setSelectedTaskId, boardId, setBoardId} =  useTaskSelection()
	
	const handleSelectedTask = (taskId: string, boardId: string) => {
		setSelectedTaskId(taskId)
		setBoardId(boardId)
	}
	
	const handleResetTask = () => setSelectedTaskId(null);
	
	return (
		<div className={s.container}>
      <h1>1</h1>
			<TasksList
				selectedTaskId={selectedTaskId}
				onTaskSelected={handleSelectedTask}
				onTaskReset={handleResetTask}
			/>
			<TaskDetails selectedTaskId={selectedTaskId} boardId={boardId}/>
		</div>
	)
}
