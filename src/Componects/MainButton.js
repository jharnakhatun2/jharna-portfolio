import React from 'react'

export default function MainButton({children}) {
  return (
    <div>
        <div className="btn-box">
          <a class="btn-style" href="#"><span>{children}</span><em></em></a>
          </div>
    </div>
  )
}
