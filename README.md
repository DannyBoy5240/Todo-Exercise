# ToDO List APP

**Page 1: ToDo List View**
- **Display**: Page should display a list of ToDo items with the following actions:
    - **Add Task**: Provide an input field to add new tasks to the list.
    - **Delete Task**: Add a delete button next to each task. When clicked, the task is deleted.
    - **Edit Task**: Add an edit button next to each task. When clicked, the task becomes editable.
    - **Complete Task**: Implement an intuitive way for the user to set a task as 'done'.
    - **Undo Action:** Add an undo button which will undo the previous Add/Delete action

**Page 2: Metrics View**
- **Display**: Page should display the following simple metrics:
  - \# of tasks completed
  - \# of open tasks
  - Avg. duration for completed task

**Additional**
- **State Management**: Use Redux (for React) to manage state.
- **Styling**: Use CSS/SCSS to make it visually appealing(Material UI).
- **Unit Tests**: Implement at least one unit test using a Jest

#### Bonus (choose any 2 features) 🎉:
- Implement a means to add and display task categories when creating a task (Work, Personal, etc.)
- Add a due date and visual indicator for Tasks exceeding the due date
- Implement Redo Action: Add a redo button which will redo the previous undo action

### Startup:
Navigate to root directory:
```cmd
cd TodoListApp
```
Install dependencies
```cmd
npm install
```
Run dev server
```cmd
npm run dev
```
Run test
```cmd
npm test