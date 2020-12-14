import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPackages } from '../helpers/serverInteraction'
import { getDateTime } from '../helpers/dateConvert'


export default function History () {
  const dispatch = useDispatch()
  const { packages } = useSelector(state => state.packages)
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    if(packages.length === 0) {
      dispatch(fetchPackages())
    }
  }, [])

  const claimedPackages = () => {
    return packages.filter(el => el.claimed === true)
  }

  function handleInputChange(e){
    setFilter(e.target.value)
  }

  return(
    <div class="flex flex-col justify-start align-start h-screen px-8 py-16">

          <div class="w-full flex flex-row">
            <h1 class="text-header">History</h1>
          </div>
          <div class="flex mt-2 ">

            <form class="w-full">
              <input
              onChange={handleInputChange}
              class="form-input w-4/5" type="text" placeholder="Filter by Name"/>
            </form>

          </div>
          <div class="flex flex-col w-4/5 mt-4 h-screen overflow-y-scroll">

            <table  class="w-full border text-center">
              <thead>
                <tr class="bg-gray-700 text-white">
                  <th class="py-4">Name</th>
                  <th>Unit</th>
                  <th>Description</th>
                  <th>Claimed at</th>

                </tr>
              </thead>
              <tbody>
                {
                  claimedPackages()?.map((item, index) => {
                    return (
                      <tr 
                      key={index}
                      class={index%2===0?'bg-gray-100':'bg-white'}>
                        <td>{item.User.name}</td>
                    <td>9A/C3</td>
                        <td>{item.description}</td>
                        <td>{getDateTime(item.updatedAt)}</td>
                      </tr>
                    )
                  })
                }
              
              </tbody>
            </table>
          </div>


        </div>
  
  )
}