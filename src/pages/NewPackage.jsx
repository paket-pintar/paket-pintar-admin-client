import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

export default function NewPackage() {
  const [filter, setFilter] = useState("")
  const [input, setInput] = useState("")
  const { users } = useSelector((state) => state.user)
  const history = useHistory()
  const dispatch = useDispatch()

  function handleInputChange(e) {
    e.preventDefault()
    setInput(e.target.value)
    // setFilter(e.target.value)
  }

  function searchResidents(e) {
    e.preventDefault()
    setFilter(input)
  }

  function residentsFilter() {
    return users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    )
  }

  function navigateTo(path) {
    history.push(path)
  }

  console.log(users, "<<< isi users di newPackage page")

  return (
    <div className="w-4/5 main-content">
      <div className="flex flex-col justify-start align-start h-screen px-12 py-16">
        <div className="w-full flex flex-row">
          <h1 className="text-header">Find Residents to Add Package</h1>
        </div>

        <div className="flex w-4/5 mt-2">
          <form onSubmit={searchResidents} className="w-full flex flex-row">
            <input
              onChange={handleInputChange}
              className="form-input w-full"
              type="text"
              placeholder="Enter resident name"
            />
          </form>
        </div>
        <div className="flex flex-col mt-3 heightCustom items-center w-4/5">
          <div className="w-full h-auto overflow-y-scroll">
            <table className="w-full border text-center">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th>Unit</th>
                  <th className="py-4"> Resident's Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {residentsFilter()?.map((user, index) => {
                  return (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }
                    >
                      <td>{user.unit}</td>
                      <td className="py-2">{user.name}</td>
                      <td>
                        <button
                          onClick={() => navigateTo(`/new/${user.id}`)}
                          className="btn-plus"
                        >
                          +
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {/* {
            residentsFilter().map((user, index) => (
              <div
                key={index}
                className="flex flex-row p-3 justify-between items-center w-full"
              >
                <div className="flex flex-row justify-between mx-10 items-center p-2 w-full">
                  <div>
                    <h1 className="text-h2">{user.name}</h1>
                  </div>
                  <div className="ml-20">
                    <h1 className="text-h2-alt">{user.unit}</h1>
                  </div>
                </div>

                <div className="">
                  <button
                    onClick={() => navigateTo(`/new/${user.id}`)}
                    className="btn-large"
                  >
                    Tambah Paket
                  </button>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}
