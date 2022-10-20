import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Task from "./task";
const Container = styled.div`
margin: 8px;
border: 1px solid lightgray;
border-radius: 2px;
`;
const Title = styled.h3`
padding: 8px;
`;
class TaskList extends React.Component{
    render(){
        const { provided, innerRef, children } = this.props;
        return (
          <div style={{padding:"8px"}} {...provided.droppableProps} ref={innerRef}>
            {children}
          </div>)
    }
} 
export default class Column extends React.Component{
    render(){
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id} type="TASK">
                {(provided,snapshot) => (
                <TaskList
                    provided={provided}
                    innerRef={provided.innerRef}
                    {...provided.droppableProps}
                    isDragginOver={snapshot.isDraggingOver}
                >
                    {this.props.tasks.map((task,index) => (
                        <Task key={task.id} task={task} index={index}/>
                    ))}
                    {provided.placeholder}
                </TaskList>
                )}
                </Droppable>
            </Container>
            );
        }
    }