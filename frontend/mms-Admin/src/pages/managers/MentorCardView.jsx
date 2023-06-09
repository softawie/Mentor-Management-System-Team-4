import { Avatar, Button, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import { MentorImage } from 'src/components/icons'

export default function MentorCardView() {

    return (
        <ListItem sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <ListItemAvatar sx={{ mr: 2 }}>
                <Avatar src={MentorImage} sx={{ width: 45, height: 45 }} />
            </ListItemAvatar>
            <ListItemText
                 primary="Peculiah C. Umeh"
                primaryTypographyProps={{ sx: { fontWeight: "bold", color: "common.black", fontSize: 16 } }}
                secondary="Added Oct. 10 2022"
            />
            <Button size='small'>View </Button>
        </ListItem>
    )
}
