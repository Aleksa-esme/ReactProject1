import {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCats } from '../../store/cats';

export function Cats() {
    const dispatch = useDispatch();
    const { cats, error } = useSelector((state) => state.cats);

    useEffect(() => {
        if (!cats.length) {
            dispatch(getCats());
        }
    }, [dispatch, cats]);

    
    if(error) { 
        return <h1>error</h1>
    }

    return (
        <>
            <h1>cats</h1>
            {cats?.map((image, index) => <img key={index} src={image.url} alt='a' />)}
        </>
    )
}



// import { useEffect, useCallback, useState } from "react";
// export function CatApi() {
//     const [state, setState] = useState([]);
//     const [error, setError] = useState(null);
    
//     const getCats = useCallback(async () => {
//         try {
//             const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
//             // console.log(response);  
//             const data = await response.json(); //body-readable stream
//             // console.log(data);
//             // console.log(data[0].url);
//             setState(data);
//         } catch (e) {
//             setError(e);
//         } 
//     }, []);

//     useEffect(() => {
//         getCats();
//     }, [getCats]);
// return (
//     <>
//         <h1>cats</h1>
//         {state?.map((image, index) => <img key={index} src={image.url} alt='a' />)}
        
//     </>
// )
// }
