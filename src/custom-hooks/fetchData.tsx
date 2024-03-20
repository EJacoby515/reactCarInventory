// fetchData.tsx
import { useState, useEffect } from 'react';
import { server_calls } from '../api/server';

export const useGetData = () => {
    const [inventoryData, setInventoryData] = useState<any[]>([]);

    async function handleDataFetch() {
        const result = await server_calls.get();
        setInventoryData(result)
    }

    useEffect(() => {
        handleDataFetch();
    }, []);

    return { inventoryData, getData: handleDataFetch };
};