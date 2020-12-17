import {useHistory} from 'react-router-dom'
import MainBarcodeScanner from '../components/MainBarcodeScanner'

export default function Scan() {
  const history = useHistory()

  function navigateTo(path) {
    history.push(path)
  }

  return(
    <div className="w-4/5 main-content rounded-tl-lg bg-white">
      <div className="flex flex-col justify-start items-center h-screen px-8 py-16">
        <div>
          <h1 className="text-header">Scan Resident's QR Code</h1>
          <MainBarcodeScanner navigateTo={navigateTo}/>
        </div>
      </div>
    </div>
  )
}