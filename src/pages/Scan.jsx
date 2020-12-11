import {useHistory} from 'react-router-dom'


export default function Scan() {
  const history = useHistory()
  
  function navigateTo(path) {
    history.push(path)
  }

  return(
    <div class="w-4/5 main-content rounded-tl-lg bg-white">

      <div class="flex flex-col justify-start items-center h-screen px-8 py-16">
        <div>
          <h1 class="text-header">Scan Customer's QR Code</h1>
          <div class="camera-box mt-5">
          </div>

        </div>
        <button className="btn-1 mt-2" onClick={() => navigateTo('/customer-packages')}>Berhasil Scan</button>
      </div>
    
  </div>
  )
}