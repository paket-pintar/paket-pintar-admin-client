export default function CustomerPackages() {
  return(
    <div className="w-4/5 main-content rounded-tl-lg bg-white">

        <div className="px-8 pt-16 pb-2">
          <h1 className="text-header">Ambil Paket</h1>
        </div>

        <div className="flex flex-row w-4/5 justify-start items-center px-8">
          <div>
            <h1 className="text-h2">Nama : Nikolas Saputra</h1>
            <h1 className="text-h2">Unit : 9A/C2</h1>
          </div>

          <button className="btn-1 ml-20">Ambil</button>
        </div>

        <div className="flex flex-col justify-start overflow-y-scroll h-2/3 mt-5 px-8">

          {/* <!-- List Loop Container --> */}
          <div className="w-full  bg-blue-200">

            {/* <!-- Loop Item 1 --> */}
            <div className="h-auto p-5 flex flex-row justify-between items-center mb-5 bg-gray-300">
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

            <div className="h-auto p-5 flex flex-row justify-between items-center mb-5 bg-gray-300">
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
            <div className="h-auto p-5 flex flex-row justify-between items-center mb-5 bg-gray-300">
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
          

          </div>

        </div>
        </div>
  )
}