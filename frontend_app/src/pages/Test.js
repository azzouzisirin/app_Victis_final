import React, { useEffect, useState } from 'react';



export default function Test( ) {
  useEffect(()=>{
    var s="100023456"
    alert(s.substring(0,s.length-3)+" "+s.substr(-3))

  })
return(
  <p>aa</p>
)

}