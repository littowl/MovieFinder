import styled from 'styled-components'

export const Container = styled.section`
    width: 100vw;
    padding: 30px 5% 0 5%;
`

export const Films = styled.div`
    display: flex;
    height: 40%;
    overflow-x: scroll;
    overflow-y: hidden;
    div:last-child {
        margin-right: 0;
    }
`
export const Genre = styled.p`
    color: #fff;
    margin-bottom: 20px;
    font-size: 23px;
    font-weight: 700;
`

export const Film = styled.div`
    background: #141313;
    margin-right: 23px;
    min-height: 419px;
    min-width: 230px;
    @media (max-width: 900px) {
        min-width: 30%;
        min-height: 319px;
    }
    @media (max-width: 768px) {
        min-width: 30%;
        min-height: 250px;
    }
`

export const Image = styled.img`
    @media (max-width: 900px) {
        width: 100%;
    }
`

export const Caption = styled.div`
    display: flex;
    height: 70px;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const Title = styled.p`
    color: white;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    padding: 15px;
    @media (max-width: 900px) {
        font-size: 16px;
    }
    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 15px;
    }
`
