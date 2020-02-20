import React, { useState, useEffect, useRef } from 'react';



function Chrono({ ValidateResponse, timer }) {
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

  function callback() {
    if (chrono > 0) {
      setChrono(chrono - 1000)
    } else {
      ValidateResponse('', true)
    }
  }

  return (
    <div className='Chrono'>
      {Math.floor(chrono / 60000).toString().replace(/^(\d)$/, '0$1')} : {(chrono % 60000 / 1000).toString().replace(/^(\d)$/, '0$1')}
    </div>
  )
}

export default Chrono