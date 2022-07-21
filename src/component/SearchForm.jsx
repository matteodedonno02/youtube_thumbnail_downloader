export default function SearchForm() {
  return (
    <form className="search-form">
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">Youtube Video's URL</label>
        <input type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Download</button>
    </form>
  )
}