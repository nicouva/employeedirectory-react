import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import people from './people'

const App = () => {

  const columns = [
    {
      Header: 'First Name',
      accessor: 'first_name'
    },
    {
      Header: 'Last Name',
      accessor: 'last_name'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Job Title',
      accessor: 'job_title'
    },
  ]

  return (
    <ReactTable
      data={people}
      columns={columns} />
  )
}

export default App