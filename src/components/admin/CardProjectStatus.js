import React from 'react'
import Box from '@mui/material/Box';

function CardProjectStatus(props) {
  return (
    <Box
        sx={{
            bgcolor: props.color,
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 210,
            maxWidth: 210,
            margin: "4px"
        }}
    >
        <Box sx={{ 
            color: 'text.secondary',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        }}
        >{props.title}</Box>
        <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' }}>
            {props.count}
        </Box>
    </Box>
  )
}

export default CardProjectStatus