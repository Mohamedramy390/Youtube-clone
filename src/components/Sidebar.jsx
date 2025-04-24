import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ({selectedCategory, setSelectedCategory}) => {

    
  return (
    <Stack
        sx={{
            overflowY:'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' , xs: 'row' },
        }}
    >
    {categories.map((cat) => (
        <button 
        className='category-btn'
        onClick={() => setSelectedCategory(cat.name)}
        style={{backgroundColor: selectedCategory === cat.name && '#fc1503', color: 'white'} }
        key={cat.name}
        >
            <span style={{
                color: selectedCategory === cat.name ? 'white' : 'red',
                marginRight: '15px'
            }}>{cat.icon}</span>
            <span>{cat.name}</span>
        </button>
    ))}
    </Stack>
  )
}

export default Sidebar