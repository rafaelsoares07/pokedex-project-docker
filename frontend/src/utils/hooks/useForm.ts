import React from 'react'

export default function useForm(initialState={}) {
    const [form, setForm] = React.useState(initialState)

    function handlerForm(event: any) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    return [form, handlerForm] as const
}
