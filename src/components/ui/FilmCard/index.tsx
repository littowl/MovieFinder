import * as Style from './FilmCard.styled'
import { useRouter } from 'next/router'
import { useFilmRetrieve } from '@/lib/hooks/useFilmRetrieve'
import Loader from '@/components/common/Loader'

export const FilmCard = () => {
    const router = useRouter()
    const { filmRetrieve, isLoading } = useFilmRetrieve(
        (router.query.id as string) || ''
    )

    if (isLoading) return <Loader />

    const descriptionSlice = (desc: string) =>
        desc.split('.').length > 5
            ? desc.split('.').slice(0, 5).join('. ')
            : desc

    return (
        <>
            <Style.Header>{filmRetrieve?.title}</Style.Header>
            <Style.Card>
                <Style.Image
                    src={filmRetrieve?.large_cover_image}
                    placeholder="blur"
                />
                <Style.Description>
                    {filmRetrieve?.description_full
                        ? descriptionSlice(filmRetrieve?.description_full)
                        : 'NO SUMMARY PROVIDED'}
                </Style.Description>
            </Style.Card>
            <Style.Characteristics>
                Genres:
                {filmRetrieve?.genres.map((genre) => (
                    <Style.Genre>{genre}</Style.Genre>
                ))}
            </Style.Characteristics>
            <Style.Characteristics>
                Additional information:
                <Style.Item>
                    Download count: {filmRetrieve?.download_count || 0}
                </Style.Item>
                <Style.Item>Rating: {filmRetrieve?.rating}/10</Style.Item>
                <Style.Item>Year: {filmRetrieve?.year}</Style.Item>
            </Style.Characteristics>
        </>
    )
}
