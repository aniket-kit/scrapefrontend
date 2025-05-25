export default function DataTable({ data }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={i}>
            <td>{d.title}</td>
            <td><a href={d.url} target="_blank" rel="noreferrer">Link</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
