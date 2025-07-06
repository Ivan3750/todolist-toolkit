export const getToDosApi = () => fetch("https://68654bdb5b5d8d033980a51b.mockapi.io/tasks").then((res) => res.json()) /* отримуємо всі завдання з серверу */

export const deleteToDosApi = (id) => fetch(`https://68654bdb5b5d8d033980a51b.mockapi.io/tasks/${id}`, 
    {method: "DELETE"}).then((res) => res.json()) /* видаляємо завдання з серверу по id */

export const addToDosApi = (data) => fetch(`https://68654bdb5b5d8d033980a51b.mockapi.io/tasks/`, 
    {method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json"}}).then((res) => res.json()) /* додаємо завдання до серверу  */

export const changeDoneToDosApi = (id, isDone) => fetch(`https://68654bdb5b5d8d033980a51b.mockapi.io/tasks/${id}`, 
    {method: "PUT", body: JSON.stringify({isDone}), headers: { "Content-Type": "application/json"}}).then((res) => res.json()) /* додаємо завдання до серверу  */
