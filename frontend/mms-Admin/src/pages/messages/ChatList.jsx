import { Stack, TextField, alpha } from '@mui/material'
import React from 'react'
import ChatItem from './ChatItem'
import theme from 'src/theme/theme'
import { AttachFile, Mood } from '@mui/icons-material'

export default function ChatList() {
    return (
        <Stack>
            <Stack spacing={4} sx={{
                p: 8,
                bgcolor: "#F7FEFF",
                borderRadius: 4,
                maxHeight: "65vh",
                overflowY: "scroll"
            }}>

                {(Array(100).fill(0).map((v, index) => (<ChatItem key={index} />)))}
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
                <Mood />
                <AttachFile />
                <TextField fullWidth placeholder='Type a message' type='textarea' rows={2} multiline />
            </Stack>
        </Stack>
    )
}
