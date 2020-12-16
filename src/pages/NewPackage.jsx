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
      <div className="flex flex-col justify-start align-start h-screen px-8 py-16">
        <div className="w-full flex flex-row">
          <h1 className="text-header">Find Residents</h1>
        </div>

        <div className="flex w-4/5 mt-2">
          <form onSubmit={searchResidents} className="w-full flex flex-row">
            <input
              onChange={handleInputChange}
              className="form-input w-full"
              type="text"
              placeholder="Enter resident name"
            />
            <button type="submit" className="ml-3 btn-1">
              Search
            </button>
          </form>
        </div>
        <div className="flex flex-col mt-10 heightCustom items-center w-4/5">
          <div className="w-full h-auto overflow-y-scroll">
            {
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
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
