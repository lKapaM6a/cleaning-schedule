import React, {FC} from 'react'

interface
Props
{

}

const Home: FC<Props> = props => {
    const {localization} = props

    const users = [
        {
            id: 1,
            name: 'Victor',
            surname: 'Berezin',
            status: 'Check',
        },
        {
            id: 2,
            name: 'Pasha',
            surname: 'Rupyshev',
            status: 'Check',
        },
        {
            id: 3,
            name: 'Vlad',
            surname: 'Sergeev',
            status: 'Not check',
        },
        {
            id: 4,
            name: 'Victoria',
            surname: 'Ivanova',
            status: 'Not check',
        },
    ]

    return (
        <>

            <div className="container my-5">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <>
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.status}</td>
                            </tr>
                        </>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Home

