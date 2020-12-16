import { useHistory, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { createPackage, sendNotification } from '../helpers/serverInteraction'

export default function NewPackageDesc() {
  const [description, setDescription] = useState('')
  const [sender, setSender] = useState('')
  const [receiver, setReceiver] = useState('')
  const [error, setError] = useState('')
  const history = useHistory()
  const { users } = useSelector((state) => state.user)
  const { userId } = useParams()

  function handleSubmit(e) {
    e.preventDefault()
    const payload = {
      description,
      sender,
      userId,
      receiver
    }
    createPackage(payload)
      .then(({ data }) => {
        console.log(data)
        sendNotification(payload)
        history.push('/')
      })
      .catch(({response}) => {
        console.log(response.data.msg)
        setError(response.data.msg)
      })
  }

  function findUser() {
    return users.find(el => el.id === +userId)
  }

  function handleSender(e) {
    setSender(e.target.value)
  }

  function handleReceiver(e) {
    setReceiver(e.target.value)
  }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  return (
    <div className="w-4/5 main-content">
      <div className="flex flex-col justify-start align-start h-screen px-8 py-16">
        <div className="w-full flex flex-row">
          <h1 className="text-header">Add New Package</h1>
        </div>

        <div className="flex flex-row  justify-between w-2/3 mt-10">
          <h2 className="text-h2">{findUser().name}</h2>
          <h2 className="text-h2">{findUser().unit}</h2>
        </div>
  
        <div className="flex flex-col w-2/3 mt-10">
          <form onSubmit={handleSubmit} className="w-full">
            {error ? <p style={{color: 'red'}}>{error}</p> : ''}
            <label htmlFor="sender" className="text-h3">Sender</label>
            <input onChange={handleSender} value={sender} type="text" id="sender" className="w-full mt-5 mb-5 p-4 border"/>
            <label htmlFor="receiver" className="text-h3">Receiver</label>
            <input onChange={handleReceiver} value={receiver} type="text" id="receiver" className="w-full mt-5 mb-5 p-4 border"/>
            <label className="text-h3">Deskripsi Paket</label>
            <textarea onChange={handleDescription} value={description} rows="3" className="w-full mt-5 p-4 border"></textarea>
            <button type="submit" className="ml-3 btn-1 w-1/5 self-end">Submit</button>
           </form>
        </div>

      </div>
    </div>
  )
}
