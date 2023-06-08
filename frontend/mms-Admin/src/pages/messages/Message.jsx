import { Autocomplete, Button, Stack, TextField, Typography } from '@mui/material'
import ChatList from './ChatList'

export default function Message() {
    const options = [
        {
            firstName: "Raoul KUATE"
        },
        {
            firstName: "Yahia Zakaria"
        },
        {
            firstName: "Victor Okafor"
        },
        {
            firstName: "Abdul Rasheez"
        },
        {
            firstName: "Aisha Rashid"
        },
        {
            firstName: "Martins Ayoba"
        },
        {
            firstName: "Kwamboka Boulate"
        },
        {
            firstName: "Kayode Lateef"
        }
    ]
    return (
        <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography sx={{
                    fontWeight: "bold",
                    fontSize: 24,
                    color: "common.black"
                }}>Broadcast Message</Typography>

                <Button>Close</Button>
            </Stack>
            <Autocomplete
                multiple
                limitTags={2}
                options={options}
                getOptionLabel={(option) => option.firstName}
                renderInput={(params) => (
                    <TextField {...params} label="Select recipiant" placeholder="Others" />
                )}
                fullWidth
            />
            <ChatList />
        </Stack>
    )
}
