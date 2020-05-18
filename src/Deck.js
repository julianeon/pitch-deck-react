import React, { useState } from 'react';
import styled from 'styled-components';
import Media from 'react-media';

const MobileFull= {
    backgroundColor: '#294582',
    paddingRight: '3vw',
    paddingTop: '1px',
    paddingBottom: '1px',    
    color: 'white',
    textAlign: 'center',
    height: '100vh',
}

const Fullscreen= {
    backgroundColor: '#294582',
    paddingRight: '3vw',
    paddingTop: '1px',
    paddingBottom: '1px',    
    color: 'white',
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: '10',
    height: '100vh',
}

const Letter= {
    backgroundColor: 'black',
    paddingRight: '3vw',
    paddingTop: '1px',
    color: 'white',
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: '10',
    height: '100vh',
}

const Card= {
    backgroundColor: '#294582',
    marginLeft: '10vw',
    marginRight: '10vw',
    paddingTop: '5vh',
    paddingBottom: '5vh',
}

const Active= {
    backgroundColor: 'black',
    color: 'white',
}

const H1=styled.h1`
      text-transform: uppercase;
      font-size: 2em;
      font-weight: 100;
      font-family: 'Nanum Myeongjo', serif;
`

const MobileH1=styled.h1`
      text-transform: uppercase;
      font-family: 'Nanum Myeongjo', serif;
`

const Pad=styled.div`
      padding-left: 3vw;
`

const MobilePad=styled.div`
      padding-left: 2vw;
`

const Buttn=styled.button`
      display: block;
`

const Deck = ({infoDesk,infoMobile}) => {
    const [index,setIndex]=useState(0);
    const [display,setDisplay]=useState(true);
    
    function advanceClick(object) {
        if (index===object.length-1){
	    setIndex(0);
        } else {
	    setIndex(index+1);
        }
    }
    
    return (
          <Media query="(max-width: 800px)">                  
          {matches =>
           matches ? (
               <div style={MobileFull} onClick={()=>{ advanceClick(infoMobile); }}>
                   <MobileH1>{infoMobile[index].title}</MobileH1>
                   <MobilePad>{infoMobile[index].text}</MobilePad>
               </div>
           ) : (
               <div style={display ? Fullscreen : Letter} onClick={()=>{ advanceClick(infoDesk); }}>
                 <Buttn style= {display ? Active : {} } onClick={() => setDisplay(!display)}>
                   {display ? 'letterbox' : 'fullscreen'}
                 </Buttn>
                 <div style= {display ? {} : Card }>            
                   <H1>{infoDesk[index].title}</H1>
                   <Pad>{infoDesk[index].text}</Pad>
                 </div>
               </div>
           )
          }
          </Media>
        
    )
}

export default Deck;
