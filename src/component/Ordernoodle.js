import React from "react";
import Data from "./NoodleOrder/data";
import Column from "./column";
const OrderNoodle = () => {
return (Data.columnsOrder.map(columnId =>{
    const column = Data.columns[columnId];
    const task = column.taskIds.map(taskId => Data.tasks[taskId]);

    return <Column key={column.id} column={column} tasks={task}/>;
}
    
)
)
}; 
export default OrderNoodle;