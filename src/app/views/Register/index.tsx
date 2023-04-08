"use client"
import { API_BASE_URL } from "@/app/utils"
import { useState } from "react"

const Register = () => {
    const [form, setForm] = useState({
        ClientName: '',
        ClientEmail: ''
    })


    const handleChange = (event: any) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value

        })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        try {
            const response = await fetch(`${API_BASE_URL}/api-clients`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            })
            await response.json()
            console.log(response);

        } catch (error) {
            alert(error)
        }
    }
    return (
        <div className="flex justify-center">
            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="" className="text-sm block font-medium text-gray-900">Client Name</label>
                <input type="text" name="ClientName" value={form.ClientName} required onChange={handleChange} />
                <label htmlFor="" className="text-sm block font-medium text-gray-900 ">Client Email</label>
                <input type="email" name="ClientEmail" value={form.ClientEmail} required onChange={handleChange} />
                <button type="submit" className="py-2 mt-2 block px-4 bg-green-400 text-white rounded">Submit</button>
            </form>

        </div>
    )
}
export default Register