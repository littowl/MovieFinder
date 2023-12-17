import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    font-size: 30px;
    font-weight: 700;
`

export const Card = styled.div`
    display: flex;
    background: #141313;
    min-height: 400px;
    max-height: auto;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const Image = styled.img`
    width: 350px;
    @media (max-width: 768px) {
        width: 50vw;
        height: 60vw;
        margin: auto;
    }
`

export const Description = styled.div`
    padding: 25px;
    font-size: 20px;
    font-weight: 400;
`
