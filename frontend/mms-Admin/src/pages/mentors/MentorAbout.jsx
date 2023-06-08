import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Avatar, Box, Button, ListItem, ListItemAvatar, ListItemText, Stack, Tab, Typography } from '@mui/material';
import React from 'react';
import { MentorImage, NigeriaMap } from 'src/components/icons';
import About from './About';
import ProgramList from './programs/ProgramList';
import TaskList from './tasks/TaskList';
import CertificateList from './certificates/CertificateList';

export default function MentorAbout() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Stack spacing={2}>
            <ListItem sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
                <ListItemAvatar sx={{ mr: 2 }}>
                    <Avatar src={MentorImage} sx={{ width: 60, height: 60 }} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Stack spacing={2} direction="row">
                            <Typography>Alison Davis</Typography>
                            <Avatar
                                src={NigeriaMap}
                                sx={{ width: 30, height: 21.67, borderRadius: 1 }}
                                variant="square"
                            />
                        </Stack>}
                    primaryTypographyProps={{ sx: { fontWeight: "bold", color: "common.black", fontSize: 16 } }}
                    secondary="Mentor"
                />
                <Box sx={{ flexGrow: 1 }} />
                <Button>Send Message</Button>
            </ListItem>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} variant="fullWidth">
                        <Tab label="About" value="1" sx={{ fontWeight: "bold", textTransform: "none", fontSize: 16 }} />
                        <Tab label="Programs" value="2" sx={{ fontWeight: "bold", textTransform: "none", fontSize: 16 }} />
                        <Tab label="Tasks" value="3" sx={{ fontWeight: "bold", textTransform: "none", fontSize: 16 }} />
                        <Tab label="Certificates" value="4" sx={{ fontWeight: "bold", textTransform: "none", fontSize: 16 }} />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <About />
                </TabPanel>
                <TabPanel value="2">
                    <ProgramList />
                </TabPanel>
                <TabPanel value="3">
                    <TaskList />
                </TabPanel>
                <TabPanel value="4">
                    <CertificateList />
                </TabPanel>
            </TabContext>
        </Stack>
    )
}
