import { Box, Stack } from '@mui/material'
import { useState } from 'react'
import ProgramItem from './ProgramItem'

export default function ProgramList() {
  const [expanded, setExpanded] = useState(0)
  return (
    <Stack spacing={1} sx={{ maxHeight: 800, overflowY: "scroll" }}>
      {
        (new Array(50)).fill(0).map((v, index) => (
          <Box key={index} onClick={() => setExpanded(index)}>
            <ProgramItem
              expanded={index === expanded}
            />
          </Box>))
      }
    </Stack>
  )
}
