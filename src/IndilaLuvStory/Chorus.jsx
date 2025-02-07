import { useEffect, useRef, useState } from "react"
import EventHeader from "../Components/Events/EventHeader"
import AccordionItem from "./AccordionItem"

export default function Chorus() {

    const [data, setData] = useState([])

    useEffect(() => {

        const handleSubmit = async () => {

            const response = await fetch('http://localhost:4000/api/arenaData')

            const data = await response.json()

            console.log(data)
            
        }

        handleSubmit()

    }, [])

    const accordionData = [
        { id: 1, title: 'Accordion Title 1' },
        { id: 2, title: 'Accordion Title 2' },
        { id: 3, title: 'Accordion Title 3' },
        { id: 4, title: 'Accordion Title 4' },
      ]
    

    //we have the issue that text is while editing the re-render which resets the caret position and make it feel like the text is reversing
    const textRef = useRef(null)

    const handleSumbit = async () => {
        
        const text = textRef.current.innerText

        const response = await fetch('http://localhost:4000/api/saveText', {
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
                <div className="body-content px-[100px] py-[45px] w-full bg-[#253C49] flex gap-[100px] items-center justify-between">
                    <div className="w-[150px] h-[150px] bg-cyan-500 rounded-full flex-shrink-0"></div>
                    <div className="flex flex-col">
                        <div className="text-white text-2xl font-semibold leading-normal mb-[25px]">To Find A Flag Inside</div>
                        <div className="text-white text-[19px] font-semibold leading-7">A suspect’s abSandoned laptop holds a corrupted image file, potentially hiding vital clues. The victim, a skilled tech enthusiast, had been working on a secret project before their death. This corrupted image may hold the key to unraveling the mystery. Your task is to extract the hidden flag from within the distorted file.</div>
                    </div>
                </div>
                <div className="accordianContainer px-[45px] py-[20px] w-full bg-[#313A43] flex flex-col">
                    <div className="accordio-holder flex flex-col w-full px-[25px] py-[25px] gap-4 bg-[#37424F] rounded-sm"> 
                    {accordionData.map((item) => (
                        <AccordionItem key={item.id} title={item.title} />
                    ))}
                    <div className="w-full flex justify-end">
                            <div className="px-6 py-3 bg-blue-500 rounded-sm">Add</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}