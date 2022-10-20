import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
const Container = styled.div`
border: 1px solid lightgray;
border-radius: 2px;
padding: 8px;
margin-bottom: 8px;
`;
export default class Task extends React.Component{
    
    render(){
        
        
        return <Draggable draggableId={this.props.task.id} index={this.props.index} >
        {(provided,snapshot) =>(
            
        <div style={{border:"1px solid lightgray",borderRadius:"2px",padding:"8px",marginBottom:"8px"}}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
        isDragging={snapshot.isDragging}
        >
            {this.props.task.content}
        </div>
        
        )}
        </Draggable>
    }
}