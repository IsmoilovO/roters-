
import React from 'react';
import { useParams } from 'react-router-dom';


export const UserDetail = () => {
    const [data, setData] = React.useState({});
    const obj = useParams();

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${obj?.userId}`)
            .then((res) => res.json())
            .then((user) => setData(user))
    }, [])




    return (
        <div>
            <h1>{data?.name}</h1>
            <h1>{data?.username}</h1>
            <h1>{data?.email}</h1>
        </div>
    )
}

export default UserDetail
