import styled from 'styled-components'

export const ContainerNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 1rem;
    height: 3.5rem;

    img{
        height: 3rem;
        width: auto;
        cursor: pointer;
    }

    ul{
        display: flex;
        align-items: center;
        list-style: none;

        a{
            text-decoration: none;
            margin-left: 1rem;
            cursor: pointer;
            
            &:nth-child(1){
                margin-left: 0;
            }
        }
    }
`

export const SlideContainer = styled.div`
    position: absolute;
    background-color: var(--blue-900);
    width: 100%;
    height: 100vmax;
    top: 0;
    z-index: 3;
    left: 0;
    transition: left 0.5s ease-in-out;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        height: 100%;

        .closeSlide{
            color: white;
            position: absolute;
            top: 2.7rem;
            right: 2rem;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        .openSlide{
            color: var(--blue-900);
            position: absolute;
            top: 2.7rem;
            right: -2.5rem;
            font-size: 2rem;
            cursor: pointer;
        }
        
        ul{
            display: flex;
            flex-direction: column;
            a{
                font-size: 2rem;
                color: white;
                margin-top: 2rem;
                
                &:first-child {
                    margin-top: 0;
                }
            }
        }    
    }
`