import { DoneAll } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'

export default function ChatItem() {
    return (
        <Stack spacing={1} sx={{
            borderRadius: 3,
            background: "#E6FDFE",
            p: 2
        }}>
            <Typography fontSize={20}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim pharetra metus, ut cursus purus efficitur et. Duis ac enim tellus. Phasellus eget tortor dapibus, laoreet mauris sed, dignissim lectus.
            </Typography>
            <Stack direction="row" alignItems="center">
                <Typography
                    sx={{
                        fontWeight: "bold",
                        fontSize: 12,
                        color: "common.black"
                    }}
                >Mentor Managers</Typography>
                <Box sx={{ flexGrow: 1 }} />

                <Typography
                    sx={{
                        fontSize: 12,
                        color: "common.black",
                        mr: 2
                    }}
                >6:01 PM

                </Typography>
                <DoneAll color="common.black" />

            </Stack>
        </Stack >

    )
}
