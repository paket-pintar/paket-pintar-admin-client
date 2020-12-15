import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { fetchPackages } from "../helpers/serverInteraction"
import { getDateTime } from "../helpers/dateConvert"

export default function Dashboard() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { packages } = useSelector((state) => state.packages)
  useEffect(() => {
    dispatch(fetchPackages())
  }, [])

  const unclaimedPackages = () => {
    return packages.filter((el) => el.claimed === false)
  }
  console.log(packages, '<<< ini packages di dashboard')
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
        <p className="text-p">There are { unclaimedPackages().length } unclaimed packages</p>
      </div>

      <div className="h-screen w-4/5 overflow-y-scroll">
        {unclaimedPackages()?.map((item, index) => {
          return (
            <div key={index} className="h-auto m-5 p-5 flex flex-row justify-between items-center mb-5 bg-gray-300">
              {/* {JSON.stringify(item)} */}
              <div>
                <h1>Name : {item.User.name}</h1>
                <h1>Unit : {item.User.unit}</h1>
                <h1>Deskripsi : {item.description}</h1>
                <h1>Received by : {item.receiver}</h1>
              </div>

              <div className="flex flex-col items-center">
                <h1>Incoming Date</h1>
                <h1>{getDateTime(item.createdAt)}</h1>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}
