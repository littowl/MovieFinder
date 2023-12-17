import styled from 'styled-components'

export const Pagination = styled.div`
    display: flex;
    width: 100%;
    min-height: 40px;
    flex: 0 0 auto;
    justify-content: center;
    transition: 0.1s;
    margin: 20px 0px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

export const Item = styled.div`
    cursor: pointer;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    height: 100%;
    border-radius: 5px;
    padding: 0px 10px;
    box-sizing: border-box;
    transition: 0.1s;
    &:hover {
        transition: 0.1s;
        color: white;
        background-color: rgba(255, 255, 255, 0.2);
    }
    margin: 0px 10px 0px 0px;
    &:last-child {
        margin: 0px 0px 0px 0px;
    }
`

export const ActiveItem = styled(Item)`
    color: white;
    border: 1px white solid;
    background: rgba(255, 255, 255, 0.2);
`
