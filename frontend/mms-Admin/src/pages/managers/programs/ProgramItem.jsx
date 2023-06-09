import { Article, CalendarMonth, ExpandCircleDownOutlined, QueryBuilderOutlined } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Chip, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import PropTypes from "prop-types"
import { GoogleImage } from 'src/components/icons'

function ProgramItem({ expanded }) {
    return (
        <Accordion expanded={expanded} sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <AccordionSummary
                expandIcon={<ExpandCircleDownOutlined />}

            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={GoogleImage} sx={{ width: 40, height: 40, mr: 4 }} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Google Africa Scholarship Program"
                        primaryTypographyProps={{ sx: { fontWeight: "bold", fontSize: 20, color: "common.black" } }}
                        secondary={
                            <Stack direction="row" spacing={2}>
                                <Chip icon={<CalendarMonth color='primary' />} label="Dec 12, 2022" />
                                <Chip icon={<QueryBuilderOutlined color='primary' />} label="8:00 pm" />
                            </Stack>
                        }
                    />
                </ListItem>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    <ListItem >
                        <ListItemText
                            primary='About:'
                            primaryTypographyProps={{ sx: { fontWeight: "bold", fontSize: 20, color: "common.black" } }}
                            secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque"
                        />
                    </ListItem>
                    <ListItem>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Article color='primary' />
                            <Typography
                                fontWeight="bold"
                                color="common.black"
                                fontSize={32}
                            >40</Typography>
                            <Typography
                                fontWeight="bold"
                                color="common.black"
                                fontSize={20}
                            >Progam Reports</Typography>
                            <Chip color='error' label="3" size='small' />
                        </Stack>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button> View </Button>
                    </ListItem>
                    <Button
                        sx={{ float: "right", m: 2, px: 4 }}
                        variant='outlined'
                        size='large'>Unassign from Program</Button>

                </List>
            </AccordionDetails>
        </Accordion>
    )
}

ProgramItem.propTypes = {
    expanded: PropTypes.bool
}


export default ProgramItem