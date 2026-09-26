import React, { useEffect, useState } from "react"

function ApiTable() {
    const [users, setusers] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => res.json())
            .then((data) => setusers(data))
    }, [])

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Users Comments</h2>

            <table className="table table-bordered table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Post ID</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => {
                        return (
                            <tr>
                                <td>{user.postId}</td>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ApiTable