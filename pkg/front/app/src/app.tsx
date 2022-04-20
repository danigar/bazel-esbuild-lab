function App() {
    const paragraphs = Array.from(Array(10).keys())

    return (
        <div>
            <h1>hi there!</h1>
            {
                paragraphs.map((count) => {
                   return (
                    <p>Paragraph {count + 1}</p>
                   ) 
                })
            }
        </div>
    )
}

export default App