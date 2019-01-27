import * as React from 'react';
import './App.css';
import logo from './fontsize.svg'

interface Imyprops {
  a?: string
}
interface Imystate {
  a: boolean
  b: any
}

class App extends React.Component<Imyprops, Imystate> {
  constructor(props: Imyprops) {
    super(props)
    this.state = ({
      a: true,
      b: this.c()
    })
  }

  public a = () => {
    console.log(this.state.a)
    const a: any = document.getElementById("beforeWord")
    const b: any = document.getElementById("afterWord")
    const c: any = document.getElementById("grepWord")
    const d: any = document.getElementById("replaceWord")
    let e: any = ""
    let f: any = ""
    if (c.value == "") {
      e = ""
    } else {
      e = d.value
    }
    if (this.state.a == true) {
      f = "gi"
    } else {
      f = "g"
    }
    b.value = a.value.replace(new RegExp(c.value, f), e)
  }

  public b = () => {
    let a: boolean
    if (this.state.a == true) {
      a = false
    } else {
      a = true
    }
    this.setState({
      a: a
    })
  }

  public componentDidMount = () => {
    window.addEventListener("keyup", () => {
      this.a()
    })
    const a: any = document.getElementById("name5")
    a.addEventListener("mousedown", () => {
      this.b()
    })
    a.addEventListener("mouseup", () => {
      this.a()
    })
  }

  public c = () => {
    const a: any = [["ペン", "ペ", "パ", "パン"], ["人間は顔じゃないよ", "は", "の", "人間の顔じゃないよ"], ["ハンコ", "ハ", "ア", "アンコ"], ["みかん", "み", "いよ", "いよかん"], ["アイス", "ス", "ツ", "アイツ"], ["パパ", "パ", "マ", "ママ"], ["タイツ", "タ", "ド", "ドイツ"]]
    const random: number = Math.floor(Math.random() * a.length)
    console.log(a[random])
    return a[random]
  }

  public render() {
    return (
      <div className="App">
        <div style={{ fontWeight: "bold", fontSize: "20px" }}>
          入力してね
        </div>
        <div>
          <textarea id="beforeWord" placeholder={"例:" + this.state.b[0]} ></textarea>
        </div>
        <div>
          ↓
        </div>
        <div className="change">
          <div>置き換える内容</div>
          <div>
            <textarea id="grepWord" placeholder={"例:" + this.state.b[1] + "　　を全部"}></textarea>
          </div>
          <div>
            <textarea id="replaceWord" placeholder={"例:" + this.state.b[2] + "　　に変えると"}></textarea>
          </div>
        </div>
        <div>
          ↓
        </div>
        <div>
          結果
        </div>
        <div>
          <textarea id="afterWord" placeholder={"例:" + this.state.b[3]}></textarea>
        </div>
        <div id="name5">
          大文字小文字区別{this.state.a ? <img src={logo} style={{ opacity: 0.5, MozOpacity: 0.5 }} className="App-logo" alt="logo" /> : <img src={logo} className="App-logo" alt="logo" />}
        </div>
      </div>
    );
  }
}

export default App;
