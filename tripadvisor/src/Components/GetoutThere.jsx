import { Button } from '@chakra-ui/react'
import React from 'react'

const GetoutThere = () => {
    return (
        <div style={{
            backgroundColor: '#FAF1ED', display: 'flex', width: "80%",
            margin: 'auto', justifyContent: 'space-between' ,marginTop:'80px'
        }}>
            <div style={{ padding: '5px 55px', textAlign: 'left', marginTop: '25px' }}>
                <h2 >Get Out There</h2>
                <p style={{ fontSize: '18px', color: 'grey', marginTop: '-25px' }}>Best of Best tours,attractions & activities you won't want to miss</p>
                <Button style={{
                    backgroundColor: 'black', color: 'white',
                    fontSize: '16px', padding: '15px 25px',
                    borderRadius: '25px', marginTop: '15px'
                }}>See the list</Button>

            </div>
            <div>
                <img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/f7/1d/4d/caption.jpg?w=1000&h=-1&s=1' height="200px" width="500px" style={{
                    objectFit: 'cover',
                    objectPosition: '5% 45%'
                }} />
            </div>
        </div>
    )
}

export default GetoutThere