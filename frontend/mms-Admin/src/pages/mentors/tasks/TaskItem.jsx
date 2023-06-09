import { Article, CalendarMonth, ExitToAppOutlined, ExpandCircleDownOutlined } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Chip, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import PropTypes from "prop-types"

function TaskItem({ expanded }) {
    return (
        <Accordion expanded={expanded} sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
            <AccordionSummary
                expandIcon={<ExpandCircleDownOutlined />}
            >
                <ListItem >
                    <ListItemIcon>
                        <ExitToAppOutlined color="primary" sx={{ width: 50, height: 50 }} />
                    </ListItemIcon>
                    <ListItemText
                        primary="Room liberary article write..."
                        primaryTypographyProps={{ sx: { fontWeight: "bold", fontSize: 20, color: "common.black" } }}
                        secondary={
                            <Stack direction="row" spacing={2} alignItems="center">
                                <Chip icon={<CalendarMonth color='primary' fontSize='small' />} label="Dec 12, 2022" />
                                <Box>3 days from now</Box>
                            </Stack>
                        }
                    />
                </ListItem>
            </AccordionSummary>
            <AccordionDetails>
                <List>
                    <ListItem >
                        <ListItemText
                            primary='Description:'
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
                            >18</Typography>
                            <Typography
                                fontWeight="bold"
                                color="common.black"
                                fontSize={20}
                            >Task Reports</Typography>
                            <Chip color='error' label="3" size='small' />
                        </Stack>
                        <Box sx={{ flexGrow: 1 }} />
                        <Button> View </Button>
                    </ListItem>
                    <Button
                        sx={{ float: "right", m: 2, px: 4 }}
                        variant='outlined'
                        size='large'>
                        Unassign from Task
                    </Button>
                </List>
            </AccordionDetails>
        </Accordion>
    )
}


TaskItem.propTypes = {
    expanded: PropTypes.bool
}


export default TaskItem