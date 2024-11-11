import React from 'react'
import { Link } from 'react-router-dom'

export const Users = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
            return res.json()
        }).then((users) => {
            setData(users)
        })
    }, [])
    return (
        <div>
            <div>
                {data.map((item) => <h1 key={item.id}>
                    <Link to={`/user-detail/${item.id}`}>{item.name}</Link>
                </h1>)}
            </div>
        </div>
    )
}
