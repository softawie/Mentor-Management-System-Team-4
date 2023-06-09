import { Delete, Textsms } from '@mui/icons-material'
import { Avatar, Chip, ListItem, ListItemAvatar, ListItemButton, ListItemText, Stack, Typography, alpha } from '@mui/material'
import { MentorImage } from 'src/components/icons'
import { usePalette } from 'src/theme/theme'

export default function MentorCard() {

    const palette = usePalette()

    return (
        <ListItem sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <ListItemAvatar sx={{ mr: 2 }}>
                <Avatar src={MentorImage} sx={{ width: 77, height: 77 }} />
            </ListItemAvatar>
            <ListItemText
                primary="Peculiah C. Umeh"
                primaryTypographyProps={{ sx: { fontWeight: "bold", color: "common.black", fontSize: 24 } }}
                secondary={
                    <Stack direction={"column"}>
                        <Typography>Program Assistant, Andela, He/Him</Typography>
                        <Stack spacing={2} direction={"row"}>
                            <Chip label={"PROGRAM-ASST"} sx={{ bgcolor: alpha(palette.primary.main, 0.1) }} size='small' />
                            <Chip label={"MENTOR-GADS"} sx={{ bgcolor: alpha(palette.primary.main, 0.1) }} size='small' />
                        </Stack>
                    </Stack>
                }
            />
            <Stack direction={"column"} justifyContent={"space-between"} height={"100%"}>
                <ListItemButton>
                    <Textsms />
                </ListItemButton>
                <ListItemButton>
                    <Delete />
                </ListItemButton>
            </Stack>
        </ListItem>
    )
}
