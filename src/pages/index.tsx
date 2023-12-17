import { FilmList, Header } from '@/components/ui'

const App = () => {
    const genres = ['Thriller', 'Romance', 'Drama', 'Horror']

    return (
        <div>
            <Header />
            <div>
                {genres.map((genre) => (
                    <FilmList key={genre} genre={genre} />
                ))}
            </div>
        </div>
    )
}

export default App
