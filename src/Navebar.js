import React, { useEffect, useState } from 'react'
import './Navebar.css'
import { Outlet, useNavigate } from 'react-router'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import SidebarMenu from 'react-bootstrap-sidebar-menu'

function Navebar() {
    const navigate = useNavigate()

    const [ matches, setMatches ] = useState(window.matchMedia('(max-width: 767px)').matches)
    console.log(matches)

    // const popupStyle = () => {
    //     if(matches == true) return {'width': '100%', 'height': 'fit-content'}
    //     else if(matches == false) return {'width': '500px', 'height': 'fit-content'}
    // }

    useEffect(() => {
        window
            .matchMedia('(max-width: 767px)')
            .addEventListener('change', e => setMatches( e.matches ))
    })

    const [ xsAmount, setXsAmount ] = useState(2)

    useEffect(() => {
        if(matches == true) setXsAmount(1)
        else if(matches == false) setXsAmount(2)
    })
  return (
    <>
        <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary' bg='light' data-bs-theme='light'>
            <Container fluid>
                <Navbar.Brand>School Management</Navbar.Brand>

                <Nav className='me-auto'>
                    <Nav.Item>
                        <Nav.Link>User</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>

        <Container fluid>
            <Row>
                <Col xs={xsAmount} className='sidebar'>
                    <SidebarMenu>
                        <SidebarMenu.Body>
                            <SidebarMenu.Nav>
                                <SidebarMenu.Nav.Link>
                                    <SidebarMenu.Nav.Icon>
                                        <a><i class="fa-solid fa-gauge"></i></a>
                                    </SidebarMenu.Nav.Icon>

                                    <SidebarMenu.Nav.Title>Dashboard</SidebarMenu.Nav.Title>
                                </SidebarMenu.Nav.Link>
                            </SidebarMenu.Nav>
                        </SidebarMenu.Body>
                    </SidebarMenu>
                </Col>

                <Col xs={12-xsAmount} className='outlet'>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Navebar