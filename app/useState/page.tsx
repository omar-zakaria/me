'use client';
import ZButton from "@/components/zButton/zButton";
import { useState } from 'react';



export default function Page() {
    const [useStateCount, setUseStateCount] = useState(0);

    function handleClick() {
        setUseStateCount(useStateCount + 1)
    }
    
    return (
        <>
            <h1 className="text-3xl font-bold">UseState</h1>
            <ZButton onClick={handleClick}>Increment count</ZButton>
            <p>Current count: {useStateCount}</p>
        </>
    )
}