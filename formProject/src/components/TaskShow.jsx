import React, { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete ,onUpdate}) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  const handleEditCLick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <div>
          <TaskCreate task={task} taskFormUpdate={true} onUpdate={(id,updatedTitle,updatedTaskDesc)=>{
            setShowEdit(false);
            onUpdate(id,updatedTitle,updatedTaskDesc)
          }}/>
        </div>
      ) : (
        <div>

          <h3 className="taskshow-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="taskshow-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="delete-button" onClick={handleDeleteClick}>
              Sil 
            </button>
            <button className="update-button" onClick={handleEditCLick}>
              Güncelle butonu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default TaskShow;
