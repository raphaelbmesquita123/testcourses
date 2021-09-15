import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    position: relative;
    height: 15rem;
    width: auto;    
    transition: all 0.5s ;
    box-shadow: -5px 10px 20px var(--blue-900);

    &:hover{
        transform: scale(0.98);
    }
    h3{
        position: absolute;
        width: 100%;
        bottom: 6.2rem;
        text-align: center;
    }

    p{
        position: absolute;
        width: 70%;
        bottom: 4.7rem;
        text-align: center;
        font-size: 0.5rem;
        left: 50%;
        transform: translateX(-50%);
    }

    span{
        position: absolute;
        width: 70%;
        bottom: 3.4rem;
        text-align: center;
        font-size: 0.8rem;
        left: 50%;
        transform: translateX(-50%);
    }
`