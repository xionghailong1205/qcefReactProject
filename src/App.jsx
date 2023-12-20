import { useEffect } from "react"
import { useState } from "react"

function onInvokeMethodClicked(name, ...arg) {
  CallBridge.invokeMethod(name, ...arg);
}

function readData() {
  onInvokeMethodClicked("readData")
}

function writeJSONIntoFile(event) {
  let object = {
    key: event.target.value
  }

  let JsonString = JSON.stringify(object)
  onInvokeMethodClicked("saveData", JsonString)
}

function openDevTool() {
  onInvokeMethodClicked("openDevTool")
}

function App() {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    if (typeof CallBridge == "undefined") {
      console.log("程序未在 qcef 环境中加载")
      return;
    }

    readData()
  }, [])

  return (
    <div>
      <label>
        <span>key</span>
        <input value={inputValue} placeholder="数据尚未加载" onChange={handleInputChange} />
      </label>
      <button onClick={writeJSONIntoFile}>
        保存数据
      </button>
      <button onClick={openDevTool}>
        打开开发者工具
      </button>
    </div>
  )
}

export default App
