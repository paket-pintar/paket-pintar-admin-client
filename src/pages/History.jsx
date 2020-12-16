import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchPackages } from "../helpers/serverInteraction"
import { getDateTime } from "../helpers/dateConvert"

export default function History() {
  const dispatch = useDispatch()
  const { packages } = useSelector((state) => state.packages)
  const [filter, setFilter] = useState("")

  useEffect(() => {
    if (packages.length === 0) {
      dispatch(fetchPackages())
    }
  }, [])

  const claimedPackages = () => {
    return packages.filter((el) => el.claimed === true)
  }

  function handleSelect(e) {
    setFilter(e.target.value)
  }

  function filterPackage() {
    if (filter === "all" || filter === "") {
      return packages.filter((el) => el)
    } else if (filter === "claimed") {
      return packages.filter((el) => el.claimed === true)
    } else if (filter === "unclaimed") {
      return packages.filter((el) => el.claimed === !true)
    }
  }

  return (
    <div className="flex flex-col justify-start align-start h-screen px-12 py-16">
      <div className="w-full flex flex-row">
        <h1 className="text-header">Packages</h1>
      </div>
      <div className="flex flex-col align-center mt-2 ">
        <h1 className="text-h2 mr-4">Filter by</h1>
        <select
          className="w-4/5 py-1 border rounded package-filter"
          onChange={handleSelect}
        >
          <option value="all">All</option>
          <option value="claimed">Claimed</option>
          <option value="unclaimed">Unclaimed</option>
        </select>
      </div>
      <div className="flex flex-col w-4/5 mt-4 h-screen overflow-y-scroll">
        <table className="w-full border text-center">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="py-4">Name</th>
              <th>Unit</th>
              <th>Description</th>
              <th>Received by</th>
              {filter === "claimed" ? <th>Claimed at</th> : ""}
            </tr>
          </thead>
          <tbody>
            {filterPackage()?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td>{item.User.name}</td>
                  <td>{item.User.unit}</td>
                  <td>{item.description}</td>
                  <td>{item.receiver}</td>
                  {filter === "claimed" ? (
                    <td>{getDateTime(item.updatedAt)}</td>
                  ) : (
                    ""
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
