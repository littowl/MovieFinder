import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: 30px;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 24px;
        text-align: center;
        margin: 15px 0;
    }
`

export const Card = styled.div`
    display: flex;
    background: #141313;
    min-height: 400px;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        min-height: 100px;
    }
`

export const Image = styled.img`
    width: 350px;
    @media (max-width: 768px) {
        width: 50vw;
        height: 60vw;
        margin: 10px auto;
    }
`

export const Description = styled.div`
    padding: 25px;
    font-size: 20px;
    font-weight: 400;
    @media (max-width: 768px) {
        font-size: 16px;
        padding-bottom: 0;
    }
`

export const Characteristics = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    & > div {
        margin: 2%;
    }
`

export const Item = styled.div`
    width: fit-content;
    height: 40px;
    background: #fed8b5;
    color: black;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Genre = styled.div`
    width: fit-content;
    height: 40px;
    background: #00275d;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
