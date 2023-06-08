import { ExpandCircleDownOutlined } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material'
import PropTypes from "prop-types"
import { MMSCertImage } from 'src/components/icons'

const CertificateItem = ({ expanded }) => {
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

CertificateItem.propTypes = {
    expanded: PropTypes.bool
}

export default CertificateItem