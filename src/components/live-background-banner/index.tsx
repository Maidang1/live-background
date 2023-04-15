import { BarragePanel } from "../../features/barrage"

export const LiveBanner = () => {
  return (
    <div className="live-banner bg-dark top-0 bottom-0 right-0 absolute w-[224px] text-white">
      {/* 头部区域 */}
      <h1 className="title text-3xl font-bold mt-10 ml-4">
        <span className="block">Hello, </span>
        <span className="block mt-2">I'm MaiDang.</span>
      </h1>
      <div className="mt-6 ml-4 text-xl">
        <div>
          <span>Front-end developer.</span>
        </div>
        <div className="mt-2">
          <span>Love TS / React.</span>
        </div>
      </div>
      {/* website 区域 */}
      <div className="website ml-4 mt-6 text-main">
        <div className="flex items-center">
          <div className="i-ri-github-fill text-3xl"></div>
          <div className="link text-xl ml-2">www.felixwliu.cn</div>
        </div>
        <div className="flex items-center mt-4">
          <div className="i-mdi-internet text-3xl"></div>
          <div className="link text-xl ml-2">about.felixwliu.cn</div>
        </div>
      </div>
      {/* 作品区域 */}
      <div>
        <div className="flex items-center justify-center ml-5 mr-5 mt-6 bg-gray-50/10 rounded-md px-2 py-1 ">
          <div className="flex-1 text-white">
            <div className="text-white">markdown-image-upload</div>
            <div className="op-50 font-normal text-sm text-white">
              A vscode extension
            </div>
          </div>
          <div className="ml-4 text-3xl op-80">
            <div className="i-twemoji-grinning-cat-with-smiling-eyes"></div>
          </div>
        </div>
      </div>
      {/* 弹幕区域 */}
      <BarragePanel />
    </div>
  )
}
