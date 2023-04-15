import "./index.css"

interface LiveFooterProps {
  topic: string
}

export const LiveFooter: React.FC<LiveFooterProps> = ({ topic }) => {
  return (
    <div className="absolute bg-dark h-[124px] left-0 right-0 bottom-0 text-white flex items-center text-3xl">
      <div className="code-topic  ml-4">直播主题</div>
      <div className="code-content"> {topic}</div>
      <div className="mx-10 bg-white w-[2px] h-[30px]"></div>
      <div className="vscode-theme">VSCode主题：Moegi Dark</div>
      <div className="mx-10 bg-white w-[2px] h-[30px]"></div>
      <div className="vscode-theme">笔记软件：Notion</div>
    </div>
  )
}
