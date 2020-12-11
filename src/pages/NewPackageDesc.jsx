import {useHistory} from 'react-router-dom'

export default function NewPackageDesc() {

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

        <div className="flex flex-row  justify-between w-2/3 mt-10">
            <h2 className="text-h2">Nicholas Saputra</h2>
            <h2 className="text-h2">Unit: 10/C2</h2>
          </div>
  
          <div  className="flex flex-col w-2/3 mt-10">
            <form className="w-full">
              <label className="text-h3">Deskripsi Paket</label>
              <textarea rows="3" className="w-full mt-5 p-4 border"></textarea>
            </form>
            <button className="ml-3 btn-1 w-1/5 self-end">Submit</button>
          </div>

      </div>
    </div>
  )
}
