import {  useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGists } from '../../store/gists';

export function Gists() {
    const dispatch = useDispatch();
    const { gists, error, pending } = useSelector((state) => state.gists);

    useEffect(() => {
        if (!gists.length) {
            dispatch(getGists(1));
        }
    }, [dispatch, gists]);

    if(error) {
        return <h1>error</h1>
    }

    return (
        <>
            <h1>gists</h1>
            {/* пагинация */}
            {Array.from({ length:10 }).map((_, i) => (
                <button onClick={() => dispatch(getGists(i + 1))} key={i}>
                    {i + 1}
                </button>
            ))}
            
            {pending ? (
                <h1>pending</h1>
            ) : (
                gists?.map((gist, index) => <h1 key={index}>{gist.commits_url}</h1>)
            )}
        </>
    )
}

// !! так не писать:
// export function Gists() {
//     const [state, setState] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(false);

//     //если функция находится в зависимости, то ее необходимо оборачивать в колбэк
//     const getPublicGists = useCallback(async (page) => {
//         try {
//             setLoading(true);
//             const response = await fetch(
//                 `https://api.github.com/gists/public?page=${page}`
//             );
//             const data = await response.json();
//             setState(data);
//         } catch (e) {
//             setError(e);
//         } finally {
//             setLoading(false);
//         }
//     }, []);

//     useEffect(() => {
//         getPublicGists(1);
//     }, [getPublicGists]); //добавление в зависимости эффекта
// return (
//     <>
//         <h1>gists</h1>
//         {/* пагинация */}
//         {Array.from({ length:10 }).map((_, i) => (
//             <button onClick={() => getPublicGists(i + 1)} key={i}>
//                 {i + 1}
//             </button>
//         ))}

//         {state?.map((gist, index) => <h1 key={index}>{gist.commits_url}</h1>)}
//     </>
// )