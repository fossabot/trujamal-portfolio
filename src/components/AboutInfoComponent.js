import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    display: block;
`

const InfoGroup = styled.div`


`

const welcomeText = styled.p`
    margin-bottom: 24px;
    color: #757B80;
    line-height: 16px;
    display: inline-block;
    font-size: 12px;
    letter-spacing: .2px;
`

const welcomeHeader = styled.h1`
    font-size: 32px;
    line-height: 40px;
    margin: 0 0 24px;
    max-width: 560px;
`

const welcomeBody = styled.p`
	padding-bottom: 30px;
`

const embededLink = styled.a`

`

const AboutInfoComponent = () => (
	<Container>
		<InfoGroup>
			<welcomeText>Hello there</welcomeText>
			<welcomeHeader>I'm the co-founder of the startup Veve, specialising in development for web, mobile and design products.</welcomeHeader>
			<welcomeBody>I love nurturing great ideas into beautiful, functional, profitable digital products. For over 5 years I’ve had the pleasure to work with agencies, start-ups and other companies across the globe on a wide range of projects — from the mobile UI/UX for an restaurant reservation system, to App Store featured mobile apps. Most recently I have been making great strides in building my personal startup <embededLink href="https://veveusa.com">Veve</embededLink> with currently 15+ employees.</welcomeBody>
			<welcomeBody>In 2018, I explored the Hackathon scene in which I personally participated in 4 different hackathon's over the year exploring how each and every one interacts. With this knowledge I;m planning on introducing some of the concepts I learned into Texas State.</welcomeBody>
			<welcomeBody>Alongside design and being student, I like to spend my time travelling, taking photos, creating portraits to photograph, jamming to EDM.</welcomeBody>
			<welcomeBody>I also go for detail.</welcomeBody>
		</InfoGroup>
	</Container>
)

export default AboutInfoComponent


//Brand Experience

//Accenture, Alstom, Amtico, Baxi, Detroit Electric, Jaguar Land Rover, Lloyds TSB, Massey Ferguson, NFU Mutual, Notarize, TNT, TRW, Walmart, WeChat, Whitbread and many more.


//Core Skillset

//Art Direction, Illustration, Mobile App Design, Web App Design, VR Design + Prototyping, 3D Modelling + Animation, Photography, Front-end Web Development.
