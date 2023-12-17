import { useFilmList } from '@/lib/hooks/useFilmList'
import * as Style from './FilmList.styled'
import Link from 'next/link'
import Loader from '@/components/common/Loader'
import Pagination from '@/components/common/Pagination/Pagination'
import { useEffect, useState } from 'react'

export const FilmList = ({ genre }: { genre: string }) => {
    const [page, setPage] = useState(1)
    const { filmList, isLoading } = useFilmList(String(page), '10', genre)

    useEffect(() => {
        setPage(Number(localStorage.getItem(`${genre}_page`)) || 1)
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <Style.Container>
            <Style.Genre>{genre}</Style.Genre>
            <Style.Films>
                {filmList!.movies.map(({ id, medium_cover_image, title }) => (
                    <Style.Film key={id}>
                        <Link href={`/films/${id}`} key={id}>
                            <Style.Image src={medium_cover_image} />
                            <Style.Caption>
                                <Style.Title>{title}</Style.Title>
                            </Style.Caption>
                        </Link>
                    </Style.Film>
                ))}
            </Style.Films>
            <Pagination
                totalUsersCount={filmList!.movie_count}
                pageSize={10}
                currentPage={page}
                onPageChange={setPage}
                genre={genre}
            />
        </Style.Container>
    )
}
