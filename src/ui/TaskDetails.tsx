import {useTaskDetails} from "../bll/useTaskDetails.ts";
import styles from './TaskDetails.module.css'

type Props = {
	selectedTaskId: string | null
	boardId: string | null
}

export function TaskDetails(props: Props) {
	const {selectedTaskId, boardId} = props
	
	const {taskDetails} = useTaskDetails(selectedTaskId, boardId)
	
	return (
		<div className={styles.task}>
			<h2>Task details</h2>
			{!taskDetails && !selectedTaskId && "Task is not selected"}
			{!taskDetails && selectedTaskId && "Loading..."}
			{taskDetails && selectedTaskId && taskDetails.id !== selectedTaskId && "Loading..."}
			{
				taskDetails &&
        <ul>
          <li>title - {taskDetails.attributes.title}</li>
          <li>boardTitle - {taskDetails.attributes.boardTitle}</li>
          <li>description - {taskDetails.attributes.description || 'no description'}</li>
        </ul>
			}
		</div>
	)
}
