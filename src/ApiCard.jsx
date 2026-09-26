import React, { useEffect, useState } from "react"

function ApiCard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, [])

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Posts</h2>

            <div className="row g-4">
                {posts.map((post) => {
                    return (
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5>
                                        {post.title}
                                    </h5>
                                    <p>
                                        {post.body}
                                    </p>
                                    <p>
                                        <strong>User ID:</strong> {post.userId}
                                    </p>
                                    <p>
                                        <strong>Post ID:</strong> {post.id}
                                    </p>
                                    <button className="btn btn-danger">Read More</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ApiCard
