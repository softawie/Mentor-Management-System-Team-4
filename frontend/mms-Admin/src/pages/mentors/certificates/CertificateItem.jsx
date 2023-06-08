import { Article, CalendarMonth, ExitToAppOutlined, ExpandCircleDownOutlined } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Chip, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import { MMSCertImage } from 'src/components/icons'

export default function CertificateItem({ expanded }) {
    return (
        <Accordion expanded={expanded} sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <AccordionSummary
                expandIcon={<ExpandCircleDownOutlined />}
            >
                <ListItem >
                    <ListItemAvatar>
                        <Avatar src={MMSCertImage} sx={{ width: 50, height: 50 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Google Cloud 2022 - COMPETITION"
                        primaryTypographyProps={{ sx: { fontWeight: "bold", fontSize: 20, color: "common.black" } }}
                    />
                </ListItem>
            </AccordionSummary>
            <AccordionDetails>
                <Stack spacing={2}>
                    Cetificate design ongoing...
                </Stack>
            </AccordionDetails>
        </Accordion>
    )
}
