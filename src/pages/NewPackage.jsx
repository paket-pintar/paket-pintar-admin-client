import { useHistory } from "react-router-dom"

export default function NewPackage() {
  const history = useHistory()

  function navigateTo(path) {
    history.push(path)
  }

  return (
    <div className="w-4/5 main-content">
      <div className="flex flex-col justify-start align-start h-screen px-8 py-16">
        <div className="w-full flex flex-row">
          <h1 className="text-header">Add New Package</h1>
        </div>

        <div className="flex flex-row w-4/5 mt-2">
          <form className="w-full">
            <input
              className="form-input w-full"
              type="text"
              placeholder="Enter resident name"
            />
          </form>
          <button className="ml-3 btn-1">Search</button>
        </div>

        <div className="flex flex-col items-center w-4/5">
          {/* <!-- Loop Item 1 --> */}
          <div className="flex flex-row p-3 justify-between items-center w-full">
            <div className="bg-gray-100 p-2 w-full">
              <h1>Nama : Nicholas Saputra</h1>
              <h1>Unit : 10/C3</h1>
            </div>

            <div className="">
              <button
                onClick={() => navigateTo("/new/userId")}
                className="btn-large"
              >
                Tambah Paket
              </button>
            </div>
          </div>

          {/* <!-- End loop item 1 --> */}

          <div className="flex flex-row p-3 justify-between items-center w-full">
            <div className="bg-gray-100 p-2 w-full">
              <h1>Nama : Nicholas Saputra</h1>
              <h1>Unit : 10/C3</h1>
            </div>

            <div className="">
              <button
                onClick={() => navigateTo("/new/userId")}
                className="btn-large"
              >
                Tambah Paket
              </button>
            </div>
          </div>

          <div className="flex flex-row p-3 justify-between items-center w-full">
            <div className="bg-gray-100 p-2 w-full">
              <h1>Nama : Nicholas Saputra</h1>
              <h1>Unit : 10/C3</h1>
            </div>

            <div className="">
              <button className="btn-large">Tambah Paket</button>
            </div>
          </div>

          <div className="flex flex-row p-3 justify-between items-center w-full">
            <div className="bg-gray-100 p-2 w-full">
              <h1>Nama : Nicholas Saputra</h1>
              <h1>Unit : 10/C3</h1>
            </div>

            <div className="">
              <button className="btn-large">Tambah Paket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
