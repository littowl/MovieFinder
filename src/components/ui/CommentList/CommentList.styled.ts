import styled from 'styled-components'

export const Comments = styled.div``

export const InputForm = styled.div`
    margin-top: 30px;
    padding-bottom: 10px;
    width: 100%;
    border-bottom: 1px white solid;
    display: flex;
    justify-content: space-between;
`

export const Input = styled.input`
    width: 90%;
    font-size: 20px;
    &:focus {
        outline: black;
    }
`

export const Send = styled.button`
    cursor: pointer;
    & > svg {
        width: 24px;
        height: 24px;
        transform: rotate(45deg);
        stroke-width: 1;
    }
`

export const List = styled.ul``

export const Comment = styled.li`
    margin-top: 30px;
`

export const Date = styled.p`
    font-size: 13px;
    font-weight: 400;
`

export const Text = styled.div`
    display: flex;
    height: auto;
    align-items: center;
    font-size: 20px;
`

export const Delete = styled.button`
    cursor: pointer;
    margin-left: 10px;
    display: flex;
    align-items: center;
    & > svg {
        width: 20px;
        height: 20px;
        fill: #ab9d9d;
    }
`
