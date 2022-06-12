import React, { useState } from 'react'

type Props = {
    setClimate: Function
}

const SearchForm = (props: Props) => {
    const [city, setCity] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();  
        props.setClimate(city);
    }

    return (
        <form className='w-[320px]' onSubmit={handleSubmit}>
            <input
                className='bg-gray-300 outline-none p-3 rounded-lg'
                type="text"
                placeholder="Cidade"
                onChange={({ target: { value } }) => { setCity(value) }}
            />
            <button
                className='bg-blue-600 p-3 rounded-lg text-white font-bold ml-3'
                type="submit"
            >
                Pesquisar
            </button>
        </form>
    )
}

export default SearchForm