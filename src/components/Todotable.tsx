import React,{useState} from 'react';
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';



interface Todo {
  desc: string;
  date: string;
  priority: string;
}

interface Props {
  list: Todo[];
  deleteTodo: (index: number) => void;
}

const TodoTable: React.FC<Props> = ({ list, deleteTodo }) => {

 
        const columns = [
            {
              field: "desc",
              filter: true,
              floatingFilter: true,
              sortable:true
            },
            {
              field: "date",
              filter: true,
              browserDatePicker: true,
              floatingFilter: true,
              sortable:true
            },
            {
              field: "priority",
              filter:true,
              floatingFilter: true,
              sortable:true,
              cellStyle: (params: {value: string}) => ({ color: params.value === 'High' ? 'red' : params.value === 'Medium' ? 'orange' : 'Green' })
            },
            {
              cellRendererFramework: (params: any) => (
                <button onClick={() => deleteTodo(params.node.rowIndex)}>Delete</button>
              ),
              width: 100,
            },
          ];
        
     


  return (

    <div className="ag-theme-material" style={{height: '700px', width: '70%', margin: 'auto',   paddingRight: '0'}} >
            <AgGridReact
            rowData={list}
            columnDefs={columns} 
            animateRows={true}
             >
            </AgGridReact>
    </div>

  );
};

export default TodoTable;





