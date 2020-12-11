export default function History () {
  return(
    <div class="flex flex-col justify-start align-start h-screen px-8 py-16">

          <div class="w-full flex flex-row">
            <h1 class="text-header">History</h1>
          </div>

          <div class="flex mt-2 ">

            <form class="w-full">
              <input class="form-input w-4/5" type="text" placeholder="Filter by Name"/>
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
                <tr>
                  <td>Nicholas</td>
                  <td>9A/C3</td>
                  <td>Kotak Hijau besar</td>
                  <td>2020-12-10</td>
                </tr>

                <tr class="bg-gray-100">
                  <td>Nicholas</td>
                  <td>10D/D2</td>
                  <td>Kotak Hijau besar</td>
                  <td>2020-12-10</td>
                </tr>

              
              </tbody>
            </table>
          </div>


        </div>
  
  )
}