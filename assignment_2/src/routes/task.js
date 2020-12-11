let express = require('express')
let router = express.Router()
let db = require('../database');

// Create a new task
// POST localhost:<port>/task
router.post('/task', (req, res) => {
    // now we have access to req.body due to body-parser (see index.js)
    if (!req.body) {
        return resizeBy.status(400).send('Request body is missing')
    }

    let task = {
        name: req.body.taskName,
        dueDate: req.body.taskDueDate, // Example 2020-11-24
        groupId: req.body.group,
        personId: req.body.person,
        priority: req.body.priority
    }
    
    if(!task.dueDate || task.groupId == 0 || task.personId == 0){
        res.json({
            "message": "error: Must supply due date, group and firstname"
        })
        return;
    }
    var sql ='INSERT INTO tasks (taskName, dueDate, groupId, personId, priority, complete) VALUES (?,?,?,?,?,?)'
    var params =[task.name, task.dueDate, task.groupId, task.personId, task.priority, 0]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": task,
            "id" : this.lastID
        })
    });
    
})


//GET
router.get('/task', (req, res) => {
    if (!req.query.taskId) {
        return res.status(400).send('Missing URL parameter id')
    }
    let sql = "select tasks.id, taskName, dueDate, complete, priority, firstName, personId, groupId, groups.name as groupName" +
      " from tasks INNER JOIN PEOPLE on PEOPLE.id = tasks.personId " +
      " INNER JOIN GROUPS on GROUPS.ID = tasks.groupId" +
      " where tasks.id = ?"
    console.log("req.query.taskId: " + req.query.taskId)
    let params = [req.query.taskId]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
})


//Update
/*
data = { 'taskId': updateTaskId,
'taskName':updateTaskName,
'taskFirstName':updateTaskFirstName,
'taskGroup':updateTaskGroup,
'taskDueDate':updateTaskDueDate,
'taskComplete':updateTaskComplete };
*/
router.put('/task', (req, res) => {
    console.log("PUT called")
    var data = {
        id : req.query.taskId, // **Note that I'm pulling this from the 'query' vs the 'body'
        taskName: req.body.taskName,
        personId :  req.body.taskFirstName,
        groupId :  req.body.taskGroup,
        dueDate :  req.body.taskDueDate,
        priority :  req.body.taskPriority,
        complete :  req.body.taskComplete
        
    }
    console.log("data.id:" + data.id + " name:" + data + " due_date:" + data.dueDate)
    if (!data.id) {
        return res.status(400).send('Missing URL parameter id')
    }
    db.run(
        `UPDATE tasks set 
           taskName = ?,
           dueDate = ?,
           groupId = ?,
           personId = ?,
           complete = ?,
           priority = ?
           WHERE id = ?`,
        [data.taskName, data.dueDate, data.groupId, data.personId, data.complete, data.priority, data.id],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                console.log(err);
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
                
            })
    });
})

//Delete
router.delete('/task', (req, res) => {
    if (!req.query.taskId) {
        return res.status(400).send('Missing URL parameter id')
    }
    db.run(
        'DELETE FROM tasks WHERE id = ?',
        req.query.taskId,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted " , changes: this.changes})
    });
})


module.exports = router