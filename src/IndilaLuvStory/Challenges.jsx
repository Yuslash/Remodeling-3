import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import AddChallengeModal from "./AddChallengeModal"
import ConfirmModal from "./ConfirmModal"

export default function Challenges() {

    const [ challengesData, setChallengesData ] = useState([])
    const navigate = useNavigate()
    const containerRef = useRef(null)
    const [showAddModal, setShowAddModal] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [challengeToDelete, setChallengeToDelete] = useState(null)

    const listChallenges = async () => {

        const response = await fetch('')

        if(!response.ok) {
            throw new Error("Failed to fetch Challenges")
        }

        const data = await response.json()
        setChallengesData(data.data || [])
        
    }

    useEffect(() => {

        listChallenges()

    },[])

    // write a scroll listener to keep scrollling when the users add the challenge beyound hight of the page
    useEffect(() => {

        if(containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }

    }, [challengesData])

    // removing challenge logic here
    const handleDelete = async (id) => {

        const response = await fetch(``, {
            method: "DELETE",
        })

        if(response.ok) {
            setChallengesData((prev) => prev.filter((challenge) => challenge._id !== id));
            setShowConfirmModal(false)
        } else {
            console.error("failed to delet challenge")
        }
    } 


    //challenge creating logic here
    const handleAdd = async (title) => {

        const response = await fetch('', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title})
        })

        if(response.ok) {

            const result = await response.json()
            setChallengesData((prev) => [...prev, result.data])
            setShowAddModal(false)

        } else {
            console.error('failed to add Challenge')
        }

    }

    const navi = (id) => {
        navigate(`/arena/${id}`)
    }
    
    const handleRemoveClick = (id) => {
        setChallengeToDelete(id)
        setShowConfirmModal(true)
    }

    return <div ref={containerRef} className="flex flex-col p-4 h-screen overflow-y-auto">
        {/* <h1 className="mt-4 font-semibold text-4xl font-['jost'] underline">Hi, Sibi Krishna</h1> */}
        <h1 className="mt-4 font-semibold text-2xl font-['jost']">LIST OF CHALLENGES :</h1>
            {challengesData.length > 0 ? (
                challengesData.map((challenge, index) => {
                    return (
                        <div
                        key={challenge._id || index}
                        onClick={() =>  navi(challenge._id)}
                        className=" flex items-center gap-4"
                        >
                            <div
                                className="challenge-list-container mt-4 w-full p-4 border  font-['jost'] hover:rounded cursor-pointer flex gap-4 items-center shadow-lg transition-all ease-in-out duration-300 hover:shadow-2xl"
                            >
                                <div className="font-medium text-lg">Challenge {index + 1} :</div>
                                <div>{challenge.title}</div>
                            </div>
                              <div 
                              onClick={(e) => {
                                e.stopPropagation()
                                handleRemoveClick(challenge._id)
                              }} 
                              className="mt-4 p-4 border hover:rounded cursor-pointer font-['jost']  text-lg flex-grow shadow-lg transition-all ease-in-out duration-300 hover:shadow-2xl hover:bg-red-500 hover:text-white">Remove</div>  
                        </div>
                    )
                })
            ) : (
                <p className="mt-4 text-gray-500">No challenges available.</p>
            )}
            <div onClick={() => setShowAddModal(true)} className="mt-4 font-regular text-lg font-['jost'] p-4 border hover:rounded text-center shadow-lg transition-all ease-in-out duration-300 hover:shadow-2xl cursor-pointer hover:bg-indigo-600 hover:text-white">Add Challenge</div>
        
        {showAddModal && (
            <AddChallengeModal
            isOpen={showAddModal}
            onClose={() => setShowAddModal(false)}
            onAdd={handleAdd}
        />
        )}

        {showConfirmModal && (
            <ConfirmModal 
                isOpen={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                onConfirm={() => handleDelete(challengeToDelete)}
            />
        )}
    
    </div>
}