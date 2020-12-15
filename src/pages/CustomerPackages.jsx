import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getDateTime } from "../helpers/dateConvert"
import { claimPackage } from "../helpers/serverInteraction"

export default function CustomerPackages() {
  const { UserId } = useParams()
  const { packages } = useSelector((state) => state.packages)
  const history = useHistory()

  function handleClaimPackage() {
    claimPackage()
      .then(({ data }) => {
        history.push('/')
      })
      .catch(err => console.log(err))  
  }

  function filterPackage() {
    return packages.filter(userPackage => userPackage.UserId === +UserId && !userPackage.claimed)
  }
  return(
    <div className="w-4/5 main-content rounded-tl-lg bg-white">
      <div className="px-8 pt-16 pb-2">
        <h1 className="text-header">Ambil Paket</h1>
      </div>
      <div className="flex flex-row w-4/5 justify-start items-center px-8">
        <div>
          <h1 className="text-h2">Nama : {filterPackage()[0].User.name}</h1>
          <h1 className="text-h2">Unit : {filterPackage()[0].User.unit}</h1>
        </div>
        <button onClick={handleClaimPackage} className="btn-1 ml-20">Ambil</button>
      </div>
      <div className="flex flex-col justify-start overflow-y-scroll h-2/3 mt-5 px-8">
        {/* <!-- List Loop Container --> */}
        <div className="w-full  bg-blue-200">
          {/* <!-- Loop Item 1 --> */}
          {filterPackage().map((userPackage, index) => (
            <div key={index} className="h-auto p-5 flex flex-row justify-between items-center mb-5 bg-gray-300">
              <div>
                <h1>Name : {userPackage.User.name}</h1>
                <h1>Unit : {userPackage.User.unit}</h1>
                <h1>Deskripsi : {userPackage.description}</h1>
              </div>
              <div className="flex flex-col items-center">
                <h1>Incoming Date</h1>
                <h1>{getDateTime(userPackage.createdAt)}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}