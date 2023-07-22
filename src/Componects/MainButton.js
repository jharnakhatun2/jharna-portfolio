import React from 'react'

export default function MainButton({children}) {
  return (
    <div>
        <div className="btn-box">
          <a className="btn-style" href="/"><span>{children}</span><em></em></a>
          </div>
    </div>
  )
}
