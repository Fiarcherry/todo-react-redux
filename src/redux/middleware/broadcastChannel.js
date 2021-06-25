const broadcastChannel = (store) => (next) => (action) => {
  const handleChange = (e) => {
    console.log(e)
  }

  const channel = new BroadcastChannel('test')

  channel.addEventListener('message', (e) => handleChange(e))

  let result = next(action)

  channel.postMessage('test')

  channel.removeEventListener('message', handleChange)
  channel.close()

  return result
}

export default broadcastChannel
