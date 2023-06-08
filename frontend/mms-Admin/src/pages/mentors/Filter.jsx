import { FilterList, GridOn, Search, Toc } from '@mui/icons-material'
import { Box, Button, Chip, Pagination, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'

const Filter = ({ setColumn, column }) => {
    console.log(column)
    return (
        <Stack alignItems="center" direction="row" spacing={2} pt={2}>
            <Typography
                color="common.black"
                fontWeight="bold"
                fontSize={24}
            >Mentors</Typography>
            <Toc fontSize='large'
                onClick={() => setColumn(1)}
                disabled={column == 1}
                color={column === 1 ? "secondary" : "primary"}
            />
            <GridOn
                onClick={() => setColumn(2)}
                disabled={column == 2}
                color={column === 2 ? "secondary" : "primary"} />
            <Box sx={{ flexGrow: 1 }} />
            <Chip label="Send Broadcast Message" variant="outlined" />
            <Button size='small'>Add New Mentor</Button>
            <Pagination siblingCount={0} count={3} showFirstButton showLastButton />
            <Search />
            <FilterList />
        </Stack>
    )
}


Filter.propTypes = {
    setColumn: PropTypes.func,
    column: PropTypes.number
}

export default Filter