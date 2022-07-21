import { useRef } from "react"
import "./SearchForm"

export default function SearchForm() {

  const url = useRef("")
  const form = useRef()

  const customSubmit = (e) => {
    form.current.action = "https://i.ytimg.com/vi_webp/" + url.current.value.split("watch?v=")[1] + "/maxresdefault.webp"
  }

  return (
    <form ref={form} className="search-form" method="GET" action="" onSubmit={(e) => { customSubmit(e) }}>
      <div className="mb-3">
        <label className="form-label">Youtube Video's URL</label>
        <input ref={url} type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Download</button>
    </form>
  )
}