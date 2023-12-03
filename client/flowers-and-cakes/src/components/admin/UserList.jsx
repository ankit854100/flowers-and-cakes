import React from 'react'

import './userList.css'

function UserList() {
    return (
        <div className="userList">
            <table>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Aman Kumar</td>
                        <td>kumar.aman@gmail.com</td>
                        <td className="last"><i class="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>kush Kumar</td>
                        <td>kumar.Kush@gmail.com</td>
                        <td className="last"><i class="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Arpit Kumar</td>
                        <td>kumar.arpit@gmail.com</td>
                        <td className="last"><i class="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Kishore Kumar</td>
                        <td>kumar.Kishore@gmail.com</td>
                        <td className="last"><i class="fas fa-trash-alt"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserList
