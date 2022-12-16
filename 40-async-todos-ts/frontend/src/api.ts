/*
 * interface
 */

export interface ITodo {
    id?: number,
    title: string,
    completed: boolean,
}

/*
 * Post a todo to the server
*/

export const createTodo = async (newTodo: ITodo) => {
    const res = await fetch('http://localhost:3001/todos', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(newTodo),})

        if (!res.ok) {
            throw new Error(`${res.status} ${res.statusText}`)
        }
    
        return await res.json() as ITodo
}

/*
* Fetch todos from server
*/

export const fetchTodos = async () => {
    const res = await fetch('http://localhost:3001/todos')
    if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`)
    }

    return await res.json() as ITodo[]    // omvandla data och sedan tolka datan som interface (en array av todos): ITodo[]
}
