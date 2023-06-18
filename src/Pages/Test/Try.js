import React from 'react'

const Try = () => {
    const one = document.getElementById('one')
const cover = document.getElementById('cover')
const filling = document.getElementById('filling')

window.addEventListener('scroll', () => {
  let scrollY = window.scrollY
  let bottomHeight = window.innerHeight
  
  if(scrollY / bottomHeight <= 1){
    one.style.opacity = 1 - ( scrollY / bottomHeight )
    cover.style.position = 'fixed'
    filling.style.display = 'none'
  }
  else{
    cover.style.position = null
    filling.style.display = 'block'
  }
})
  return (
    <div>
        <div id='filling' style={{display: 'none'}}>
  </div>

  <div id='cover' style={{position:'fixed'}}>
    <div id='one'>
      <img src='https://picsum.photos/id/200/1000/1000'/>
    </div>

    <div id='two'>
      <img src='https://picsum.photos/id/201/1000/1000'/>
    </div>
  </div>  

  <div>
    <img src='https://picsum.photos/id/206/1000/1000'/>
  </div>

  <div style={{marginTop:'-10px'}}>
    <img src='https://picsum.photos/id/204/1000/1000'/>
  </div>

  <div style={{marginTop:'-10px'}}>
    <img src='https://picsum.photos/id/208/1000/1000'/>
  </div>
    </div>
  )
}

export default Try