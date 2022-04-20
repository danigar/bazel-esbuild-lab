import { Box } from '@mui/material'

function App() {
    const paragraphs = Array.from(Array(10).keys())

    return (
        <div>
            <h1>hi there!</h1>
                <Box
                    sx={{
                        filter: 'blur( 5px )',
                        pointerEvents: 'none',
                        height: '100%',
                    }}
                >
                    {
                        paragraphs.map((count) => {
                            return (
                            <p>Paragraph {count + 1}</p>
                            ) 
                        })
                    }
                </Box>
        </div>
    )
}

export default App