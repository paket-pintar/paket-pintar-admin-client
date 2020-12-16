import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { fetchPackages, fetchUsers } from "../helpers/serverInteraction"
import { getDateTime, getDate } from "../helpers/dateConvert"
import btnIn from '../assets/btn-in.png'
import qrLogo from '../assets/btn-qr.png'

export default function Dashboard() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { packages } = useSelector((state) => state.packages)
  useEffect(() => {
    dispatch(fetchPackages())
    dispatch(fetchUsers())
  }, [])

  const unclaimedPackages = () => {
    return packages.filter((el) => el.claimed === false)
  }

  const receivedToday = () => {
    return packages.filter(el => getDate(el.createdAt) === getDate(new Date())).length
  }
  const claimedToday = () => {
    return packages.filter(el => getDate(el.createdAt) === getDate(new Date()) && el.claimed).length
  }

  const unclaimed = () => {
    return packages.filter(el => !el.claimed).length
  }

  console.log(packages, '<<< ini packages di dashboard')
  function navigateTo(path) {
    history.push(path)
  }

  return (
    <div className="flex flex-col justify-start align-start h-screen px-12 py-40">
      
      <div>
        <h1 className="text-header">Hello, Admin!</h1>
      </div>

      
      <div className="mt-5 mb-1 flex flex-col">
        <h2 className="text-sub-header">Statistics</h2>

        <div className="summary-box mt-4 flex flex-row justify-around">

          <div className="summary-box-text flex flex-col justify-center items-center">
            <h1 className="summary-box-text-header">{receivedToday()}</h1>
            <p className="summary-box-text-slug">Received Today</p>
          </div>
          <div className="summary-box-text flex flex-col justify-center items-center">
          <h1 className="summary-box-text-header">{claimedToday()}</h1>
            <p className="summary-box-text-slug">Claimed Today</p>
          </div>
          <div className="summary-box-text flex flex-col justify-center items-center">
          <h1 className="summary-box-text-header">{unclaimed()}</h1>
            <p className="summary-box-text-slug">Unclaimed Packages</p>
          </div>
        </div>

      </div>

      <div className="w-full flex flex-col mt-5">
        <h2 className="text-sub-header">Actions</h2>

        <div className="button-group flex flex-row mt-4">

          <button onClick={() => navigateTo("/new")} className="btn-large-action transform  transition hover:scale-105 flex flex-col items-center">
            <img src={btnIn} alt="New Package" className="btn-image"/>
            <p className="btn-text mt-2">Add New Package</p>
          </button>

          <button onClick={() => navigateTo("/scan")} className="btn-large-action transform  transition hover:scale-105 flex flex-col items-center">
 <img src={qrLogo} alt="New Package" className="btn-image"/>
            <p className="btn-text mt-2">Scan QR</p>
          </button>

        </div>
      </div>


    </div>
  )
}
