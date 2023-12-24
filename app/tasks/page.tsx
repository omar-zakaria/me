const initialTasks = [
    { "id": 0, "text": "Implement real-time features using WebSockets or Firebase", "done": false },
    { "id": 1, "text": "Build a personal portfolio website using React and Node.js", "done": false },
    { "id": 2, "text": "Explore GraphQL for efficient data querying and manipulation", "done": false },
    { "id": 3, "text": "Familiarize with cloud services like AWS or Google Cloud for deployment", "done": false },
    { "id": 4, "text": "Learn and implement advanced CSS techniques for responsive designs", "done": false },
    { "id": 5, "text": "Contribute to open source projects on GitHub", "done": false },
    { "id": 6, "text": "Master client-side state management with Redux or Context API", "done": false },
    { "id": 7, "text": "Create a progressive web app (PWA) with offline capabilities", "done": false },
    { "id": 8, "text": "Develop a full-fledged RESTful API using Express.js and MongoDB", "done": false }
]

function renderTasks() {
    return (
        initialTasks.map((x, i) =>
            <li key={i} className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{x.text}</p>
                    </div>
                </div>
            </li>
        )
    )
}


export default function Page() {
    return (
        <>
            <h1 className="text-3xl font-bold">Tasks</h1>
            <div className="md:container">
            <ul role="list" className="divide-y divide-gray-100">
                {renderTasks()}
            </ul>
            </div>
        </>
    )
}