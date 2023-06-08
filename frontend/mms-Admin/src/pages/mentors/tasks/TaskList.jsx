import { Box, Stack } from '@mui/material'
import TaskItem from './TaskItem'
import { useState } from 'react'

export default function TaskList() {
  const [expanded, setExpanded] = useState(0)
  return (
    <Stack spacing={1} sx={{ maxHeight: 800, overflowY: "scroll" }}>
      {
        (new Array(50)).fill(0).map((v, index) => (
          <Box key={index} onClick={() => setExpanded(index)}>
            <TaskItem
              expanded={index === expanded}
            />
          </Box>))
      }
    </Stack>
  )
}
