//function submitTask() {
//    let taskForm = document.getElementById("postTaskForm");
//    taskForm.submit();
//}
function submitTask() {
  console.log("Called submitTask");
  
  let taskNameParam = document.getElementById("taskName").value;
  let taskDueDate = document.getElementById("taskDueDate").value;
  console.log("TaskName:" + taskNameParam);
  console.log("taskDueDate:" + taskDueDate);
  data = {'taskDueDate':taskDueDate, 'taskName':taskNameParam};

  console.log(JSON.stringify(data))
  let taskURL = "http://localhost:4000/task";
  const fetchPromise = fetch(taskURL,{ method:'POST', headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }, body: JSON.stringify(data)});

  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here POST");
      console.log(task);
      let taskId, taskName, taskDate;
      let message = "ERROR";
      if (typeof task.id !== "undefined") {
        taskName = task.data.name;
        taskId = task.id;
        taskDueDate = task.data.dueDate;
        message = "Message: " + task.message + " ID: " + taskId + "<br>TaskName: " + taskName + "<br> Due Date: " + taskDueDate; 
      }
      document.getElementById("postTaskContent").innerHTML = message;
  })
  .catch((err) => {
      console.log(err);
      document.getElementById("postTaskContent").innerHTML = "Invalid task id: " + taskIdParam;
  });
 
}

function getTask() {
    console.log("Called getTask");
    
    let taskIdParam = document.getElementById("taskId").value;
    console.log("TaskId:" + taskIdParam);
    let taskURL = "http://localhost:4000/task?taskId=" + taskIdParam;
    const fetchPromise = fetch(taskURL);

    fetchPromise
      .then((response) => {
        return response.json();
      })
      .then((task) => {
        console.log("Here");
        console.log(task);
        let taskId, taskName, taskDate;
        let message = "ERROR";
        if (typeof task.data.id !== "undefined") {
          taskName = task.data.taskName;
          taskId = task.data.id;
          taskDueDate = task.data.dueDate;
          message = "ID: " + taskId + "<br>TaskName: " + taskName + "<br> Due Date: " + taskDueDate; 
        }
        document.getElementById("getTaskContent").innerHTML = message;
    })
    .catch((err) => {
        console.log(err);
        document.getElementById("getTaskContent").innerHTML = "Invalid task id: " + taskIdParam;
    });
   
}

function updateTask() {
  console.log("Called updateTask");
  
  let taskIdParam = document.getElementById("updateTaskId").value;
  let taskNameParam = document.getElementById("updateTaskName").value;
  console.log("TaskId:" + taskIdParam);
  console.log("TaskName:" + taskNameParam);
  data = {'taskName':taskNameParam};

  console.log(JSON.stringify(data))
  let taskURL = "http://localhost:4000/task?taskId=" + taskIdParam;
  const fetchPromise = fetch(taskURL,{ method:'PUT', headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }, body: JSON.stringify(data)});

  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here Update");
      console.log(task);
      let taskId, taskName, taskDate;
      let message = "ERROR";
      if (typeof task.data.id !== "undefined") {
        taskName = task.data.taskName;
        taskId = task.data.id;
        
        message = "ID: " + taskId + "<br>TaskName: " + taskName; 
      }
      document.getElementById("updatedTaskContent").innerHTML = message;
  })
  .catch((err) => {
      console.log(err);
      document.getElementById("updatedTaskContent").innerHTML = "Invalid task id: " + taskIdParam;
  });
 
}

function deleteTask() {
  console.log("Called deleteTask");
  
  let taskIdParam = document.getElementById("deleteTaskId").value;
  console.log("TaskId:" + taskIdParam);
  
  let taskURL = "http://localhost:4000/task?taskId=" + taskIdParam;
  const fetchPromise = fetch(taskURL,{ method:'DELETE'});

  fetchPromise
    .then((response) => {
      return response.json();
    })
    .then((task) => {
      console.log("Here Delete");
      console.log(task);
      let taskId = "";
      let message = "ERROR";
      if (typeof task.message !== "undefined") {
        message = task.message; 
      }
      document.getElementById("deleteTaskContent").innerHTML = message;
  })
  .catch((err) => {
      console.log(err);
      document.getElementById("deleteTaskContent").innerHTML = "Invalid task id: " + taskIdParam;
  });
 
}