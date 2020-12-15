import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getDateTime } from "../helpers/dateConvert"
import { claimPackage } from "../helpers/serverInteraction"

export default function CustomerPackages() {
  const { UserId } = useParams()
  const { users } = useSelector((state) => state.user)
  const { packages } = useSelector((state) => state.packages)
  const history = useHistory()

  useEffect(() => {
    console.log(packages, "<< packages in customerPackages")
    console.log(users, "<< users in customerPackages")
  }, [])

  function handleClaimPackage() {
    claimPackage(UserId)
      .then(({ data }) => {
        history.push("/")
      })
      .catch((err) => console.log(err))
  }

  function filterUser() {
    return users.find((user) => user.id === +UserId)
  }

  function filterPackage() {
    return packages.filter(
      (userPackage) => userPackage.UserId === +UserId && !userPackage.claimed
    )
  }

  return (
    <div className="w-4/5 main-content rounded-tl-lg bg-white">
      <div className="px-8 pt-16 pb-2">
        <h1 className="text-header">Ambil Paket</h1>
      </div>
      <div className="flex flex-row w-4/5 justify-start items-center px-8">
        <div>
          <h1 className="text-h2">Nama : {filterUser().name}</h1>
          <h1 className="text-h2">Unit : {filterUser().unit}</h1>
        </div>
        {
          packages && filterPackage().length !== 0?(
        <button onClick={handleClaimPackage} className="btn-1 ml-20">
          Ambil Semua
        </button>

          ): ''
        }
      </div>
      

      <div className="flex flex-col justify-start mt-5 px-8">

        
      { packages &&
        filterPackage().length === 0 ?(
          <h1 className="text-h2 mt-5">No New Package</h1>
          ):(
        <div className="w-full heightCustom overflow-y-scroll">
          {/* <!-- Loop Item 1 --> */}
          {filterPackage().map((userPackage, index) => (
            <div
              key={index}
              className="h-auto p-5 flex flex-row justify-between items-center mb-5 bg-gray-300"
            >
              <div>
                <h1>Name : {userPackage.User.name}</h1>
                <h1>Unit : {userPackage.User.unit}</h1>
                <h1>Description : {userPackage.description}</h1>
                <h1>Received by : {userPackage.receiver}</h1>
              </div>
              <div className="flex flex-col items-center">
                <h1>Incoming Date</h1>
                <h1>{getDateTime(userPackage.createdAt)}</h1>
              </div>
            </div>
          ))}
        </div>

        )
      }



      </div>
    </div>
  )
}
