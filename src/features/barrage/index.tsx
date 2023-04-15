import { useEffect, useMemo, useRef, useState } from "react"
import { barrage } from "./service"
import { type MsgHandler } from "blive-message-listener"

const maxContent = 6

interface Message {
  name: string
  content: string
  id: string
}

export const BarragePanel = () => {
  const [info, setInfo] = useState<Message[]>([])
  const originList = useRef<Message[]>([])
  const handleUpdateBarrage = useRef((newItem: Message) => {
    originList.current.push(newItem)
    const lists = originList.current.slice(-maxContent)
    originList.current = lists
    setInfo(() => originList.current)
    // originList.current.push(newItem)
    // setInfo(() => [...originList.current])
  })
  const handler: MsgHandler = {
    onStartListen: () => {
      console.log("onStartListen")
    },
    onIncomeDanmu: (msg) => {
      const name = msg.body.user.uname
      const content = msg.body.content
      const id = msg.id
      const newItem = { name, content, id }
      handleUpdateBarrage.current(newItem)
    },
  }
  useEffect(() => {
    barrage.init(handler)
    return () => {
      barrage.close()
    }
  }, [])
  // const handleAdd = () => {
  //   const newItem = {
  //     name: "name",
  //     content: Date.now() + "",
  //     id: Date.now() + "",
  //   }
  //   originList.current.push(newItem)
  //   const lists = originList.current.slice(-maxContent)
  //   originList.current = lists
  //   setInfo(() => originList.current)
  // }
  return (
    <div className="mt-6 ml-6">
      {/* <button onClick={handleAdd}>add Comment</button> */}
      <h1 className="mb-10">comments</h1>
      <ul className="overflow-hidden">
        {info.map((item) => (
          <li key={item.id} className="mb-6">
            <span className="op-50 text-white">{item.name}: </span>
            <span className="ml-2">{item.content}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
