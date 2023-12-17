import { useState } from 'react'
import * as Style from './CommentList.styled'
import { TbSend } from 'react-icons/tb'
import { MdDelete } from 'react-icons/md'

export const CommentList = () => {
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState<
        {
            id: number
            date: Date
            text: string
        }[]
    >([])
    const createComment = () => {
        setComments([
            ...comments,
            {
                id: Date.now(),
                date: new Date(),
                text: comment,
            },
        ])
        setComment('')
    }
    return (
        <Style.Comments>
            <Style.InputForm>
                <Style.Input
                    placeholder="Your comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') createComment()
                    }}
                />
                <Style.Send onClick={createComment}>
                    <TbSend />
                </Style.Send>
            </Style.InputForm>
            <Style.List>
                {comments.map(({ id, date, text }) => (
                    <Style.Comment key={id}>
                        <Style.Date>{date.toLocaleDateString()}</Style.Date>
                        <Style.Text>
                            {text}
                            <Style.Delete
                                onClick={() =>
                                    setComments(
                                        comments.filter(
                                            (comment) => comment.id !== id
                                        )
                                    )
                                }
                            >
                                <MdDelete />
                            </Style.Delete>
                        </Style.Text>
                    </Style.Comment>
                ))}
            </Style.List>
        </Style.Comments>
    )
}
