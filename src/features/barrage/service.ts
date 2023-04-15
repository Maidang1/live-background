import { type MsgHandler } from "blive-message-listener"
import { startListen } from "blive-message-listener/browser"

// https://live.bilibili.com/23873189
const roomId = 23873189

type instanceType = ReturnType<typeof startListen>

class Barrage {
  instance: instanceType | null = null

  init = (cb: MsgHandler) => {
    this.instance = startListen(roomId, cb)
  }
  close = () => {
    this.instance && this.instance.close()
  }
}

export const barrage = new Barrage()
