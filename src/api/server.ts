const token = '749b38210a6a4da11c0edc71e39ab60dd080a2dca8b38bf2'

export const server_calls = {
    get: async () => {
        const response = await fetch (`https://micarinventory.onrender.com/api/inventory`,
        {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error ('Failed to fetch  data  from the server')
        }
        return await response.json()
    },

    create: async  (data: any  =  {})  => {
        const response  = await fetch(`https://micarinventory.onrender.com/api/inventory`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('Failed  to create new data on the server')
        }
        return await response.json()
    },

    update: async (id: string, data: any = {}) => {
        const response = await fetch (`https://micarinventory.onrender.com/api/inventory/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body:  JSON.stringify(data)

        })

        if (!response.ok) {
            throw new Error('failed to update data on server')
        }
        return  await response.json()
    },

    delete: async(id:string) => {
        const response = await fetch (`https://micarinventory.onrender.com/api/inventory/${id}`,
        {
            method:  'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
        })

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }
        return;
    },
}