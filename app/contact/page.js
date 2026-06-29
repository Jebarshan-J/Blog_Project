"use client"
import { useState } from "react"

export default function Contact() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const [submit,setsubmit] = useState("")

    const handlesubmit = async (e) => {
        e.preventDefault()
        setsubmit(true)
        console.log("Form Submitted");
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Name: name,
                Email: email,
                Message: message
            })
        })
        setsubmit(false)
        setemail("")
        setname("")
        setmessage("")

    }

    return (
        <>
            <main className="container mx-auto px-4 py-6">
                <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                <form className="w-full max-w-lg" onSubmit={handlesubmit} >
                    <div className="flex items-center mb-4">
                        <label htmlFor="name" className="w-1/4">Name:</label>
                        <input onChange={(e) => setname(e.target.value)} value={name} type="text" id="name" className="border rounded px-2 py-1 w-3/4" />
                    </div>
                    <div className="flex items-center mb-4">
                        <label htmlFor="email" className="w-1/4">Email:</label>
                        <input onChange={(e) => setemail(e.target.value)} value={email} type="email" id="email" className="border rounded px-2 py-1 w-3/4" />
                    </div>
                    <div className="flex items-center mb-4">
                        <label htmlFor="message" className="w-1/4">Message:</label>
                        <textarea onChange={(e) => setmessage(e.target.value)} value={message} id="message" className="border rounded px-2 py-1 w-3/4" rows="4"></textarea>
                    </div>
                    <button type="submit"  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">{submit?"submitting..":"Submit"}</button>
                </form>
            </main>
        </>
    )
}