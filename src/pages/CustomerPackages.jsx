import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { getDateTime, getMomentDate } from "../helpers/dateConvert"
import { claimPackage } from "../helpers/serverInteraction"
import btnOut from "../assets/btn-out.png"

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
    if (users) {
      return users.find((user) => user.id === +UserId)
    }
    return { name: "customer", unit: "unit" }
  }

  function filterPackage() {
    return packages.filter(
      (userPackage) => userPackage.UserId === +UserId && !userPackage.claimed
    )
  }

  if (packages && filterPackage().length === 0) {
    return (
      <div className="w main-content px-12 pt-40 bg-white">
        <div className="pb-10">
          <h1 className="text-header">
            No New Packages for{" "}
            <span>
              {filterUser().name}, {filterUser().unit}
            </span>
          </h1>
        </div>
      </div>
    )
  }

  return (
    <div className="w main-content px-12 pt-16 bg-white">
      <div className="pb-10">
        <h1 className="text-header">
          Get Packages for{" "}
          <span>
            {filterUser().name}, {filterUser().unit}
          </span>
        </h1>
      </div>

      <div className="flex flex-row ">
        <div className="">
          <button
            onClick={handleClaimPackage}
            className="btn-large-action transform  transition hover:scale-105 flex flex-col items-center"
          >
            <img src={btnOut} alt="New Package" className="btn-image" />
            <p className="btn-text mt-2">Get All Packages</p>
          </button>
        </div>

        <div className="packages-container ml-5">
          {packages &&
            filterPackage().map((userPackage, index) => (
              <div key={index} className="package-card mb-2">
                <div className="flex justify-between flex-row items-center">
                  <h1 className="package-card-title">{userPackage.sender}</h1>
                  <p className="package-card-moment">
                    {getMomentDate(userPackage.createdAt)}
                  </p>
                </div>
                <p className="package-card-description">
                  {userPackage.description}
                </p>
                <p className="package-card-receivedBy">
                  Received by : {userPackage.receiver}
                </p>
              </div>
            ))}
        </div>
      </div>
    
    </div>
  )
}
