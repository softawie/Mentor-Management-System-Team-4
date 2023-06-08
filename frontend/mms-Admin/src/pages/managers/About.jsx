import { Article } from '@mui/icons-material';
import { Box, Chip, Stack, Typography } from '@mui/material';

export default function About() {

    return (

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
                >
                    Technical Proficiency:
                </Typography>
                Java Script, Django, Mysql, Android
            </Typography>
            <Typography paragraph color="secondary">
                <Typography
                    component="b"
                    color="common.black"
                    fontSize={18}
                    fontWeight="bold">
                    Previous Programs:
                </Typography>
                GADS 2022, Google I/O Extended 2021
            </Typography>
            <Typography paragraph color="secondary">
                <Typography
                    component="b"
                    color="common.black"
                    fontSize={18}
                    fontWeight="bold"
                >
                    Previous Roles Held:
                </Typography>
                Learner, Mentor, Program Assistant,  Program Assistant Lead
            </Typography>

            <Typography paragraph color="secondary">
                <Typography
                    component="b"
                    color="common.black"
                    fontSize={18}
                    fontWeight="bold"
                >
                    Availability to join a new program:
                </Typography>
                Unavailable

            </Typography>

            <Typography paragraph color="secondary">
                <Typography
                    component="b"
                    color="common.black"
                    fontSize={18}
                    fontWeight="bold"
                >
                    Program of interest:
                </Typography>
                Google Africa Scholarship Program

            </Typography>

            <Typography paragraph color="secondary">
                <Typography
                    component="b"
                    color="common.black"
                    fontSize={18}
                    fontWeight="bold"
                >
                    Been a Mentor Before?:
                </Typography>
                Yes

            </Typography>

            <Typography paragraph color="secondary">
                <Typography
                    component="b"
                    color="common.black"
                    fontSize={18}
                    fontWeight="bold"
                >
                    Years of Technical Experience:
                </Typography>
                5 Years

            </Typography>
            <Typography
                color="common.black"
                fontSize={18}
                fontWeight="bold"
            >
                Documents:
            </Typography>
            <Box>
                <Chip icon={<Article color="primary" />} label="My resume.doc" />
                <Chip icon={<Article color="primary" />} label="Birth Cerificate.doc" />
                <Chip icon={<Article color="primary" />} label="Java Lead.doc" />
            </Box>

            <Typography
                color="common.black"
                fontSize={18}
                fontWeight="bold"
            >
                Website: www.kabir.i@andela.com
            </Typography>
        </Stack>

    )
}
