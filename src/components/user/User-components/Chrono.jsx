import React, { useState, useEffect, useRef } from 'react';



function Chrono({ ValidateResponse, timer, setVisible }) {
  const [chrono, setChrono] = useState('')
  const savedCallback = useRef();

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let timerfunc = setInterval(tick, 1000);
    return () => clearInterval(timerfunc)
  }, [])

  useEffect(() => {
    setChrono(timer)
  }, [timer])


  useEffect(() => {
    savedCallback.current = callback
  })

  function callback(e) {
    if (chrono > 0) {
      setChrono(chrono - 1000)
    } else {
      ValidateResponse(e, '', true)
    }
  }

  function setTimeColor() {
    if (Math.floor(chrono / 60000) < 1) {
      if (chrono % 60000 / 1000 < 10) {
        return 'blinking'
      } else if (chrono % 60000 / 1000 < 30) {
        return "red"
      } else {
        return ""
      }
    }
  }


  return (
    <div className={`Chrono ${setTimeColor()}`} >
      {Math.floor(chrono / 60000).toString().replace(/^(\d)$/, '0$1')} : {(chrono % 60000 / 1000).toString().replace(/^(\d)$/, '0$1')}
    </div>
  )
}

export default Chrono