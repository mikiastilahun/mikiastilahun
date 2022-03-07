import React from 'react'
import styled from "styled-components";


const SocialsWrapper = styled.div`



`



type socialType = {
  name: string
  link: string,
  icon: string
}

function Social(props: socialType){

return (
  <div>
    {props}
  </div>
)
 

}


export function SocialsList (){
  const socials = [
    {
      name: "Twitter",
      link: "twitter.com/mikeabebe",
      icon: "image",
    },
    {
      name: "Telegram",
      link: "twitter.com/mikeabebe",
      icon: "image",
    },
    { name: "Instagram", link: "twitter.com/mikeabebe", icon: "image" },
    { name: "Github", link: "twitter.com/mikeabebe", icon: "image" },
    { name: "Medium", link: "twitter.com/mikeabebe", icon: "image" },
  ];

    return <SocialsWrapper>{socials.map(social=><Social name={social.name} link={social.link} icon={social.icon}/>)}</SocialsWrapper>;
}