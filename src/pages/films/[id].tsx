import { CommentList, FilmCard } from '@/components/ui'
import * as Style from './Films.styled'

export default function Film() {
    return (
        <Style.Container>
            <FilmCard />
            <CommentList />
        </Style.Container>
    )
}
