// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import React from 'react';
import io from 'socket.io-client';


// ** Reactstrap Imports
import {
    Row,
    Col,
    Modal,
    Button,
    ModalBody,
    ModalHeader,
    CardHeader,
    CardTitle,

} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'react-bootstrap'
import MediaPlayer from './MediaPlayer';
import { getCreateVideo } from '../../../redux/actions/createVideoAction';
import { emptyGetVideo } from '../../../redux/slices/createVideoSlice';

// const ENDPOINT = "https://app.clatter.ai:3008"
// const socket = io(ENDPOINT, {
//     transports: ['websocket']
// });

const ShowVideoModal = ({ show, setShow, videoId, setCreatingLoader }) => {
    const dispatch = useDispatch()
    const [videoUrl, setVideoUrl] = useState(null)
    const { getVideo } = useSelector(state => state.createVideo)
    const [socketResponse, setSocketResponse] = useState(!null)

    // useEffect(() => {
    //     socket.on("connect_error", (e) => {
    //         console.log(e);
    //     });

    //     socket.on('connect', () => {
    //         console.log('Connected to the server');
    //     });
    //     socket.emit('getVideo', { videoId: "tlk_mnP5SLwUUkwXBV3VdfM6p" });
    //     socket.on('fetchedVideo', (response) => {
    //         setSocketResponse(response)
    //         if (response !== null) {
    //             setCreatingLoader(false)
    //         }
    //         console.log('Received response:', response);
    //     });

    //     return () => {
    //         socket.disconnect();
    //     };
    // }, [videoId]);

    useEffect(() => {
        if (getVideo !== null && videoUrl === null) {
            setCreatingLoader(false)
            setShow(true)
            setVideoUrl(getVideo?.video?.result_url)
        }
    }, [getVideo])

    useEffect(() => {
        const timeOutFunc = () => {
            if (videoId !== null) {
                dispatch(getCreateVideo(videoId))
            }
        }
        const interval = setTimeout(timeOutFunc, 10000)
        return () => { clearTimeout(interval) }
    }, [videoId])



    const handleDownload = () => {
        const url = videoUrl;
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Presenter Voice Over';
        link.click();
    }

    return (
        <Fragment>

            {!videoId && (
                <Row >
                    <Col>
                        <div style={{ minHeight: "590px", padding: "20px" }}>
                            <h2>Output</h2>
                        </div>
                    </Col>
                </Row>
            )}
            {videoUrl && (
                <>
                    <h1 className='text-center mb-1'>{videoUrl === null ? "Generating Video" : `Video Generated Successfully`}</h1>
                    <Row tag='form' className='gy-1 gx-2 mt-75'>
                        {videoUrl === null ?
                            (
                                <Col xs={12} className='d-flex justify-content-center align-items-center'>
                                    <Spinner
                                        style={{
                                            height: '10rem',
                                            width: '10rem'
                                        }}
                                        animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                </Col>
                            ) : null}
                        {videoUrl !== null ? (
                            <MediaPlayer videoUrl={videoUrl} />
                        ) : null}
                        {videoUrl !== null ? (
                            <Col className='text-center mt-1' xs={12}>
                                <Button type='button' id="downloadBtn" onClick={() => handleDownload()} value="download" className='me-1' color='primary'>
                                    Download
                                </Button>
                                <Button
                                    type='button'
                                    color='secondary'
                                    outline
                                    onClick={() => {
                                        setShow(!show); dispatch(emptyGetVideo); setVideoUrl(null)
                                    }}
                                >
                                    Close
                                </Button>
                            </Col>
                        ) : null}
                    </Row>
                </>
            )}

        </Fragment >
    )
}

export default ShowVideoModal
