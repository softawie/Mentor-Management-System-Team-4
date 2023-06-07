import { Article } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Avatar, Box, Button, Chip, ListItem, ListItemAvatar, ListItemText, Stack, Tab, Typography } from '@mui/material';
import React from 'react';
import { MentorImage, NigeriaMap } from 'src/components/icons';

export default function MentorAbout() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Stack spacing={2}>
            <ListItem sx={{ border: 1, borderColor: "#E6E6E6", borderRadius: 2 }}>
                <ListItemAvatar sx={{ mr: 2 }}>
                    <Avatar src={MentorImage} sx={{ width: 90, height: 90 }} />
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
                    <Stack spacing={2}>
                        <Typography color="common.black" fontWeight="bold" fontSize={18}>Bio</Typography>
                        <Typography paragraph color="secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim ut cursus purus efficitur et. Duis ac enim tellus. Phasellus pharetra metus, ut cursus purus efficitur et. Duis ac enim tellus. Phasellus eget tortor dapibus, laoreet mauris sed, dignissim lectus.
                        </Typography>
                        <Typography paragraph color="secondary">
                            <Typography
                                component="b"
                                color="common.black"
                                fontSize={18}
                                fontWeight="bold"
                                children="Technical Proficiency: "
                            />
                            Java Script, Django, Mysql, Android
                        </Typography>
                        <Typography paragraph color="secondary">
                            <Typography
                                component="b"
                                color="common.black"
                                fontSize={18}
                                fontWeight="bold"
                                children={"Previous Programs: "}
                            />
                            GADS 2022, Google I/O Extended 2021
                        </Typography>
                        <Typography paragraph color="secondary">
                            <Typography
                                component="b"
                                color="common.black"
                                fontSize={18}
                                fontWeight="bold"
                                children="Previous Roles Held: "
                            />
                            Learner, Mentor, Program Assistant,  Program Assistant Lead
                        </Typography>

                        <Typography paragraph color="secondary">
                            <Typography
                                component="b"
                                color="common.black"
                                fontSize={18}
                                fontWeight="bold"
                                children={"Availability to join a new program: "}
                            />
                            Unavailable

                        </Typography>

                        <Typography paragraph color="secondary">
                            <Typography
                                component="b"
                                color="common.black"
                                fontSize={18}
                                fontWeight="bold"
                                children={"Program of interest: "}
                            />
                            Google Africa Scholarship Program

                        </Typography>

                        <Typography paragraph color="secondary">
                            <Typography
                                component="b"
                                color="common.black"
                                fontSize={18}
                                fontWeight="bold"
                                children={"Been a Mentor Before?: "}
                            />
                            Yes

                        </Typography>

                        <Typography paragraph color="secondary">
                            <Typography
                                component="b"
                                color="common.black"
                                fontSize={18}
                                fontWeight="bold"
                                children={"Years of Technical Experience: "}
                            />
                            5 Years

                        </Typography>
                        <Typography
                            color="common.black"
                            fontSize={18}
                            fontWeight="bold"
                            children={"Documents : "}
                        />
                        <Box>
                            <Chip icon={<Article color="primary" />} label="My resume.doc" />
                            <Chip icon={<Article color="primary" />} label="Birth Cerificate.doc" />
                            <Chip icon={<Article color="primary" />} label="Java Lead.doc" />
                        </Box>

                        <Typography
                            color="common.black"
                            fontSize={18}
                            fontWeight="bold"
                            children="Website: www.kabir.i@andela.com"
                        />
                    </Stack>

                </TabPanel>
                <TabPanel value="2">Programs</TabPanel>
                <TabPanel value="3">Tasks</TabPanel>
                <TabPanel value="4">Certificates</TabPanel>
            </TabContext>
        </Stack>
    )
}
