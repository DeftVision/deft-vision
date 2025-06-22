import {Box, Button, Container, TextField, Typography, FormControlLabel, Switch} from '@mui/material'
import {useState} from 'react'
import { BlogGrid } from './index'

const form_fields = {
    blogTitle: '',
    blogText: '',
    expireDate: '',
    publishDate: '',
    archive: false,
}

export default function ManageBlog() {
    const [formData, setFormData] = useState(form_fields);


    return (
        <>
            <Container maxWidth="xs" sx={{mt: 8}}>
                <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
                    <a href="/">
                        <img src="/images/DarkDeftVisionLogo.svg" alt="Deft Vision logo" style={{ height: 56 }} />
                    </a>
                </Box>

                <Box component='form'
                     // onSubmit={handleSubmit}
                     sx={{
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         gap: 2,
                     }}
                >

                    <Typography variant='overline'>Blog Manager</Typography>

                    <TextField
                        type='text'
                        label='Title'
                        name='blogTitle'
                        value={formData.blogTitle}
                        onChange={(e) => setFormData({...formData, blogTitle: e.target.value})}
                        fullWidth
                    />

                    <TextField
                        type='text'
                        label='ManageBlog Text'
                        name='blog'
                        value={formData.blogText}
                        onChange={(e) => setFormData({...formData, blogText: e.target.value})}
                        multiline={true}
                        fullWidth

                    />

                    <TextField
                        type='date'
                        label='Publish Date'
                        name='publishDate'
                        slotProps={{ inputLabel: { shrink: true } }}
                        onChange={(e) => setFormData({ ...formDate, publishDate: e.target.value})}
                        fullWidth
                    />

                    <TextField
                        type='date'
                        label='Expire Date'
                        name='expireDate'
                        slotProps={{ inputLabel: { shrink: true } }}
                        onChange={(e) => setFormData({ ...formDate, expireDate: e.target.value})}
                        fullWidth
                    />

                    <FormControlLabel
                        control={
                            <Switch
                                checked={formData.archive}
                                onChange={(e) => setFormData({ ...formData, archive: e.target.checked })}
                            />
                        }
                        label='Publish'
                    />

                    <Button variant='outlined'>Submit</Button>
                </Box>

                <Box sx={{ mb: 5}}>
                    <BlogGrid />
                </Box>
            </Container>
        </>
    )
}