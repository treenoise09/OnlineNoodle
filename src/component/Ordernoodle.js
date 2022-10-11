import React from "react";
import Data from "./NoodleOrder/data";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./column";
import { setColumnsState } from "@mui/x-data-grid/hooks/features/columns/gridColumnsUtils";
const OrderNoodle = () => {
   

return (
    <DragDropContext onDragEnd={() => {}}>
    {Data.columnsOrder.map(columnId =>{
    const column = Data.columns[columnId];
    const task = column.taskIds.map(taskId => Data.tasks[taskId]);

    return <Column key={column.id} column={column} tasks={task}/>;
}   
    
)}</DragDropContext>
)
}; 
export default OrderNoodle;