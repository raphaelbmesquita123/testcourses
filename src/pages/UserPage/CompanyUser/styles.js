import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--blue-100);
    h1{
        padding: 2rem;
        color: var(--gray);
    }
    small{
        max-width: 1100px;
        color: var(--gray);
        padding: 0 2rem;
        text-align: justify;
    }
    div{
        max-height:600px;
        overflow-y: scroll;
        table{
            padding: 1rem;
            margin-top: 1rem;
            margin-bottom: 3rem;
            /* min-width: 300px; */
            background-color: orange;
            overflow-x: scroll;

            thead{
                width: 1200px;
                background-color: yellow;
                tr{
                    th{
                        padding:1rem;
                    }
                }
            }
            tbody{
                tr{
                    td{
                        padding: 0.5rem;
                    }
                }
            }
            
            
        }
    }
`