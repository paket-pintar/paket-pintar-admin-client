import { useHistory } from "react-router-dom"

export default function Dashboard() {
  const history = useHistory()

  function navigateTo(path) {
    history.push(path)
  }

  return (
    <div className="flex flex-col justify-start align-start h-screen px-8 py-16">
      <div>
        <h1 className="text-header">Admin Dashboard</h1>
      </div>

      <div className="w-full flex flex-row mt-5">
        <button onClick={() => navigateTo("/new")} className="btn-large">
          New Package
        </button>
        <button onClick={() => navigateTo("/scan")} className="btn-large">
          Scan QR
        </button>
      </div>

      <div className="mt-10 mb-1">
        <p className="text-p">There are 2 unclaimed packages</p>
      </div>

      {/* <!-- List Loop Container --> */}
      <div className="h-screen w-4/5 overflow-y-scroll">
        {/* <!-- Loop Item 1 --> */}
        <div className="h-auto m-5 p-5 flex flex-row justify-between items-center mb-5 bg-gray-300">
          <div>
            <h1>Name : Nicolas Saputra</h1>
            <h1>Unit : 10/13A</h1>
            <h1>Deskripsi : Hitam Besar dari JNE</h1>
          </div>

          <div className="flex flex-col items-center">
            <h1>Incoming Date</h1>
            <h1>2020/02/13</h1>
          </div>
        </div>
        {/* <!-- End Loop Item 1 --> */}

        {/* <!-- Filler Loop  --> */}
      </div>
    </div>
  )
}
