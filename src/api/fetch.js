export const getToDosApi = () => fetch("https://684ef97bf0c9c9848d29bc38.mockapi.io/tasks").then((res) => res.json()) /* отримуємо всі завдання з серверу */

export const deleteToDosApi = (id) => fetch(`https://684ef97bf0c9c9848d29bc38.mockapi.io/tasks/${id}`, 
    {method: "DELETE"}).then((res) => res.json()) /* видаляємо завдання з серверу по id */

export const addToDosApi = (data) => fetch(`https://684ef97bf0c9c9848d29bc38.mockapi.io/tasks/`, 
    {method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json"}}).then((res) => res.json()) /* додаємо завдання до серверу  */
