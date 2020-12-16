import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import MainBarcodeScanner from '../components/MainBarcodeScanner'
import { fetchUsers } from '../helpers/serverInteraction'


export default function Scan() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { packages } = useSelector((state) => state.packages)

  function navigateTo(path) {
    history.push(path)
  }

  /* useEffect(() => {
    dispatch(fetchUsers())
  }, []) */

  return(
    <div className="w-4/5 main-content rounded-tl-lg bg-white">

      <div className="flex flex-col justify-start items-center h-screen px-8 py-16">
        <div>
          <h1 className="text-header">Scan Resident's QR Code</h1>

          <MainBarcodeScanner navigateTo={navigateTo}/>
        </div>
        {/* <button className="btn-1 mt-2" onClick={() => navigateTo('/customer-packages/2')}>Tidak Scan</button> */}
      </div>
    
  </div>
  )
}