import styled from 'styled-components'

export const ContainerNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 1rem;
    height: 3.5rem;

    img{
        height: 1.5rem;
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

    div{
        display: flex;
    }

    @media (max-width: 600px){
        img{
            height: 1rem;
        }
    }
`

export const SlideContainer = styled.div`
    position: fixed;
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
            left: 1.5rem;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        .openSlide{
            color: var(--blue-500);
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

export const LoginButtonContainer = styled.div`
    padding: 0.5rem 0.7rem;
    cursor: pointer;
    border: 2px solid var(--blue-500);
    color: var(--blue-500);
    margin-right: 1rem;

    @media (max-width: 600px){
        font-size: 0.8rem;
        padding: 0.3rem 0.5rem;
    }
`

export const LoginContainer = styled.div`
    position: relative;

    form{
        display: flex;
        flex-direction:column;
        position : absolute;
        top: 2.5rem;
        z-index: 3;
        left: -3rem;
        padding:1rem;
        background: var(--blue-500);
        input{
            margin-top:1rem;
            padding: 0.5rem;
            &:first-child{
                margin-top: 0;
            }
        }

        span{
            background: red;
            font-size: 0.7rem;
            color: white;
            padding: 0.3rem;
        }
        button{
            font-size: 0.8rem;
            padding: 0.3rem;
            margin-top: 1rem;
            border: none;
            background: var(--gray);
            color: var(--blue-500)
        }
    }
`
export const SignUpContainer = styled.div`
    padding: 0.5rem 0.7rem;
    cursor: pointer;
    background-color: var(--blue-500);
    color: white;

    @media (max-width: 600px){
        font-size: 0.8rem;
        padding: 0.3rem 0.5rem;
    }
`

export const SignUpModal = styled.div`
    display: flex;
    position: relative;
    flex-direction:column;
    width: 100%;
    padding:1rem;
    background: var(--blue-500);

    .closeModal{
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        color: white;
        cursor: pointer;
    }

    h1{
        color: white;
        margin: 0 auto;
        padding: 1rem 0 2rem 0;
    }
    div{
        display: flex;
        width: 100%;

        h2{
            padding: 1rem;
            color: white;
            cursor: pointer;
        }
    }

    form{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        background-color: var(--blue-100);

        input{
            margin-top:1rem;
            padding:  0.7rem;
            &:focus{
                border: none;
            }
            &:first-child{
                margin-top: 0;
            }
        }

        span{
            background: red;
            font-size: 0.7rem;
            color: white;
            padding: 0.3rem;
        }

        button{
            padding: 1rem;
            border: none;
            margin-top: 1rem;
            background: var(--gray);
            color: var(--blue-500)
        }
    }
`

export const SignUpModalContainer = styled.div``