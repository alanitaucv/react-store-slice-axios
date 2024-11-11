import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const todosApi = createApi({
    reducerPath: 'todos',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),

    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/todos'
        }),

        getTodo: builder.query({
            query: (todoId) => `/todos/${todoId}`
        })
    })
});

export const { useGetTodosQuery, useGetTodoQuery } = todosApi; //Esto retorna un custom hook de los endpoints use<nombre_endpoint>Query, lleva query al final porque es un get si fuera un post u otro seria un mutation.