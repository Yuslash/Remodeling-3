import { useEffect, useRef, useState } from "react"
import EventHeader from "../Components/Events/EventHeader"
import AccordionItem from "./AccordionItem"

export default function Chorus() {

    const [arenadata, setArenaData] = useState(null)

    //update the flag fetch api here
    const updateFlag = async (itemId, accordionId, newFlag) => {

    const response = await fetch(``, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ newFlag })
    })

    if (!response.ok) {
        throw new Error("Failed to update flag")
    }

    if (!newFlag) {
        alert("Flag Cannot be Empty")
    } else {

        // alert("Flag is Added")

        const { data: updatedArenaData } = await response.json()
    
        // update the state with the updated arenaData, including the new accordion item
        setArenaData(updatedArenaData)
    }

    }

    // the logic here is to add the additinonal Accordion by clicking at the adding
    const addAccordion = async () => {
        
        const response = await fetch('', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                accordTitle: "New Accordion Item",
                flag: ""
            }),
        })
    
        if (!response.ok) {
            console.error("Failed to add accordion")
            return
        }
    
        const { data: updatedArenaData } = await response.json()
    
        // update the state with the updated arenaData, including the new accordion item
        setArenaData(updatedArenaData)
}
    

    //here i write a logic for to remove the selected accordion
    const removeAccordion = async (arenaId, accordionId) => {

        const response = await fetch(``, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const data = await response.json()

        if(response.ok) {
            setArenaData((prevData) => ({
                ...prevData,
                accordion: prevData.accordion.filter(item => item._id !== accordionId)
            }))
        }

        

    }
    
    // from this area we are fetching the full data from the arenaData
    
    useEffect(() => {
        fetch('')
            .then((res) => res.json())
            .then((result) => setArenaData(result.data[0]))
    },[])
    

    //we have the issue that text is while editing the re-render which resets the caret position and make it feel like the text is reversing
    const textRef = useRef(null)

    const handleSumbit = async () => {
        
        const text = textRef.current.innerText

        const response = await fetch('', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({text}),
        })

        if (response.ok) {
            alert('Text Saved Sucessfully!')
        }
    }

    

    return (
        <div className="absoulte top-0 left-0 w-full h-screen bg-[#303841] text-white">
            <EventHeader />
            <div className="w-full bg-white flex flex-col">
                <div className="body-content px-[100px] py-[45px] w-full bg-[#253C49] flex gap-[100px] items-center justify-start">
                    <div className="w-[150px] h-[150px] bg-cyan-500 rounded-full flex-shrink-0"></div>
                    <div className="flex flex-col">
                        <div className="text-white text-2xl font-semibold leading-normal mb-[25px]">{arenadata?.title || "Loading..."}</div>
                        <div className="text-white text-[19px] font-semibold leading-7">{arenadata?.description || "Loading..." }</div>
                    </div>
                </div>
                <div className="accordianContainer px-[45px] py-[20px] w-full bg-[#313A43] flex flex-col">
                    <div className="accordio-holder flex flex-col w-full px-[25px] py-[25px] gap-4 bg-[#37424F] rounded-sm"> 
                    {arenadata?.accordion?.length > 0 ? (
                        arenadata?.accordion?.map((item) => 
                        {   

                            return (
                                // Change this in your AccordionItem component
                                <AccordionItem
                                flagPlaceholder={item.flag}
                                updateFlag={(flagValue) => updateFlag(arenadata._id,item._id, flagValue)}
                                onRemove={(id) => removeAccordion(arenadata._id, id)}
                                itemId={item._id} // Use _id instead of id 👈
                                key={item._id} // Simplify key
                                title={item.accordTitle}
                                />
                                )
                        })
                    ) : (
                        <p>There are no accordion...</p>
                    )}


                    <div className="w-full flex justify-end">
                            <div onClick={addAccordion} className="px-6 py-3 bg-blue-500 rounded-sm cursor-pointer hover:bg-blue-600">Add</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}